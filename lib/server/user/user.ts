import { PrismaService, WebsocketService } from '@/core/services/server'
import { databaseQueryWrapper, handleMulterException } from '@/core/utils'
import { hashPass, signupCompany } from '@/core/utils/auth'
import type { Request, Response } from 'express'
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
} from 'next-api-decorators'
import { removeS3Object } from '../resources/utils'
import {
  CreateCompanyRequest,
  GenerateQRRequest,
  GenerateQRResponse,
  GetAllStudentCVsResponse,
  GetCompanyByIdResponse,
  GetStudentResponse,
  ScanRequest,
  ScanResponse,
  UpdateStudentRequest,
  UploadImageResponse,
} from './dtos'
import { processUploadCV, processUploadProfileImage } from './utils'
import { CompanyCategory, ObjectType, UserType } from '@prisma/client'

/*** Resource getters ***/

/**
 * Get Student public data by id
 * @param id student id
 * @returns student object response
 * @see dtos.GetStudentResponse
 */
export async function getStudentById(
  id: string,
  personal: boolean
): Promise<GetStudentResponse | undefined> {
  return await databaseQueryWrapper(async () => {
    // Only leak public data
    const student = await PrismaService.studentDetails.findUniqueOrThrow({
      where: {
        userId: id,
      },
      select: {
        course: true,
        university: true,
        scans: true,
        points: true,
        cv: true,
        companies: {
          select: {
            category: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true,
              },
            },
          },
        },
        age: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
      },
    })

    let exposedData: GetStudentResponse = {
      id: student.user.id,
      name: student.user.name,
      email: student.user.email,
      course: student.course,
      university: student.university,
      image: student.user.image,
      scans: student.scans,
      points: student.points,
      age: student.age,
    }
    if (personal) {
      exposedData = {
        ...exposedData,
        companies: student.companies,
        cv: student.cv,
      }
    }
    return exposedData
  })
}

/**
 * Get company public data by id
 * @param id company id
 * @returns company object response
 * @see dtos.GetCompanyResponse
 */
export async function getCompanyById(
  id: string
): Promise<GetCompanyByIdResponse | undefined> {
  return await databaseQueryWrapper(async () => {
    const company = await PrismaService.companyDetails.findUniqueOrThrow({
      where: {
        userId: id,
      },
      select: {
        category: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
          },
        },
        students: {
          select: {
            cv: true,
            course: true,
            user: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        },
      },
    })

    return {
      id: company.user.id,
      name: company.user.name,
      email: company.user.email,
      category: company.category,
      image: company.user.image,
      students: company.students,
    }
  })
}

/*** Student Specific ***/

/**
 * Update external student details
 * @param userReq update request object
 * @see dtos.UpdateExternalRequest
 */
export async function updateExternalStudent(
  id: string,
  userReq: UpdateStudentRequest
) {
  await databaseQueryWrapper(async () => {
    await PrismaService.studentDetails.update({
      where: {
        userId: id,
      },
      data: {
        age: userReq.age,
        university: userReq.university,
        course: userReq.course,
      },
    })
  })
}

/**
 * Upload student CV
 * @param id student id
 * @param req api request with multipart form data
 * @see dtos.UploadImageResponse
 */
export async function uploadCv(
  id: string,
  req: Request,
  res: Response
): Promise<UploadImageResponse | undefined> {
  return await databaseQueryWrapper(async () => {
    // Get student
    const user = await PrismaService.studentDetails.findUniqueOrThrow({
      where: {
        userId: id,
      },
      include: {
        user: true,
        cv: true,
      },
    })

    if (user.cv) {
      // Delete previous image
      removeS3Object(user.cv.cvLocation)
    }

    try {
      await processUploadCV(req, res)

      if (!req.file) {
        throw new InternalServerErrorException('Error while processing file')
      }

      const file: Express.MulterS3.File = req.file as Express.MulterS3.File

      await PrismaService.cV.upsert({
        where: {
          studentId: user.id,
        },
        update: {
          cvLocation: file.key,
        },
        create: {
          cvLocation: file.key,
          student: {
            connect: {
              id: user.id,
            },
          },
        },
      })

      return { url: file.location }
    } catch (e) {
      handleMulterException(e)
    }
  })
}

/*** Company Specific ***/

/**
 * Retrieve the list of students scanned by the company
 * @param id company id
 * @returns list of student object response
 * @see dtos.GetStudentResponse
 */
export async function getCompanyStudents(
  id: string
): Promise<GetStudentResponse[] | undefined> {
  return await databaseQueryWrapper(async () => {
    // Only leak public data
    const company = await PrismaService.companyDetails.findUniqueOrThrow({
      where: {
        userId: id,
      },
      select: {
        students: {
          include: {
            user: true,
          },
        },
      },
    })

    const students: GetStudentResponse[] = company.students.map((student) => {
      return {
        id: student.user.id,
        name: student.user.name,
        email: student.user.email,
        age: student.age,
        course: student.course,
        image: student.user.image,
        scans: student.scans,
        points: student.points,
      }
    })

    return students
  })
}

export async function createCompany({
  name,
  username,
  email,
  password,
  categoryId,
  code,
}: CreateCompanyRequest): Promise<void | undefined> {
  return await databaseQueryWrapper(async () => {
    if (code !== process.env.AUTH_COMPANY_SECRET_CODE)
      throw new BadRequestException('Invalid code')

    //  Check if no user created yet
    const createdUser = await PrismaService.user.findFirst({
      where: {
        email: email,
      },
    })

    if (createdUser) {
      throw new BadRequestException('User already exists')
    }

    const hashedPassword = await hashPass(password)

    const company = await PrismaService.user.create({
      data: {
        email: email,
        name: name,
        role: UserType.Company,
        companyDetails: {
          create: {
            username: username,
            password: hashedPassword,
            category: CompanyCategory.Silver,
            description: '',
          },
        },
      },
    })

    await signupCompany(company.id)
  })
}

/**
 * Retrieve the list of students with cvs
 * @param id company id
 * @returns list of student object response
 * @see dtos.GetStudentResponse
 */
export async function getAllStudentCVs(
  id: string
): Promise<GetAllStudentCVsResponse[] | undefined> {
  return await databaseQueryWrapper(async () => {
    // Only leak public data
    const company = await PrismaService.companyDetails.findUniqueOrThrow({
      where: {
        userId: id,
      },
      select: {
        category: true,
      },
    })

    if (company.category !== CompanyCategory.Platinum) {
      throw new BadRequestException('Do not have permission to access CV')
    }

    const students = await PrismaService.studentDetails.findMany({
      where: {
        cv: {
          isNot: null,
        },
      },
      select: {
        course: true,
        cv: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    })

    return students
  })
}

/*** User (common to all roles) ***/

/**
 * Upload user image using formidable
 * @param id user id
 * @param req Api request with multipart form data
 * @param res Api response (used to send file stream)
 */
export async function uploadImage(
  id: string,
  req: Request,
  res: Response
): Promise<UploadImageResponse | undefined> {
  return await databaseQueryWrapper(async () => {
    // Get student
    const user = await PrismaService.user.findUniqueOrThrow({
      where: {
        id: id,
      },
    })

    if (user.image) {
      // Delete previous image
      removeS3Object(user.image)
    }

    try {
      await processUploadProfileImage(req, res)

      if (!req.file) {
        throw new InternalServerErrorException('Error while processing file')
      }

      const file: Express.MulterS3.File = req.file as Express.MulterS3.File

      await PrismaService.user.update({
        where: {
          id: id,
        },
        data: {
          image: file.key,
        },
      })

      return { url: file.key }
    } catch (e) {
      handleMulterException(e)
    }
  })
}

/*** Scan ***/

/**
 * Process scan operation, check
 * implementation for more details
 * @param id student id
 * @param scanReq scan request
 * @returns student object response
 * @see dtos.GetStudentResponse
 * @see dtos.ScanRequest
 */
export async function scan(
  id: string,
  scanReq: ScanRequest
): Promise<ScanResponse | undefined> {
  return await databaseQueryWrapper(async () => {
    // Get student
    const student = await PrismaService.studentDetails.findUniqueOrThrow({
      where: {
        userId: id,
      },
      include: {
        user: true,
      },
    })

    // Retrieve QR code data
    const qrData = await PrismaService.qrCode.findUniqueOrThrow({
      where: {
        id: scanReq.code,
      },
    })

    // Check if student was already scaned by the company
    if (student.companies_ids.includes(qrData.objectId)) {
      throw new ConflictException('Company already scanned')
    }

    // Associate user <=> company and update points
    const [companyUpdate] = await PrismaService.$transaction([
      PrismaService.companyDetails.update({
        where: {
          userId: qrData.objectId,
        },
        data: {
          students: {
            connect: {
              userId: student.userId,
            },
          },
        },
        include: {
          user: true,
        },
      }),
      PrismaService.studentDetails.update({
        where: {
          userId: student.userId,
        },
        data: {
          companies: {
            connect: {
              userId: qrData.objectId,
            },
          },
          companies_ids: {
            push: qrData.objectId,
          },
          scans: student.scans + 1,
          points: student.points + 5,
        },
      }),
    ])

    return {
      student: await getStudentById(student.userId, false),
      company: {
        id: companyUpdate.userId,
        name: companyUpdate.user.name,
        email: companyUpdate.user.email,
        category: companyUpdate.category,
      },
    }
  })
}

/**
 * Generate company QR code
 * @param qrReq generate request
 * @returns generate QR response
 * @see dtos.GenerateQRRequest
 * @see dtos.GenerateQRResponse
 */
export async function generateQR(
  qrReq: GenerateQRRequest
): Promise<GenerateQRResponse | undefined> {
  return await databaseQueryWrapper(async () => {
    // Check if company exists
    const company = await PrismaService.companyDetails.findUniqueOrThrow({
      where: {
        userId: qrReq.companyId,
      },
    })

    qrReq.socketId = qrReq.permanent ? '' : qrReq.socketId

    // Generate code
    const code = await PrismaService.qrCode.create({
      data: {
        objectType: ObjectType.COMPANY,
        objectId: company.userId,
      },
    })

    return {
      code: code.id,
    }
  })
}

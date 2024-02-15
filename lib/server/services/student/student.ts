import { databaseQueryWrapper } from '@/core/utils'
import { PrismaService } from '../../../../core/services/server'
import { AwardType, type User } from '@prisma/client'
import { PatchStudentProfileDto } from './dtos'
import { getFile, getFullResourcePath } from '@/lib/server/utils'
import { BadRequestException, ConflictException } from 'next-api-decorators'
import { visitedAllDayStands } from '../../utils/event'

export async function getStudentProfile(user: User) {
  return await databaseQueryWrapper(async () => {
    let student = await PrismaService.user.findUniqueOrThrow({
      where: {
        id: user.id,
      },

      include: {
        studentDetails: {
          select: {
            id: true,
            university: true,
            course: true,
            scans: true,
            points: true,
            cvLocation: true,
          },
        },
      },
    })

    const response = {
      ...student,
      image: getFullResourcePath(student.image),
      cv:
        student.studentDetails?.cvLocation &&
        (await getFile(student.studentDetails?.cvLocation)),
    }

    return response
  })
}

export async function patchStudentProfile(
  user: User,
  data: PatchStudentProfileDto
) {
  return await databaseQueryWrapper(async () => {
    await PrismaService.studentDetails.update({
      where: {
        userId: user.id,
      },
      data: {
        user: {
          update: {
            name: data.name,
            email: data.email,
          },
        },
        university: data.institutionCode,
        course: data.courseCode,
      },
    })
    return { message: 'User profile updated' }
  })
}

export async function getStudentCompanies(user: User) {
  return await databaseQueryWrapper(async () => {
    const details = await PrismaService.studentDetails.findUniqueOrThrow({
      where: {
        userId: user.id,
      },

      select: {
        companies: {
          select: {
            id: true,
            description: true,
            linkHref: true,
            linkText: true,
            category: true,
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

    return details.companies.map((company) => ({
      ...company,
      user: {
        ...company.user,
        image: getFullResourcePath(company.user.image),
      },
    }))
  })
}

export async function getStudentEnrollments(user: User) {
  return await databaseQueryWrapper(async () => {
    let enrollments = await PrismaService.studentDetails.findUniqueOrThrow({
      where: {
        userId: user.id,
      },

      select: {
        enrolledActivities: {
          select: {
            activityId: true,
            confirmed: true,
            activity: {
              include: {
                companies: {
                  select: {
                    user: {
                      select: {
                        name: true,
                        image: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })

    // Company images
    enrollments = {
      enrolledActivities: enrollments.enrolledActivities.map(
        (activityEnrollment) => ({
          ...activityEnrollment,
          activity: {
            ...activityEnrollment.activity,
            confirmed: activityEnrollment.confirmed,
            companies: activityEnrollment.activity.companies.map((company) => ({
              ...company,
              user: {
                ...company.user,
                image: getFullResourcePath(company.user.image),
              },
            })),
          },
        })
      ),
    }

    return enrollments.enrolledActivities
  })
}

export async function scanCompany(user: User, companyId: string) {
  return await databaseQueryWrapper(async () => {
    const company = await PrismaService.companyDetails.findUniqueOrThrow({
      where: {
        userId: companyId,
      },
      select: {
        userId: true,
        user: {
          select: {
            name: true,
            image: true,
          },
        },
        description: true,
        linkHref: true,
        linkText: true,
      },
    })

    const student = await PrismaService.studentDetails.findFirstOrThrow({
      where: {
        userId: user.id,
      },
    })

    if (student.companies_ids.includes(company.userId))
      throw new ConflictException('Company already scanned')

    const points = (await visitedAllDayStands(student, company.userId))
      ? 50
      : 10

    await PrismaService.$transaction([
      PrismaService.companyDetails.update({
        where: {
          userId: company.userId,
        },
        data: {
          students: {
            connect: {
              userId: student.userId,
            },
          },
          scans: {
            increment: 1,
          },
        },
      }),
      PrismaService.studentDetails.update({
        where: {
          userId: student.userId,
        },
        data: {
          companies: {
            connect: {
              userId: company.userId,
            },
          },
          companies_ids: {
            push: company.userId,
          },
          points: {
            increment: points,
          },
          scans: {
            increment: 1,
          },
        },
      }),
    ])

    return {
      ...company,
      user: {
        ...company.user,
        image: getFullResourcePath(company.user.image),
      },
      points: points,
    }
  })
}

export async function requestAward(user: User) {
  return await databaseQueryWrapper(async () => {
    // Check if an award already exists

    let prize = await PrismaService.awardToken.findUnique({
      where: {
        userId: user.id,
      },
      select: {
        id: true,
        type: true,
      },
    })

    if (prize) return prize

    // Generate QR

    return await PrismaService.$transaction(async (tx) => {
      // Check points
      const studentTx = await tx.studentDetails.findUniqueOrThrow({
        where: {
          userId: user.id,
        },
      })

      if (studentTx.points - 40 < 0) {
        throw new BadRequestException(
          'The student does not have enough points to request awards'
        )
      }

      return await tx.awardToken.create({
        data: {
          type:
            studentTx.reedems % 3 == 0 && studentTx.reedems != 0
              ? AwardType.SPECIAL
              : AwardType.NORMAL,
          student: {
            connect: {
              id: studentTx.id,
            },
          },
        },
        select: {
          id: true,
          type: true,
        },
      })
    })
  })
}

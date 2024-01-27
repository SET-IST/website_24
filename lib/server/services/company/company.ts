import { databaseQueryWrapper } from '@/core/utils'
import { CompanyLoginRequest, PatchCompanyProfileDto } from './dtos'
import { PrismaService } from '@/core/services/server'
import { isSamePass } from '@/core/utils/auth'
import { UnauthorizedException } from 'next-api-decorators'
import { User } from 'next-auth'
import { getFullResourcePath } from '../../utils'

export async function login(
  req: CompanyLoginRequest
): Promise<User | undefined> {
  return await databaseQueryWrapper(async () => {
    // Retrieve company
    const company = await PrismaService.companyDetails.findUniqueOrThrow({
      where: {
        username: req.username,
      },
      include: {
        user: true,
      },
    })

    // Check password
    if (!(await isSamePass(req.password, company.password)))
      throw new UnauthorizedException('Invalid credentials')

    return {
      id: company.userId,
      role: company.user.role,
      readChangelog: company.user.readChangelog,
      name: company.user.name,
      email: company.user.email,
      image: company.user.image,
    }
  })
}

export async function getCompanyProfile(user: User) {
  return await databaseQueryWrapper(async () => {
    const company = await PrismaService.user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
      include: {
        companyDetails: {
          select: {
            id: true,
            description: true,
            linkHref: true,
            linkText: true,
            category: true,
            username: true,
          },
        },
      },
    })

    const response = {
      ...company,
      image: getFullResourcePath(company.image),
    }

    return response
  })
}

export async function patchCompanyProfile(
  user: User,
  req: PatchCompanyProfileDto
) {
  return await databaseQueryWrapper(async () => {
    await PrismaService.companyDetails.update({
      where: {
        userId: user.id,
      },
      data: {
        user: {
          update: {
            name: req.name,
          },
        },
        description: req.description,
        linkHref: req.linkHref,
        linkText: req.linkText,
      },
    })
    return { message: 'Company profile updated' }
  })
}

export async function getCompanyStudents(user: User) {
  return await databaseQueryWrapper(async () => {
    return await PrismaService.companyDetails.findUniqueOrThrow({
      where: {
        userId: user.id,
      },
      select: {
        students: {
          select: {
            id: true,
            course: true,
            university: true,
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    })
  })
}

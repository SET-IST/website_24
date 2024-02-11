import { PrismaService } from '@/core/services/server'
import { databaseQueryWrapper } from '@/core/utils'
import { getFullResourcePath } from '../../utils'
import { UserType } from '@prisma/client'
import { getCompanyProfile } from '../company'
import { getStudentProfile } from '../student'
import { UpdatePointsDto } from './dtos'

export async function searchUser(query?: string) {
  return await databaseQueryWrapper(async () => {
    const searchQuery = {
      OR: [
        {
          name: {
            contains: query,
          },
        },
        {
          email: {
            contains: query,
          },
        },
        {
          id: {
            contains: query,
          },
        },
      ],
    }

    const users = await PrismaService.user.findMany({
      where: searchQuery,
      take: 5,
    })

    return users.map((user) => ({
      ...user,
      image: getFullResourcePath(user.image),
    }))
  })
}

export async function getUserDetails(uuid: string) {
  return await databaseQueryWrapper(async () => {
    const user = await PrismaService.user.findUniqueOrThrow({
      where: {
        id: uuid,
      },
    })

    return user.role === UserType.Company
      ? getCompanyProfile(user)
      : getStudentProfile(user)
  })
}

export async function setStudentPoints(uuid: string, data: UpdatePointsDto) {
  return await databaseQueryWrapper(async () => {
    await PrismaService.studentDetails.update({
      where: {
        userId: uuid,
      },
      data: {
        points: data.points,
      },
    })
  })
}

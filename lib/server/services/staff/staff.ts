import { PrismaService } from '@/core/services/server'
import { databaseQueryWrapper } from '@/core/utils'
import { getFullResourcePath } from '../../utils'
import { UserType } from '@prisma/client'
import { getCompanyProfile } from '../company'
import { getStudentProfile } from '../student'
import { CreateAwardDto, UpdatePointsDto } from './dtos'
import { ConflictException } from 'next-api-decorators'

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

export async function getUser(uuid: string) {
  return await databaseQueryWrapper(async () => {
    return await PrismaService.user.findUniqueOrThrow({
      where: {
        id: uuid,
      },
    })
  })
}

export async function getUserDetails(uuid: string) {
  return await databaseQueryWrapper(async () => {
    const user = await getUser(uuid)

    return user!.role === UserType.Company
      ? getCompanyProfile(user!)
      : getStudentProfile(user!)
  })
}

export async function createAward(uuid: string, data: CreateAwardDto) {
  return await databaseQueryWrapper(async () => {
    // Check if student already has an award
    let prize = await PrismaService.awardToken.findUnique({
      where: {
        userId: uuid,
      },
      select: {
        id: true,
        type: true,
      },
    })

    if (prize)
      throw new ConflictException('Student already has an award pending')

    return await PrismaService.awardToken.create({
      data: {
        type: data.type,
        student: {
          connect: {
            userId: uuid,
          },
        },
      },
    })
  })
}

export async function redeemAward(uuid: string) {
  return await databaseQueryWrapper(async () => {
    const details = await PrismaService.awardToken.findUniqueOrThrow({
      where: {
        id: uuid,
      },
      include: {
        student: {
          select: {
            user: true,
          },
        },
      },
    })

    await PrismaService.awardToken.delete({
      where: {
        id: details.id,
      },
    })

    return details
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

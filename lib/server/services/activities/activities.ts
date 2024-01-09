import { databaseQueryWrapper } from '@/core/utils'
import { PrismaService } from '../../../../core/services/server'
import { Activity, ActivityType, Prisma, UserType } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from '@/lib/server/middleware'
import type { User } from '@prisma/client'
import {
  BadRequestException,
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
} from 'next-api-decorators'
import { PatchActivityDto } from './dtos'

export async function getActivities(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<Activity[] | undefined> {
  return await databaseQueryWrapper(async () => {
    const activities = await PrismaService.activity.findMany()
    const session = await getSession(req, res)
    if (!session || session.user?.role != UserType.Student) return activities

    const student = await PrismaService.studentDetails.findUniqueOrThrow({
      where: {
        userId: session.user.id,
      },
      include: {
        enrolledActivities: true,
      },
    })
    // Creates a dictionary with the key as activity id and value as confirmed from ActivityEnrollment model
    const enrolledActivities: Record<number, boolean> =
      student.enrolledActivities.reduce((acc, { activityId, confirmed }) => {
        acc[activityId] = confirmed
        return acc
      }, {} as Record<number, boolean>)
    return activities.map((activity) => {
      if (activity.id in enrolledActivities) {
        return {
          ...activity,
          confirmed: enrolledActivities[activity.id],
        }
      }
      return activity
    })
  })
}

export async function enrollStudent(user: User, id: number) {
  return await databaseQueryWrapper(async () => {
    const activity = await PrismaService.activity.findUniqueOrThrow({
      where: {
        id: id,
      },
    })

    if (activity.type === ActivityType.Lecture)
      throw new BadRequestException('Cannot enroll in a lecture')

    try {
      await PrismaService.activityEnrollment.create({
        data: {
          student: {
            connect: {
              userId: user.id,
            },
          },
          activity: {
            connect: {
              id: activity.id,
            },
          },
          confirmed: false,
        },
      })
      return { message: 'Successfully enrolled' }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            return { message: 'Already enrolled' }
          default:
            throw new InternalServerErrorException(error.message)
        }
      } else throw error
    }
  })
}

export async function removeStudent(user: User, id: number) {
  return await databaseQueryWrapper(async () => {
    const activity = await PrismaService.activity.findUniqueOrThrow({
      where: {
        id: id,
      },
    })

    if (activity.type === ActivityType.Lecture)
      throw new BadRequestException('Activity is not enrollable')

    const confirmed = await PrismaService.activityEnrollment.findUnique({
      where: {
        enrollmentId: {
          userId: user.id,
          activityId: activity.id,
        },
      },
    })

    try {
      if (confirmed?.confirmed)
        throw new ConflictException('Cannot remove confirmed enrollment')
      await PrismaService.activityEnrollment.delete({
        where: {
          enrollmentId: {
            userId: user.id,
            activityId: activity.id,
          },
        },
      })
      return { message: 'Successfully removed' }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new BadRequestException('Student not enrolled')
          default:
            throw new InternalServerErrorException(error.message)
        }
      } else throw error
    }
  })
}

export async function activityManagement(id: number) {
  return await databaseQueryWrapper(async () => {
    const activityToManagement = await PrismaService.activity.findUniqueOrThrow(
      {
        where: {
          id: id,
        },
        include: {
          enrollments: {
            include: {
              student: {
                select: {
                  id: true,
                  userId: true,
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
      }
    )

    return activityToManagement
  })
}

export async function patchEnrollment(
  id: number,
  patchActivity: PatchActivityDto
) {
  return await databaseQueryWrapper(async () => {
    if (patchActivity.action != 'DISCARD') {
      const confirmed = patchActivity.action == 'CONFIRM'

      try {
        await prisma.activityEnrollment.upsert({
          where: {
            enrollmentId: {
              userId: patchActivity.userId,
              activityId: id,
            },
          },
          update: {
            confirmed: confirmed,
          },
          create: {
            student: {
              connect: {
                userId: patchActivity.userId,
              },
            },
            activity: {
              connect: {
                id: id,
              },
            },
            confirmed: confirmed,
          },
        })
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code == 'P2025') {
            throw new NotFoundException(String(error.meta?.cause))
          }
        } else throw error
      }
    } else {
      await PrismaService.activityEnrollment.delete({
        where: {
          enrollmentId: {
            userId: patchActivity.userId,
            activityId: id,
          },
        },
      })
    }

    return { message: 'Successfully updated activity management details' }
  })
}

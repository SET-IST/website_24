import { databaseQueryWrapper } from '@/core/utils'
import { PrismaService } from '../../../core/services/server'
import { Activity, ActivityType, UserType } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from '@/core/middlewares/server/require-session'
import { User } from '@/components/pages/PerfilPage/types'
import { BadRequestException, ConflictException } from 'next-api-decorators'

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

    const student = await PrismaService.studentDetails.findUniqueOrThrow({
      where: {
        userId: user.id,
      },
      include: {
        enrolledActivities: true,
      },
    })

    const enrolledActivity = student.enrolledActivities.find(
      (enrolledActivity) => enrolledActivity.activityId == activity.id
    )

    if (!enrolledActivity){
      await PrismaService.activityEnrollment.create({
        data: {
          student: {
            connect: {
              id: student.id,
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
      return {message: 'Successfully enrolled'}
    }
    else return {message: 'Already enrolled'}
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
      throw new BadRequestException('Cannot enroll in a lecture')

    const student = await PrismaService.studentDetails.findUniqueOrThrow({
      where: {
        userId: user.id,
      },
      include: {
        enrolledActivities: true,
      },
    })

    const enrolledActivity = student.enrolledActivities.find(
      (enrolledActivity) => enrolledActivity.activityId == activity.id
    )

    if (student.id == enrolledActivity?.studentId) {
      await PrismaService.activityEnrollment.delete({
        where: {
          studentId: enrolledActivity.studentId,
          activityId: enrolledActivity.activityId,
        },
      })
      return {message: 'Successfully removed'}
    }
    else throw new BadRequestException('Student not enrolled')
  })
}

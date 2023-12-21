import { databaseQueryWrapper } from '@/core/utils'
import { PrismaService } from '../../../core/services/server'
import { Activity, ActivityType, UserType } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from '@/core/middlewares/server/require-session'
import { User } from '@/components/pages/PerfilPage/types'
import { BadRequestException, ConflictException, NotFoundException } from 'next-api-decorators'
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

    if (!enrolledActivity) throw new BadRequestException('Student not enrolled')

    if (enrolledActivity?.confirmed == true) throw new BadRequestException('Cannot remove a confirmed student');
    
    await PrismaService.activityEnrollment.delete({
        where: {
            studentId_activityId: {
                studentId: enrolledActivity.studentId,
                activityId: enrolledActivity.activityId,
            },
        },
    });
    
    return { message: 'Successfully removed' };
  
  })
}

export async function activityManagement(id: number){
    return await databaseQueryWrapper(async () => {

      const activityToManagement = await PrismaService.activity.findUniqueOrThrow({
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
                    }
                  }
                },
              }
            }
          },
        },
      })
      
      return activityToManagement;
  })
}

export async function patchEnrollment(id: number, patchActivity: PatchActivityDto) {
  return await databaseQueryWrapper(async () => {
    const user = await PrismaService.user.findUnique({
      where: {
        id: patchActivity.userId,
      },
    })

    if (!user) throw new NotFoundException('No StudentDetails found')
    
    const studentsEnrolled = await PrismaService.activity.findMany({
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
              },
            },
          }
        },
      },
    })
    
    if (studentsEnrolled.length == 0) throw new NotFoundException('No Activity found')

    const selectedStudent = studentsEnrolled[0].enrollments.find(
      (enrollment) => enrollment.student.userId == patchActivity.userId
    )
    
    
    if (patchActivity.action == 'DISCARD' && selectedStudent) {
      await PrismaService.activityEnrollment.delete({
        where: {
          studentId_activityId: {
            studentId: selectedStudent.studentId,
            activityId: selectedStudent.activityId,
          },
        },
      })
      return { message: 'Successfully updated activity management details' };
    }

    if(patchActivity.action == 'ENROLL' && selectedStudent && selectedStudent.confirmed == true) {
      await PrismaService.activityEnrollment.update({
        where: {
          studentId_activityId: {
            studentId: selectedStudent.studentId,
            activityId: selectedStudent.activityId,
          },
        },
        data: {
          confirmed: false,
        },
      })
      return { message: 'Successfully updated activity management details' };
    }

    if(patchActivity.action == 'ENROLL' && !selectedStudent) {
      await PrismaService.activityEnrollment.create({
        data: {
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
          confirmed: false,
        },
      })
      return { message: 'Successfully updated activity management details' };
    }

    if (patchActivity.action == 'CONFIRM' && selectedStudent) {
      if (selectedStudent?.confirmed == true) throw new ConflictException('Student already confirmed')
      await PrismaService.activityEnrollment.update({
        where: {
          studentId_activityId: {
            studentId: selectedStudent.studentId,
            activityId: selectedStudent.activityId,
          },
        },
        data: {
          confirmed: true,
        },
      })
      return { message: 'Successfully updated activity management details' };
    }

    if (patchActivity.action == 'CONFIRM' && !selectedStudent) throw new BadRequestException('Student has to be enrolled to be confirmed')

    if (!selectedStudent) throw new NotFoundException('No StudentDetails found')
  })
}

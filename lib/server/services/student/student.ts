import { databaseQueryWrapper } from '@/core/utils'
import { PrismaService } from '../../../../core/services/server'
import type { User } from '@prisma/client'
import { PatchStudentProfileDto } from './dtos'

export async function getStudentProfile(user: User) {
  return await databaseQueryWrapper(async () => {
    return await PrismaService.user.findUniqueOrThrow(
        {
            where: {
                id: user.id
            },

            include: {
                studentDetails: {
                    select: {
                        id: true,
                        university: true,
                        course: true,
                        scans: true,
                        points: true,
                        cv: {
                            select: {
                                id: true,
                            }
                        }
                    }
                }
            }
            
        }
    )

  })
}

export async function patchStudentProfile(user: User, data: PatchStudentProfileDto) {
    return await databaseQueryWrapper(async () => {
      await PrismaService.studentDetails.update({
          where: {
              userId: user.id
          },
          data: {
              user:{
                  update: {
                      name: data.name,
                      email: data.email
                  }
              },
              university: data.university,
              course: data.course
          }
      })
      return {message: "User profile updated"}
    })
}

export async function getStudentCompanies(user:User) {
    return await databaseQueryWrapper(async () => {
        return await PrismaService.studentDetails.findUniqueOrThrow(
            {
                where: {
                    userId: user.id
                },
                
                select: {
                    companies: {
                        select: {
                            category: true,
                            username: true,
                            description: true
                        }
                    }
                }
            }
        )
    })    
}

export async function getStudentEnrollments(user:User) {
    return await databaseQueryWrapper(async () => {
        return await PrismaService.studentDetails.findUniqueOrThrow(
            {
                where: {
                    userId: user.id
                },
                
                select: {
                    enrolledActivities: {
                        select: {
                            activityId: true,
                            confirmed: true,
                            activity: {
                                select: {
                                    title: true,
                                    description: true,
                                    date: true,
                                    duration: true,
                                    location: true,
                                    type: true
                                }
                            }
                        }
                    }
                }
            }
        )
    })    
}



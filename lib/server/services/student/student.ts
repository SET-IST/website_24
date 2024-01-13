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



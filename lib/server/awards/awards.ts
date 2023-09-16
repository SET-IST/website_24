import { AwardType } from '@prisma/client'
import { UnprocessableEntityException } from 'next-api-decorators'
import { PrismaService } from '../../../core/services/server'
import { databaseQueryWrapper } from '../../../core/utils'
import { AwardResponse, ReedemResponse } from './dtos'

/**
 * Request award
 * Checks if student already has an assigned award and
 * generates a new one if thats not the case
 * @param id user id
 * @returns award response
 * @see dtos.AwardResponse
 */
export async function requestAward(
  id: string
): Promise<AwardResponse | undefined> {
  return await databaseQueryWrapper(async () => {
    // Get student
    const student = await PrismaService.studentDetails.findUniqueOrThrow({
      where: {
        userId: id,
      },
    })

    // Check if student has a pending token for that award
    const existingToken = await PrismaService.awardToken.findUnique({
      where: {
        studentId: student.id,
      },
    })

    if (existingToken) {
      return {
        awardToken: existingToken.id,
        awardType: existingToken.type,
      }
    }

    // Generate token
    return await PrismaService.$transaction(async (tx) => {
      const studentTx = await tx.studentDetails.update({
        where: {
          id: student.id,
        },
        data: {
          points: {
            decrement: 15,
          },
          reedems: {
            increment: 1,
          },
        },
      })

      // Check if the student has enough points for the award
      if (studentTx.points < 0) {
        throw new UnprocessableEntityException(
          'The student does not have enough points to request awards'
        )
      }

      const token = await tx.awardToken.create({
        data: {
          type:
            studentTx.reedems % 3 == 0 ? AwardType.SPECIAL : AwardType.NORMAL,
          student: {
            connect: {
              id: student.id,
            },
          },
        },
      })

      return {
        awardToken: token.id,
        awardType: token.type,
      }
    })
  })
}

/**
 * Redeem award
 * Redeem the award with the supplied token
 * @param token award token
 * @returns reedem response
 * @see dtos.ReedemResponse
 */
export async function redeemAward(
  token: string
): Promise<ReedemResponse | undefined> {
  return await databaseQueryWrapper(async () => {
    await PrismaService.awardToken.findUniqueOrThrow({
      where: {
        id: token,
      },
    })

    const claimedAward = await PrismaService.awardToken.delete({
      where: {
        id: token,
      },
      include: {
        student: {
          select: {
            userId: true,
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
      id: claimedAward.id,
      type: claimedAward.type,
      studentId: claimedAward.studentId,
      student: {
        userId: claimedAward.student.userId,
        name: claimedAward.student.user.name,
        course: claimedAward.student.course,
        image: claimedAward.student.user.image,
      },
    }
  })
}

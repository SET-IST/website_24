import { PrismaService } from '@/core/services/server'
import { EventLogType, User } from '@prisma/client'
import { DateTime } from 'luxon'

export async function logEvent(
  user: User,
  type: EventLogType,
  description: string
) {
  await PrismaService.eventLog.create({
    data: {
      timestamp: DateTime.now().toJSDate(),
      type,
      description,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  })
}

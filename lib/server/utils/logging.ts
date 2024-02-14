import { PrismaService } from '@/core/services/server'
import { EventLogType } from '@prisma/client'
import { DateTime } from 'luxon'

export async function logEvent(type: EventLogType, description: string) {
  await PrismaService.eventLog.create({
    data: {
      timestamp: DateTime.now().toJSDate(),
      type,
      description,
    },
  })
}

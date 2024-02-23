import { PrismaClient } from '@prisma/client'
import { LoggerCore } from './logger-scopes'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
  LoggerCore.success('Started PrismaService')
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
    LoggerCore.success('Started PrismaService')
  }

  prisma = global.prisma
}

export { prisma as PrismaService }

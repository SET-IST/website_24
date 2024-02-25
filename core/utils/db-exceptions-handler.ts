import { Prisma } from '@prisma/client'
import {
  HttpException,
  InternalServerErrorException,
  NotFoundException,
} from 'next-api-decorators'
import Logger from 'signale'

export function handleDatabaseException(dbException: any): HttpException {
  if (dbException instanceof Prisma.PrismaClientKnownRequestError) {
    let exception: HttpException

    Logger.scope('database').error(
      `${dbException.code}: ${dbException.message} (Query metadata: ${dbException.meta})`
    )

    if (dbException.code === 'P2025') {
      exception = new NotFoundException(dbException.message)
    } else {
      exception = new InternalServerErrorException(dbException.message)
    }

    throw exception
  } else {
    Logger.scope('service exception').debug(
      `${dbException.name}: ${dbException.message}`
    )

    if (dbException instanceof HttpException) {
      throw dbException
    } else {
      Logger.scope('service').error(
        `${dbException.name}: ${dbException.message}`
      )
      throw new InternalServerErrorException(
        `${dbException.name}: ${dbException.message}`
      )
    }
  }
}

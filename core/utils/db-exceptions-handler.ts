import { Prisma } from '@prisma/client'
import {
  HttpException,
  InternalServerErrorException,
  NotFoundException,
} from 'next-api-decorators'

export function handleDatabaseException(dbException: any): HttpException {
  if (dbException instanceof Prisma.PrismaClientKnownRequestError) {
    let exception: HttpException

    console.error(
      `[DatabaseError]: ${dbException.code}: ${dbException.message}`
    )

    if (dbException.code === 'P2025') {
      exception = new NotFoundException(dbException.message)
    } else {
      exception = new InternalServerErrorException(dbException.message)
    }

    throw exception
  } else {
    console.error(`[ServerError]: ${dbException.name}: ${dbException.message}`)

    if (dbException instanceof HttpException) {
      throw dbException
    } else {
      throw new InternalServerErrorException(
        `${dbException.name}: ${dbException.message}`
      )
    }
  }
}

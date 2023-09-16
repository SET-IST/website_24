import { S3ServiceException } from '@aws-sdk/client-s3'
import {
  HttpException,
  InternalServerErrorException,
  NotFoundException,
} from 'next-api-decorators'

export function handleS3Exception(s3Exception: any): HttpException {
  if (s3Exception instanceof S3ServiceException) {
    console.error(
      `[S3ServiceException]: ${s3Exception.name}: ${s3Exception.message}`
    )

    if (s3Exception.name === 'NoSuchKey') {
      throw new NotFoundException(
        `[S3ServiceException]: ${s3Exception.name}: ${s3Exception.message}`
      )
    } else {
      throw new InternalServerErrorException(
        `[S3ServiceException]: ${s3Exception.name}: ${s3Exception.message}`
      )
    }
  } else {
    console.error(
      `[Resources/UnknownError]: ${s3Exception.name}: ${s3Exception.message}`
    )
    throw new InternalServerErrorException(
      `[Resources/UnknownError]: ${s3Exception.name}: ${s3Exception.message}`
    )
  }
}

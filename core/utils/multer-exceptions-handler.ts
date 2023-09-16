import { MulterError } from 'multer'
import {
  HttpException,
  InternalServerErrorException,
} from 'next-api-decorators'

export function handleMulterException(multerException: any): HttpException {
  if (multerException instanceof MulterError) {
    console.error(
      `[MulterError]: ${multerException.code || 400}: ${
        multerException.message
      }`
    )

    throw new InternalServerErrorException(
      `[MulterError]: ${multerException.code || 400}: ${
        multerException.message
      }`
    )
  } else {
    console.error(
      `[Upload/UnknownError]: ${multerException.name}: ${multerException.message}`
    )
    throw new InternalServerErrorException(
      `[Upload/UnknownError]: ${multerException.name}: ${multerException.message}`
    )
  }
}

import { HttpException } from 'next-api-decorators'

export class TooManyRequestsException extends HttpException {
  public constructor(message: string = 'Too Many Requests') {
    super(429, message)
  }
}

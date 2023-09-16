import { User, UserType } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import {
  createMiddlewareDecorator,
  ForbiddenException,
  NextFunction,
  UnauthorizedException,
} from 'next-api-decorators'

export const Role = (...roles: UserType[]) => {
  return function (target: object, propertyKey?: string | symbol) {
    createMiddlewareDecorator(
      async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
        if (!req.headers.user || typeof req.headers.user !== 'string') {
          throw new UnauthorizedException('User not logged in')
        }
        const user: User = JSON.parse(req.headers.user)
        if (!roles.includes(user.role)) {
          throw new ForbiddenException(
            'User does not have the required privilege'
          )
        }
        next()
      }
    )()(target, propertyKey as string)
  }
}

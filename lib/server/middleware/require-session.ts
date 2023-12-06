import { NextApiRequest, NextApiResponse } from 'next'
import {
  NextFunction,
  UnauthorizedException,
  createMiddlewareDecorator,
} from 'next-api-decorators'
import { getServerSession } from 'next-auth'

export const RequiresSession = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    //const session = await getServerSession(req, res, authOptions)
    const session = false

    if (!session) {
      throw new UnauthorizedException('User not logged in')
    }
    //req.headers.user = JSON.stringify(session.user)
    next()
  }
)

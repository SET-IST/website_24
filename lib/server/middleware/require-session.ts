import { NextApiRequest, NextApiResponse } from 'next'
import {
  NextFunction,
  UnauthorizedException,
  createMiddlewareDecorator,
} from 'next-api-decorators'
import { getServerSession } from 'next-auth'
import { AuthOptions } from '@/lib/server/auth'

export async function getSession(req: NextApiRequest, res: NextApiResponse) {
  return await getServerSession(req, res, AuthOptions(req, res))
}

export const RequiresSession = createMiddlewareDecorator(
  async (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
    const session = await getSession(req, res)

    if (!session) {
      throw new UnauthorizedException('User not logged in')
    }
    
    req.headers.user = JSON.stringify(session.user)
    next()
  }
)

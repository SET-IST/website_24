import { User } from '.prisma/client'
import { NextApiRequest } from 'next'
import { createParamDecorator } from 'next-api-decorators'

export const UserData = createParamDecorator<User | undefined>(
  (req: NextApiRequest) => {
    if (!req.headers.user || typeof req.headers.user !== 'string') {
      return undefined
    }
    const user: User = JSON.parse(req.headers.user)
    return user
  }
)

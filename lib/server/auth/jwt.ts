import Cookies from 'cookies'
import { NextApiRequest, NextApiResponse } from 'next'
import { JWTOptions, decode, encode } from 'next-auth/jwt'

export const JWTHandlers = (
  req: NextApiRequest,
  res: NextApiResponse
): Partial<JWTOptions> => {
  const options: Partial<JWTOptions> = {
    encode: async ({ token, secret, maxAge }) => {
      if (
        req.query.nextauth?.includes('callback') &&
        req.query.nextauth.includes('credentials') &&
        req.method === 'POST'
      ) {
        const cookies = new Cookies(req, res)
        const cookie = cookies.get('next-auth.session-token')
        if (cookie) return cookie
        else return ''
      }
      return encode({ token, secret, maxAge })
    },
    decode({ token, secret }) {
      if (
        req.query.nextauth?.includes('callback') &&
        req.query.nextauth.includes('credentials') &&
        req.method === 'POST'
      ) {
        return null
      }

      return decode({ token, secret })
    },
  }

  return options
}

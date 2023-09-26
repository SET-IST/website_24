import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { UserType } from '@prisma/client'
import Cookies from 'cookies'
import { randomUUID } from 'crypto'
import { NextApiRequest, NextApiResponse } from 'next'
import { BadRequestException } from 'next-api-decorators'
import NextAuth, { NextAuthOptions } from 'next-auth'
import { decode, encode } from 'next-auth/jwt'
import { authOptions } from '../../../core/auth/config'
import { PrismaService } from '../../../core/services/server'
import { fromDate, getAge } from '../../../core/utils/auth'

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  const authOptionsExtended: NextAuthOptions = {
    jwt: {
      // Customize the JWT encode and decode functions to overwrite the default behaviour of storing the JWT token in the session cookie when using credentials providers. Instead we will store the session token reference to the session in the database.
      encode: async ({ token, secret, maxAge }) => {
        const queryValues = req.query.nextauth
        if (!queryValues) {
          throw new BadRequestException('Invalid query request on signin')
        }
        if (
          queryValues.includes('callback') &&
          queryValues.includes('credentials') &&
          req.method === 'POST'
        ) {
          const cookies = new Cookies(req, res)

          const cookie = cookies.get('next-auth.session-token')

          if (cookie) return cookie
          else return ''
        }
        // Revert to default behaviour when not in the credentials provider callback flow
        return encode({ token, secret, maxAge })
      },
      decode: async ({ token, secret }) => {
        const queryValues = req.query.nextauth
        if (!queryValues) {
          throw new BadRequestException('Invalid query request on signin')
        }
        if (
          queryValues.includes('callback') &&
          queryValues.includes('credentials') &&
          req.method === 'POST'
        ) {
          return null
        }

        // Revert to default behaviour when not in the credentials provider callback flow
        return decode({ token, secret })
      },
    },
    ...authOptions,
  }

  // Load signIn callback
  authOptionsExtended.callbacks!.signIn = async ({
    user,
    account,
    profile,
    email,
    credentials,
  }) => {
    if (!user || !account) {
      return false
    }

    if (account.provider == 'student-google') {
      //External student login
      user.role = UserType.STUDENT

      user.studentDetails = {
        create: {
          age: 18,
          university: '',
          course: '',
        },
      }
    } else if (account.provider == 'fenix') {
      // IST student login
      user.role = UserType.STUDENT
      //@ts-ignore
      const age = getAge(profile.birthday)
      user.studentDetails = {
        create: {
          age: age,
          university: 'Universidade de Lisboa - Instituto Superior Técnico',
          //@ts-ignore
          course: profile.roles[0].registrations[0].name,
        },
      }
    } else {
      //Company or invalid
      const queryValues = req.query.nextauth
      if (!queryValues) {
        throw new BadRequestException('Invalid query request on signin')
      }
      // Check if this sign in callback is being called in the credentials authentication flow.
      // If so, use the next-auth adapter to create a session entry in the database
      //(SignIn is called after authorize so we can safely assume the user is valid and already authenticated).
      if (
        queryValues.includes('callback') &&
        queryValues.includes('credentials') &&
        req.method === 'POST'
      ) {
        //Company login
        user.role = UserType.COMPANY

        //Create database session
        const sessionToken = randomUUID?.() //function to generate the session token (you can use randomUUID as an example)
        const sessionExpiry = fromDate(30 * 24 * 60 * 60) //function to calculate the session cookie expiry date -> 30 days

        await PrismaAdapter(PrismaService).createSession?.({
          sessionToken: sessionToken,
          userId: user.id,
          expires: sessionExpiry,
        })

        const cookies = new Cookies(req, res)

        cookies.set('next-auth.session-token', sessionToken, {
          expires: sessionExpiry,
        })
      } else {
        return false
      }
    }
    return true
  }

  return await NextAuth(req, res, authOptionsExtended)
}

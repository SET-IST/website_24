import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { CompanyDetails } from '@prisma/client'
import { BadRequestException } from 'next-api-decorators'
import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaService } from '../services/server'
import { isSamePass, isTokenEndpointHandler } from '../utils/auth'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(PrismaService),
  providers: [
    GoogleProvider({
      id: 'student-google',
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
    Credentials({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          throw new BadRequestException('Invalid credentials')
        }
        //get saved credentials
        const companyDetails: CompanyDetails =
          await PrismaService.companyDetails.findUniqueOrThrow({
            where: {
              username: credentials.username,
            },
          })

        if (companyDetails) {
          //verify credentials
          if (
            !(await isSamePass(credentials.password, companyDetails.password))
          ) {
            throw new BadRequestException('Wrong credentials')
          }
          //get corresponding user
          const company = await PrismaService.user.findUniqueOrThrow({
            where: {
              id: companyDetails.userId,
            },
            select: {
              id: true,
              name: true,
              email: true,
              image: true,
              accounts: true,
            },
          })

          return company
        } else {
          return null
        }
      },
    }),
    {
      id: 'fenix',
      name: 'Fénix',
      type: 'oauth',
      version: '2.0',
      authorization: {
        url: `https://fenix.tecnico.ulisboa.pt/oauth/userdialog`,
      },
      token: {
        url: 'https://fenix.tecnico.ulisboa.pt/oauth/access_token',
        async request(context) {
          // context contains useful properties to help you make the request.

          // Safety checks

          const requestToken = context.provider.token

          if (
            !context.params.code ||
            !isTokenEndpointHandler(requestToken) ||
            !requestToken.url
          ) {
            throw new Error(
              'Fenix OAuth Error: Unexpected error at tokens exchange'
            )
          }

          const authCode = context.params.code
          const tokenRequestUrl = new URL(requestToken.url)

          // Add parameters
          tokenRequestUrl.searchParams.append(
            'client_id',
            process.env.FENIX_ID!
          )
          tokenRequestUrl.searchParams.append(
            'client_secret',
            process.env.FENIX_SECRET!
          )
          tokenRequestUrl.searchParams.append(
            'redirect_uri',
            process.env.FENIX_URL!
          )
          tokenRequestUrl.searchParams.append('code', authCode)
          tokenRequestUrl.searchParams.append(
            'grant_type',
            'authorization_code'
          )

          // Send request
          const response = await fetch(tokenRequestUrl, {
            method: 'POST',
            mode: 'cors',
          })

          if (!response.ok) {
            throw new Error(`Fenix OAuth Error: ${response.statusText}`)
          }

          // Decode response
          const json = await response.json()

          const tokens = {
            access_token: json['access_token'],
            refresh_token: json['refresh_token'],
          }

          return { tokens }
        },
      },
      userinfo: {
        url: 'https://fenix.tecnico.ulisboa.pt/api/fenix/v1/person',
      },
      profile(profile, tokens) {
        return {
          id: profile.username, // Usei o username (ist19...) como id
          name: profile.name,
          email: profile.email,
        }
      },
      clientId: process.env.FENIX_ID,
      clientSecret: process.env.FENIX_SECRET,
    },
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user = {
        id: user.id,
        role: user.role,
        readChangelog: user.readChangelog,
        ...session.user,
      }

      return session
    },
  },
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
}

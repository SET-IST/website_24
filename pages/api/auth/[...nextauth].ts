import NextAuth, { AuthOptions } from 'next-auth'

// Providers
import GoogleProvider from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

// Handlers and Callbacks
import {
  AuthCallbacks,
  CredentialsAuthorizationHandler,
  FenixAccessTokenHandler,
  FenixProfileHandler,
  GoogleProfileHandler,
  JWTHandlers,
} from '@/lib/server/auth'

// Database adapter
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaService } from '@/core/services/server'
import { Adapter } from 'next-auth/adapters'
import { NextApiRequest, NextApiResponse } from 'next'
import { links } from '@/data/links'

export function AuthOptions(
  req: NextApiRequest,
  res: NextApiResponse
): AuthOptions {
  return {
    adapter: PrismaAdapter(PrismaService) as Adapter,
    providers: [
      {
        id: 'fenix',
        name: 'Fénix',
        type: 'oauth',
        version: '2.0',
        clientId: process.env.FENIX_ID!,
        clientSecret: process.env.FENIX_SECRET!,
        token: FenixAccessTokenHandler,
        authorization: {
          url: `https://fenix.tecnico.ulisboa.pt/oauth/userdialog`,
        },
        userinfo: {
          url: 'https://fenix.tecnico.ulisboa.pt/api/fenix/v1/person',
        },
        profile: FenixProfileHandler,
      },
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
          },
        },
        profile: GoogleProfileHandler,
      }),
      Credentials({
        type: 'credentials',
        credentials: {},
        authorize: CredentialsAuthorizationHandler,
      }),
    ],
    events: {
      signIn({ account, isNewUser }) {
        if (account?.provider === 'google' && isNewUser) {
          // Redirect new external student
        }
      },
    },
    callbacks: AuthCallbacks(req, res),
    jwt: JWTHandlers(req, res),
    pages: {
      error: '/',
      signIn: '/',
    },
  }
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, AuthOptions(req, res))
}

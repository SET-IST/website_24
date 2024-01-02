import { FenixAccessTokenHandler, FenixProfileHandler } from '@/core/auth'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaService } from '@/core/services/server'
import { Adapter } from 'next-auth/adapters'

export default NextAuth({
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
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          studentDetails: {
            create: {
              university: '',
              course: '',
            },
          },
        }
      },
    }),
  ],
  events: {
    signIn({ account, isNewUser }) {
      if (account?.provider === 'google' && isNewUser) {
        // Redirect new external student
      }
    },
  },
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
  pages: {
    error: '/',
    signIn: '/',
  },
})

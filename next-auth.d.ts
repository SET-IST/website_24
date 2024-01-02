import { UserType } from '@prisma/client'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the
   * `SessionProvider` React Context and trpc context
   */
  interface Session {
    user?: {
      role?: UserType
      readChangelog?: boolean
    } & DefaultSession['student']
  }

  interface User {
    role?: UserType
    readChangelog?: boolean
  }
}

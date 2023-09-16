import { UserType } from '@prisma/client'
import { DefaultSession } from 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    role?: UserType
  }
}

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

  /** Passed as a parameter to the `jwt` callback */
  interface User {
    role?: UserType
    readChangelog?: boolean
    studentDetails?: {}
    companyDetails?: {}
  }
}

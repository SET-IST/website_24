import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
//  Components
import Loader from '../Loader'
//  Services
import { links } from '@/data/links'
//  Types
import type { UserType } from '@prisma/client'
import type { PropsWithChildren } from 'react'

type AuthGuardProps = PropsWithChildren & {
  roles: UserType[]
}

const AuthGuard = ({ children, roles }: AuthGuardProps) => {
  const { status, data } = useSession()
  const router = useRouter()

  if (status === 'loading') return <Loader />

  if (
    status === 'unauthenticated' ||
    (status === 'authenticated' && !roles.includes(data?.user.role))
  ) {
    router.push(links.home)
    return <Loader />
  }

  // Display changelog to everyone that haven't saw it
  if (!data?.user.readChangelog && router.pathname !== links.changelog) {
    router.push(links.changelog)
    return <Loader />
  }

  return <>{children}</>
}

export default AuthGuard
export type { AuthGuardProps }

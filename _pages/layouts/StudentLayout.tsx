import AuthGuard from '@/components/AuthGuard'
import { UserType } from '@prisma/client'
import type { PropsWithChildren } from 'react'
import { NavbarLayout } from '@/_pages/layouts'

type StudentLayoutProps = PropsWithChildren

export const StudentLayout = ({ children }: StudentLayoutProps) => {
  return (
    <AuthGuard roles={[UserType.STUDENT, UserType.STAFF]}>
      <NavbarLayout startTransparent={false}>
        <div className="sm:h-screen pt-14 sm:pt-20 sm:pb-3 md:px-4 bg-[color:var(--mantine-color-gray-1)]">
          {children}
        </div>
      </NavbarLayout>
    </AuthGuard>
  )
}

export type { StudentLayoutProps }
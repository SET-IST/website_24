import AuthGuard from '@/components/AuthGuard'
import { UserType } from '@prisma/client'
import type { PropsWithChildren } from 'react'
import { ModalProvider } from '../../components/modal-context'
import { NavbarLayout } from '@/_pages/layouts'

type StaffLayoutProps = PropsWithChildren

const StaffLayout = ({ children }: StaffLayoutProps) => {
  return (
    <ModalProvider>
      <AuthGuard roles={[UserType.STAFF]}>
        <NavbarLayout>
          <div className="px-10 py-6">{children}</div>
        </NavbarLayout>
      </AuthGuard>
    </ModalProvider>
  )
}

export default StaffLayout
export type { StaffLayoutProps }

import AuthGuard from '@/components/AuthGuard'
import { UserType } from '@prisma/client'
import type { PropsWithChildren } from 'react'
import { ModalProvider } from '../../components/modal-context'
import { NavbarLayout } from '@/_pages/layouts'

type AlunoLayoutProps = PropsWithChildren

const AlunoLayout = ({ children }: AlunoLayoutProps) => {
  return (
    <ModalProvider>
      <AuthGuard roles={[UserType.Student, UserType.Staff]}>
        <NavbarLayout>
          <div className="px-2 md:px-10 py-6">{children}</div>
        </NavbarLayout>
      </AuthGuard>
    </ModalProvider>
  )
}

export default AlunoLayout
export type { AlunoLayoutProps }

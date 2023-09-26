import AuthGuard from '@/components/AuthGuard'
import { UserType } from '@prisma/client'
import type { PropsWithChildren } from 'react'
import { ModalProvider } from '../../components/modal-context'
import NavbarLayout from '../../../_pages/layouts/NavbarLayout'

type EmpresaLayoutProps = PropsWithChildren

const EmpresaLayout = ({ children }: EmpresaLayoutProps) => {
  return (
    <ModalProvider>
      <AuthGuard roles={[UserType.COMPANY]}>
        <NavbarLayout>
          <div className="px-5 md:px-10 py-6">{children}</div>
        </NavbarLayout>
      </AuthGuard>
    </ModalProvider>
  )
}

export default EmpresaLayout
export type { EmpresaLayoutProps }

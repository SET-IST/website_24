//  Pages
import AuthGuard from '@/components/AuthGuard'
import NovidadesPage from '@/components/pages/NovidadesPage'
//  Layouts
import FooterLayout from '@/core/layouts/FooterLayout/FooterLayout'
import NavbarLayout from '@/_pages/layouts/NavbarLayout/NavbarLayout'
import { UserType } from '@prisma/client'
//  Types
import type { ReactElement } from 'react'

const Novidades = () => {
  return <NovidadesPage />
}

Novidades.getLayout = (page: ReactElement) => {
  return (
    <NavbarLayout>
      <FooterLayout>
        <AuthGuard roles={[UserType.STUDENT, UserType.STAFF, UserType.COMPANY]}>
          {page}
        </AuthGuard>
      </FooterLayout>
    </NavbarLayout>
  )
}

export default Novidades

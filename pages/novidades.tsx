//  Pages
import AuthGuard from '@/components/AuthGuard'
import NovidadesPage from '@/components/pages/NovidadesPage'
//  Layouts
import { FooterLayout, NavbarLayout } from '@/_pages/layouts'
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
        <AuthGuard roles={[UserType.Student, UserType.Staff, UserType.Company]}>
          {page}
        </AuthGuard>
      </FooterLayout>
    </NavbarLayout>
  )
}

export default Novidades

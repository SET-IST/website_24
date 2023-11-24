//  Layouts
import { FooterLayout, NavbarLayout } from '@/_pages/layouts'
//  Pages
import EquipaPage from '../_pages/TeamPage'
//  Types
import type { ReactElement } from 'react'

const Equipa = () => {
  return <EquipaPage />
}

Equipa.getLayout = (page: ReactElement) => {
  return (
    <NavbarLayout>
      <FooterLayout>{page}</FooterLayout>
    </NavbarLayout>
  )
}

export default Equipa

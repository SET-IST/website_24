//  Layouts
import FooterLayout from '../core/layouts/FooterLayout'
import NavbarLayout from '../_pages/layouts/NavbarLayout'
//  Pages
import EquipaPage from '../components/pages/EquipaPage/EquipaPage'
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

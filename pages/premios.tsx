//  Layouts
import FooterLayout from '../core/layouts/FooterLayout'
import NavbarLayout from '../_pages/layouts/NavbarLayout'
//  Pages
import PremiosPage from '@/components/pages/PremiosPage'
//  Types
import type { ReactElement } from 'react'

const Premios = () => {
  return <PremiosPage />
}

Premios.getLayout = (page: ReactElement) => {
  return (
    <NavbarLayout>
      <FooterLayout>{page}</FooterLayout>
    </NavbarLayout>
  )
}

export default Premios

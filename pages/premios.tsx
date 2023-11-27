//  Layouts
import PrizesPage from '@/_pages/PrizesPage'
import { FooterLayout, NavbarLayout } from '@/_pages/layouts'
//  Pages

//  Types
import type { ReactElement } from 'react'

const Premios = () => {
  return <PrizesPage />
}

Premios.getLayout = (page: ReactElement) => {
  return (
    <NavbarLayout>
      <FooterLayout>{page}</FooterLayout>
    </NavbarLayout>
  )
}

export default Premios

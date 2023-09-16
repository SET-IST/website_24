//  Pages
import AjudaPage from '@/components/pages/AjudaPage/AjudaPage'
//  Layouts
import FooterLayout from '@/core/layouts/FooterLayout/FooterLayout'
import NavbarLayout from '@/core/layouts/NavbarLayout/NavbarLayout'
//  Types
import type { ReactElement } from 'react'

const Ajuda = () => {
  return <AjudaPage />
}

Ajuda.getLayout = (page: ReactElement) => {
  return (
    <NavbarLayout>
      <FooterLayout>{page}</FooterLayout>
    </NavbarLayout>
  )
}

export default Ajuda

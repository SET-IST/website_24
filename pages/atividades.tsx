import { ModalProvider } from '@/core/components/modal-context'
//  Pages
import AtividadesPage from '@/components/pages/AtividadesPage/AtividadesPage'
//  Layouts
import FooterLayout from '@/core/layouts/FooterLayout/FooterLayout'
import NavbarLayout from '@/core/layouts/NavbarLayout/NavbarLayout'
//  Types
import type { ReactElement } from 'react'

const Atividades = () => {
  return <AtividadesPage />
}

Atividades.getLayout = (page: ReactElement) => {
  return (
    <NavbarLayout>
      <FooterLayout>
        <ModalProvider>{page}</ModalProvider>
      </FooterLayout>
    </NavbarLayout>
  )
}

export default Atividades

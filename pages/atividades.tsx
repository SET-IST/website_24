import { ModalProvider } from '@/core/components/modal-context'
//  Pages
import AtividadesPage from '@/components/pages/AtividadesPage/AtividadesPage'
//  Layouts
import { FooterLayout, NavbarLayout } from '@/_pages/layouts'
//  Types
import type { ReactElement } from 'react'
import ActivitiesPage from '@/_pages/ActivitiesPage'

const Atividades = () => {
  return <ActivitiesPage />
}

Atividades.getLayout = (page: ReactElement) => {
  return <NavbarLayout>{page}</NavbarLayout>
}

export default Atividades

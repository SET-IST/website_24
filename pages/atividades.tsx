//  Pages
import ActivitiesPage from '@/_pages/ActivitiesPage'
//  Layouts
import { NavbarLayout } from '@/_pages/layouts'
//  Types
import type { ReactElement } from 'react'

const Atividades = () => {
  return <ActivitiesPage />
}

Atividades.getLayout = (page: ReactElement) => {
  return <NavbarLayout>{page}</NavbarLayout>
}

export default Atividades

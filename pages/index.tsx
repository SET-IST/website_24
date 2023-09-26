//  Components
import IndexPage from '@/_pages/IndexPage'
import NavbarLayout from '@/_pages/layouts/NavbarLayout'

//  Layouts
import FooterLayout from '@/core/layouts/FooterLayout'

//  Types
import type { ReactElement } from 'react'

const Index = () => {
  return <IndexPage />
}

Index.getLayout = (page: ReactElement) => {
  return <NavbarLayout>{page}</NavbarLayout>
}

export default Index

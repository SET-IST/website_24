//  Components
import IndexPage from '@/_pages/IndexPage'
import { FooterLayout, NavbarLayout } from '@/_pages/layouts'

//  Types
import type { ReactElement } from 'react'

const Index = () => {
  return <IndexPage />
}

Index.getLayout = (page: ReactElement) => {
  return (
    <NavbarLayout>
      <FooterLayout>{page}</FooterLayout>
    </NavbarLayout>
  )
}

export default Index

//  Components
import IndexPage from '@/components/pages/IndexPage'
//  Layouts
import FooterLayout from '@/core/layouts/FooterLayout'
import InvertedNavbarLayout from '@/core/layouts/InvertedNavbarLayout'
//  Types
import type { ReactElement } from 'react'

const Index = () => {
  return <IndexPage />
}

Index.getLayout = (page: ReactElement) => {
  return (
    <InvertedNavbarLayout>
      <FooterLayout>{page}</FooterLayout>
    </InvertedNavbarLayout>
  )
}

export default Index

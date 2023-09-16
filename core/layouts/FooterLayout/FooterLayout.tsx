import { PropsWithChildren } from 'react'
import Footer from '../../../components/Footer'

type FooterLayoutProps = PropsWithChildren

const FooterLayout = ({ children }: FooterLayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export default FooterLayout
export type { FooterLayoutProps }

import { PropsWithChildren } from 'react'
import Footer from '@/components/Footer'

type FooterLayoutProps = PropsWithChildren

export const FooterLayout = ({ children }: FooterLayoutProps) => {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

export type { FooterLayoutProps }

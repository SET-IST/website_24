import { PropsWithChildren } from 'react'
import Navbar from '../../../components/Navbar'

type InvertedNavbarLayoutProps = PropsWithChildren

const InvertedNavbarLayout = ({ children }: InvertedNavbarLayoutProps) => {
  return (
    <>
      <Navbar isInverted />
      {children}
    </>
  )
}

export default InvertedNavbarLayout
export type { InvertedNavbarLayoutProps }

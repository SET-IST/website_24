import { PropsWithChildren } from 'react'
import Navbar from '../../../components/Navbar'

type NavbarLayoutProps = PropsWithChildren

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default NavbarLayout
export type { NavbarLayoutProps }

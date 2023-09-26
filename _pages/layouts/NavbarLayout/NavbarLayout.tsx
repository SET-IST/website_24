import { PropsWithChildren } from 'react'
import Navbar from '../../../components/Navbar'

type NavbarLayoutProps = PropsWithChildren

const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <>
      <Navbar>{children}</Navbar>
    </>
  )
}

export default NavbarLayout
export type { NavbarLayoutProps }

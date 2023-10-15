import { PropsWithChildren } from 'react'
import Navbar from '../../components/Navbar'

type NavbarLayoutProps = PropsWithChildren

export const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  return (
    <>
      <Navbar>{children}</Navbar>
    </>
  )
}

export type { NavbarLayoutProps }

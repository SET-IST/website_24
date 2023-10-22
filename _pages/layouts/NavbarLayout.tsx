import { PropsWithChildren } from 'react'
import Navbar from '../../components/Navbar'

type NavbarLayoutProps = PropsWithChildren & {
  startTransparent?: boolean
}

export const NavbarLayout = ({
  children,
  startTransparent,
}: NavbarLayoutProps) => {
  return (
    <>
      <Navbar startTransparent={startTransparent}>{children}</Navbar>
    </>
  )
}

export type { NavbarLayoutProps }

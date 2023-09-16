import { useRouter } from 'next/router'
//  Components
import { signOut, useSession } from 'next-auth/react'
import { Button } from '../../core/components/Button'
import BurgerMenuNavItem from './BurgerMenuNavItem/BurgerMenuNavItem'
import TopNav from './TopNav'
//  Services
import { links as appLinks } from '@/core/services/links'
import { UserType } from '@prisma/client'
import { FaSignOutAlt } from 'react-icons/fa'
import { createNavLink, links } from './utils'

type NavbarProps = {
  isInverted?: boolean
}

const Navbar = ({ isInverted = false }: NavbarProps) => {
  const router = useRouter()
  const { data, status } = useSession()

  const navItems = links.map((link) => createNavLink(link, isInverted))

  return (
    <TopNav
      logoHref="/"
      logoTitle="Semana Empresarial e Tecnológica - Técnico"
      isInverted={isInverted}
    >
      <nav className="hidden mr-2 lg:flex">{navItems}</nav>
      <section className="hidden lg:flex gap-2">
        {status === 'unauthenticated' && (
          <>
            <Button isOutline onClick={() => router.push(appLinks.auth.signIn)}>
              Registar
            </Button>
            <Button onClick={() => router.push(appLinks.auth.signIn)}>
              Iniciar sessão
            </Button>
          </>
        )}
        {status === 'authenticated' ? (
          <>
            {data?.user.role === UserType.STAFF && (
              <>
                <Button
                  isOutline
                  onClick={() => router.push(appLinks.staff.redeem)}
                >
                  Validar brinde
                </Button>
              </>
            )}
            {[UserType.STUDENT, UserType.STAFF].includes(data?.user.role) && (
              <>
                <Button
                  isOutline
                  onClick={() => router.push(appLinks.student.scan)}
                >
                  Scan empresa
                </Button>
                <Button onClick={() => router.push(appLinks.student.profile)}>
                  O meu perfil
                </Button>
                <Button
                  color={!isInverted ? 'secondary' : 'white'}
                  isOutline
                  onClick={() => signOut()}
                >
                  <FaSignOutAlt />
                </Button>
              </>
            )}
            {data?.user.role === UserType.COMPANY && (
              <>
                <Button
                  isOutline
                  onClick={() => router.push(appLinks.company.cvPlatform)}
                >
                  Plataforma de CVs
                </Button>
                <Button onClick={() => router.push(appLinks.company.profile)}>
                  O meu perfil
                </Button>
                <Button
                  color={!isInverted ? 'secondary' : 'white'}
                  isOutline
                  onClick={() => signOut()}
                >
                  <FaSignOutAlt />
                </Button>
              </>
            )}
          </>
        ) : null}
      </section>
      <BurgerMenuNavItem className="lg:hidden" isInverted={isInverted} />
    </TopNav>
  )
}

Navbar.displayName = 'Navbar'

export default Navbar
export type { NavbarProps }

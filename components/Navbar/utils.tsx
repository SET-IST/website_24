//  Components
import { FaGift, FaListUl, FaUsers } from 'react-icons/fa'
import BurgerMenuItem from './BurgerMenuItem'
import NavLink from './NavLink'

import { links as appLinks } from '@/core/services/links'

import { NextRouter } from 'next/router'
import type { ReactNode } from 'react'
type Link = {
  name: string
  slug: string
  url: string
  icon?: ReactNode
}

const links: Array<Link> = [
  {
    name: 'Atividades',
    slug: 'atividades',
    url: appLinks.activities,
    icon: <FaListUl />,
  },
  {
    name: 'Prémios',
    slug: 'premios',
    url: appLinks.awards,
    icon: <FaGift />,
  },
  {
    name: 'Equipa',
    slug: 'equipa',
    url: appLinks.team,
    icon: <FaUsers />,
  },
]

const createNavLink = (link: Link, isInverted: boolean) => (
  <NavLink
    key={link.slug}
    skin="secondary"
    href={link.url}
    isInverted={isInverted}
  >
    {link.name}
  </NavLink>
)

const createBurguerMenuItem = (
  link: Link,
  router: NextRouter,
  onClose: () => void
) => (
  <BurgerMenuItem
    key={link.slug}
    onClick={async () => {
      await router.push(link.url).then(onClose)
    }}
    icon={link.icon}
  >
    {link.name}
  </BurgerMenuItem>
)

export { createNavLink, createBurguerMenuItem, links }
export type { Link }

/* Main Links, available to everyone */

import { IconGift, IconList, IconUser } from '@tabler/icons-react'
import { NavLink, NavLinkType, NavLinkVisibility } from './types'
import { links as appLinks } from '@/data/links'

export const MainLinks: NavLink[] = [
  {
    type: NavLinkType.ROUTE,
    visibility: NavLinkVisibility.ALL,
    label: 'Atividades',
    slug: 'atividades',
    link: appLinks.activities,
    icon: <IconList />,
  },
  {
    type: NavLinkType.ROUTE,
    visibility: NavLinkVisibility.ALL,
    label: 'Prémios',
    slug: 'premios',
    link: appLinks.awards,
    icon: <IconGift />,
  },
  {
    type: NavLinkType.ROUTE,
    visibility: NavLinkVisibility.ALL,
    label: 'Equipa',
    slug: 'equipa',
    link: appLinks.team,
    icon: <IconUser />,
  },
]

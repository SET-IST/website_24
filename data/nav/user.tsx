/* User Routes */

import { IconLogout, IconUser } from '@tabler/icons-react'
import { NavLink, NavLinkType, NavLinkVisibility } from './types'
import { rem } from '@mantine/core'
import { signOut } from 'next-auth/react'
import { links } from '../links'

export const staffRoutes: NavLink[] = [
  {
    type: NavLinkType.DIVIDER,
    visibility: NavLinkVisibility.ALL,
    label: 'Staff',
    slug: 'staff',
    link: '',
  },
  {
    type: NavLinkType.ROUTE,
    visibility: NavLinkVisibility.ALL,
    label: 'Validar prémio',
    slug: 'staff_redeem',
    link: links.staff.redeem,
  },
  {
    type: NavLinkType.ROUTE,
    visibility: NavLinkVisibility.ALL,
    label: 'Gerir pontos',
    slug: 'manage_points',
    link: links.staff.managePoints,
  },
]

export const userDefaultRoutes: NavLink[] = [
  {
    type: NavLinkType.DIVIDER,
    visibility: NavLinkVisibility.ALL,
    label: '',
    slug: '',
    link: '',
  },
  {
    type: NavLinkType.ROUTE,
    visibility: NavLinkVisibility.DESKTOP,
    label: 'Ver perfil',
    slug: 'profile',
    link: {
      Student: links.student.profile,
      Staff: links.student.profile,
      Company: links.company.profile,
    },
    icon: <IconUser style={{ width: rem(16), height: rem(16) }} stroke={1.5} />,
  },
  {
    type: NavLinkType.FUNCTION,
    visibility: NavLinkVisibility.ALL,
    label: 'Terminar sessão',
    slug: 'logout',
    link: '',
    icon: (
      <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    ),
    linkFn: () => signOut(),
  },
]

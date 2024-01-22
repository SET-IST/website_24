import { useEffect, useState } from 'react'
import { Box, NavLink, NavLinkProps, em } from '@mantine/core'
import {
  MainNavLinks,
  NavLinkExtendedProps,
  NavLinkVisibility,
  SessionNavLinks,
  StaffNavLinks,
} from '@/data/nav'
import { useMediaQuery } from '@mantine/hooks'
import { useSession } from 'next-auth/react'
import { User } from 'next-auth'
import { UserType } from '@prisma/client'
import { NextRouter, useRouter } from 'next/router'

function NavComposite(
  data: NavLinkExtendedProps[] = [],
  level: number,
  isMobile: boolean,
  user: User,
  router: NextRouter
) {
  const items = data.map((item: NavLinkExtendedProps, index) => {
    // Should it be visible?
    let visible = false
    switch (item.visibility) {
      case NavLinkVisibility.MOBILE:
        visible = isMobile
        break
      case NavLinkVisibility.DESKTOP:
        visible = !isMobile
        break
      case NavLinkVisibility.ALL:
        visible = true
        break
    }

    if (!visible) return null

    if (item.component) return item.component

    // Remove extended nav link props
    const navLinkDefault = {
      ...item,
      visibility: undefined,
      navType: undefined,
      link: undefined,
      linkFn: undefined,
      navId: undefined,
      nestedNav: undefined,
    } as NavLinkProps

    if (item.nestedNav) {
      return (
        <NavLink
          key={`nav_${level}_${index}`}
          {...navLinkDefault}
          /* active={index === active}
      onClick={() => setActive(index)} */
          variant="subtle"
        >
          {NavComposite(item.nestedNav, level + 1, isMobile, user, router)}
        </NavLink>
      )
    } else {
      return (
        <NavLink
          key={`nav_${level}_${index}`}
          {...navLinkDefault}
          active={item.link === router.pathname.split('/')[-1]}
          variant="subtle"
        />
      )
    }
  })

  return items
}

export function NavProfileMenu() {
  const session = useSession()
  const router = useRouter()
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`) ?? false
  const [profileNavlinks, setProfileNavLinks] = useState(MainNavLinks)
  const user: User = session.data?.user

  useEffect(() => {
    if (user) {
      setProfileNavLinks([
        ...SessionNavLinks,
        ...(user.role === UserType.Staff ? StaffNavLinks : []),
        ...MainNavLinks,
      ])
    }
  }, [user])

  return <Box>{NavComposite(profileNavlinks, 0, isMobile, user, router)}</Box>
}

//  Components
import { FaGift, FaListUl, FaUsers } from 'react-icons/fa'
import type { ReactNode } from 'react'
import { Center, Divider, Menu, NavLink, Stack } from '@mantine/core'
import classes from './Navbar.module.css'
import classNames from 'classnames'
import {
  NavLinkType,
  NavLink as NavLinkElement,
  NavLinkVisibility,
} from '@/data/nav'
import { NextRouter } from 'next/router'
import { SessionContextValue } from 'next-auth/react'
import { staffRoutes, userDefaultRoutes } from '@/data/nav/user'
import { UserType } from '@prisma/client'

const createMobileNavItem = (
  link: NavLinkElement,
  router: NextRouter,
  closeCallback: () => void
) => {
  if (link.type === NavLinkType.DIVIDER) {
    return (
      <Stack key={link.label} gap={0}>
        <span
          style={{
            padding:
              'calc(var(--mantine-spacing-xs) / 2) var(--mantine-spacing-sm)',
          }}
          className=" font-medium text-[color:var(--mantine-color-dimmed)] text-[length:var(--mantine-font-size-sm)]"
        >
          {link.label}
        </span>
        <Divider className="text-gray-50" />
      </Stack>
    )
  } else {
    return (
      <NavLink
        key={link.slug}
        label={link.label}
        onClick={() => {
          if (link.type === NavLinkType.FUNCTION && link.linkFn) {
            link.linkFn()
          } else {
            router.push(link.link)
            closeCallback()
          }
        }}
        variant="subtle"
        c="#00415a"
        styles={{
          label: {
            fontSize: 'var(--mantine-font-size-md)',
            fontWeight: 500,
          },
          description: {
            fontSize: 'var(--mantine-font-size-sm)',
          },
        }}
      />
    )
  }
}

const createDropdownNavItem = (link: NavLinkElement, router: NextRouter) => {
  if (link.type === NavLinkType.DIVIDER) {
    return (
      <>
        <Menu.Divider />
        <Menu.Label>{link.label}</Menu.Label>
      </>
    )
  } else {
    return (
      <Menu.Item
        key={link.slug}
        leftSection={link.icon}
        onClick={() => {
          if (link.type === NavLinkType.FUNCTION && link.linkFn) {
            link.linkFn()
          } else {
            router.push(link.link)
          }
        }}
      >
        {link.label}
      </Menu.Item>
    )
  }
}

const createAccountNavItems = (
  session: SessionContextValue,
  router: NextRouter,
  renderForMobile: boolean,
  closeCallback?: () => void
) => {
  const userRole: UserType = session.data?.user.role
  const items: NavLinkElement[] = [
    ...(userRole === UserType.Staff ? staffRoutes : []),
    ...userDefaultRoutes,
  ]

  return (
    <>
      {items.map((item) => {
        if (
          item.visibility === NavLinkVisibility.ALL ||
          (item.visibility === NavLinkVisibility.MOBILE && renderForMobile) ||
          (item.visibility === NavLinkVisibility.DESKTOP && !renderForMobile)
        ) {
          if (renderForMobile) {
            if (!closeCallback)
              throw new Error(
                '[Navbar createAccountNavItems]: renderForMobile is true but missing close callback!'
              )
            return createMobileNavItem(item, router, closeCallback)
          } else {
            return createDropdownNavItem(item, router)
          }
        }
      })}
    </>
  )
}

const createNavItem = (
  link: NavLinkElement,
  router: NextRouter,
  inverted: boolean,
  renderForMobile: boolean,
  closeCallback?: () => void
) => {
  if (renderForMobile) {
    if (!closeCallback)
      throw new Error(
        '[Navbar createNavItem]: renderForMobile is true but missing close callback!'
      )

    return createMobileNavItem(link, router, closeCallback)
  } else {
    return (
      <a
        key={link.label}
        href={link.link}
        className={classNames(
          classes.mainLink,
          'transition-all hover:border-b-[color:var(--mantine-color-blue-6)] text-[length:var(--mantine-font-size-sm)]',
          inverted
            ? 'text-[color:var(--mantine-color-gray-7)] hover:text-[color:var(--mantine-color-black)]'
            : 'text-[color:var(--mantine-color-gray-5)] hover:text-white'
        )}
        onClick={(event) => {
          event.preventDefault()
          if (link.type === NavLinkType.FUNCTION && link.linkFn) {
            link.linkFn()
          } else {
            router.push(link.link)
          }
        }}
      >
        {link.label}
      </a>
    )
  }
}

export { createNavItem, createMobileNavItem, createAccountNavItems }

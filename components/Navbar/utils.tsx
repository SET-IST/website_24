//  Components
import { FaGift, FaListUl, FaUsers } from 'react-icons/fa'
import { links as appLinks } from '@/data/links'
import type { ReactNode } from 'react'
import { Center, Divider, Menu, NavLink, Stack } from '@mantine/core'
import classes from './Navbar.module.css'
import {
  IconChevronDown,
  IconList,
  IconGift,
  IconUser,
} from '@tabler/icons-react'
import classNames from 'classnames'

enum NavItemType {
  LINK,
  DIVIDER,
}

type Link = {
  label: string
  slug: string
  link: string
  icon?: ReactNode
  links?: Omit<Link, 'links'>[]
  type: NavItemType
}

const links: Array<Link> = [
  {
    type: NavItemType.LINK,
    label: 'Atividades',
    slug: 'atividades',
    link: appLinks.activities,
    icon: <IconList />,
  },
  {
    type: NavItemType.LINK,
    label: 'Prémios',
    slug: 'premios',
    link: appLinks.awards,
    icon: <IconGift />,
  },
  {
    type: NavItemType.LINK,
    label: 'Equipa',
    slug: 'equipa',
    link: appLinks.team,
    icon: <IconUser />,
  },
]

const createMobileNavItem = (link: Link) => {
  switch (link.type) {
    case NavItemType.DIVIDER:
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
    default:
      return (
        <NavLink
          key={link.label}
          label={link.label}
          onClick={() => {}}
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

const createNavItem = (
  link: Link,
  inverted: boolean,
  renderForMobile: boolean
) => {
  const menuItems = link.links?.map((item) => (
    <Menu.Item key={item.link}>{item.label}</Menu.Item>
  ))

  if (menuItems) {
    return (
      <Menu
        key={link.label}
        trigger="hover"
        transitionProps={{ exitDuration: 0 }}
        withinPortal
      >
        <Menu.Target>
          <a
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
          >
            <Center>
              <span className={classes.linkLabel}>{link.label}</span>
              <IconChevronDown size="0.9rem" stroke={1.5} />
            </Center>
          </a>
        </Menu.Target>
        <Menu.Dropdown>{menuItems}</Menu.Dropdown>
      </Menu>
    )
  }

  return renderForMobile ? (
    createMobileNavItem(link)
  ) : (
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
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  )
}

export { createNavItem, createMobileNavItem, links, NavItemType }
export type { Link }

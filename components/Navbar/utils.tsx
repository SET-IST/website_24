//  Components
import { FaGift, FaListUl, FaUsers } from 'react-icons/fa'
import { links as appLinks } from '@/core/services/links'
import type { ReactNode } from 'react'
import { Center, Menu } from '@mantine/core'
import classes from './Navbar.module.css'
import { IconChevronDown } from '@tabler/icons-react'
import classNames from 'classnames'

type Link = {
  label: string
  slug: string
  link: string
  icon?: ReactNode
  links?: Omit<Link, 'links'>[]
}

const links: Array<Link> = [
  {
    label: 'Atividades',
    slug: 'atividades',
    link: appLinks.activities,
    icon: <FaListUl />,
  },
  {
    label: 'Prémios',
    slug: 'premios',
    link: appLinks.awards,
    icon: <FaGift />,
  },
  {
    label: 'Equipa',
    slug: 'equipa',
    link: appLinks.team,
    icon: <FaUsers />,
  },
]

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

  return (
    <a
      key={link.label}
      href={link.link}
      className={classNames(
        classes.mainLink,
        'transition-all',
        renderForMobile
          ? 'text-[color:var(--mantine-color-white)] text-[length:var(--mantine-font-size-md)]'
          : 'hover:border-b-[color:var(--mantine-color-blue-6)] text-[length:var(--mantine-font-size-sm)]',
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

export { createNavItem, links }
export type { Link }

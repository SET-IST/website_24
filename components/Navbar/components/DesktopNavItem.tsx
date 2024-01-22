//  Components
import { NavLinkExtendedProps } from '@/data/nav'
import classes from './Navbar.module.css'
import classNames from 'classnames'
import { useRouter } from 'next/router'

interface DesktopNavItemProps {
  link: NavLinkExtendedProps
  inverted: boolean
}

export const DesktopNavItem = ({ link, inverted }: DesktopNavItemProps) => {
  const router = useRouter()

  return (
    <a
      onClick={() => router.push(link.link as string)}
      className={classNames(
        classes.mainLink,
        'cursor-pointer transition-all hover:border-b-[color:var(--mantine-color-blue-6)] text-[length:var(--mantine-font-size-sm)]',
        inverted
          ? 'text-[color:var(--mantine-color-gray-7)] hover:text-[color:var(--mantine-color-black)]'
          : 'text-[color:var(--mantine-color-gray-5)] hover:text-white'
      )}
    >
      {link.label}
    </a>
  )
}

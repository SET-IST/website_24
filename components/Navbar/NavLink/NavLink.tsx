import classNames from 'classnames'

import Link from 'next/link'

import { useRouter } from 'next/router'

import { forwardRef } from 'react'

// types
import type { LinkProps } from 'next/link'
import type { AnchorHTMLAttributes } from 'react'

type NavLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    skin?: 'default' | 'secondary' | 'highlighted'
    isInverted: boolean
  }

const navLinkClass = 'cursor-pointer p-2 no-underline whitespace-no-wrap'

const skinClasses = {
  default: '',
  highlighted:
    'rounded-sm border-solid border font-medium py-2 px-5 hover:text-primary-500 hover:border-primary-500 focus:text-primary-500 focus:border-primary-500',
  secondary:
    'border-transparent border-solid border-b-2 my-0 mx-2 px-1 py-2 hover:text-secondary-500 hover:border-secondary-500',
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      skin = 'default',
      className,
      children,
      isInverted,
      href,
      ...props
    }: NavLinkProps,
    ref
  ) => {
    const router = useRouter()
    return (
      <Link
        {...props}
        className={classNames(
          className,
          navLinkClass,
          skinClasses[skin || 'default'],
          { 'text-white': isInverted },
          { 'text-tertiary-500': !isInverted },
          {
            '!text-secondary-500 !border-secondary-500':
              router.pathname === href,
          }
        )}
        ref={ref}
        href={href}
      >
        {children}
      </Link>
    )
  }
)

NavLink.displayName = 'NavLink'

export default NavLink
export type { NavLinkProps }

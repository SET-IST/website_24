import { ReactNode } from 'react'

export enum NavLinkType {
  // Common fixed route
  ROUTE,
  // Call linkFn function instead of using route
  FUNCTION,
  // UI Divider
  DIVIDER,
}

export enum NavLinkVisibility {
  MOBILE,
  DESKTOP,
  ALL,
}

export type NavLink = {
  type: NavLinkType
  visibility: NavLinkVisibility
  label: string
  slug: string
  link: string
  icon?: ReactNode
  linkFn?: () => void
}

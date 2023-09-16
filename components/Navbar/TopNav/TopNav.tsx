import Link from 'next/link'
import { useRouter } from 'next/router'
//  Types
import type { HTMLAttributes } from 'react'
//  Assets
import SetLogoInverted from '@/core/assets/logos/logo_set_inverted.svg'
import SetLogo from '@/core/assets/logos/new_logo_set.svg'
import { links } from '@/core/services/links'

type TopNavProps = HTMLAttributes<HTMLDivElement> & {
  logoHref: string
  logoTitle: string
  isInverted: boolean
}

const TopNav = ({
  logoHref,
  logoTitle,
  children,
  isInverted = false,
}: TopNavProps) => {
  const router = useRouter()
  return (
    <header className="flex flex-wrap items-center justify-between px-8 py-6 bg-transparent z-12000">
      <Link
        href={logoHref}
        title={logoTitle}
        onClick={() => router.push(links.home)}
        className="w-28 h-auto"
      >
        {isInverted ? <SetLogoInverted aria-hidden /> : <SetLogo aria-hidden />}
      </Link>
      {children}
    </header>
  )
}

TopNav.displayName = 'TopNav'

export default TopNav
export type { TopNavProps }

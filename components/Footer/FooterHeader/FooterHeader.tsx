import cn from 'classnames'
//  Assets
import SetLogoInverted from '@/core/assets/logos/logo_set_inverted.svg'

import type { HTMLAttributes } from 'react'

type FooterHeaderProps = {
  children: string
} & HTMLAttributes<HTMLDivElement>

const FooterHeader = ({ children, className, ...props }: FooterHeaderProps) => {
  return (
    <section className={cn('flex w-full items-center', className)} {...props}>
      <SetLogoInverted className="mr-1 md:mr-5" />
      <h1 className="text-white font-normal text-lg md:text-2xl">{children}</h1>
    </section>
  )
}

export default FooterHeader
export type { FooterHeaderProps }

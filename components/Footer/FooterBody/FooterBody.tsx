import cn from 'classnames'
import type { HTMLAttributes, ReactNode } from 'react'

type FooterBodyProps = {
  children?: ReactNode
} & HTMLAttributes<HTMLDivElement>

const FooterBody = ({ children, className, ...props }: FooterBodyProps) => {
  return (
    <section
      className={cn(
        'grid grid-cols-2 grid-flow-row-dense w-full lg:grid-cols-12 lg:gap-12',
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export default FooterBody
export type { FooterBodyProps }

import cn from 'classnames'
import type { HTMLAttributes, PropsWithChildren } from 'react'

type CardProps = {
  backgroundColor?: string
  className?: string
} & PropsWithChildren &
  HTMLAttributes<HTMLElement>

const Card = ({
  backgroundColor = 'bg-white',
  children,
  className,
  ...props
}: CardProps) => (
  <article
    className={cn(backgroundColor, 'rounded-md shadow-md', className)}
    {...props}
  >
    {children}
  </article>
)

Card.displayName = 'Card'

export default Card
export type { CardProps }

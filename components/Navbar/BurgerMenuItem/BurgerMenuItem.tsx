import cn from 'classnames'
//  Types
import type { ReactNode } from 'react'

type BurgerMenuItemProps = {
  icon?: ReactNode
  description?: string
  href?: string
  [id: string]: any
}

const BurgerMenuItem = ({
  description,
  children,
  icon,
  className,
  ...props
}: BurgerMenuItemProps) => {
  return (
    <div
      className={cn(
        className,
        'rounded box-content cursor-pointer flex items-center px-2 py-3 hover:text-secondary-500'
      )}
      {...props}
    >
      {icon}
      <div className="flex flex-col ml-2">
        {!!children && (
          <p
            className={cn(
              'font-light',
              'overflow-x-hidden whitespace-no-wrap w-56'
            )}
          >
            {children}
          </p>
        )}
        {!!description && (
          <span className="overflow-x-hidden whitespace-no-wrap w-56">
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

BurgerMenuItem.displayName = 'BurgerMenuItem'

export default BurgerMenuItem
export type { BurgerMenuItemProps }

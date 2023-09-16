import cn from 'classnames'
import { HTMLAttributes, PropsWithRef, forwardRef } from 'react'

type TabItemProps = {
  title: string
  isActive: boolean
} & HTMLAttributes<HTMLButtonElement> &
  PropsWithRef<any>

const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(
  ({ title, isActive, ...props }: TabItemProps) => {
    return (
      <button
        className={cn(
          isActive
            ? 'bg-white text-tertiary-500'
            : 'text-white hover:text-gray-300',
          'px-3 py-2 font-medium text-sm rounded-md list-none cursor-pointer'
        )}
        aria-current={isActive ? 'page' : undefined}
        {...props}
      >
        {title}
      </button>
    )
  }
)

TabItem.displayName = 'TabItem'

export default TabItem
export type { TabItemProps }

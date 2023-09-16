import cn from 'classnames'

import type { HTMLAttributes } from 'react'

type ModalContainerProps = HTMLAttributes<HTMLDivElement>

const ModalContainer = ({
  className,
  children,
  ...props
}: ModalContainerProps) => {
  return (
    <div
      className={cn(
        className,
        'relative w-full max-w-md my-6 mx-auto bg-white rounded-md shadow-md animate-fade-down',
        'lg:my-12'
      )}
      onClick={(e) => e.stopPropagation()}
      {...props}
    >
      {children}
    </div>
  )
}

ModalContainer.displayName = 'ModalContainer'

export default ModalContainer
export type { ModalContainerProps }

import classNames from 'classnames'

import type { HTMLAttributes } from 'react'

type BackdropProps = HTMLAttributes<HTMLDivElement>

const Backdrop = ({ className, ...props }: BackdropProps) => {
  return (
    <div
      role="dialog"
      className={classNames(
        className,
        'overflow-auto fixed inset-0 z-30 bg-black/50 animate-fade'
      )}
      {...props}
    />
  )
}

Backdrop.displayName = 'Backdrop'

export default Backdrop
export type { BackdropProps }

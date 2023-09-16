import classNames from 'classnames'
// Types
import type { HTMLAttributes } from 'react'

type InputErrorProps = HTMLAttributes<HTMLDivElement>

const InputError = ({ className, ...props }: InputErrorProps) => {
  return (
    <div className={classNames(className, 'text-red-500 text-sm')} {...props} />
  )
}

InputError.displayName = 'InputError'

export default InputError
export type { InputErrorProps }

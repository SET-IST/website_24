import classNames from 'classnames'
//  Types
import type { InputHTMLAttributes } from 'react'

type AbstractInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'children'
> & {
  isSuccess?: boolean
  isError?: boolean
}

const AbstractInput = ({
  id,
  className,
  isSuccess,
  isError,
  disabled,
  ...props
}: AbstractInputProps) => {
  return (
    <input
      id={id}
      className={classNames(
        'block w-full rounded-none bg-transparent text-sm h-10 px-2 py-4 text-white border-b-2',
        'focus:border-transparent focus:ring-0',
        'hover:border-secondary-500',
        'md:text-base',
        `${
          disabled && 'bg-gray-300/30 cursor-not-allowed hover:!border-grey-500'
        }`,
        `${isError && 'border-red-500'}`,
        `${isSuccess && !isError && 'border-primary-500'}`,
        className
      )}
      disabled={disabled}
      aria-invalid={isError}
      {...props}
    />
  )
}

AbstractInput.displayName = 'AbstractInput'

export default AbstractInput
export type { AbstractInputProps }

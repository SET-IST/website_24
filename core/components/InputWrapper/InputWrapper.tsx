import classNames from 'classnames'
//  Components
import InputError from '../InputError'
// Types
import type { ReactElement, ReactNode } from 'react'
// styles

type InputWrapperProps = {
  labelId?: string
  inputId?: string
  hintId?: string
  errorId?: string
  label?: ReactNode
  error?: ReactNode
  hint?: ReactNode
  className?: string
  labelClassName?: string
  hintClassName?: string
  errorClassName?: string
  children?: ReactElement
}

const InputWrapper = ({
  inputId,
  labelId,
  hintId,
  errorId,
  label,
  error,
  hint,
  className,
  labelClassName,
  hintClassName,
  errorClassName,
  children,
}: InputWrapperProps) => {
  return (
    <div className={classNames(className, 'text-base text-left')}>
      {label && (
        <label
          htmlFor={inputId}
          id={labelId}
          className={classNames(
            'block md:text-2xl font-medium text-white',
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      {children}
      {error && (
        <InputError id={errorId} className={classNames(errorClassName, 'pt-1')}>
          {error}
        </InputError>
      )}
      {hint && (
        <div
          id={hintId}
          className={classNames('mt-2 text-sm text-gray-500', hintClassName)}
        >
          {hint}
        </div>
      )}
    </div>
  )
}

InputWrapper.displayName = 'InputWrapper'

export default InputWrapper
export type { InputWrapperProps }

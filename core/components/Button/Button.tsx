import cn from 'classnames'
import { createElement, forwardRef } from 'react'

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

type ButtonSizes = 'sm' | 'md' | 'lg'
type ButtonSkins = 'solid' | 'outline' | 'flat'
type ButtonColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'success'
  | 'white'

type ButtonProps = {
  skin?: ButtonSkins
  size?: ButtonSizes
  icon?: ReactNode
  color?: ButtonColor
  trailingIcon?: ReactNode
  isBlock?: boolean
  isOutline?: boolean
  disabled?: boolean
  textNoWrap?: boolean
  isLoading?: boolean
} & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { tag?: 'button' })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { tag?: 'a' })
)

const sizeClasses = {
  lg: 'px-3.5 py-2.5',
  md: 'px-3 py-2',
  sm: 'px-2.5 py-1.5',
}

const colorClasses = {
  primary:
    'text-white bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-800 ',
  secondary:
    'text-white bg-secondary-500 hover:bg-secondary-600 focus:bg-secondary-600 focus:outline-none focus:ring-0 active:bg-secondary-800',
  tertiary:
    'text-white bg-tertiary-500 hover:bg-tertiary-600 focus:bg-tertiary-600 focus:outline-none focus:ring-0 active:bg-tertiary-800',
  danger:
    'text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 focus:outline-none focus:ring-0 active:bg-red-800',
  success:
    'text-white bg-green-500 hover:bg-green-600 focus:bg-green-600 focus:outline-none focus:ring-0 active:bg-green-800',
  white:
    'text-tertirary-500 bg-white hover:bg-slate-600 focus:bg-slate-600 focus:outline-none focus:ring-0 active:bg-slate-800',
}

const outlineClasses = {
  primary:
    'border-2 border-primary-500 !text-primary-500 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 bg-opacity-0',
  secondary:
    'border-2 border-secondary-500 !text-secondary-500 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 bg-opacity-0',
  tertiary:
    'border-2 border-tertiary-500 !text-tertiary-500 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 bg-opacity-0',
  danger:
    'border-2 border-red-500 !text-red-500 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 bg-opacity-0',
  success:
    'border-2 border-green-500 !text-green-500 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 bg-opacity-0',
  white:
    'border-2 border-white !text-white hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 bg-opacity-0',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      tag,
      color,
      size,
      skin,
      icon,
      trailingIcon,
      disabled,
      isBlock,
      isOutline,
      textNoWrap,
      isLoading,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading
    const computedClasses = cn(
      sizeClasses[size || 'md'],
      colorClasses[color || 'primary'],
      {
        [outlineClasses[color || 'primary']]: isOutline,
        'select-none cursor-not-allowed': isDisabled,
        'w-full flex': isBlock,
        'whitespace-nowrap': textNoWrap,
      },
      'flex font-medium text-xs leading-tight rounded-lg shadow-md transition duration-150 ease-in-out items-center justify-center',
      'md:text-sm',
      'hover:shadow-lg',
      'focus:shadow-lg',
      'active:shadow-lg',
      'disabled:bg-gray-500 disabled:border-gray-500',
      className
    )

    const renderButtonContent = (
      <>
        {icon && <span>{icon}</span>}
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-grey-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
        {trailingIcon && <span className="pl-2">{trailingIcon}</span>}
      </>
    )

    return createElement(
      tag || 'button',
      {
        className: computedClasses,
        disabled: isDisabled,
        ref,
        ...props,
      },
      renderButtonContent
    )
  }
)

Button.displayName = 'Button'

export default Button
export type { ButtonProps }

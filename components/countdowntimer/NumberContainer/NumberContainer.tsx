import cn from 'classnames'
import { useId } from 'react'

type NumberContainerProps = {
  number: number | string
  label: string
}

const NumberContainer = ({ number, label, ...props }: NumberContainerProps) => {
  const id = useId()

  return (
    <div
      className="flex flex-col items-center justify-center mx-6"
      role="img"
      {...props}
    >
      <span
        id={id}
        className={cn('text-4xl font-bold text-white', 'lg:text-7xl')}
      >
        {number}
      </span>
      <label
        htmlFor={id}
        className={cn('text-base font-light text-white', 'lg:text-2xl')}
      >
        {label}
      </label>
    </div>
  )
}

export default NumberContainer
export type { NumberContainerProps }

import cn from 'classnames'

type TColor = 'danger' | 'success'

type AlertProps = {
  title?: string
  text?: string
  color?: TColor
} & React.HTMLAttributes<HTMLDivElement>

const Alert = ({ title, text, color = 'danger', className }: AlertProps) => {
  const computedClasses = cn(
    'flex flex-col gap-1 items-start p-4 rounded-[0.313rem] border border-solid',
    { 'bg-red-100 border-red-500': color === 'danger' },
    { 'bg-green-100 border-green-500': color === 'success' },
    className
  )
  return (
    <div className={computedClasses} role="alert">
      {title && (
        <h1
          className={cn('text-lg font-medium', {
            'text-red-500': color === 'danger',
            'text-green-500': color === 'success',
          })}
        >
          {title}
        </h1>
      )}
      {text && <p className="text-tertiary-500">{text}</p>}
    </div>
  )
}

export default Alert
export type { AlertProps }

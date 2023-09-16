//  Components
import AbstractInput from '../AbstractInput'
import InputWrapper from '../InputWrapper'
//  Types
import type { AbstractInputProps } from '../AbstractInput'
import type { InputWrapperProps } from '../InputWrapper'

type TextInputProps = Omit<
  AbstractInputProps,
  'type' | 'isError' | 'isSuccess'
> &
  Omit<InputWrapperProps, 'inputId' | 'hintId' | 'errorId' | 'children'> & {
    id: string
    wrapperClassName?: string
    type?: 'text' | 'search' | 'email' | 'password'
    isSuccess?: boolean
  }

const TextInput = ({
  id,
  label,
  error,
  hint,
  wrapperClassName,
  labelClassName,
  hintClassName,
  errorClassName,
  isSuccess,
  ...props
}: TextInputProps) => {
  let errorId
  let hintId

  if (id) {
    errorId = `${id}-error`
    hintId = hint ? `${id}-hint` : undefined
  }

  return (
    <InputWrapper
      label={label}
      inputId={id}
      hintId={hintId}
      errorId={errorId}
      hint={hint}
      error={error}
      className={wrapperClassName}
      labelClassName={labelClassName}
      hintClassName={hintClassName}
      errorClassName={errorClassName}
    >
      <AbstractInput
        isError={!!error}
        isSuccess={isSuccess && !error}
        aria-describedby={hintId}
        aria-errormessage={errorId}
        aria-invalid={!!error}
        placeholder={label as string}
        id={id}
        {...props}
      />
    </InputWrapper>
  )
}

TextInput.displayName = 'TextInput'

export default TextInput
export type { TextInputProps }

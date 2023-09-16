import { useField } from 'formik'
//  Components
import TextInput from '../TextInput'
//  Types
import type { TextInputProps } from '../TextInput'

type FormikTextInputProps = TextInputProps & {
  name: string
}

const FormikTextInput = ({
  name,
  onChange,
  onBlur,
  error,
  ...props
}: FormikTextInputProps) => {
  const [field, meta] = useField(name)
  const innerError = meta.touched && meta.error
  const { initialValue } = meta

  return (
    <TextInput
      name={name}
      error={error || innerError}
      defaultValue={initialValue}
      onChange={(e) => {
        field.onChange(e)
        onChange && onChange(e)
      }}
      onBlur={(e) => {
        field.onBlur(e)
        onBlur && onBlur(e)
      }}
      {...props}
    />
  )
}

FormikTextInput.displayName = 'FormikTextInput'

export default FormikTextInput
export type { FormikTextInputProps }

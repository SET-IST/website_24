import { Form, Formik } from 'formik'
import * as Yup from 'yup'
//  Components
import { Button } from '@/core/components/Button'
import FormikTextInput from '@/core/components/FormikTextInput'

const passwordInitialValues = { password: '', confirmPassword: '' }

const passwordValidationSchema = Yup.object({
  password: Yup.string()
    .min(6, 'Tem de ter, no mínimo, 6 caractéres')
    .max(128, 'Tem de ter, no máximo, 128 caractéres')
    .required('Tens de preencher este campo.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As palavra-passes têm de ser iguais')
    .required('Tens de preencher este campo'),
})

const PasswordForm = () => {
  const passwordSubmitHandler = () => {}

  return (
    <Formik
      initialValues={passwordInitialValues}
      onSubmit={passwordSubmitHandler}
      validationSchema={passwordValidationSchema}
    >
      {({ isValid, dirty, values }) => (
        <Form className="w-full grid grid-cols-2 gap-5 my-5">
          <div className="col-span-2 md:col-span-1">
            <FormikTextInput
              id="password"
              name="password"
              label="Palavra-passe:"
              placeholder="***********"
              labelClassName="font-normal md:text-xl"
              type="password"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <FormikTextInput
              id="confirmPassword"
              name="confirmPassword"
              label="Confirmar palavra-passe:"
              placeholder="***********"
              labelClassName="font-normal md:text-xl"
              type="password"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Button
              className="w-full inline-block"
              disabled={
                !isValid || !dirty || values.password !== values.confirmPassword
              }
            >
              Atualizar palavra-passe
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export { PasswordForm }

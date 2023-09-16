import FormikTextInput from '@/core/components/FormikTextInput/FormikTextInput'
import * as Yup from 'yup'

import { Button } from '@/core/components/Button'
import { useModal } from '@/core/components/modal-context'
import { Form, Formik, FormikHelpers } from 'formik'
import { FaTimes } from 'react-icons/fa'

const validationSchema = Yup.object({
  email: Yup.string().email().required('Este campo é obrigatório'),
})

const RecoverPasswordModal = () => {
  const { closeModal } = useModal()

  const submitHandler = (
    values: { email: string },
    { setSubmitting }: FormikHelpers<{ email: string }>
  ) => {}

  return (
    <div className="px-3 py-2">
      <header className="flex flex-row items-center justify-between py-3">
        <h1>Recuperar palavra-passe</h1>
        <FaTimes
          className="text-primary-500 cursor-pointer"
          onClick={closeModal}
        />
      </header>
      <hr />
      <Formik
        initialValues={{ email: '' }}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <Form className="my-3">
          <p className="mb-3">
            Insere o email associado à tua conta para recuperares a
            palavra-passe .
          </p>
          <FormikTextInput
            name="email"
            id="email"
            placeholder="john@doe.pt"
            labelClassName="!text-tertiary-500"
          />
          <Button className="my-3 ml-auto">Recuperar</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default RecoverPasswordModal

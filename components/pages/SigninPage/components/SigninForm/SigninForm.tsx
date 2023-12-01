import { Form, Formik } from 'formik'
import { useEffect, useId, useState } from 'react'
import * as Yup from 'yup'
//  Components
import Alert from '@/core/components/Alert/Alert'
import { Button } from '@/core/components/Button'
import FormikTextInput from '@/core/components/FormikTextInput/FormikTextInput'
//  Hooks
import { useAuth } from '@/lib/frontend/hooks/use-auth'
import { useRouter } from 'next/router'
//  Services
import { links } from '@/data/links'
//  Types
import type { FormikHelpers } from 'formik'

type SigninFormProps = {
  csrfToken?: string
}

type SigninFormValuesProps = {
  username: string
  password: string
  csrfToken: string
}

const SigninForm = ({ csrfToken }: SigninFormProps) => {
  const id = useId()
  const router = useRouter()
  const {
    signinWithCredentials,
    isSigninSuccess,
    isSigninLoading,
    isSigninError,
  } = useAuth()
  const [isAlertVisible, setAlertVisible] = useState(isSigninSuccess)

  const initialValues = {
    username: '',
    password: '',
    csrfToken: csrfToken || '',
  }

  const validationSchema = Yup.object({
    username: Yup.string().required('Este campo é obrigatório'),
    password: Yup.string()
      .min(3, 'Tem de ter, no mínimo, 3 caractéres')
      .max(128, 'Tem de ter, no máximo, 128 caractéres')
      .required('Este campo é obrigatório'),
    csrfToken: Yup.string(),
  })

  const submitHandler = async (
    values: SigninFormValuesProps,
    { setSubmitting }: FormikHelpers<SigninFormValuesProps>
  ) => {
    await signinWithCredentials(values)
      .then(() => router.push(links.company.cvPlatform))
      .finally(() => setSubmitting(false))
  }

  useEffect(() => {
    if (isSigninSuccess || isSigninError) {
      setAlertVisible(true)

      setTimeout(() => {
        setAlertVisible(false)
      }, 3000)
    }
  }, [isSigninSuccess, isSigninError])

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitHandler}
    >
      {({ isSubmitting, dirty, isValid }) => (
        <Form className="mt-5 mb-3">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <FormikTextInput
            label="Username"
            id={`${id}-username`}
            name="username"
            placeholder="JohnDoe23"
            labelClassName="!text-sm my-2"
            errorClassName="!text-xs"
            isSuccess={isSigninSuccess}
          />
          <FormikTextInput
            label="Palavra-passe"
            id={`${id}-password`}
            placeholder="*********"
            name="password"
            type="password"
            labelClassName="!text-sm my-2"
            errorClassName="!text-xs"
            isSuccess={isSigninSuccess}
          />
          {isAlertVisible ? (
            <>
              {isSigninSuccess && (
                <Alert
                  color="success"
                  title="Alterações realizadas com sucesso"
                  text="Podes sempre alterar de novo caso seja engano."
                  className="my-3"
                />
              )}
              {isSigninError && (
                <Alert
                  color="danger"
                  title="Erro ao realizar as alterações"
                  text="Tenta de novo, caso o erro persista contacta-nos."
                  className="my-3"
                />
              )}
            </>
          ) : null}
          <Button
            type="submit"
            isBlock
            className="my-4"
            isLoading={isSigninLoading || isSubmitting}
            disabled={!dirty || !isValid}
          >
            Entrar
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default SigninForm
export type { SigninFormProps, SigninFormValuesProps }

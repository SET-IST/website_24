import { Form, Formik } from 'formik'
import Link from 'next/link'
import { FaDownload } from 'react-icons/fa'
import * as Yup from 'yup'
//  Components
import Alert from '@/core/components/Alert'
import { Button } from '@/core/components/Button'
import FormikTextInput from '@/core/components/FormikTextInput'
import UploadCvModal from '../UploadCvModal'
//  Hooks
import { useModal } from '@/core/components/modal-context'
import { useUserData } from '@/lib/frontend/hooks/use-user-data'
import { useEffect, useState } from 'react'
//  Utils
import {
  getCourses,
  transformCvLocationToUrl,
  transformInstitutionsToOptions,
} from '../../utils'
//  Types
import type { FormikHelpers } from 'formik'
import type { FormValuesProps } from '../../types'

type UserDataFormProps = {
  values: FormValuesProps
  id: string
  institutions: any[]
  cv?: string | null
}

const userDataValidationSchema = Yup.object({
  age: Yup.number().min(18, 'Idade miníma são 18 anos.').required(),
  course: Yup.string(),
  univesity: Yup.string(),
})

const UserDataForm = ({ values, id, cv, institutions }: UserDataFormProps) => {
  const { setModal } = useModal()
  const { setStudentData, isUpdateLoading, isUpdateSuccess, isUpdateError } =
    useUserData({ fetchStudent: true })
  /* const [courses, setCourses] = useState<Option[] | null>(
    getCourses(institutions, values.university)
  ); */
  const [isAlertVisible, setAlertVisible] = useState(isUpdateSuccess)

  useEffect(() => {
    if (isUpdateSuccess || isUpdateError) {
      setAlertVisible(true)

      setTimeout(() => {
        setAlertVisible(false)
      }, 3000)
    }
  }, [isUpdateSuccess, isUpdateError])

  const userDataSubmitHandler = async (
    values: FormValuesProps,
    { setSubmitting }: FormikHelpers<FormValuesProps>
  ) => {
    const { age, course, university } = values

    await setStudentData({
      id,
      age,
      course,
      university,
    })

    setSubmitting(false)
  }

  return (
    <Formik
      initialValues={values}
      onSubmit={userDataSubmitHandler}
      validationSchema={userDataValidationSchema}
    >
      {({ isValid, dirty, initialValues }) => {
        return (
          <Form className="w-full my-5">
            <div className="grid grid-cols-2 gap-5 my-5">
              <div className="col-span-2 md:col-span-1">
                <FormikTextInput
                  id="name"
                  name="name"
                  label="Nome:"
                  placeholder={initialValues.name}
                  labelClassName="font-normal md:text-xl"
                  disabled
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <FormikTextInput
                  id="age"
                  name="age"
                  label="Idade:"
                  placeholder={initialValues.age.toString()}
                  labelClassName="font-normal md:text-xl"
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                {/* <FormikSelectInput
                  id="university"
                  name="university"
                  label="Universidade:"
                  placeholder={initialValues.university}
                  labelClassName="font-normal md:text-xl"
                  options={transformInstitutionsToOptions(institutions)}
                  onChange={(e) => {
                    const courses = getCourses(institutions, e?.value)
                    setCourses(courses)
                  }}
                /> */}
              </div>
              <div className="col-span-2 md:col-span-1">
                {/* <FormikSelectInput
                  id="course"
                  name="course"
                  label="Curso:"
                  placeholder={initialValues.course}
                  labelClassName="font-normal md:text-xl"
                  options={courses || []}
                /> */}
              </div>

              <div className="col-span-2 w-full flex flex-col">
                <label
                  htmlFor="cv-location"
                  className="md:text-xl md:font-normal text-white"
                >
                  Curriculum Vitae:{' '}
                </label>
                {cv ? (
                  <Link
                    id="cv-location"
                    href={transformCvLocationToUrl(cv)}
                    className="text-white underline text-base hover:text-primary-500"
                  >
                    Descarregar
                  </Link>
                ) : (
                  <span className="text-white font-light text-base underline">
                    Nenhum CV carregado
                  </span>
                )}
              </div>
              <div className="col-span-2 md:col-span-1">
                <Button
                  trailingIcon={<FaDownload className="ml-1" />}
                  className="w-full inline-block"
                  onClick={() => setModal(<UploadCvModal />)}
                  type="button"
                >
                  Importar CV
                </Button>
              </div>
              <div className="col-span-2 md:col-span-1">
                <Button
                  className="w-full inline-block"
                  disabled={!isValid || !dirty}
                  type="submit"
                  isLoading={isUpdateLoading}
                >
                  Atualizar informação
                </Button>
              </div>
            </div>
            {isAlertVisible ? (
              <>
                {isUpdateSuccess && (
                  <Alert
                    color="success"
                    title="Alterações realizadas com sucesso"
                    text="Podes sempre alterar de novo caso seja engano."
                  />
                )}
                {isUpdateError && (
                  <Alert
                    color="danger"
                    title="Erro ao realizar as alterações"
                    text="Tenta de novo, caso o erro persista contacta-nos."
                  />
                )}
              </>
            ) : null}
          </Form>
        )
      }}
    </Formik>
  )
}

export { UserDataForm }
export type { UserDataFormProps }

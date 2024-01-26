import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import {
  TextInput,
  Button,
  Paper,
  em,
  Text,
  Checkbox,
  Divider,
  FileInput,
  rem,
  Select,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconFileCv } from '@tabler/icons-react'
import { ProfilePhotoEdit } from '../ProfilePhotoEdit'
import { useCourses, useInstitutions, useProfile, useUpdateProfile } from '@/lib/frontend/hooks'
import { StudentProfile } from '@/lib/frontend/api'
import { getInstitution } from '@/lib/frontend/utils'
import { useQueryClient } from '@tanstack/react-query'
import { use, useEffect } from 'react'
import { showErrorNotification, showSuccessNotification } from '../Notifications'
import { useBoundStore } from '@/lib/frontend/store'


const schema = Yup.object().shape({
  name: Yup.string().min(2, 'O nome deve ter pelo menos 2 caracteres'),
  email: Yup.string()
    .required('É necessário fornecer um endereço válido')
    .email('Endereço inválido'),
  courseCode: Yup.string().required('É necessário selecionar um curso'),
})

interface SettingsFormProps {
  onCancel: () => void
}

interface FormValues {
  name?: string
  email?: string
  institutionCode?: string | null
  courseCode?: string | null
}

const StudentSettingsForm = ({ onCancel }: SettingsFormProps) => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)
  const { data: user } = useProfile()

  const student = user as StudentProfile

  const form = useForm<FormValues>({
    validate: yupResolver(schema),
    initialValues: {
      name: student?.name,
      email: student?.email,
      institutionCode: student?.studentDetails?.university,
      courseCode: student?.studentDetails?.course,
    },
  })

  const { data: institutions } = useInstitutions()
  const { data: courses } = useCourses(form.values.institutionCode)

  const { mutateAsync: updateProfileData, isLoading, isError, error} = useUpdateProfile(useQueryClient())

  useEffect(() => {
    if (isError){
      showErrorNotification({
        title: `Ocorreu um erro, por favor tenta outra vez`,
        message: error.message,
      })
    }
  },[isError, error])

  const showSettings =  useBoundStore((state) => state.showSettings)

  const updateProfile = (values: FormValues) => {
    let updatedValues: any = {}
    Object.keys(values).forEach((key) => {
      if (form.isDirty(key)) {
        updatedValues[key] = values[key as keyof FormValues];
      }
    })
    updateProfileData(updatedValues).then(() => {
      showSettings(false)
      showSuccessNotification({
        message: 'Perfil atualizado com sucesso',
      })
    })
  }


  return (
    <Paper
      className="w-full h-fit !rounded-none sm:!rounded-lg"
      radius="md"
      withBorder={!isMobile}
      p={20}
      bg="var(--mantine-color-body)"
    >
      <Text c="#00415a" fz="xl" fw={700}>
        Editar perfil de estudante
      </Text>
      <form
        className="mt-4 flex flex-col gap-2"
        onSubmit={form.onSubmit(updateProfile)}
      >
        <ProfilePhotoEdit />

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 justify-stretch">
          <TextInput
            withAsterisk
            className="w-full"
            label="Nome"
            {...form.getInputProps('name')}
          />

          <TextInput
            withAsterisk
            className="w-full"
            label="Email"
            {...form.getInputProps('email')}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 justify-stretch">
          <Select
            withAsterisk
            label="Universidade"
            className="w-full"
            placeholder="Procurar universidade"
            data={institutions?.map((course) => ({
              value: course.code,
              label: course.name,
            }))}
            defaultValue={form.values.institutionCode}
            defaultSearchValue={
              getInstitution(form.values.institutionCode)?.name
            }
            error={form.errors['institutionCode']}
            onChange={(value) => {
              form.setValues({
                institutionCode: value,
                courseCode: null,
              })
            }}
            searchable
          />

          <Select
            withAsterisk
            label="Curso"
            className="w-full"
            placeholder="Escolher curso"
            data={courses?.map((course) => ({
              value: course.code,
              label: course.name,
            }))}
            error={form.errors['courseCode']}
            value={form.values.courseCode}
            onChange={(value) => form.setFieldValue('courseCode', value)}
            allowDeselect={false}
          />
        </div>

        <Divider mt={12} />

        <FileInput
          leftSection={
            <IconFileCv
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          }
          label="Gerir CV"
          placeholder="Faz upload do teu CV"
          leftSectionPointerEvents="none"
        />

        <Checkbox
          mt="sm"
          label={
            <span>
              Aceito os <strong>termos e condições</strong> da plataforma de CVs
            </span>
          }
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <div className="flex flex-col sm:flex-row sm:justify-end gap-3 mt-6 sm:mt-4">
          <Button onClick={onCancel} variant="default">
            Cancelar
          </Button>
          <Button loading={isLoading} type="submit">Guardar</Button>
        </div>
      </form>
    </Paper>
  )
}

export { StudentSettingsForm }

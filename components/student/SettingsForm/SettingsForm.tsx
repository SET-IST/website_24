import * as Yup from 'yup'
import { useForm, yupResolver } from '@mantine/form'
import {
  NumberInput,
  TextInput,
  Button,
  Box,
  Group,
  Paper,
  em,
  Text,
  Checkbox,
  Autocomplete,
  Divider,
  FileInput,
  rem,
  Select,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconFileCv } from '@tabler/icons-react'
import { ProfilePhotoEdit } from '../ProfilePhotoEdit'

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Name should have at least 2 letters'),
  email: Yup.string().email('Invalid email'),
  age: Yup.number().min(18, 'You must be at least 18 to create an account'),
})

interface SettingsFormProps {
  onCancel: () => void
}

const SettingsForm = ({ onCancel }: SettingsFormProps) => {
  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      name: '',
      email: '',
      age: 18,
    },
  })

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  return (
    <Paper
      className="w-full h-fit !rounded-none sm:!rounded-lg"
      radius="md"
      withBorder={!isMobile}
      p={20}
      bg="var(--mantine-color-body)"
    >
      <Text c="#00415a" fz="xl" fw={700}>
        Editar perfil
      </Text>
      <form
        className="mt-4 flex flex-col gap-2"
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <ProfilePhotoEdit />

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 justify-stretch">
          <TextInput
            disabled
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
            label="Universidade"
            className="w-full"
            placeholder="Procurar universidade"
            data={['React', 'Angular', 'Vue', 'Svelte']}
            searchable
          />

          <Select
            label="Curso"
            className="w-full"
            placeholder="Escolher curso"
            data={['React', 'Angular', 'Vue', 'Svelte']}
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
          <Button type="submit">Guardar</Button>
        </div>
      </form>
    </Paper>
  )
}

export { SettingsForm }

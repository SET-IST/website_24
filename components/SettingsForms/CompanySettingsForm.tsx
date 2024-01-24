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
  Textarea,
  Fieldset,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconFileCv, IconLink } from '@tabler/icons-react'
import { ProfilePhotoEdit } from '../ProfilePhotoEdit'
import { useProfile } from '@/lib/frontend/hooks'
import { CompanyProfile } from '@/lib/frontend/api'

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Name should have at least 2 letters'),
  email: Yup.string().email('Invalid email'),
  age: Yup.number().min(18, 'You must be at least 18 to create an account'),
})

interface SettingsFormProps {
  onCancel: () => void
}

const CompanySettingsForm = ({ onCancel }: SettingsFormProps) => {

  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useProfile()

  const company = user as CompanyProfile

  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      name: company?.name,
      description: company?.companyDetails?.description,
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
        Editar perfil de empresa
      </Text>
      <form
        className="mt-4 flex flex-col gap-2"
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <ProfilePhotoEdit />

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-stretch items-end">
          <TextInput
            withAsterisk
            className="w-full"
            label="Nome"
            {...form.getInputProps('name')}
          />
        </div>

        <Textarea
          label="Sobre"
          className="w-full"
          description="Descrição breve da empresa com um máximo de 150 caracteres"
          placeholder="Inserir descrição"
          {...form.getInputProps('description')}
        />

        <Divider label="Link externo" labelPosition="left" mt={12} />

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 justify-stretch items-end">
          <TextInput
            leftSection={
              <IconLink style={{ width: rem(16), height: rem(16) }} />
            }
            className="w-full"
            placeholder="https://"
            type="url"
          />
          <TextInput
            description="Máximo de 30 caracteres"
            placeholder="Conhecer as nossas oportunidades"
            className="w-full"
          />
        </div>

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

export { CompanySettingsForm }

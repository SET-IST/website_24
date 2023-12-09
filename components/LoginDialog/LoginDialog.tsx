import { useToggle, upperFirst, randomId } from '@mantine/hooks'
import { useForm, yupResolver } from '@mantine/form'
import {
  TextInput,
  PasswordInput,
  Group,
  Button,
  Stack,
  Modal,
  SegmentedControl,
  Text,
} from '@mantine/core'
import { GoogleButton } from './GoogleButton'
import { useBoundStore } from '@/lib/frontend/store'
import { FenixButton } from './FenixButton'
import { companyLoginSchema } from './validation'

export function LoginDialog() {
  // Getters
  const opened = useBoundStore((state) => state.loginDialogIsVisible)
  const loginType = useBoundStore((state) => state.loginDialogType)
  const loginKey = useBoundStore((state) => state.loginDialogKey)

  // Setters
  const showDialog = useBoundStore((state) => state.showLoginDialog)
  const setLoginType = useBoundStore((state) => state.setLoginDialogType)

  const form = useForm({
    initialValues: {
      username: '',
      password: '',
    },
  })

  return (
    <Modal
      opened={opened}
      onClose={() => showDialog(false)}
      withCloseButton={false}
      centered
    >
      <div className="flex flex-col gap-2">
        <Text ta="center" size="lg" fw={500}>
          Iniciar sessão como
        </Text>

        <SegmentedControl
          value={loginType}
          onChange={setLoginType}
          key={loginKey}
          fullWidth
          styles={{
            indicator: {
              transitionDuration: loginKey === 'none' ? '0ms' : undefined,
              opacity: loginKey === 'none' ? '0%' : '100%',
            },
          }}
          data={[
            { label: 'Estudante', value: 'student' },
            { label: 'Empresa', value: 'company' },
          ]}
        />

        {loginType === 'student' ? (
          <>
            <Stack mb="md" mt="md">
              <FenixButton>Entrar com Técnico ID</FenixButton>
              <GoogleButton>Entrar com o Google</GoogleButton>
            </Stack>
            <Text c="dimmed" ta="center" size="sm">
              Nota: Estudantes do técnico devem entrar com o seu TécnicoID
            </Text>
          </>
        ) : (
          <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
              <TextInput
                label="Utilizador"
                required
                value={form.values.username}
                onChange={(event) =>
                  form.setFieldValue('username', event.currentTarget.value)
                }
              />

              <PasswordInput
                required
                label="Password"
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue('password', event.currentTarget.value)
                }
              />
            </Stack>

            <Group justify="space-between" mt="lg">
              <Button fullWidth type="submit">
                Entrar
              </Button>
            </Group>
          </form>
        )}
      </div>
    </Modal>
  )
}

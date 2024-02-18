import { links } from '@/data/links'
import { useProfile } from '@/lib/frontend/hooks'
import { useBoundStore } from '@/lib/frontend/store'
import { Button, Modal, Text } from '@mantine/core'
import { useRouter } from 'next/router'

export function CVDialog() {
  const { data: user } = useProfile()

  const visible = useBoundStore((state) => state.cvDialogVisible)
  const showDialog = useBoundStore((state) => state.showCVDialog)
  const showSettings = useBoundStore((state) => state.showSettings)
  const router = useRouter()

  return (
    <Modal
      opened={visible}
      onClose={() => showDialog(false)}
      withCloseButton={false}
      centered
    >
      <div className="flex flex-col gap-2">
        <Text ta="center" size="lg" fw={500}>
          Participação em atividades
        </Text>
        <Text c="dimmed" ta="center" size="md">
          Olá {user?.name.split(' ')[0]}! É necessário fazeres upload do teu CV
          e adicionares um número de telefone para poderes participar nas
          atividades.
        </Text>
        <Button
          onClick={() => {
            showSettings(true)
            router.push(links.student.profile)
            showDialog(false)
          }}
        >
          Atualizar o meu perfil
        </Button>
      </div>
    </Modal>
  )
}

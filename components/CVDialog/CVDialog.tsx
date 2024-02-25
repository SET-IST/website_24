import { links } from '@/data/links'
import { useProfile } from '@/lib/frontend/hooks'
import { useBoundStore } from '@/lib/frontend/store'
import { Button, Modal, Text } from '@mantine/core'
import { ActivityType } from '@prisma/client'
import { useRouter } from 'next/router'

export function CVDialog() {
  const { data: user } = useProfile()

  const activity = useBoundStore((state) => state.cvDialogForActivity)
  const showDialog = useBoundStore((state) => state.showCVDialog)
  const showSettings = useBoundStore((state) => state.showSettings)
  const router = useRouter()

  return (
    <Modal
      opened={!!activity}
      onClose={() => showDialog(undefined)}
      withCloseButton={false}
      centered
    >
      <div className="flex flex-col gap-2">
        <Text ta="center" size="lg" fw={500}>
          Participação em{' '}
          {activity === ActivityType.Workshop ? 'Workshop' : 'Speed Interview'}
        </Text>
        <Text c="dimmed" ta="center" size="md">
          Olá {user?.name.split(' ')[0]}! É necessário{' '}
          {activity === ActivityType.SpeedInterview &&
            'fazeres upload do teu CV e'}{' '}
          adicionares um número de telefone para poderes participar nas
          atividades.
        </Text>
        <Button
          onClick={() => {
            showSettings(true)
            router.push(links.student.profile)
            showDialog(undefined)
          }}
        >
          Atualizar o meu perfil
        </Button>
      </div>
    </Modal>
  )
}

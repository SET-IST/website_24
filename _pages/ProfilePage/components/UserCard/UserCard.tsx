import { displayName } from '@/lib/frontend/utils'
import { useUserData } from '@/lib/hooks/use-user-data'
import { Avatar, Text, Button, Paper, Skeleton, Group, em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconFileCv, IconQrcode } from '@tabler/icons-react'

interface UserCardProps {
  openSettings: () => void
}

const UserCard = ({ openSettings }: UserCardProps) => {
  const { studentData, isLoadingStudentData } = useUserData({
    fetchStudent: true,
  })

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  return (
    <Paper
      className="h-fit w-full sm:w-1/3 !rounded-none sm:!rounded-lg"
      withBorder
      p={isMobile ? 'xl' : 'lg'}
      bg="var(--mantine-color-body)"
    >
      <div className=" w-full flex flex-col justify-center items-center">
        {isLoadingStudentData ? (
          <Skeleton circle height={120} />
        ) : (
          <Avatar src={studentData?.image} size={100} radius={120} />
        )}
        <Text c="#00415a" ta="center" fz="xl" fw={700} mt="md">
          <Skeleton visible={isLoadingStudentData}>
            {displayName(studentData?.name)}
          </Skeleton>
        </Text>
        <Skeleton visible={isLoadingStudentData}>
          <Text ta="center" c="dimmed" fw={500} fz="sm">
            {studentData?.course}
          </Text>
        </Skeleton>

        <Skeleton className="mt-2" visible={isLoadingStudentData}>
          <div className="w-full flex flex-row gap-4 justify-center">
            <div>
              <Text c="#00415a" ta="center" fz="lg" fw={600}>
                {studentData?.points}
              </Text>
              <Text ta="center" fz="sm" c="dimmed" lh={1}>
                Pontos
              </Text>
            </div>
            <div>
              <Text c="#00415a" ta="center" fz="lg" fw={600}>
                {studentData?.scans}
              </Text>
              <Text ta="center" fz="sm" c="dimmed" lh={1}>
                Bancas
              </Text>
            </div>
            <div>
              <Text c="#00415a" ta="center" fz="lg" fw={600}>
                {studentData && Math.floor(studentData.points / 15)}
              </Text>
              <Text ta="center" fz="sm" c="dimmed" lh={1}>
                Brindes
              </Text>
            </div>
          </div>
        </Skeleton>
        <div className="flex flex-row gap-2 w-full">
          <Button fullWidth mt="lg">
            Redimir prémio
          </Button>
          <Button fullWidth mt="lg" leftSection={<IconQrcode size={24} />}>
            Scan
          </Button>
        </div>
        <Button onClick={openSettings} variant="default" fullWidth mt="sm">
          Editar perfil
        </Button>
      </div>
    </Paper>
  )
}

export { UserCard }

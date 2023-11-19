import { displayName } from '@/lib/frontend/utils'
import { useUserData } from '@/lib/hooks/use-user-data'
import {
  Avatar,
  Text,
  Button,
  Paper,
  Skeleton,
  Group,
  em,
  Anchor,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconFileCv, IconLink, IconQrcode } from '@tabler/icons-react'
import UserStats from './UserStats'
import { AnchorLink } from '@/components/AnchorLink'

interface UserCardProps {
  openSettings: () => void
  isCompany: boolean
}

const UserCard = ({ openSettings, isCompany }: UserCardProps) => {
  const {
    studentData,
    companyData,
    isLoadingStudentData,
    isLoadingCompanyData,
  } = useUserData({
    fetchStudent: !isCompany,
  })

  const isLoadingData = () => {
    return isCompany ? isLoadingCompanyData : isLoadingStudentData
  }

  const data = () => {
    return isCompany ? companyData : studentData
  }

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  return (
    <Paper
      className="h-fit w-full sm:w-1/3 !rounded-none sm:!rounded-lg"
      withBorder
      p={isMobile ? 'xl' : 'lg'}
      bg="var(--mantine-color-body)"
    >
      <div className=" w-full flex flex-col justify-center items-center">
        {isLoadingData() ? (
          <Skeleton circle height={120} />
        ) : (
          <Avatar src={data()?.image} size={100} radius={120} />
        )}

        <Text c="#00415a" ta="center" fz="xl" fw={700} mt="md">
          <Skeleton visible={isLoadingData()}>
            {displayName(data()?.name)}
          </Skeleton>
        </Text>

        <Skeleton
          className="flex flex-col items-center gap-2"
          visible={isLoadingData()}
        >
          <Text ta="center" c="dimmed" fw={500} fz="sm">
            {isCompany
              ? 'Empresa portuguesa de venda a retalho de produtos eletrónicos, de consumo e de entretenimento, pertencente ao grupo Sonae, com sede em Carnaxide.'
              : studentData?.course}
          </Text>
          <AnchorLink href="https://pt.wikipedia.org/wiki/Worten">
            Saber mais sobre nós
          </AnchorLink>
        </Skeleton>

        <Skeleton className="mt-2" visible={isLoadingData()}>
          <UserStats
            stats={
              isCompany
                ? [
                    { label: 'Scans', value: 5 },
                    { label: 'Eventos', value: 2 },
                  ]
                : [
                    { label: 'Pontos', value: studentData?.points },
                    { label: 'Bancas', value: studentData?.scans },
                    {
                      label: 'Brindes',
                      value: studentData && Math.floor(studentData.points / 15),
                    },
                  ]
            }
          />
        </Skeleton>
        {!isCompany && (
          <div className="flex flex-row gap-2 w-full">
            <Button fullWidth mt="lg">
              Redimir prémio
            </Button>
            <Button fullWidth mt="lg" leftSection={<IconQrcode size={24} />}>
              Scan
            </Button>
          </div>
        )}
        <Button onClick={openSettings} variant="default" fullWidth mt="sm">
          Editar perfil
        </Button>
      </div>
    </Paper>
  )
}

export { UserCard }
import { Avatar, Text, Button, Paper, Skeleton, em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { IconQrcode } from '@tabler/icons-react'
import UserStats from './UserStats'
import { AnchorLink } from '@/components/AnchorLink'
import { UserType } from '@prisma/client'
import { useProfile } from '@/lib/frontend/hooks'
import { CompanyProfile, StudentProfile } from '@/lib/frontend/api'
import { useBoundStore } from '@/lib/frontend/store'
import { getCourse } from '@/lib/frontend/utils'

const UserCard = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)
  const {
    data: user,
    isLoading: isUserLoading,
    isError: isUserError,
  } = useProfile()

  // Setters
  const showSettings = useBoundStore((state) => state.showSettings)
  const showScanModal = useBoundStore((state) => state.showScanModal)

  return (
    <Paper
      className="h-fit min-w-min w-full sm:w-1/3 !rounded-none sm:!rounded-lg"
      withBorder
      p={isMobile ? 'xl' : 'lg'}
      bg="var(--mantine-color-body)"
    >
      <div className=" w-full flex flex-col justify-center items-center">
        {isUserLoading ? (
          <Skeleton circle height={120} />
        ) : (
          <Avatar src={user?.image} size={100} radius={120} />
        )}

        <Text c="#00415a" ta="center" fz="xl" fw={700} mt="md">
          <Skeleton visible={isUserLoading}>{user?.name}</Skeleton>
        </Text>

        <Skeleton
          className="flex flex-col items-center gap-2"
          visible={isUserLoading}
        >
          <Text
            className="sm:min-w-[18rem]"
            ta="center"
            c="dimmed"
            fw={500}
            fz="sm"
          >
            {user?.role === UserType.Company
              ? (user as CompanyProfile)?.companyDetails?.description ||
                'Sem descrição da empresa'
              : getCourse(
                  (user as StudentProfile)?.studentDetails?.university,
                  (user as StudentProfile)?.studentDetails?.course
                )?.name ?? ''}
          </Text>

          {user?.role === UserType.Company && (
            <AnchorLink
              preview={false}
              label={(user as CompanyProfile)?.companyDetails?.linkText}
              href={(user as CompanyProfile)?.companyDetails?.linkHref ?? '#'}
            />
          )}
        </Skeleton>

        <Skeleton className="mt-2" visible={isUserLoading}>
          <UserStats
            stats={
              user?.role === UserType.Company
                ? [
                    { label: 'Scans', value: 5 },
                    { label: 'Eventos', value: 2 },
                  ]
                : [
                    {
                      label: 'Pontos',
                      value: (user as StudentProfile)?.studentDetails?.points,
                    },
                    {
                      label: 'Bancas',
                      value: (user as StudentProfile)?.studentDetails?.scans,
                    },
                  ]
            }
          />
        </Skeleton>

        {user?.role !== UserType.Company && (
          <div className="flex flex-row gap-2 w-full min-w-fit">
            <Button fullWidth mt="lg">
              Redimir prémio
            </Button>
            <Button
              onClick={() => showScanModal(true)}
              fullWidth
              mt="lg"
              leftSection={<IconQrcode size={24} />}
            >
              Scan
            </Button>
          </div>
        )}

        <Button
          onClick={() => showSettings(true)}
          variant="default"
          fullWidth
          mt="sm"
        >
          Editar perfil
        </Button>
      </div>
    </Paper>
  )
}

export { UserCard }

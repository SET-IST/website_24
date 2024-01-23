import { ActivityData } from '@/lib/frontend/api/activities'
import { Badge, Button, Text, rem } from '@mantine/core'
import { ActivityType } from '@prisma/client'
import { IconMapPin } from '@tabler/icons-react'
import { DateTime } from 'luxon'
import { date } from 'yup'

interface ActivityComponentProps {
  data: ActivityData
  isMobile?: boolean
}

interface ActivityButtonProps {
  data: ActivityData
  isMobile?: boolean
}

const ActivityButton = ({ data, isMobile }: ActivityButtonProps) => {
  if (data?.type && data?.type !== ActivityType.Lecture) {
    if (data.confirmed == undefined) {
      return <Button fullWidth={!!isMobile}>Inscrever-me</Button>
    }
    if (data.confirmed) {
      return (
        <Button disabled fullWidth={!!isMobile}>
          Inscrito
        </Button>
      )
    } else {
      return (
        <Button variant="default" fullWidth={!!isMobile}>
          Cancelar inscrição
        </Button>
      )
    }
  } else {
    return <></>
  }
}

const Activity = ({ data, isMobile }: ActivityComponentProps) => {
  const date = DateTime.fromJSDate(data?.date ?? new Date)
  return (
    <div className="w-full h-fit bg-[color:var(--mantine-color-white)] hover:bg-gray-50 p-4 flex flex-col gap-4 sm:flex-row sm:gap-0 items-center sm:rounded-md">
      <div className="w-full h-fit flex flex-col gap-2">
        <div>
          <Text c="#00415a" fw={600}>
            <span className="text-base">{data?.title}</span>
          </Text>

          <Text c="dimmed" lh={1} fw={500}>
            <span className="text-sm">{data?.description}</span>
          </Text>
        </div>
        <div className="flex flex-row flex-wrap gap-1">
          <Badge radius="sm" variant="dot">
            {date.setLocale('pt').toFormat("d 'de' LLLL 'às' HH:mm")}
          </Badge>
          <Badge
            radius="sm"
            variant="default"
            leftSection={
              <IconMapPin style={{ width: rem(12), height: rem(12) }} />
            }
          >
            {data?.location}
          </Badge>
        </div>
      </div>
      <ActivityButton data={data} isMobile={isMobile} />
    </div>
  )
}

export default Activity

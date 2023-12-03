import { Badge, Button, Text, rem } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'
import { DateTime } from 'luxon'

export enum ActivityType {
  Lecture,
  Workshop,
  SpeedInterview,
}

export enum StudentActivityStatus {
  NotEnrolled,
  Enrolled,
  Confirmed,
}

export interface ActivityData {
  name: string
  type: ActivityType
  desc?: string
  date: DateTime
  location: string
  studentEnrolled?: StudentActivityStatus
}

interface ActivityComponentProps {
  data: ActivityData
  isMobile?: boolean
}

interface ActivityButtonProps {
  data: ActivityData
  isMobile?: boolean
}

const ActivityButton = ({ data, isMobile }: ActivityButtonProps) => {
  if (data.type !== ActivityType.Lecture && data.studentEnrolled != undefined) {
    switch (data.studentEnrolled) {
      case StudentActivityStatus.Enrolled:
        return (
          <Button variant="default" fullWidth={!!isMobile}>
            Cancelar inscrição
          </Button>
        )
      case StudentActivityStatus.Confirmed:
        return (
          <Button disabled fullWidth={!!isMobile}>
            Inscrito
          </Button>
        )
      default:
        return <Button fullWidth={!!isMobile}>Inscrever-me</Button>
    }
  } else {
    return <></>
  }
}

const Activity = ({ data, isMobile }: ActivityComponentProps) => {
  return (
    <div className="w-full h-fit py-4 px-1 flex flex-col gap-4 sm:flex-row sm:gap-0 items-center">
      <div className="w-full h-fit flex flex-col gap-2">
        <div>
          <Text c="#00415a" fw={600}>
            <span className="text-base">{data.name}</span>
          </Text>

          <Text c="dimmed" lh={1} fw={500}>
            <span className="text-sm">{data.desc}</span>
          </Text>
        </div>
        <div className="flex flex-row flex-wrap gap-1">
          <Badge radius="sm" variant="dot">
            {data.date.setLocale('pt').toFormat("d 'de' LLLL 'às' HH:mm")}
          </Badge>
          <Badge
            radius="sm"
            variant="default"
            leftSection={
              <IconMapPin style={{ width: rem(12), height: rem(12) }} />
            }
          >
            {data.location}
          </Badge>
        </div>
      </div>
      <ActivityButton data={data} isMobile={isMobile} />
    </div>
  )
}

export default Activity

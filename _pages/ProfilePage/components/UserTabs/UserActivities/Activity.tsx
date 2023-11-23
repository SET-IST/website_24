import { Badge, Text, rem } from '@mantine/core'
import { IconMapPin } from '@tabler/icons-react'
import { DateTime } from 'luxon'

export interface ActivityData {
  name: string
  desc?: string
  date: DateTime
  location: string
}

interface ActivityComponentProps {
  data: ActivityData
}

const Activity = ({ data }: ActivityComponentProps) => {
  return (
    <div className="w-full h-fit p-4 flex flex-col gap-2">
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
  )
}

export default Activity

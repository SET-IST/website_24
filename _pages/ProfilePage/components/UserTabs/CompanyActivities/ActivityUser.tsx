import { CompanyActivity } from '@/lib/frontend/api'
import { Unpacked } from '@/lib/frontend/utils'
import { UnstyledButton, Group, Avatar, Text, Tooltip } from '@mantine/core'
import { useRouter } from 'next/router'

interface ActivityUserProps {
  data: Unpacked<CompanyActivity['enrollments']>
}

export function ActivityUser({ data }: ActivityUserProps) {
  const router = useRouter()

  return (
    <Tooltip position="bottom" label="Descarregar CV">
      <UnstyledButton
        onClick={() =>
          !!data.student.cvLocation &&
          router.push(
            process.env.NEXT_PUBLIC_API_BASE_URL +
              '/company/students/cv/' +
              encodeURIComponent(data.student.cvLocation)
          )
        }
        p="sm"
        className="hover:bg-gray-50 rounded-md"
      >
        <Group wrap="nowrap">
          <Avatar src={data.student.user.image} radius="xl" />

          <div style={{ flex: 1 }}>
            <Text size="sm" fw={500}>
              {data.student.user.name}
            </Text>

            <Text c="dimmed" size="xs">
              {data.student.user.email}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    </Tooltip>
  )
}

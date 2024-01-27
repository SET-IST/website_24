import { CompanyStudentScan } from '@/lib/frontend/api'
import { getCourse, getInstitution } from '@/lib/frontend/utils'
import { Avatar, Button, Text } from '@mantine/core'
import { Image } from '@mantine/core'
import { IconDownload, IconFileDownload } from '@tabler/icons-react'


interface StudentComponentProps {
  data: CompanyStudentScan
}

const Student = ({ data }: StudentComponentProps) => {
  return (
    <div className="w-full h-fit p-4 flex flex-row items-center justify-between hover:bg-gray-50 transition-all">
      <div className="flex flex-row items-center">
        <Avatar src={data?.user.image} h={52} w={52} />
        <div className="ml-4 sm:ml-6 flex flex-col items-start">
          <Text c="#00415a" fw={600}>
            <span className="text-lg">{data?.user.name}</span>
          </Text>
          <Text c="dimmed" lh={1} lineClamp={2} fw={500}>
            <span className="text-sm">{getInstitution(data?.university)?.name}</span>
          </Text>
          <Text c="dimmed" lh={1} lineClamp={2} fw={500}>
            <span className="text-sm">{getCourse(data?.university,data?.course)?.name}</span>
          </Text>
        </div>
      </div>
      <Button leftSection={<IconFileDownload />}>Descarregar CV</Button>
    </div>
  )
}

export default Student

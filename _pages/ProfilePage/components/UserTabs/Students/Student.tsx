import { CompanyStudentScan } from '@/lib/frontend/api'
import { getCourse, getInstitution } from '@/lib/frontend/utils'
import { Button, Text } from '@mantine/core'
import { Image } from '@mantine/core'
import { IconFileDownload } from '@tabler/icons-react'

interface StudentComponentProps {
  data: CompanyStudentScan
}

const Student = ({ data }: StudentComponentProps) => {
  return (
    <div className="w-full h-fit p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:bg-gray-50 transition-all">
      <div className="w-full flex flex-row items-center justify-start">
        <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-full bg-gray-200">
          <Image
            src={data?.user.image}
            alt={data?.user.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className=" w-full flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 justify-between">
          <div className="ml-4 sm:ml-6 flex flex-col items-start">
            <Text c="#00415a" fw={600}>
              <span className="text-lg">{data?.user.name}</span>
            </Text>
            <Text c="dimmed" lh={1} lineClamp={2} fw={500}>
              <span className="text-sm">
                {getCourse(data?.university, data?.course)?.name}
              </span>
            </Text>
            <Text c="dimmed" lh={1} lineClamp={2} fw={500}>
              <span className="text-sm hidden sm:block">
                {getInstitution(data?.university)?.name}
              </span>
            </Text>
          </div>
          <Button className="ml-4" leftSection={<IconFileDownload />}>
            Descarregar CV
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Student

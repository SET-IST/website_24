import { Text } from '@mantine/core'
import Student from './Student'
import { useCompanyStudentsScans } from '@/lib/frontend/hooks/company'


const Students = () => {
  const {
    data:students,
    isLoading,
    isError,
  } = useCompanyStudentsScans()

  return (
    <div className="flex flex-col">
      {students && students.map((studentData, index) => (
        <Student key={`stand_${index}`} data={studentData} />
      ))}
    </div>
  )
}

export { Students }

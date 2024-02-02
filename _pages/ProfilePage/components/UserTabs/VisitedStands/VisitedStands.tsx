import Stand from './Stand'
import { useStudentCompanyScans } from '@/lib/frontend/hooks/student'

const VisitedStands = () => {
  const { data: stands, isLoading, isError } = useStudentCompanyScans()

  return (
    <div className="flex flex-col">
      {stands &&
        stands.map((standData, index) => (
          <Stand key={`stand_${index}`} data={standData} />
        ))}
    </div>
  )
}

export { VisitedStands }

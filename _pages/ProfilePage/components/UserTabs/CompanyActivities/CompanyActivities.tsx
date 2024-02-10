import { useCompanyActivities } from '@/lib/frontend/hooks'
import { em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import CompanyActivity from './CompanyActivity'

const CompanyActivities = () => {
  /* 
    Lets make some things clear:

    Are we repeating code? Yes 
    Is there a better way to do it? For sure
    Do we have time to do it? NO
  */

  const { data: enrollments, isLoading } = useCompanyActivities()
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  return (
    <div className="flex flex-col">
      {enrollments?.map((activityData, index) => (
        <CompanyActivity key={`activity_${index}`} data={activityData} />
      ))}
    </div>
  )
}

export { CompanyActivities }

import Activity from '@/_pages/ActivitiesPage/components/UserActivities/Activity'
import { showInfoNotification } from '@/components/Notifications'
import { UnEnrollUserResponse } from '@/lib/frontend/api/activities'
import {
  useEnrollStudent,
  useUnEnrollStudent,
} from '@/lib/frontend/hooks/activities'
import { useStudentEnrollments } from '@/lib/frontend/hooks/student'
import { useBoundStore } from '@/lib/frontend/store'
import { em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useQueryClient } from '@tanstack/react-query'

const UserActivities = () => {
  /* 
    Lets make some things clear:

    Are we repeating code? Yes 
    Is there a better way to do it? For sure
    Do we have time to do it? NO
  */

  const currentDate = useBoundStore((state) => state.selectedDate)

  const { data: enrollments, isLoading } = useStudentEnrollments()

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  const {
    mutateAsync: unEnroll,
    isError: isUnEnrollError,
    error: unEnrollError,
  } = useUnEnrollStudent(useQueryClient())

  const unEnrollStudent = (activityId: string) => {
    unEnroll(activityId).then((activity: UnEnrollUserResponse) => {
      showInfoNotification({
        title: 'Inscrição cancelada com sucesso',
        message: activity?.title ?? '',
      })
    })
  }

  return (
    <div className="flex flex-col">
      {enrollments?.map((activityData, index) => (
        <Activity
          key={`activity_${index}`}
          data={activityData?.activity}
          isMobile={isMobile}
          enrollCallback={() => {}}
          unEnrollCallback={unEnrollStudent}
        />
      ))}
    </div>
  )
}

export { UserActivities }

import { useMediaQuery } from '@mantine/hooks'
import { DateTime } from 'luxon'
import { em } from '@mantine/core'
import {
  useActivities,
  useEnrollStudent,
  useUnEnrollStudent,
} from '@/lib/frontend/hooks/activities'
import Activity from './Activity'
import { useQueryClient } from '@tanstack/react-query'
import { showInfoNotification } from '@/components/Notifications'
import { useSession } from 'next-auth/react'
import { useBoundStore } from '@/lib/frontend/store'
import {
  EnrollUserResponse,
  UnEnrollUserResponse,
} from '@/lib/frontend/api/activities'
import ActivitySkeleton from './ActivitySkeleton'

const UserActivities = () => {
  const session = useSession()
  const showLogin = useBoundStore((state) => state.showLoginDialog)
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  const currentDate = useBoundStore((state) => state.selectedDate)
  const { data: activities, isLoading } = useActivities(currentDate)

  const queryClient = useQueryClient()

  const {
    mutateAsync: enroll,
    isError: isEnrollError,
    error: enrollError,
  } = useEnrollStudent(queryClient)
  const {
    mutateAsync: unEnroll,
    isError: isUnEnrollError,
    error: unEnrollError,
  } = useUnEnrollStudent(queryClient)

  const enrollStudent = (activityId: string) => {
    if (session.status !== 'authenticated') {
      showLogin(true)
      return
    }
    enroll(activityId).then((activity: EnrollUserResponse) => {
      showInfoNotification({
        title: 'Inscrição pendente de confirmação',
        message: activity?.title ?? '',
      })
    })
  }

  const unEnrollStudent = (activityId: string) => {
    unEnroll(activityId).then((activity: UnEnrollUserResponse) => {
      showInfoNotification({
        title: 'Inscrição cancelada com sucesso',
        message: activity?.title ?? '',
      })
    })
  }
  return (
    <div className="flex bg-[#ffffff] sm:bg-[color:var(--mantine-color-white)] flex-col sm:gap-4 sm:h-[26rem] sm:overflow-scroll sm:rounded-lg sm:p-2 sm:py-4">
      {!activities && (
        <>
          <ActivitySkeleton />
          <ActivitySkeleton />
          <ActivitySkeleton />
          <ActivitySkeleton />
        </>
      )}
      {activities?.map((activityData, index) => (
        <Activity
          key={`activity_${index}`}
          data={activityData}
          isMobile={isMobile}
          enrollCallback={enrollStudent}
          unEnrollCallback={unEnrollStudent}
        />
      ))}
    </div>
  )
}

export { UserActivities }

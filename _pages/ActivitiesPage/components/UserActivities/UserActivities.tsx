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
import { showSuccessNotification } from '@/components/Notifications'
import { useSession } from 'next-auth/react'
import { useBoundStore } from '@/lib/frontend/store'
import { removeStudent } from '@/lib/server/services/activities'

// const activities: ActivityData[] = [
//   {
//     name: 'A evolução da Internet - Web3 e Blockchain',
//     type: ActivityType.Lecture,
//     desc: 'Segurança, transparência e independência: O futuro é Web3 e Blockchain',
//     date: DateTime.now().plus({ days: 4 }),
//     location: 'Palco',
//   },
//   {
//     name: 'Speed Interview',
//     type: ActivityType.SpeedInterview,
//     desc: 'Worten e Caixa Geral',
//     date: DateTime.now().plus({ days: 3, hours: 2, minutes: 11 }),
//     location: 'Salas 0-67 e 0-69',
//     studentEnrolled: StudentActivityStatus.NotEnrolled,
//   },
//   {
//     name: 'Workshop',
//     type: ActivityType.Workshop,
//     desc: 'Magma Studios',
//     date: DateTime.now().plus({ days: 3, hours: 2, minutes: 11 }),
//     location: 'Salas 0-67 e 0-69',
//     studentEnrolled: StudentActivityStatus.NotEnrolled,
//   },
//   {
//     name: 'Speed Interview',
//     type: ActivityType.SpeedInterview,
//     desc: 'Worten e Caixa Geral',
//     date: DateTime.now().plus({ days: 3, hours: 2, minutes: 11 }),
//     location: 'Salas 0-67 e 0-69',
//     studentEnrolled: StudentActivityStatus.NotEnrolled,
//   },
// ]

const UserActivities = () => {
  const session = useSession()
  const showLogin = useBoundStore((state) => state.showLoginDialog)
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)
  const { data: activities, isLoading } = useActivities()
  const {
    mutateAsync: enroll,
    isError: isEnrollError,
    error: enrollError,
  } = useEnrollStudent(useQueryClient())
  const {
    mutateAsync: unEnroll,
    isError: isUnEnrollError,
    error: unEnrollError,
  } = useUnEnrollStudent(useQueryClient())

  const enrollStudent = (activityId: string) => {
    if (session.status !== 'authenticated') {
      showLogin(true)
      return
    }
    enroll(activityId).then(() => {
      showSuccessNotification({
        message: 'Inscrição pendente de confirmação',
      })
    })
  }

  const unEnrollStudent = (activityId: string) => {
    unEnroll(activityId).then(() => {
      showSuccessNotification({
        message: 'Inscrição cancelada com sucesso',
      })
    })
  }
  return (
    <div className="flex bg-[#ffffff] sm:bg-[color:var(--mantine-color-white)] flex-col sm:gap-4 sm:h-[26rem] sm:overflow-scroll sm:rounded-lg sm:p-2 sm:py-4">
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

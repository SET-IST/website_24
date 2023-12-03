import { useMediaQuery } from '@mantine/hooks'
import Activity, {
  ActivityData,
  ActivityType,
  StudentActivityStatus,
} from './Activity'
import { DateTime } from 'luxon'
import { em } from '@mantine/core'

const activities: ActivityData[] = [
  {
    name: 'A evolução da Internet - Web3 e Blockchain',
    type: ActivityType.Lecture,
    desc: 'Segurança, transparência e independência: O futuro é Web3 e Blockchain',
    date: DateTime.now().plus({ days: 4 }),
    location: 'Palco',
  },
  {
    name: 'Speed Interview',
    type: ActivityType.SpeedInterview,
    desc: 'Worten e Caixa Geral',
    date: DateTime.now().plus({ days: 3, hours: 2, minutes: 11 }),
    location: 'Salas 0-67 e 0-69',
  },
  {
    name: 'Workshop',
    type: ActivityType.Workshop,
    desc: 'Magma Studios',
    date: DateTime.now().plus({ days: 3, hours: 2, minutes: 11 }),
    location: 'Salas 0-67 e 0-69',
  },
  {
    name: 'Speed Interview',
    type: ActivityType.SpeedInterview,
    desc: 'Worten e Caixa Geral',
    date: DateTime.now().plus({ days: 3, hours: 2, minutes: 11 }),
    location: 'Salas 0-67 e 0-69',
  },
]

const UserActivities = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  return (
    <div className="flex flex-col sm:h-96 sm:overflow-scroll bg-white rounded-lg px-2">
      {activities.map((activityData, index) => (
        <Activity
          key={`activity_${index}`}
          data={activityData}
          isMobile={isMobile}
        />
      ))}
    </div>
  )
}

export { UserActivities }

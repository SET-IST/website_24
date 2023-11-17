import { Text } from '@mantine/core'
import Activity, { ActivityData } from './Activity'
import { DateTime } from 'luxon'

const activities: ActivityData[] = [
  {
    name: 'A evolução da Internet - Web3 e Blockchain',
    desc: 'Segurança, transparência e independência: O futuro é Web3 e Blockchain',
    date: DateTime.now().plus({ days: 4 }),
    location: 'Palco',
  },
  {
    name: 'Speed Interview',
    desc: 'Worten e Caixa Geral',
    date: DateTime.now().plus({ days: 3, hours: 2, minutes: 11 }),
    location: 'Salas 0-67 e 0-69',
  },
]

const UserActivities = () => {
  return (
    <div className="flex flex-col">
      {activities.map((activityData, index) => (
        <Activity key={`activity_${index}`} data={activityData} />
      ))}
    </div>
  )
}

export { UserActivities }

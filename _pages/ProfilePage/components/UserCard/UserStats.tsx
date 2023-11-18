import { Text } from '@mantine/core'

interface UserStat {
  label: string
  value?: number
}

interface UserStatsProps {
  stats: UserStat[]
}

const UserStats = ({ stats }: UserStatsProps) => {
  return (
    <div className="w-full flex flex-row gap-4 justify-center">
      {stats.map((stat, key) => (
        <div key={`stat_${key}`}>
          <Text c="#00415a" ta="center" fz="lg" fw={600}>
            {stat.value}
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            {stat.label}
          </Text>
        </div>
      ))}
    </div>
  )
}

export default UserStats

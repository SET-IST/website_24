import { ApiClient } from '@/core/services/client'
import { getActivities } from '@/lib/server/services/activities'


type Unpacked<T> = T extends (infer U)[] ? U : T;
export type ActivityData = Unpacked<Awaited<ReturnType<typeof getActivities>>>

export const fetchActivities = async (): Promise<ActivityData[]> => {
  const { data } = await ApiClient.get('activities')
  return data
}

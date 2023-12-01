import { QueryCacheKeys } from '@/core/services/api'
import { getSchedule } from '@/core/services/api/schedule'
import { useQuery } from '@tanstack/react-query'
import { ServerSideFetchQueryCall } from '../types'

const useGoogleSchedule = () => {
  const { data, ...rest } = useQuery([QueryCacheKeys.SCHEDULE], getSchedule)

  return {
    schedule: data,
    ...rest,
  }
}

const fetchScheduleServerSideHandler: ServerSideFetchQueryCall = (
  queryClient,
  context
) => {
  return queryClient.fetchQuery([QueryCacheKeys.SCHEDULE], getSchedule)
}

export { fetchScheduleServerSideHandler, useGoogleSchedule }

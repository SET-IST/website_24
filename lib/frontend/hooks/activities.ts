import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import {
  ActivityData,
  EnrollUserResponse,
  UnEnrollUserResponse,
  enrollUser,
  fetchActivities,
  unEnrollUser,
} from '../api/activities'
import { Axios, AxiosError } from 'axios'

export const useActivities = (date: string) => {
  return useQuery<ActivityData[], AxiosError>({
    queryKey: ['Activities', date],
    queryFn: () => {
      return fetchActivities(date)
    },
    staleTime: 1000 * 60 * 5,
  })
}

export const useEnrollStudent = (queryClient: QueryClient) => {
  return useMutation<EnrollUserResponse, AxiosError, string>({
    mutationFn: async (activityId: string) => enrollUser(activityId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Activities'],
      })
      queryClient.invalidateQueries({
        queryKey: ['StudentEnrollments'],
      })
    },
  })
}

export const useUnEnrollStudent = (queryClient: QueryClient) => {
  return useMutation<UnEnrollUserResponse, AxiosError, string>({
    mutationFn: async (activityId: string) => unEnrollUser(activityId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Activities'],
      })
      queryClient.invalidateQueries({
        queryKey: ['StudentEnrollments'],
      })
    },
  })
}

import { User } from '@prisma/client'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import {
  CompanyProfile,
  StudentProfile,
  UpdateStudentPointsRequest,
  fetchUserDetails,
  fetchUsers,
  updateStudentPoints,
} from '../api'
import { AxiosError } from 'axios'

export const useUsersSearch = (search?: string) => {
  return useQuery<User[], Error>(['Users', { query: search }], () =>
    fetchUsers(search)
  )
}

export const useUserDetails = (uuid: string, enabled?: boolean) => {
  return useQuery<StudentProfile | CompanyProfile, AxiosError>(
    ['User', { uuid }],
    () => fetchUserDetails(uuid),
    {
      enabled,
    }
  )
}

export const useUpdateStudentPoints = (queryClient: QueryClient) => {
  return useMutation<void, AxiosError, UpdateStudentPointsRequest>({
    mutationFn: async (data) => updateStudentPoints(data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['User', { uuid: variables.uuid }],
      })
    },
  })
}

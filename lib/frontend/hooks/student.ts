import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import {
  CompanyScan,
  ScannedCompany,
  UserEnrollment,
  fetchEnrolledActivities,
  fetchStudentCompaniesScans,
  scanCompany,
} from '../api'
import { AxiosError } from 'axios'

export const useStudentCompanyScans = () => {
  return useQuery<ScannedCompany[], AxiosError>(['StudentCompanyScans'], () =>
    fetchStudentCompaniesScans()
  )
}

export const useStudentEnrollments = () => {
  return useQuery<UserEnrollment[], AxiosError>(['StudentEnrollments'], () =>
    fetchEnrolledActivities()
  )
}

export const useScan = (queryClient: QueryClient) => {
  return useMutation<CompanyScan, AxiosError, string>({
    mutationFn: async (companyId: string) => {
      return scanCompany(companyId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['Profile'],
      })
      queryClient.invalidateQueries({
        queryKey: ['StudentCompanyScans'],
      })
    },
  })
}

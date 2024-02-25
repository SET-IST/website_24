import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import {
  Award,
  CompanyScan,
  ScannedCompany,
  UserEnrollment,
  fetchAward,
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

export const useAward = () => {
  return useQuery<Award, AxiosError>(['Award'], () => fetchAward(), {
    refetchInterval: (data, query) => {
      return !query.state.error ? 800 : false
    },
  })
}

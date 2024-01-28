import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import {
  CompanyScan,
  StudentCompanyScan,
  fetchStudentCompaniesScans,
  scanCompany,
} from '../api'
import { AxiosError } from 'axios'

export const useStudentCompanyScans = () => {
  return useQuery<StudentCompanyScan[], AxiosError>(
    ['StudentCompanyScans'],
    () => fetchStudentCompaniesScans()
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

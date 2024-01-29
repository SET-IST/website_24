import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import {
  CompanyScan,
  RemoveScanData,
  fetchStudentCompaniesScans,
  scanCompany,
} from '../api'
import { AxiosError } from 'axios'

export const useStudentCompanyScans = () => {
  return useQuery<RemoveScanData<CompanyScan>[], AxiosError>(
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

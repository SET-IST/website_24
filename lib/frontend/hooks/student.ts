import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import {
  CompanyScan,
  StudentCompanyScan,
  fetchStudentCompaniesScans,
  scanCompany,
} from '../api'
import { UserType } from '@prisma/client'
import { AxiosError } from 'axios'

export const useStudentCompanyScans = () => {
  const session = useSession()
  const user = session.data?.user
  return useQuery<StudentCompanyScan[], AxiosError>(
    ['StudentCompanyScans'],
    () => fetchStudentCompaniesScans(),
    {
      enabled:
        session.status === 'authenticated' &&
        (user?.role === UserType.Student || user?.role === UserType.Staff),
    }
  )
}

export const useScan = (queryClient: QueryClient) => {
  return useMutation<CompanyScan, AxiosError, string>({
    mutationFn: async (companyId: string) => {
      return scanCompany(companyId)
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['Profile'] }),
  })
}

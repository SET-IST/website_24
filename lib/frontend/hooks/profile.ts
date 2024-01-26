import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import {
  CompanyProfile,
  StudentProfile,
  StudentProfilePatchResponse,
  fetchCompanyProfile,
  fetchStudentProfile,
  updateStudentProfile,
} from '@/lib/frontend/api'

import { UserType } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { User } from 'next-auth'
import { IPatchStudentProfile } from '@/lib/server/services/student'


export const useProfile = () => {
  const session = useSession()
  const user: User = session.data?.user

  return useQuery<StudentProfile | CompanyProfile, Error>(['Profile'], () => {
    return user.role === UserType.Company
      ? fetchCompanyProfile()
      : fetchStudentProfile()
  })
}
export const useUpdateProfile = (queryClient: QueryClient) => {

  return useMutation<StudentProfilePatchResponse, Error, IPatchStudentProfile>({
    mutationFn: (data: IPatchStudentProfile) => updateStudentProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Profile'] })
    },
  })
}



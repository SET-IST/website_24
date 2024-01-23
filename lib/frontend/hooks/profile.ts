import { useQuery } from '@tanstack/react-query'
import {
  CompanyProfile,
  StudentProfile,
  fetchCompanyProfile,
  fetchStudentProfile,
} from '@/lib/frontend/api'

import { UserType } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { User } from 'next-auth'

export const useProfile = () => {
  const session = useSession()
  const user: User = session.data?.user

  return useQuery<StudentProfile | CompanyProfile, Error>(['Profile'], () => {
    return user.role === UserType.Company
      ? fetchCompanyProfile()
      : fetchStudentProfile()
  })
}

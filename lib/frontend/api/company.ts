import { ApiClient } from '@/core/services/client'
import {
  getCompanyActivities,
  getCompanyProfile,
  getCompanyStudents,
  patchCompanyProfile,
} from '@/lib/server/services/company'
import { IPatchCompanyProfile } from '@/lib/server/services/company/dtos'
import { Unpacked } from '../utils'

// Get types from backend services
export type CompanyProfile = Awaited<ReturnType<typeof getCompanyProfile>>
export type CompanyProfilePatchResponse = Awaited<
  ReturnType<typeof patchCompanyProfile>
>

export type CompanyStudents = NonNullable<
  Awaited<ReturnType<typeof getCompanyStudents>>
>

export type CompanyStudentFiled = keyof Omit<
  Unpacked<CompanyStudents['data']>,
  'user'
>

export type CompanyActivity = NonNullable<
  Unpacked<Awaited<ReturnType<typeof getCompanyActivities>>>
>

export const fetchCompanyProfile = async (): Promise<CompanyProfile> => {
  const { data } = await ApiClient.get('company/profile')
  return data
}

export const updateCompanyProfile = async (
  data: IPatchCompanyProfile
): Promise<CompanyProfilePatchResponse> => {
  const { data: profile } = await ApiClient.patch('company/profile', data)

  return profile
}

export const fetchCompanyStudentsScans = async (
  page?: number,
  search?: string
): Promise<CompanyStudents> => {
  let queryParams = new URLSearchParams()

  if (page) queryParams.append('page', String(page))
  if (search) queryParams.append('search', search)

  const { data } = await ApiClient.get(
    `company/students${
      queryParams.size > 0 ? '?' + queryParams.toString() : ''
    }`
  )
  return data
}

export const fetchCompanyActivities = async (): Promise<
  CompanyActivity[] | undefined
> => {
  const { data } = await ApiClient.get('company/activities')
  return data
}

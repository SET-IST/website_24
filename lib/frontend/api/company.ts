import { ApiClient } from '@/core/services/client'
import {
  getCompanyProfile,
  getCompanyStudents,
  patchCompanyProfile,
} from '@/lib/server/services/company'
import { IPatchCompanyProfile } from '@/lib/server/services/company/dtos'

type Unpacked<T> = T extends (infer U)[] ? U : T

// Get types from backend services
export type CompanyProfile = Awaited<ReturnType<typeof getCompanyProfile>>
export type CompanyProfilePatchResponse = Awaited<
  ReturnType<typeof patchCompanyProfile>
>

export type CompanyStudentScan = Unpacked<Awaited<ReturnType<typeof getCompanyStudents>>>

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

export const fetchCompanyStudentsScans = async (): Promise<CompanyStudentScan[]> => {
  const { data } = await ApiClient.get('company/students')
  return data
}

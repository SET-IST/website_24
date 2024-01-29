import { ApiClient } from '@/core/services/client'
import {
  IPatchStudentProfile,
  getStudentProfile,
  patchStudentProfile,
  scanCompany as server_scanCompany,
} from '@/lib/server/services/student'

// Get types from backend services
export type StudentProfile = Awaited<ReturnType<typeof getStudentProfile>>
export type StudentProfilePatchResponse = Awaited<
  ReturnType<typeof patchStudentProfile>
>

export type CompanyScan = Awaited<ReturnType<typeof server_scanCompany>>

export type RemoveScanData<T> = Omit<T, 'points'>

export const fetchStudentProfile = async (): Promise<StudentProfile> => {
  const { data } = await ApiClient.get('student/profile')
  return data
}

export const updateStudentProfile = async (
  data: IPatchStudentProfile
): Promise<StudentProfilePatchResponse> => {
  const { data: profile } = await ApiClient.patch('student/profile', data)

  return profile
}

export const fetchStudentCompaniesScans = async (): Promise<
  RemoveScanData<CompanyScan>[]
> => {
  const { data } = await ApiClient.get('student/companies')
  return data
}

export const scanCompany = async (companyId: string): Promise<CompanyScan> => {
  const { data } = await ApiClient.post(`student/scan/${companyId}`)
  return data
}

import { ApiClient } from '@/core/services/client'
import { getStudentProfile } from '@/lib/server/services/student'

// Get types from backend services
export type StudentProfile = Awaited<ReturnType<typeof getStudentProfile>>

export const fetchStudentProfile = async (): Promise<StudentProfile> => {
  const { data } = await ApiClient.get('student/profile')
  return data
}

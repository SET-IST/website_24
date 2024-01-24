import { ApiClient } from '@/core/services/client'
import { getCourses, getInstitutions } from '@/lib/server/services/institutions'


// Get types from backend services
export type InstituitonData = Awaited<ReturnType<typeof getInstitutions>>

export type CourseData = Awaited<ReturnType<typeof getCourses>>

export const fetchInstituitonData = async (): Promise<InstituitonData> => {
  const { data } = await ApiClient.get('instituitions')
  return data
}

export const fetchCourseData = async (instituitionCode?: string ): Promise<CourseData|undefined> => {
  if (!instituitionCode) return undefined
  const { data } = await ApiClient.get(`instituitions/${instituitionCode}`)
  return data
}

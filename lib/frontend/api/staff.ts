import { ApiClient } from '@/core/services/client'
import { User } from '@prisma/client'
import { StudentProfile } from './student'
import { CompanyProfile } from './company'

export const fetchUsers = async (search?: string): Promise<User[]> => {
  let queryParams = new URLSearchParams()

  if (search) queryParams.append('search', search)

  const { data } = await ApiClient.get(
    `staff/users${queryParams.size > 0 ? '?' + queryParams.toString() : ''}`
  )
  return data
}

export const fetchUserDetails = async (
  uuid: string
): Promise<StudentProfile | CompanyProfile> => {
  const { data } = await ApiClient.get(`staff/users/${uuid}`)
  return data
}

export interface UpdateStudentPointsRequest {
  uuid: string
  points: number
}

export const updateStudentPoints = async ({
  uuid,
  points,
}: UpdateStudentPointsRequest) => {
  const { data: profile } = await ApiClient.patch(
    `staff/users/${uuid}/set-points`,
    {
      points,
    }
  )

  return profile
}

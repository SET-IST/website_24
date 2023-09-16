import { AwardType, StudentDetails, User } from '@prisma/client'
import { apiClient } from './clients'

import type { AxiosRequestConfig } from 'axios'

type BasicStudentData = Pick<User, 'name' | 'image'> &
  Pick<StudentDetails, 'userId' | 'course'>

interface RedeemResponse {
  id: string
  type: AwardType
  studentId: number
  student: BasicStudentData
}

type AwardRequest = {
  awardToken: string
  awardType: AwardType
}

const requestAward = async (config?: AxiosRequestConfig) => {
  const { data } = await apiClient.request<AwardRequest>({
    ...config,
    method: 'POST',
    url: `/api/awards/request`,
  })

  return data
}

const redeemAward = async (token: string, config?: AxiosRequestConfig) => {
  const { data } = await apiClient.request<RedeemResponse>({
    ...config,
    method: 'DELETE',
    url: `/api/awards/redeem/${token}`,
  })

  return data
}

export { requestAward, redeemAward }
export type { AwardRequest, RedeemResponse, BasicStudentData }

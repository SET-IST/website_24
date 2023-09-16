import type { GetStudentResponse } from '@/lib/server/user'
import type { AxiosRequestConfig } from 'axios'

import { apiClient } from './clients'

const uploadProfileImage = async (
  payload: FormData,
  config?: AxiosRequestConfig
) => {
  const { data } = await apiClient.request<GetStudentResponse>({
    ...config,
    method: 'POST',
    url: `/api/upload/profile-image`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  })

  return data
}

const uploadCv = async (payload: FormData, config?: AxiosRequestConfig) => {
  const { data } = await apiClient.request<GetStudentResponse>({
    ...config,
    method: 'POST',
    url: `/api/upload/cv`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  })

  return data
}

export { uploadProfileImage, uploadCv }

import { apiClient } from './clients'

import type { AxiosRequestConfig } from 'axios'

const signUp = async (
  payload: {
    username: string
    name: string
    email: string
    password: string
    confirmPassword: string
    csrfToken: string
    code: string
    categoryId: number
  },
  config?: AxiosRequestConfig
) => {
  const { data } = await apiClient.request<void>({
    ...config,
    method: 'POST',
    url: '/api/auth/register',
    data: payload,
  })

  return data
}

export { signUp }

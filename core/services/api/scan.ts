import type { AxiosRequestConfig } from 'axios'

import { CV, CompanyCategory, User } from '@prisma/client'
import { apiClient } from './clients'

type ScanResponse = {
  company: {
    id: string
    name: string
    email: string
    category: CompanyCategory
    image?: string | null
  }
  student: {
    id: string
    age: number
    name: string
    email: string
    course?: string
    university?: string
    image?: string | null
    scans: number
    points: number
    companies?: {
      category: CompanyCategory
      user: Omit<User, 'emailVerified' | 'role'>
    }[]
    cv?: CV | null
  }
}

const scan = async (code?: string | string[], config?: AxiosRequestConfig) => {
  const { data } = await apiClient.request<ScanResponse>({
    ...config,
    method: 'POST',
    url: `/api/scan`,
    data: { code },
  })

  return data
}

export { scan }
export type { ScanResponse }

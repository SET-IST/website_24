import { ApiClient } from '@/core/services/client'
import { getCompanyProfile } from '@/lib/server/services/company'

// Get types from backend services
export type CompanyProfile = Awaited<ReturnType<typeof getCompanyProfile>>

export const fetchCompanyProfile = async (): Promise<CompanyProfile> => {
  const { data } = await ApiClient.get('company/profile')
  return data
}

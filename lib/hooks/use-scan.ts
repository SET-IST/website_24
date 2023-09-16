import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
//  Services
import { QueryCacheKeys } from '@/core/services/api'
import { ScanResponse, scan } from '@/core/services/api/scan'
import { useState } from 'react'

type ScanRequest = {
  code?: string | string[]
}

const useScan = (code?: string | string[]) => {
  const queryClient = useQueryClient()
  const [enabled, setEnabled] = useState<boolean>(false)
  const { data, isLoading, isSuccess, isError, error } = useQuery<
    ScanResponse,
    Error
  >(
    [QueryCacheKeys.SCAN],
    () => {
      setEnabled(true)
      return scan(code)
    },
    {
      enabled: !!code,
      retry: false,
      staleTime: Infinity,
    }
  )

  const {
    mutateAsync,
    isLoading: isScanLoading,
    isSuccess: isScanSuccess,
    isError: isScanError,
  } = useMutation({
    mutationFn: scan,
  })

  const scanCompany = (code: string) =>
    mutateAsync(code).then(async (res) => {
      await queryClient.invalidateQueries([
        QueryCacheKeys.SCAN,
        QueryCacheKeys.STUDENT_DATA,
      ])
      return res
    })

  return {
    data,
    enabled,
    isLoading,
    isSuccess,
    isError,
    error,
    scanCompany,
    isScanLoading,
    isScanSuccess,
    isScanError,
  }
}

export { useScan }
export type { ScanRequest, ScanResponse }

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
//  Services
import { QueryCacheKeys } from '@/core/services/api'
import { redeemAward, requestAward } from '@/core/services/api/awards'
import { ReedemResponse } from '../../server/awards'

const useRedeemAward = () => {
  const queryClient = useQueryClient()
  const { mutateAsync: redeemMutateAsync } = useMutation({
    mutationFn: redeemAward,
  })

  const redeem = async (token: string): Promise<ReedemResponse> => {
    const data = await redeemMutateAsync(token)
    await queryClient.invalidateQueries([QueryCacheKeys.AWARD])
    return data
  }

  return {
    redeem,
  }
}

const useAward = () => {
  const { data, isLoading, isSuccess, isError, error } = useQuery(
    [QueryCacheKeys.AWARD],
    requestAward
  )

  return {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
  }
}

export { useAward, useRedeemAward }

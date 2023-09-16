import { useMutation, useQueryClient } from '@tanstack/react-query'
//  Services
import { QueryCacheKeys } from '@/core/services/api'
import { uploadCv, uploadProfileImage } from '@/core/services/api/upload'

const useUpload = () => {
  const queryClient = useQueryClient()
  const { mutateAsync: cvMutateAsync } = useMutation({ mutationFn: uploadCv })
  const { mutateAsync: profileImageMutateAsync } = useMutation({
    mutationFn: uploadProfileImage,
  })

  const setCv = async (payload: FormData) => {
    return cvMutateAsync(payload).then(async () => {
      await queryClient.invalidateQueries([QueryCacheKeys.STUDENT_DATA])
    })
  }

  const setProfileImage = async (payload: FormData) => {
    return profileImageMutateAsync(payload).then(async () => {
      await queryClient.invalidateQueries([QueryCacheKeys.STUDENT_DATA])
    })
  }

  return {
    setCv,
    setProfileImage,
  }
}

export { useUpload }

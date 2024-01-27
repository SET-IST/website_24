import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import {
  CompanyProfile,
  StudentProfile,
  StudentProfilePatchResponse,
  fetchCompanyProfile,
  fetchStudentProfile,
  updateStudentProfile,
} from '@/lib/frontend/api'

import { UserType } from '@prisma/client'
import { useSession } from 'next-auth/react'
import { User } from 'next-auth'
import { useEdgeStore } from '@/lib/frontend/edgestore'
import { IPatchStudentProfile } from '@/lib/server/services/student'
import { FileWithPath } from '@mantine/dropzone'

export const useProfile = () => {
  const session = useSession()
  const user: User = session.data?.user

  return useQuery<StudentProfile | CompanyProfile, Error>(['Profile'], () => {
    return user.role === UserType.Company
      ? fetchCompanyProfile()
      : fetchStudentProfile()
  })
}

export type PatchStudentProfileWithFiles = IPatchStudentProfile & {
  profileImage?: FileWithPath
  cv?: FileWithPath
}

export const useUpdateProfile = (queryClient: QueryClient) => {
  // Blob API
  const { edgestore } = useEdgeStore()

  return useMutation<
    StudentProfilePatchResponse,
    Error,
    PatchStudentProfileWithFiles
  >({
    mutationFn: async (data: PatchStudentProfileWithFiles) => {
      if (data.profileImage) {
        await edgestore.profileImages.upload({ file: data.profileImage })
      }

      if (data.cv) {
        await edgestore.cvs.upload({
          file: data.cv,
          options: {
            manualFileName: data.cv.name,
          },
        })
      }

      const originalData = {
        ...data,
        profileImage: undefined,
        cv: undefined,
      }

      return updateStudentProfile(originalData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Profile'] })
    },
  })
}

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
//  Services
import { QueryCacheKeys } from '@/core/services/api'
import {
  getAllStudentCVs,
  getCompanyData,
  getStudentData,
  updateStudentData,
} from '@/core/services/api/userData'
//  Types

type UpdateUserDataRequest = {
  id: string
  age: number
  course?: string
  university?: string
}

const useUserData = ({ fetchStudent }: { fetchStudent: boolean }) => {
  const queryClient = useQueryClient()

  const { data: studentData, isLoading: isLoadingStudentData } = useQuery(
    [QueryCacheKeys.STUDENT_DATA],
    getStudentData,
    {
      enabled: fetchStudent,
    }
  )

  const {
    data: companyData,
    isLoading: isLoadingCompanyData,
    isError: isErrorCompanyData,
    error: companyDataError,
  } = useQuery([QueryCacheKeys.COMPANY_DATA], getCompanyData, {
    enabled: !fetchStudent,
  })

  const { data: studentCVs, isLoading: isLoadingStudentCVs } = useQuery(
    [QueryCacheKeys.STUDENT_CVS],
    getAllStudentCVs,
    { enabled: !fetchStudent }
  )

  const {
    mutateAsync,
    isLoading: isUpdateLoading,
    isSuccess: isUpdateSuccess,
    isError: isUpdateError,
  } = useMutation({
    mutationFn: updateStudentData,
  })

  const setStudentData = async (payload: UpdateUserDataRequest) => {
    return mutateAsync(payload).then(async () => {
      await queryClient.invalidateQueries([QueryCacheKeys.STUDENT_DATA])
    })
  }

  return {
    studentData,
    isLoadingStudentData,
    companyData,
    isLoadingCompanyData,
    isErrorCompanyData,
    companyDataError,
    studentCVs,
    isLoadingStudentCVs,
    setStudentData,
    isUpdateLoading,
    isUpdateSuccess,
    isUpdateError,
  }
}

export { useUserData }
export type { UpdateUserDataRequest }

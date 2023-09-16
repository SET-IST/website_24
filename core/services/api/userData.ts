import { apiClient } from './clients'
//  Types
import type { CompanyCategory, CV, User } from '@prisma/client'
import type { AxiosRequestConfig } from 'axios'

type StudentResponse = {
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

type UpdateStudentRequest = {
  id: string
  age: number
  course?: string
  university?: string
}

const getStudentData = async (config?: AxiosRequestConfig) => {
  const { data } = await apiClient.request<StudentResponse>({
    ...config,
    method: 'GET',
    url: '/api/student/me',
  })

  if (data.image) {
    try {
      const res = await apiClient.request({
        ...config,
        method: 'GET',
        url: `/api/resources/images/${data.image}`,
        responseType: 'blob',
      })

      data.image = URL.createObjectURL(res.data)
    } catch (e) {
      data.image = undefined
    }
  }

  if (data.companies && data.companies.length > 0) {
    data.companies = await Promise.all(
      data.companies.map(async (company) => {
        try {
          const res = await apiClient.request({
            ...config,
            method: 'GET',
            url: `/api/resources/images/${company.user.image}`,
            responseType: 'blob',
          })

          company.user.image = URL.createObjectURL(res.data)
        } catch (e) {
          company.user.image = null
        }
        return company
      })
    )
  }

  return data
}

type CompanyResponse = {
  id: string
  name: string
  email: string
  category: CompanyCategory
  image?: string | null
  students: {
    cv: CV | null
    course: string
    user: {
      name: string
      image?: string | null
    }
  }[]
}

const getCompanyData = async (config?: AxiosRequestConfig) => {
  const { data } = await apiClient.request<CompanyResponse>({
    ...config,
    method: 'GET',
    url: '/api/company/me',
  })

  if (data.image) {
    try {
      const res = await apiClient.request({
        ...config,
        method: 'GET',
        url: `/api/resources/images/${data.image}`,
        responseType: 'blob',
      })

      data.image = URL.createObjectURL(res.data)
    } catch (e) {
      data.image = undefined
    }
  }

  if (data.students.length > 0) {
    data.students = await Promise.all(
      data.students.map(async (student) => {
        try {
          const res = await apiClient.request({
            ...config,
            method: 'GET',
            url: `/api/resources/images/${student.user.image}`,
            responseType: 'blob',
          })

          student.user.image = URL.createObjectURL(res.data)
        } catch (e) {
          student.user.image = undefined
        }
        return student
      })
    )
  }

  return data
}

type AllStudentCV = {
  course: string
  cv: CV | null
  user: {
    name: string
  }
}

const getAllStudentCVs = async (config?: AxiosRequestConfig) => {
  const { data } = await apiClient.request<AllStudentCV[]>({
    ...config,
    method: 'GET',
    url: '/api/company/students/cv',
  })

  return data
}

const updateStudentData = async (
  payload: UpdateStudentRequest,
  config?: AxiosRequestConfig
) => {
  const params = {
    age: payload.age,
    university: payload.university,
    course: payload.course,
  }

  return await apiClient.request<void>({
    ...config,
    method: 'POST',
    url: `/api/student/external`,
    data: params,
  })
}

export { getAllStudentCVs, getCompanyData, getStudentData, updateStudentData }

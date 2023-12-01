import { CompanyCategory } from '@prisma/client'

type DeviceType = 'desktop' | 'tablet' | 'mobile'

type Company = {
  category: CompanyCategory
  user: User
}

type User = {
  id: string
  name: string
  email: string
  image?: string | null
}

type Cv = {
  cvLocation: string
  studentId: number
  student: StudentDetails
}

type StudentDetails = {
  id: string
  name: string
  email: string
  course: string
  image?: string | null
  scans: number
  points: number
  university: string
  age: number
  companies: Company[]
  cv: Cv
}

type ValuesProps = {
  age: number
  course?: string
  university?: string
}

type FormValuesProps = {
  name: string
  age: number
  course?: string
  university?: string
}

export type {
  DeviceType,
  StudentDetails,
  Company,
  User,
  Cv,
  ValuesProps,
  FormValuesProps,
}

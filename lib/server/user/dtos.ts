import { CompanyCategory, CV, User } from '@prisma/client'
import {
  IsBoolean,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator'

export interface StudentCompanyDetails {
  category: CompanyCategory
  user: Omit<User, 'emailVerified' | 'role' | 'readChangelog'>
}

export interface GetStudentResponse {
  id: string
  age: number
  name: string
  email: string
  course?: string
  university?: string
  image?: string | null
  scans: number
  points: number
  companies?: StudentCompanyDetails[]
  cv?: CV | null
}

export interface GetCompanyByIdResponse {
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

export interface GetAllStudentCVsResponse {
  course: string
  cv: CV | null
  user: {
    name: string
  }
}

export interface GetCompanyResponse {
  id: string
  name: string
  email: string
  category: CompanyCategory
  image?: string | null
}

export interface UploadImageResponse {
  url: string | string[]
}

export class ScanRequest {
  @IsUUID(4, { message: 'Invalid or missing code' })
  code!: string
}

/**
 * @see CompanyCode at database/prisma/schema.prisma
 */
export class GenerateQRRequest {
  @IsUUID(4, { message: 'Invalid or missing company id' })
  companyId!: string

  @IsOptional()
  @IsString()
  socketId?: string

  @IsBoolean({ message: 'Invalid or missing permanent value' })
  permanent!: boolean
}

export interface GenerateQRResponse {
  code: string
}

export class UpdateStudentRequest {
  @Min(18)
  @IsNumber()
  age!: number

  @IsString()
  university!: string

  @IsString()
  course!: string
}

export class CreateCompanyRequest {
  @IsString()
  name!: string

  @IsString()
  username!: string

  @IsEmail()
  email!: string

  @IsString()
  password!: string

  @Min(1)
  @Max(4)
  @IsNumber()
  categoryId!: number

  @IsString()
  code!: string
}

export interface ScanResponse {
  student: GetStudentResponse | undefined
  company: GetCompanyResponse
}

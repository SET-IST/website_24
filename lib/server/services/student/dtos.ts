import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator'

export interface IPatchStudentProfile {
  name?: string
  email?: string
  university?: string
  course?: string
  phoneNumber?: string
}

export class PatchStudentProfileDto implements IPatchStudentProfile {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsEmail()
  email?: string

  @IsOptional()
  @IsString()
  institutionCode?: string

  @IsOptional()
  @IsString()
  courseCode?: string

  @IsOptional()
  @IsPhoneNumber()
  phoneNumber?: string
}

import { IsEmail, IsOptional, IsString } from 'class-validator'

export interface IPatchStudentProfile {
  name?: string
  email?: string
  university?: string
  course?: string
}

export class PatchStudentProfileDto implements IPatchStudentProfile{
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
}

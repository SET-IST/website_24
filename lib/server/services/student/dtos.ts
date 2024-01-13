import { IsEmail, IsOptional, IsString } from 'class-validator'

export class PatchStudentProfileDto {
  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsEmail()
  email?: string

  @IsOptional()
  @IsString()
  university?: string

  @IsOptional()
  @IsString()
  course?: string
}

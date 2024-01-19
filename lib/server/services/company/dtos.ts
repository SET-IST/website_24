import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CompanyLoginRequest {
  @IsString()
  @IsNotEmpty()
  username!: string

  @IsString()
  @IsNotEmpty()
  password!: string
}

export class PatchCompanyProfileDto {
  @IsOptional()
  @IsString()
  image?: string

  @IsOptional()
  @IsString()
  name?: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsString()
  linkHref?: string
  
  @IsOptional()
  @IsString()
  linkText?: string
}

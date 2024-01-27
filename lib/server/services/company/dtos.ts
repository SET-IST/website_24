import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CompanyLoginRequest {
  @IsString()
  @IsNotEmpty()
  username!: string

  @IsString()
  @IsNotEmpty()
  password!: string
}

export interface IPatchCompanyProfile {
  name?: string
  description?: string
  linkHref?: string
  linkText?: string
}

export class PatchCompanyProfileDto implements IPatchCompanyProfile {
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

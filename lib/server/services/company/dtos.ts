import { IsNotEmpty, IsString } from 'class-validator'

export class CompanyLoginRequest {
  @IsString()
  @IsNotEmpty()
  username!: string

  @IsString()
  @IsNotEmpty()
  password!: string
}
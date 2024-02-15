import { IsNotEmpty, IsString, IsUUID } from 'class-validator'

export class PatchActivityDto {
  @IsNotEmpty()
  @IsString()
  action!: 'ENROLL' | 'CONFIRM' | 'DISCARD'

  @IsNotEmpty()
  @IsUUID()
  userId!: string
}

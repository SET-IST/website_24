import { AwardType } from '@prisma/client'
import { IsIn, IsPositive, IsUUID, Max } from 'class-validator'

export class UpdatePointsDto {
  @IsPositive()
  @Max(1000)
  points!: number
}

export class CreateAwardDto {
  @IsIn([AwardType.NORMAL, AwardType.SPECIAL])
  type!: AwardType
}

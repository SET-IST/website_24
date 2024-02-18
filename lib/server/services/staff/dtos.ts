import { AwardType } from '@prisma/client'
import { IsIn, IsInt, Max, Min } from 'class-validator'

export class UpdatePointsDto {
  @IsInt()
  @Min(0)
  @Max(1000)
  points!: number
}

export class CreateAwardDto {
  @IsIn([AwardType.NORMAL, AwardType.SPECIAL])
  type!: AwardType
}

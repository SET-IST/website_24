import { IsPositive, IsUUID, Max } from 'class-validator'

export class UpdatePointsDto {
  @IsPositive()
  @Max(1000)
  points!: number
}

import type { User } from '.prisma/client'
import { UserType } from '.prisma/client'
import { isUUID } from 'class-validator'
import {
  BadRequestException,
  Catch,
  createHandler,
  Delete,
  Param,
  Post,
} from 'next-api-decorators'
import { RequiresSession, Role } from '../../../core/middlewares/server'
import { handleApiException, UserData } from '../../../core/utils'
import * as Server from '../../../lib/server/awards'

@Catch(handleApiException)
class AwardsRoutes {
  @Post('/request')
  @RequiresSession()
  @Role(UserType.STUDENT, UserType.STAFF)
  public async requestAward(@UserData() user: User) {
    return await Server.requestAward(user.id)
  }

  @Delete('/redeem/:token')
  @RequiresSession()
  @Role(UserType.STAFF)
  public async redeemAward(@Param('token') awardToken: string) {
    if (!isUUID(awardToken, 4)) {
      throw new BadRequestException('Invalid or missing token parameter')
    }

    return await Server.redeemAward(awardToken)
  }
}

export default createHandler(AwardsRoutes)

import { handleApiException } from '@/core/utils'
import {
  BadRequestException,
  Body,
  Catch,
  Get,
  Param,
  Patch,
  Query,
  createHandler,
} from 'next-api-decorators'
import {
  RequiresSession,
  RestrictedValidationPipe,
  Role,
} from '@/lib/server/middleware'
import * as StaffService from '@/lib/server/services/staff'
import { isUUID } from 'class-validator'

@Catch(handleApiException)
@RequiresSession()
@Role('Staff')
class StaffRoutes {
  @Get('/users')
  public async searchUser(@Query('search') query: string) {
    return await StaffService.searchUser(query)
  }

  @Get('/users/:uuid')
  public async getUserDetails(@Param('uuid') uuid: string) {
    if (!isUUID(uuid)) throw new BadRequestException('Invalid user id')
    return await StaffService.getUserDetails(uuid)
  }

  @Patch('/users/:uuid/set-points')
  public async setStudentPoints(
    @Param('uuid') uuid: string,
    @Body(RestrictedValidationPipe) data: StaffService.UpdatePointsDto
  ) {
    if (!isUUID(uuid)) throw new BadRequestException('Invalid user id')
    return await StaffService.setStudentPoints(uuid, data)
  }
}

export default createHandler(StaffRoutes)

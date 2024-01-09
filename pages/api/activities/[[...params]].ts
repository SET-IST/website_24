import {
  createHandler,
  Get,
  Param,
  Patch,
  Post,
  Body,
  ValidationPipe,
  Req,
  Res,
  BadRequestException,
} from 'next-api-decorators'
import type { NextApiRequest, NextApiResponse } from 'next'
import * as Server from '../../../lib/server/services/activities'
import { RequiresSession, Role } from '@/lib/server/middleware'
import { UserData } from '@/core/utils'
import type { User } from '@prisma/client'
import { isNumberString } from 'class-validator'

class ActivitiesRoutes {
  @Get()
  public async getActivities(
    @Req() req: NextApiRequest,
    @Res() res: NextApiResponse
  ) {
    return await Server.getActivities(req, res)
  }

  @Post('/:id/enroll')
  @RequiresSession()
  @Role('Student', 'Staff')
  public async enrollStudent(
    @UserData() user: User,
    @Param('id') activityId: string
  ) {
    if (!isNumberString(activityId))
      throw new BadRequestException('Invalid activity id')
    return await Server.enrollStudent(user, Number(activityId))
  }

  @Post('/:id/cancel')
  @RequiresSession()
  @Role('Student', 'Staff')
  public async removeStudent(
    @UserData() user: User,
    @Param('id') activityId: string
  ) {
    if (!isNumberString(activityId))
      throw new BadRequestException('Invalid activity id')
    return await Server.removeStudent(user, Number(activityId))
  }

  @Get('/manage/:id')
  @RequiresSession()
  @Role('Staff')
  public async activityManagement(@Param('id') activityId: string) {
    if (!isNumberString(activityId))
      throw new BadRequestException('Invalid activity id')
    return await Server.activityManagement(Number(activityId))
  }

  @Patch('/manage/:id')
  @RequiresSession()
  @Role('Staff')
  public async patchEnrollment(
    @Param('id') activityId: string,
    @Body(ValidationPipe) body: Server.PatchActivityDto
  ) {
    if (!isNumberString(activityId))
      throw new BadRequestException('Invalid activity id')
    return await Server.patchEnrollment(Number(activityId), body)
  }
}

export default createHandler(ActivitiesRoutes)

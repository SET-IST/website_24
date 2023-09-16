import { handleApiException, UserData } from '@/core/utils'
import * as Server from '@/lib/server/user'
import { UpdateStudentRequest } from '@/lib/server/user'
import { isEmpty, isUUID } from 'class-validator'
import {
  BadRequestException,
  Body,
  Catch,
  createHandler,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from 'next-api-decorators'
//  Types
import { RequiresSession, Role } from '@/core/middlewares/server'
import type { User } from '@prisma/client'
import { UserType } from '@prisma/client'

@Catch(handleApiException)
@RequiresSession()
class UserRoutes {
  @Get('/me')
  @Role(UserType.STUDENT, UserType.STAFF)
  public async getMe(@UserData() user: User) {
    if (isEmpty(user.id) || !isUUID(user.id, 4)) {
      throw new BadRequestException('Invalid or missing id parameter')
    }
    return await Server.getStudentById(user.id, true)
  }

  @Get('/:id')
  public async getStudentById(@Param('id') id: string) {
    if (isEmpty(id) || !isUUID(id, 4)) {
      throw new BadRequestException('Invalid or missing id parameter')
    }
    return await Server.getStudentById(id, false)
  }

  @Patch('/:id')
  @Role(UserType.STAFF)
  async updateStudentById(
    @Param('id') id: string,
    @Body(ValidationPipe) payload: UpdateStudentRequest
  ) {
    if (isEmpty(id) || !isUUID(id, 4)) {
      throw new BadRequestException('Invalid or missing id parameter')
    }
    return await Server.updateExternalStudent(id, payload)
  }

  @Post('/external')
  @Role(UserType.STUDENT, UserType.STAFF)
  async updateExternalStudent(
    @UserData() user: User,
    @Body(ValidationPipe) extReq: UpdateStudentRequest
  ) {
    await Server.updateExternalStudent(user.id, extReq)
  }
}

export default createHandler(UserRoutes)

import type { User } from '.prisma/client'
import { UserType } from '.prisma/client'
import {
  Body,
  Catch,
  createHandler,
  Post,
  ValidationPipe,
} from 'next-api-decorators'
import { RequiresSession, Role } from '../../../core/middlewares/server'
import { handleApiException, UserData } from '../../../core/utils'
import * as Server from '../../../lib/server/user'

@Catch(handleApiException)
@RequiresSession()
class ScanRoutes {
  @Post()
  @Role(UserType.Student, UserType.Staff)
  public async scan(
    @UserData() user: User,
    @Body(ValidationPipe) scanReq: Server.ScanRequest
  ) {
    return await Server.scan(user.id, scanReq)
  }
}

export default createHandler(ScanRoutes)

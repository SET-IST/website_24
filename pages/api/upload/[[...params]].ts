import { Catch, createHandler, Post, Req, Res } from 'next-api-decorators'
import { RequiresSession, Role } from '../../../core/middlewares/server'
import { handleApiException, UserData } from '../../../core/utils'
import * as Server from '../../../lib/server/user'
//  Types
import type { User } from '.prisma/client'
import { UserType } from '.prisma/client'
import type { Request, Response } from 'express'

@Catch(handleApiException)
@RequiresSession()
class UploadRoutes {
  @Post('/profile-image')
  async uploadImage(
    @UserData() user: User,
    @Req() req: Request,
    @Res() res: Response
  ) {
    return await Server.uploadImage(user.id, req, res)
  }

  @Post('/cv')
  @Role(UserType.STUDENT, UserType.STAFF)
  async uploadStudentCv(
    @UserData() user: User,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const requ: Request = req
    return await Server.uploadCv(user.id, requ, res)
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default createHandler(UploadRoutes)

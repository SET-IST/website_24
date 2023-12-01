import type { User } from '.prisma/client'
import { UserType } from '.prisma/client'
import { isEmpty, isUUID } from 'class-validator'
import {
  BadRequestException,
  Body,
  Catch,
  Get,
  Param,
  Post,
  ValidationPipe,
  createHandler,
} from 'next-api-decorators'
import { RequiresSession, Role } from '../../../core/middlewares/server'
import { UserData, handleApiException } from '../../../core/utils'
import * as Server from '../../../lib/server/user'
import { GenerateQRRequest } from '../../../lib/server/user'

@Catch(handleApiException)
@RequiresSession()
class CompanyRoutes {
  @Get('/me')
  @Role(UserType.Company)
  async getMe(@UserData() user: User) {
    return await Server.getCompanyById(user.id)
  }

  @Get('/:id')
  public async getCompanyById(@Param('id') id: string) {
    if (isEmpty(id) || !isUUID(id, 4)) {
      throw new BadRequestException('Invalid or missing id parameter')
    }

    return await Server.getCompanyById(id)
  }

  @Get('/students/cv')
  @Role(UserType.Company, UserType.Staff)
  async getAllStudentsCV(@UserData() user: User) {
    return await Server.getAllStudentCVs(user.id)
  }

  @Get('/students')
  @Role(UserType.Company, UserType.Staff)
  public async getCompanyStudents(@UserData() user: User) {
    return await Server.getCompanyStudents(user.id)
  }

  @Post('/qr')
  @Role(UserType.Company, UserType.Staff)
  public async generateQR(@Body(ValidationPipe) qrReq: GenerateQRRequest) {
    return await Server.generateQR(qrReq)
  }
}
export default createHandler(CompanyRoutes)

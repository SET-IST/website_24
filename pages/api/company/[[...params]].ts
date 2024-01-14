import { handleApiException } from '@/core/utils'
import { CompanyLoginRequest } from '@/lib/server/services/company/dtos'
import {
  Body,
  Catch,
  Post,
  ValidationPipe,
  Get,
  createHandler,
} from 'next-api-decorators'
import * as CompanyService from '@/lib/server/services/company'
import {
  RequiresSession,
  RestrictedValidationPipe,
  Role,
} from '@/lib/server/middleware'
import type { User } from '@prisma/client'
import { UserData } from '@/core/utils'
import * as Server from '../../../lib/server/services/company'

@Catch(handleApiException)
class CompanyRoutes {
  @Post('login')
  public async login(@Body(RestrictedValidationPipe) req: CompanyLoginRequest) {
    return await CompanyService.login(req)
  }

  @Get('/profile')
  @RequiresSession()
  @Role('Company')
  public async getCompanyProfile(@UserData() user: User) {
    return await Server.getCompanyProfile(user)
  }
}

export default createHandler(CompanyRoutes)

import { handleApiException } from '@/core/utils'
import { CompanyLoginRequest, PatchCompanyProfileDto } from '@/lib/server/services/company/dtos'
import {
  Body,
  Catch,
  Post,
  Get,
  createHandler,
  Patch,
} from 'next-api-decorators'
import * as CompanyService from '@/lib/server/services/company'
import {
  RequiresSession,
  RestrictedValidationPipe,
  Role,
} from '@/lib/server/middleware'
import type { User } from '@prisma/client'
import { UserData } from '@/core/utils'

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
    return await CompanyService.getCompanyProfile(user)
  }

  @Patch('/profile')
  @RequiresSession()
  @Role('Company')
  public async updateCompanyProfile(
    @UserData() user: User, 
    @Body(RestrictedValidationPipe) req: PatchCompanyProfileDto) {
      return await CompanyService.patchCompanyProfile(user,req)
  }

}

export default createHandler(CompanyRoutes)

import { handleApiException } from '@/core/utils'
import { CompanyLoginRequest } from '@/lib/server/services/company/dtos'
import {
  Body,
  Catch,
  Post,
  ValidationPipe,
  createHandler,
} from 'next-api-decorators'
import * as CompanyService from '@/lib/server/services/company'

@Catch(handleApiException)
class CompanyRoutes {
  @Post('login')
  public async login(@Body(ValidationPipe) req: CompanyLoginRequest) {
    return await CompanyService.login(req)
  }
}

export default createHandler(CompanyRoutes)

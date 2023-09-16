import { handleApiException } from '@/core/utils'
import { CreateCompanyRequest } from '@/lib/server/user'
import {
  Body,
  Catch,
  Post,
  ValidationPipe,
  createHandler,
} from 'next-api-decorators'
import * as Server from '../../../lib/server/user'

@Catch(handleApiException)
class AuthRoutes {
  @Post('/')
  public async createCompany(
    @Body(ValidationPipe) payload: CreateCompanyRequest
  ) {
    return await Server.createCompany(payload)
  }
}

export default createHandler(AuthRoutes)

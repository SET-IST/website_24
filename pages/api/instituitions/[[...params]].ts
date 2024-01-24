import { handleApiException } from '@/core/utils'
import {
  BadRequestException,
  Catch,
  Get,
  Param,
  createHandler,
} from 'next-api-decorators'
import * as InstituitionService from '@/lib/server/services/institutions'
import { isNumberString } from 'class-validator'


@Catch(handleApiException)
class InstituionRoutes{
  @Get()
  public getInstitutions(){
    return InstituitionService.getInstitutions()
  }

  @Get('/:instituitionCode')
  public getCourses(@Param('instituitionCode') instituitionCode: string){
    if(!isNumberString(instituitionCode) && instituitionCode.length !== 4) throw new BadRequestException('Invalid instituition code')
    return InstituitionService.getCourses(instituitionCode)
  } 

}

export default createHandler(InstituionRoutes)
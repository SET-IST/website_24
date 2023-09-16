import type { User } from '.prisma/client'
import type { NextApiResponse } from 'next'
import {
  Catch,
  createHandler,
  Download,
  Get,
  Param,
  Res,
} from 'next-api-decorators'
import { RequiresSession } from '../../../core/middlewares/server'
import { handleApiException, UserData } from '../../../core/utils'
import * as Server from '../../../lib/server/resources'

@Catch(handleApiException)
@RequiresSession()
class ResourcesRoutes {
  @Get('/cvs/:key')
  @Download()
  public async retrieveCV(@UserData() user: User, @Param('key') key: string) {
    return await Server.retrieveCV(user, key)
  }

  @Get('/images/:key')
  public async retrieveImage(
    @Param('key') key: string,
    @Res() res: NextApiResponse
  ) {
    await Server.retrieveImage(key, res)
  }
}

export default createHandler(ResourcesRoutes)

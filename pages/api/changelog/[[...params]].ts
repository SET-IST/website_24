import { handleApiException, UserData } from '@/core/utils'
import * as Server from '@/lib/server/changelog'
import { Catch, createHandler, Post } from 'next-api-decorators'
//  Types
import { RequiresSession } from '@/core/middlewares/server'
import type { User } from '@prisma/client'

@Catch(handleApiException)
@RequiresSession()
class ChangelogRoutes {
  @Post('/check')
  public async checkChangelog(@UserData() user: User) {
    return await Server.checkChangelog(user.id)
  }
}

export default createHandler(ChangelogRoutes)

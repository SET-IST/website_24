import type { NextApiResponseWithSocket } from '@/core/services/server'
import { handleApiException } from '@/core/utils'
import * as Server from '@/lib/server/websocket'
import type { NextApiRequest } from 'next'
import { Catch, createHandler, Get, Req, Res } from 'next-api-decorators'

@Catch(handleApiException)
class WebsocketRoutes {
  @Get()
  public handleWebsocketConnection(
    @Req() req: NextApiRequest,
    @Res() res: NextApiResponseWithSocket
  ) {
    Server.handleWebsocketConnection(req, res)
    res.end()
  }
}

export default createHandler(WebsocketRoutes)

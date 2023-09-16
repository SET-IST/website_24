import {
  NextApiResponseWithSocket,
  PrismaService,
  WebsocketService,
} from '@/core/services/server'
import { NextApiRequest } from 'next'

/**
 * Initialize and inject Websocket into the connection
 * @param req api request object
 * @param res api response object with socket
 */
export function handleWebsocketConnection(
  req: NextApiRequest,
  res: NextApiResponseWithSocket
) {
  WebsocketService.initialize(res, (io) => {
    io.on('connection', (socket) => {
      console.log('Got connection from:', socket.id)

      socket.on('disconnect', async (msg) => {
        console.log(`Client ${socket.id} disconnected`)

        // Try to delete company code
        try {
          const code = await PrismaService.companyCode.findFirst({
            where: {
              socketId: socket.id,
              permanent: false,
            },
          })

          if (code) {
            await PrismaService.companyCode.delete({
              where: {
                id: code.id,
              },
            })
          }
        } catch (e) {}
      })
    })
  })
}

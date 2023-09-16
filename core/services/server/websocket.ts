import type { Server as HTTPServer } from 'http'
import type { Socket as NetSocket } from 'net'
import type { NextApiResponse } from 'next'
import { Server as IOServer } from 'socket.io'

interface SocketServer extends HTTPServer {
  io?: IOServer | undefined
}

interface SocketWithIO extends NetSocket {
  server: SocketServer
}

export interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO
}

export class WebsocketService {
  public static initialize(
    res: NextApiResponseWithSocket,
    registerListenersFn: (io: IOServer) => void
  ) {
    if (!res.socket.server.io) {
      if (!global.socketio) {
        console.log('Socket is initializing...')
        const io = new IOServer(res.socket.server)
        console.log('Socket is registering listeners...')
        registerListenersFn(io)
        res.socket.server.io = io
      } else {
        res.socket.server.io = global.socketio
      }
    }

    if (!global.socketio) {
      global.socketio = res.socket.server.io
    }
  }

  public static getInstance() {
    return global.socketio
  }
}

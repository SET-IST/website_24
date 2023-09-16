import { S3Client } from '@aws-sdk/client-s3'
import { PrismaClient } from '@prisma/client'
import { Redis } from 'ioredis'
import { StorageEngine } from 'multer'
import { Server as IOServer } from 'socket.io'

declare global {
  var prisma: PrismaClient
  var redis: Redis
  var socketio: IOServer
  var s3Storage: StorageEngine
  var s3Client: S3Client
}

export {}

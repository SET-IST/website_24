import { S3Client } from '@aws-sdk/client-s3'
import { LoggerCore } from './logger-scopes'

let s3Client: S3Client

function createNewClient(): S3Client {
  return new S3Client({
    credentials: {
      accessKeyId: process.env.ES_AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.ES_AWS_SECRET_ACCESS_KEY!,
    },
    region: 'pt',
    endpoint: process.env.EDGE_STORE_BASE_URL,
    forcePathStyle: true,
  })
}

if (process.env.NODE_ENV === 'production') {
  s3Client = createNewClient()
  LoggerCore.success('Started S3ClientService')
} else {
  if (!global.s3Client) {
    global.s3Client = createNewClient()
    LoggerCore.success('Started S3ClientService')
  }

  s3Client = global.s3Client
}

export { s3Client as S3ClientService }

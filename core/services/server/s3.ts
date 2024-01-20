import { S3Client } from '@aws-sdk/client-s3'



let s3Client: S3Client

function createNewClient(): S3Client {
  return new S3Client({
    credentials: {
      accessKeyId: process.env.S3_ACS_KEY!,
      secretAccessKey: process.env.S3_ACS_SCRT!,
    },
    region: 'pt',
    endpoint: `http://${process.env.S3_HOST}:9000`,
    forcePathStyle: true,
  })
}

if (process.env.NODE_ENV === 'production') {
  s3Client = createNewClient()
} else {
  if (!global.s3Client) {
    global.s3Client = createNewClient()
  }

  s3Client = global.s3Client
}

export { s3Client as S3ClientService }

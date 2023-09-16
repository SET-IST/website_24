import { S3Client } from '@aws-sdk/client-s3'
import { randomUUID } from 'crypto'
import { StorageEngine } from 'multer'
import multerS3 from 'multer-s3'
import { extname } from 'path'

let s3Storage: StorageEngine
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

function createNewInstance(client: S3Client): StorageEngine {
  return multerS3({
    s3: client,
    bucket: 'cvs',
    metadata: (req, file, cb) => {
      cb(null, { fieldname: file.fieldname })
    },
    key: (req, file, cb) => {
      const fileName = randomUUID() + extname(file.originalname)
      cb(null, fileName)
    },
  })
}

if (process.env.NODE_ENV === 'production') {
  s3Client = createNewClient()
  s3Storage = createNewInstance(s3Client)
} else {
  if (!global.s3Client) {
    global.s3Client = createNewClient()
  }

  if (!global.s3Storage) {
    global.s3Storage = createNewInstance(global.s3Client)
  }

  s3Client = global.s3Client
  s3Storage = global.s3Storage
}

export { s3Storage as S3StorageService, s3Client as S3ClientService }

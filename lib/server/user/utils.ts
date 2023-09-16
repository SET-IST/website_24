import { S3StorageService } from '@/core/services/server'
import multer, { FileFilterCallback, MulterError, Options } from 'multer'
import { extname } from 'path'
import { promisify } from 'util'

interface SanitizerConfig {
  allowedFileExts: string[]
  allowedMimetype: string
}

function sanitizeFile(
  file: Express.Multer.File,
  cb: FileFilterCallback,
  config: SanitizerConfig
) {
  // Check allowed extensions
  const isAllowedExt = config.allowedFileExts.includes(
    extname(file.originalname.toLowerCase())
  )

  // Check mimetype
  const isAllowedMimeType = file.mimetype.startsWith(
    `${config.allowedMimetype}`
  )

  if (isAllowedExt && isAllowedMimeType) {
    return cb(null, true) // no errors
  } else {
    // pass error msg to callback, which can be displaye in frontend
    cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'File type not allowed'))
  }
}

const uploadImageConfig: Options = {
  storage: S3StorageService,
  fileFilter: (req, file, callback) =>
    sanitizeFile(file, callback, {
      allowedFileExts: ['.png', '.jpg', '.jpeg'],
      allowedMimetype: 'image/',
    }),
  limits: {
    fileSize: 1024 * 1024 * 4, // 4mb max file size
  },
}

const uploadCVConfig: Options = {
  storage: S3StorageService,
  fileFilter: (req, file, callback) =>
    sanitizeFile(file, callback, {
      allowedFileExts: ['.pdf'],
      allowedMimetype: 'application/pdf',
    }),
  limits: {
    fileSize: 1024 * 1024 * 200, // 200mb max file size
  },
}

export const processUploadProfileImage = promisify(
  multer(uploadImageConfig).single('media')
)
export const processUploadCV = promisify(multer(uploadCVConfig).single('media'))

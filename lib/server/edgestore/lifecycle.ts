import { S3Client } from '@aws-sdk/client-s3'
import { updateCV, updateProfileImage } from '../services/storage'

type Metadata = Record<string, string | undefined | null>

const enum Buckets {
  ProfileImages = 'profileImages',
  Cvs = 'cvs',
}

export async function afterUploadRequest(
  esBucketName: string,
  path: string,
  metadata: Metadata
) {
  switch (esBucketName) {
    case Buckets.ProfileImages:
      await updateProfileImage({
        path,
        userId: metadata.userId!,
      })
      break
    case Buckets.Cvs:
      await updateCV({
        path,
        userId: metadata.userId!,
      })
      break
    default:
      break
  }
}

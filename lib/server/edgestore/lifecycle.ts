import { S3Client } from '@aws-sdk/client-s3'
import { updateCV, updateProfileImage } from '../services/storage'

type Metadata = Record<string, string | undefined | null>

const enum Buckets {
  ProfileImages = 'profileImages',
  Cvs = 'cvs',
}

export async function afterUploadRequest(
  esBucketName: string,
  url: string,
  metadata: Metadata
) {
  switch (esBucketName) {
    case Buckets.ProfileImages:
      await updateProfileImage({
        url: url,
        userId: metadata.userId!,
      })
      break
    case Buckets.Cvs:
      await updateCV({
        url: url,
        userId: metadata.userId!,
      })
      break
    default:
      break
  }
}

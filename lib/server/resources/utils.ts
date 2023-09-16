import { S3ClientService } from '@/core/services/server'
import { handleS3Exception } from '@/core/utils'
import {
  DeleteObjectCommand,
  GetObjectCommand,
  GetObjectCommandOutput,
} from '@aws-sdk/client-s3'
import {
  ForbiddenException,
  InternalServerErrorException,
} from 'next-api-decorators'
import { extname } from 'path'

export function checkKey(key: string, allowedFileExts: string[]) {
  if (allowedFileExts.includes(extname(key.toLowerCase()))) {
    return key
  } else {
    throw new ForbiddenException(
      `The resource ${key} cannot be accessed from this endpoint`
    )
  }
}

export async function getS3Object(
  key: string
): Promise<GetObjectCommandOutput | undefined> {
  const command = new GetObjectCommand({
    Bucket: process.env.S3_BUCKET!,
    Key: key,
  })

  try {
    const response = await S3ClientService.send(command)
    return response
  } catch (e) {
    handleS3Exception(e)
  }
}

export async function removeS3Object(key: string) {
  const command = new DeleteObjectCommand({
    Bucket: process.env.S3_BUCKET!,
    Key: key,
  })

  try {
    await S3ClientService.send(command)
  } catch (e) {
    handleS3Exception(e)
  }
}

export async function createFileBuffer(
  key: string,
  response: GetObjectCommandOutput
): Promise<Buffer> {
  if (!response.Body) {
    throw new InternalServerErrorException(
      `Unable to create file buffer of ${key}: Body is null`
    )
  }

  const byteArray = await response.Body.transformToByteArray()

  return Buffer.from(byteArray)
}

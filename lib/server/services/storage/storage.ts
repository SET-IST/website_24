import { databaseQueryWrapper } from '@/core/utils'
import { UpdateAWSEntry } from './dtos'
import { PrismaService, S3ClientService } from '@/core/services/server'
import { DeleteObjectCommand } from '@aws-sdk/client-s3'

// Currently EdgeStore doesn't support backend clients, therefore we need to duplicate methods

async function deleteFile(path: string) {
  await S3ClientService.send(
    new DeleteObjectCommand({
      Bucket: process.env.ES_AWS_BUCKET_NAME,
      Key: path,
    })
  )
  return {
    success: true,
  }
}

export async function updateProfileImage(data: UpdateAWSEntry) {
  return await databaseQueryWrapper(async () => {
    const user = await PrismaService.user.findUnique({
      where: {
        id: data.userId,
      },
    })

    if (user?.image) {
      await deleteFile(user.image)
    }

    await PrismaService.user.update({
      where: {
        id: data.userId,
      },
      data: {
        image: data.path,
      },
    })
  })
}

export async function updateCV(data: UpdateAWSEntry) {
  return await databaseQueryWrapper(async () => {
    await PrismaService.studentDetails.update({
      where: {
        userId: data.userId,
      },
      data: {
        cvLocation: data.path,
      },
    })
  })
}

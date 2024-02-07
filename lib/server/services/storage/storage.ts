import { databaseQueryWrapper } from '@/core/utils'
import { UpdateAWSEntry } from './dtos'
import { PrismaService } from '@/core/services/server'
import { deleteFile } from '@/lib/server/utils'

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

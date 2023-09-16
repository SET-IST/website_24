import { PrismaService } from '@/core/services/server'
import { databaseQueryWrapper } from '@/core/utils'

export async function checkChangelog(id: string) {
  await databaseQueryWrapper(async () => {
    await PrismaService.user.update({
      where: {
        id: id,
      },
      data: {
        readChangelog: true,
      },
    })
  })
}

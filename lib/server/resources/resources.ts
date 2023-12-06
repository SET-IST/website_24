import { PrismaService } from '@/core/services/server'
import { databaseQueryWrapper } from '@/core/utils'
import { CompanyCategory, User, UserType } from '@prisma/client'
import { NextApiResponse } from 'next'
import { DownloadFileResult, ForbiddenException } from 'next-api-decorators'
import { checkKey, createFileBuffer, getS3Object } from './utils'

export async function retrieveCV(
  user: User,
  key: string
): Promise<DownloadFileResult | undefined> {
  return await databaseQueryWrapper(async () => {
    // Check permissions

    if (user.role === UserType.Company) {
      // Check company rank

      const company = await PrismaService.companyDetails.findUnique({
        where: {
          userId: user.id,
        },
      })

      if (company?.category !== CompanyCategory.Platinum) {
        throw new ForbiddenException(
          'Company does not have the required privilege'
        )
      }
    } else {
      // Check userId associated to S3 Key

      const originalUser = await PrismaService.studentDetails.findUnique({
        where: {
          userId: user.id,
        },
        include: {
          cv: true,
        },
      })

      if (originalUser?.cv?.cvLocation !== key) {
        throw new ForbiddenException(
          'User does not have access to this resource'
        )
      }
    }

    const response = await getS3Object(checkKey(key, ['.pdf']))

    return {
      filename: key,
      contents: await createFileBuffer(key, response!),
      contentType: 'application/pdf',
    }
  })
}

export async function retrieveImage(key: string, res: NextApiResponse) {
  const response = await getS3Object(checkKey(key, ['.png', '.jpg', '.jpeg']))

  res.setHeader('Content-Type', response!.ContentType as string)
  res.send(await createFileBuffer(key, response!))
}

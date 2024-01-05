import { databaseQueryWrapper } from '@/core/utils'
import { CompanyLoginRequest } from './dtos'
import { PrismaService } from '@/core/services/server'
import { isSamePass } from '@/core/utils/auth'
import { UnauthorizedException } from 'next-api-decorators'
import { User } from 'next-auth'

export async function login(
  req: CompanyLoginRequest
): Promise<User | undefined> {
  return await databaseQueryWrapper(async () => {
    // Retrieve company
    const company = await PrismaService.companyDetails.findUniqueOrThrow({
      where: {
        username: req.username,
      },
      include: {
        user: true,
      },
    })

    // Check password
    if (!(await isSamePass(req.password, company.password)))
      throw new UnauthorizedException('Invalid credentials')

    return {
      id: company.userId,
      role: company.user.role,
      readChangelog: company.user.readChangelog,
      name: company.user.name,
      email: company.user.email,
      image: company.user.image,
    }
  })
}

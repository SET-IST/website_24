import { compare, hash } from 'bcrypt'
import { DateTime } from 'luxon'
import { TokenEndpointHandler } from 'next-auth/providers'
import { PrismaService } from '../services/server'
import { databaseQueryWrapper } from './db-query-wrapper'

export const fromDate = (time: any, date = Date.now()) => {
  return new Date(date + time * 1000)
}

export function isTokenEndpointHandler(x: any): x is TokenEndpointHandler {
  return x && typeof x !== 'string'
}

export function getAge(birthDate: string): number {
  return Math.floor(
    DateTime.local().diff(DateTime.fromFormat(birthDate, 'dd/MM/yyyy'), 'years')
      .years
  )
}

/**
 * Create a credentials account for the supplied company
 * @param id company id
 */
export async function signupCompany(id: string) {
  await databaseQueryWrapper(async () => {
    const account = await PrismaService.account.create({
      data: {
        userId: id,
        type: 'credentials',
        provider: 'credentials',
        providerAccountId: id,
      },
    })
    if (!account) {
      throw new Error('Error creating account')
    }
  })
}

// Use for generating new hashes
export async function hashPass(plain: string) {
  const hashResult = await hash(plain, 10)
  return hashResult
}

export async function isSamePass(plain: string, hashed: string) {
  return await compare(plain, hashed)
}

const CompanyCategories: { [id: number]: string } = {
  1: 'Platina',
  2: 'Gold',
  3: 'Silver',
  4: 'Partner',
}

export function getCategoryName(id: number) {
  return CompanyCategories[id] || 'Silver'
}

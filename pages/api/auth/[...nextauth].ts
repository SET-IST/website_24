import NextAuth from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'
import { AuthOptions } from '@/lib/server/auth'

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, AuthOptions(req, res))
}

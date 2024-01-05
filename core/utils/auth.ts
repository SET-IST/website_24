import { compare, hash } from 'bcrypt'

// Use for generating new hashes
export async function hashPass(plain: string) {
  const hashResult = await hash(plain, 10)
  return hashResult
}

// Use for validating passwords
export async function isSamePass(plain: string, hashed: string) {
  return await compare(plain, hashed)
}

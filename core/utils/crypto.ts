import { plainToInstance } from 'class-transformer'
import { IsHexadecimal } from 'class-validator'
import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

export class Payload {
  @IsHexadecimal()
  iv!: string

  @IsHexadecimal()
  data!: string
}

/**
 * Encrypts string using NEXT AUTH secret
 * @param data
 * @returns payload object with iv and encrypted data
 */
export function encrypt(data: string): Payload {
  if (!process.env.NEXTAUTH_SECRET) {
    throw new Error('Missing NEXTAUTH_SECRET')
  }

  const iv = randomBytes(16)
  let cipher = createCipheriv(
    'aes-256-cbc',
    Buffer.from(process.env.NEXTAUTH_SECRET, 'base64'),
    iv
  )
  let encrypted = cipher.update(data)
  encrypted = Buffer.concat([encrypted, cipher.final()])
  return plainToInstance(Payload, {
    iv: iv.toString('hex'),
    data: encrypted.toString('hex'),
  })
}

/**
 * Decrypts payload object using NEXT AUTH secret
 * @param payload
 * @returns decrypted string
 */
export function decrypt(payload: Payload): string {
  if (!process.env.NEXTAUTH_SECRET) {
    throw new Error('Missing NEXTAUTH_SECRET')
  }

  let iv = Buffer.from(payload.iv, 'hex')
  let encryptedText = Buffer.from(payload.data, 'hex')
  let decipher = createDecipheriv(
    'aes-256-cbc',
    Buffer.from(process.env.NEXTAUTH_SECRET, 'base64'),
    iv
  )
  let decrypted = decipher.update(encryptedText)
  decrypted = Buffer.concat([decrypted, decipher.final()])
  return decrypted.toString()
}

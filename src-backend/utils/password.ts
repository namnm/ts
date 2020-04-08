import { Buffer } from 'buffer'
import crypto from 'crypto'

const saltLen = 16
const iterations = 100000
const keyLen = 64
const digest = 'sha512'

const hashPassword = (password: string): string => {
  const salt = crypto.randomBytes(saltLen)
  const hash = crypto.pbkdf2Sync(password, salt, iterations, keyLen, digest)
  const combined = Buffer.alloc(saltLen + keyLen)
  salt.copy(combined)
  hash.copy(combined, saltLen)
  return combined.toString('base64')
}

const comparePassword = (password: string, hashedPassword: string): boolean => {
  const combined = Buffer.from(hashedPassword, 'base64')

  if (combined.length !== saltLen + keyLen) {
    return false
  }

  const salt = combined.slice(0, saltLen)
  const hash = combined.slice(saltLen, combined.length)
  const hash2 = crypto.pbkdf2Sync(password, salt, iterations, keyLen, digest)
  const order = Buffer.compare(hash, hash2)
  return order === 0
}

export { hashPassword, comparePassword }

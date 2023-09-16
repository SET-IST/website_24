import { handleDatabaseException } from './db-exceptions-handler'

// 100% written by the holy ChatGPT
export const databaseQueryWrapper = async <T extends Array<any>, U>(
  fn: (...args: T) => Promise<U | undefined>,
  ...args: T
) => {
  try {
    return await fn(...args)
  } catch (e) {
    handleDatabaseException(e)
  }
}

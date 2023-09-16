import { NextApiRequest, NextApiResponse } from 'next'
import { HttpException } from 'next-api-decorators'

export function handleApiException(
  error: HttpException,
  req: NextApiRequest,
  res: NextApiResponse
) {
  const message =
    error instanceof Error ? error.message : 'An unknown error occurred.'
  res.status(error.statusCode).json({ error: message })
}

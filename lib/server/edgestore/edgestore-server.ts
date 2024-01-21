import { createEdgeStoreNextHandler } from '@edgestore/server/adapters/next/pages'
import { initEdgeStoreClient } from '@edgestore/server/core'
import { SETAWSProvider } from './customAWS'
import { afterUploadRequest } from './lifecycle'
import { EdgeStoreRouter } from './router'
import { createContext } from './context'

export const handler = createEdgeStoreNextHandler({
  provider: SETAWSProvider(afterUploadRequest),
  router: EdgeStoreRouter,
  createContext,
})

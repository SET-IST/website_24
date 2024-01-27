import { initEdgeStore } from '@edgestore/server'
import { Context } from './context'

/**
 * This is the main router for the edgestore buckets.
 */

const es = initEdgeStore.context<Context>().create()

const edgeStoreRouter = es.router({
  cvs: es
    .fileBucket({
      maxSize: 1024 * 1024 * 10,
      accept: ['application/pdf'],
    })
    .metadata(({ ctx }) => ({
      userId: ctx.userId,
    })),
  profileImages: es.imageBucket().metadata(({ ctx }) => ({
    userId: ctx.userId,
  })),
})

export { edgeStoreRouter as EdgeStoreRouter }

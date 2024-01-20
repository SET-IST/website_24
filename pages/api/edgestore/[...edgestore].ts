import { initEdgeStore } from '@edgestore/server';
import {
  CreateContextOptions,
  createEdgeStoreNextHandler,
} from '@edgestore/server/adapters/next/pages';
import { getSession } from '@/lib/server/middleware'
import { SETAWSProvider } from '@/lib/server/storage';


type Context = {
  userId: string;
  objectId?: string;
};

async function createContext({ req, res }: CreateContextOptions): Promise<Context> {
  const session = await getSession(req, res); // replace with your own session logic
 
  return {
    userId: session?.user.id,
  };
}

const es = initEdgeStore.context<Context>().create();

/**
 * This is the main router for the edgestore buckets.
 */
const edgeStoreRouter = es.router({
  cvs: es.fileBucket({
    maxSize: 1024 * 1024 * 10,
    accept: ['application/pdf']
  }),
  profileImages: es.imageBucket(),
});

export default createEdgeStoreNextHandler({
  provider: SETAWSProvider(),
  router: edgeStoreRouter,
  createContext,
});
/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter;
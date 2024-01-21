'use client'

import { EdgeStoreRouter } from '@/lib/server/edgestore'
import { createEdgeStoreProvider } from '@edgestore/react'

const { EdgeStoreProvider, useEdgeStore } =
  createEdgeStoreProvider<typeof EdgeStoreRouter>()

export { EdgeStoreProvider, useEdgeStore }

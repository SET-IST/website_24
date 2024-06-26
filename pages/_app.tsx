import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'
//  Types
import type { NextPage } from 'next'
import type { Session } from 'next-auth'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

//  Styles
import '../styles/globals.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/notifications/styles.css'

import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { EdgeStoreProvider } from '@/lib/frontend/edgestore'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (_page: ReactElement) => ReactNode
}

type AppPropsWithLayout<
  P = { dehydratedState: DehydratedState; session: Session }
> = AppProps<P> & {
  Component: NextPageWithLayout<P>
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 'Infinity' as unknown as number,
        refetchOnMount: false,
        refetchOnWindowFocus: true,
        retry: false,
      },
    },
  })

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <EdgeStoreProvider>
          <Hydrate state={pageProps.dehydratedState}>
            <SessionProvider session={pageProps.session}>
              <Notifications position="top-center" />
              {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
          </Hydrate>
        </EdgeStoreProvider>
      </QueryClientProvider>
    </MantineProvider>
  )
}

export default App

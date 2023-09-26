import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'
//  Components
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
//  Types
import type { NextPage } from 'next'
import type { Session } from 'next-auth'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'

//  Styles
import '../styles/globals.css'
import '@mantine/core/styles.css'
import { MantineProvider, createTheme, rem } from '@mantine/core'

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (_page: ReactElement) => ReactNode
}

type AppPropsWithLayout<
  P = { dehydratedState: DehydratedState; session: Session }
> = AppProps<P> & {
  Component: NextPageWithLayout<P>
}

const theme = createTheme({
  headings: {
    // properties for all headings
    fontWeight: '900',
    fontFamily: 'Poppins',
  },
})

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 'Infinity' as unknown as number,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      })
  )

  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ErrorBoundary>
      <MantineProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <SessionProvider session={pageProps.session}>
              {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
          </Hydrate>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MantineProvider>
    </ErrorBoundary>
  )
}

export default App

import { getServerSession } from 'next-auth'
import { getProviders } from 'next-auth/react'

import SigninPage from '@/components/pages/SigninPage/SigninPage'
import { authOptions } from '@/core/auth'
import AuthLayout from '@/core/layouts/AuthLayout'

import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next'
import type { ReactElement } from 'react'

type SigninProps = InferGetServerSidePropsType<typeof getServerSideProps>

const Signin = (props: SigninProps) => {
  return <SigninPage {...props} />
}

Signin.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions)

  if (session) {
    return { redirect: { destination: '/' } }
  }

  const providers = await getProviders()

  return {
    props: { providers: providers ?? [] },
  }
}

export default Signin

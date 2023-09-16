import { ModalProvider } from '@/core/components/modal-context'
import type { PropsWithChildren } from 'react'

type AuthLayoutProps = PropsWithChildren

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <ModalProvider>{children}</ModalProvider>
}

export default AuthLayout
export type { AuthLayoutProps }

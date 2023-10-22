import cn from 'classnames'
import { getCsrfToken, signIn, useSession } from 'next-auth/react'
//  Components
import { Button } from '@/core/components/Button'
import Card from '@/core/components/Card'
import Tabs from '@/core/components/Tabs/Tabs'
import RecoverPasswordModal from './components/RecoverPasswordModal/RecoverPasswordModal'
import SigninForm from './components/SigninForm'
import SignupForm from './components/SignupForm'
//  Hooks
import { useModal } from '@/core/components/modal-context'
import { useRouter } from 'next/router'
//  Services
import { links } from '@/data/links'
//  Icons
import SetLogo from '@/assets/logos/logo_set_inverted.svg'
//  Styles
import styles from './SigninPage.module.css'
//  Types
import type { BuiltInProviderType } from 'next-auth/providers'
import type { ClientSafeProvider, LiteralUnion } from 'next-auth/react'
import { useEffect, useState } from 'react'

type SigninPageProps = {
  providers:
    | Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
    | never[]
}

const SigninPage = ({ providers }: SigninPageProps) => {
  const { setModal } = useModal()
  const router = useRouter()
  const session = useSession()
  const [csrfTokens, setCsrfTokens] = useState('')

  useEffect(() => {
    async function fetchCsrfToken() {
      const result = await getCsrfToken()
      if (!result) {
        throw new Error('Can not sign in without a CSRF token')
      }
      setCsrfTokens(result)
    }

    /*
      Wait until session is fetched before obtaining csrfToken 
      to prevent synchronization issues caused by both 
      /api/auth/session and /api/auth/csrf setting the cookie. 
      Only happens in dev environment.
    */
    if (session.status !== 'loading') {
      fetchCsrfToken()
    }
  }, [session.status])

  return (
    <main
      className={cn(
        'w-screen h-screen bg-footer-texture flex justify-center items-center',
        styles.bgTexture
      )}
    >
      <Card
        backgroundColor="bg-tertiary-800/[0.77]"
        className={cn(
          'w-full h-full p-10 flex flex-col justify-start relative',
          'md:w-1/2 md:h-auto'
        )}
      >
        <Tabs
          tabsConfig={[
            {
              title: 'Iniciar sessão',
              content: (
                <>
                  <SigninForm csrfToken={csrfTokens} />
                  <div className="flex justify-between gap-2 my-3">
                    {Object.values(providers).map(
                      (provider, index) =>
                        provider.name !== 'credentials' && (
                          <Button
                            onClick={() => signIn(provider.id)}
                            key={provider.name}
                            color="secondary"
                            isBlock
                            isOutline={index % 3 === 0}
                          >
                            Continuar com {provider.name}
                          </Button>
                        )
                    )}
                  </div>
                </>
              ),
            },
            {
              title: 'Registar',
              content: (
                <>
                  <SignupForm csrfToken={csrfTokens} />
                  <p
                    className="text-white text-xs hover:underline cursor-pointer text-center"
                    onClick={() => setModal(<RecoverPasswordModal />)}
                  >
                    Já tens conta?{' '}
                    <span className="text-secondary-500">Inicia sessão</span>
                  </p>
                </>
              ),
            },
          ]}
        />
        <SetLogo
          className={cn(
            'cursor-pointer absolute top-3 right-3',
            'md:right-10 md:top-10 md:left-auto md:translate-x-0'
          )}
          onClick={() => router.push(links.home)}
        />
      </Card>
    </main>
  )
}

export default SigninPage

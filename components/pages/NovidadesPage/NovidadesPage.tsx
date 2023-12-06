import { Button } from '@/core/components/Button'
import { links } from '@/data/links'
import { useSession } from 'next-auth/react'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const changes = [
  'Os estudantes já podem fazer scan de empresas pela câmara fora da app',
  'Eliminámos um bug em que o menu não se ocultava quando se navegava para uma outra página',
  'Corrigimos alguns problemas com a página de ajuda',
]

const NovidadesPage = () => {
  const { publicRuntimeConfig } = getConfig()
  const router = useRouter()
  const session = useSession()

  useEffect(() => {
    fetch(`${window.location.origin}/api/changelog/check`, {
      method: 'POST',
    })
  }, [])

  return (
    <main className="py-10">
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="w-full flex flex-col items-center">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight text-primary-500">
            Olá!
          </h2>
          <h2 className="font-bold text-center text-3xl md:text-5xl tracking-tight text-primary-500">
            Fizemos algumas mudanças!
          </h2>
          <div className="h-px w-full bg-primary-500 my-10"></div>
          <p className="text-center text-lg">
            Atualizámos a nossa app para que possas ter uma experiência ainda
            melhor!
          </p>
          <h2 className="font-bold text-center mt-10 text-3xl md:text-5xl tracking-tight text-primary-500">
            O que mudou?
          </h2>
          <div className="flex flex-col gap-8 mt-10">
            {changes.map((value, index) => (
              <p key={`change-${index}`} className="font-medium">
                {value}
              </p>
            ))}
          </div>
          <div className="h-px w-full bg-primary-500 my-10"></div>
          <Button
            onClick={() => {
              window.location.replace(links.home)
            }}
            size="lg"
          >
            Prosseguir para a página principal
          </Button>

          <p className="text-center text-xs mt-10">
            Esta página só vai aparecer uma vez a cada atualização, no entanto
            podes sempre acedê-la por este link:{' '}
            <span className="text-primary-500">
              {window.location.origin}/novidades
            </span>
          </p>
          <p className="text-center mt-5 font-semibold text-xs">
            set23-website/v{publicRuntimeConfig?.version}
          </p>
        </div>
      </div>
    </main>
  )
}

export default NovidadesPage

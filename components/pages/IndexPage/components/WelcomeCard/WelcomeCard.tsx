import { Button } from '@/core/components/Button'
import Card from '@/core/components/Card'
import { links } from '@/core/services/links'
import cn from 'classnames'
import { useRouter } from 'next/router'

const WelcomeCard = () => {
  const router = useRouter()
  return (
    <Card
      className={cn(
        'flex flex-col items-center w-2/3 mx-auto py-4 px-6 z-12000 -mt-20',
        'md:w-1/2',
        'lg:py-12 lg:px-15'
      )}
    >
      <h1
        className={cn(
          'text-primary-500 font-semibold text-2xl mb-4',
          'md:text-3xl',
          'lg:text-4xl'
        )}
      >
        Bem vindo à SET
      </h1>
      <p className={cn('text-primary-500 mb-4 text-sm', 'md:text-base')}>
        A SET - <b>Semana Empresarial e Tecnológica</b> do Instituto Superior
        Técnico – Taguspark é um evento organizado por <b>alunos</b> de todos os
        cursos do campus, cujo objetivo é aproximar os mundos <b>académico</b> e{' '}
        <b>empresarial</b>.
      </p>
      <Button color="secondary" onClick={() => router.push(links.team)}>
        Conhece a nossa equipa
      </Button>
    </Card>
  )
}

export default WelcomeCard

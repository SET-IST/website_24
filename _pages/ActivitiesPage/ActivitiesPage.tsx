import {
  Button,
  Container,
  Paper,
  Title,
  Text,
  SegmentedControl,
  Divider,
} from '@mantine/core'
import { UserActivities } from './components/UserActivities'
import Header from './components/Header'
import ActivityCard from './components/ActivityCard'

import SpeedInterview from '@/assets/img/speed-interview.webp'
import Workshop from '@/assets/img/workshop.jpeg'
import Palestra from '@/assets/img/palestra-palco.webp'
import { FooterLayout } from '../layouts'
import { useEffect } from 'react'
import { fetchActivities } from '@/lib/frontend/api/activities'

const ActivitiesPage = () => {
  return (
    <div className="sm:h-screen pt-15 sm:pt-18 sm:pb-3 bg-[color:var(--mantine-color-gray-1)]">
      <div className="w-full h-full flex flex-col">
        <FooterLayout>
          <Header />
          <Paper className="h-fit w-screen px-0 sm:p-6 flex flex-col justify-stretch">
            <div className="sticky sm:relative top-15 z-10 sm:top-0 px-2 sm:px-0 py-3 bg-[color:var(--mantine-color-white)]">
              <SegmentedControl
                fullWidth
                data={['Dia 26', 'Dia 27', 'Dia 28', 'Dia 29']}
              />
            </div>
            <UserActivities />
          </Paper>
          <ActivityCard title="Speed Interviews" image={SpeedInterview}>
            Uma Speed Interview é um pitch de 2/3 minutos em que te apresentas a
            um conjunto de empresas que te darão feedback, o que perfaz um total
            de 10 minutos de interação com as empresas. Podes submeter o teu CV
            para que as empresas tenham acesso ao mesmo durante o teu pitch! Se
            fores aceite, receberás um email com a confirmação do dia e hora
            para a sessão, que será na sala 0-67/0-69.
          </ActivityCard>
          <ActivityCard title="Palestras" image={Palestra}>
            Poderás ouvir e questionar profissionais experientes na área da
            palestra. Irão ser abordados temas da atualidade e, por isso,
            incentivamos a participarem e conhecerem os nossos oradores
            presentes, nesta edição.
          </ActivityCard>
          <ActivityCard title="Workshops" image={Workshop}>
            A Magma vem te esclarecer todas as dúvidas acerca de como
            comunicares no mundo profissional de forma eficaz. Vais aprender
            como estabelecer a tua própria rede de contactos e como geri-la.
            Tudo com exemplos práticos é templates de comunicação. A JUNITEC irá
            oferecer formação presencial em diversas áreas de gestão de projeto,
            com foco especial em gestão de tarefas, equipas e metodologias de
            gestão ágil. Ambos os workshops serão relaizados na sala 0.65
          </ActivityCard>
        </FooterLayout>
      </div>
    </div>
  )
}

export default ActivitiesPage

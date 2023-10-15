//TODO: Use links
import { useRouter } from 'next/router'
import { links } from '@/core/services/links'

import Palestra from '@/core/assets/img/palestra.webp'

import { Title, Text, Button, Image as MantineImage } from '@mantine/core'
import classes from './ourmission.module.css'

const OurMissionSection = () => {
  return (
    <div className="flex flex-row justify-center items-stretch">
      <div className="flex flex-col justify-between items-start p-8 bg-[#00415a]">
        <div className="flex flex-col gap-2">
          <Title className={classes.title}>A nossa missão</Title>
          <Text size="lg" className={classes.description}>
            Este evento enquadra-se na iniciativa{' '}
            <strong>IST Career Weeks</strong>, onde se pretende, por um lado,
            ajudar os alunos a conhecer melhor as oportunidades para o seu
            futuro profissional, e por outro, ajudar as empresas a divulgar as
            suas atividades e necessidades. Todos os anos estão presentes
            empresas e oradores, que partilham as suas experiências e know-how.
          </Text>
        </div>
        <Button variant="filled" mt={10} size="md">
          As nossas atividades
        </Button>
      </div>
      <MantineImage src={Palestra.src} h={350} />
    </div>
  )
}

export default OurMissionSection

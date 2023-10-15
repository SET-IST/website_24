import { Container, Title, Text, Button } from '@mantine/core'
import classes from './welcome.module.css'

export default function WelcomeSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 py-15 bg-white">
      <Title className={classes.title}>Bem vindo à SET</Title>
      <Container p={0}>
        <Text size="lg" className={classes.description}>
          A SET - <strong>Semana Empresarial e Tecnológica</strong> do Instituto
          Superior Técnico – Taguspark é um evento organizado por{' '}
          <strong>alunos</strong> de todos os cursos do campus, cujo objetivo é
          aproximar os mundos <strong>académico</strong> e{' '}
          <strong>empresarial</strong>.
        </Text>
      </Container>
      <Button mt={10} size="md">
        Conhece a nossa equipa
      </Button>
    </div>
  )
}

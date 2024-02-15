import { Button, Container, Group, Title, Text } from '@mantine/core'
import classes from '../styles/ServerError.module.css'

export default function Custom404() {
  return (
    <div className="h-screen w-screen bg-[var(--mantine-color-blue-filled)] flex flex-col justify-start pt-[rem(80px)]">
      <Container>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>Ooops</Title>
        <Text size="lg" fw="bold" ta="center" className={classes.description}>
          Esta página não existe ou foi movida
        </Text>
        <Group justify="center">
          <Button component="a" href="/" variant="white" size="md">
            Voltar à página principal
          </Button>
        </Group>
      </Container>
    </div>
  )
}

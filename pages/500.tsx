import { Button, Container, Group, Title, Text } from '@mantine/core'
import classes from '../styles/ServerError.module.css'

export default function Custom404() {
  return (
    <div className="h-screen w-screen bg-[var(--mantine-color-blue-filled)] flex flex-col justify-start pt-[rem(80px)]">
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Ooops</Title>
        <Text size="lg" fw="bold" ta="center" className={classes.description}>
          Houve um problema da nossa parte. Por favor entra em contacto com a
          equipa do Suporte Informático se o problema persistir.
        </Text>
        <Group justify="center">
          <Button
            onClick={() => window.location.reload()}
            variant="white"
            size="md"
          >
            Atualizar página
          </Button>
        </Group>
      </Container>
    </div>
  )
}

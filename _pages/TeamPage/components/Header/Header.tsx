import { Container, Title, Text, Button, em } from '@mantine/core'
import classes from './header.module.css'
import { useMediaQuery } from '@mantine/hooks'

export default function HeaderSection() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  return (
    <div className=" w-full flex flex-col justify-center items-center gap-2 p-4 py-8 sm:pt-6">
      <Title className={classes.title}>A nossa equipa</Title>
      <Container p={0}>
        <Text size={isMobile ? 'md' : 'lg'} className={classes.description}>
          Conhece a equipa responsável pela organização de todo o evento
        </Text>
      </Container>
    </div>
  )
}

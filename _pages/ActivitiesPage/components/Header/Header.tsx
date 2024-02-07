import { Container, Title, Text, em } from '@mantine/core'
import classes from './header.module.css'
import { useMediaQuery } from '@mantine/hooks'
import classNames from 'classnames'

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`)

  return (
    <div className="w-full flex flex-col justify-center sm:items-center p-4 sm:py-8 px-4 sm:px-1 bg-[color:var(--mantine-color-blue-5)]">
      <Title className={classNames(classes.title, 'text-white')}>
        Atividades
      </Title>
      <Container p={0}>
        <Text
          size={isMobile ? 'md' : 'lg'}
          className={classNames(classes.description, '!text-white')}
        >
          Inscreve-te e participa em atividades para interagires com empresas e
          melhorares as tuas soft skills
        </Text>
      </Container>
    </div>
  )
}

export default Header

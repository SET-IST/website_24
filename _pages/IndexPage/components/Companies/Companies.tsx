import { Title, Text, Container } from '@mantine/core'
import classes from './companies.module.css'
import { CompaniesCarousel } from './components'

export default function CompaniesSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 p-4 py-12 bg-white">
      <div>
        <Title className={classes.title}>Empresas parceiras</Title>
        <Container p={0}>
          <Text size="lg" className={classes.description}>
            Todos os anos estão presentes no evento{' '}
            <strong className="text-[#009bd6]">mais de 30 empresas</strong> dos
            mais <strong className="text-[#009bd6]">diversos setores</strong>
          </Text>
        </Container>
      </div>
      <CompaniesCarousel />
    </div>
  )
}

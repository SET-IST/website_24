//  Components
import { Animate } from '@/components/AnimateIn'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import OurMission from './components/OurMission'
import Companies from './components/Companies'
import { Badge, Card, Group, Space, Stack, Text, Title } from '@mantine/core'
import CompaniesSection from './components/Companies'
import Footer from './components/Footer'

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Welcome />
      <OurMission />
      <Companies />
      {/* <div>
      </div>
      <Footer /> */}
    </main>
  )
}

export default IndexPage

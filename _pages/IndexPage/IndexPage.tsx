//  Components
import { Animate } from '@/components/AnimateIn'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import OurMission from './components/OurMission'
import TutorialSection from './components/TutorialSection/TutorialSection'
import { Badge, Card, Group, Space, Stack, Text, Title } from '@mantine/core'
import CompaniesSection from './components/Companies'
import Footer from './components/Footer'

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Welcome />
      <OurMission />
      {/* <div>
      </div>
      <Footer /> */}
    </main>
  )
}

export default IndexPage

//  Components
import { Animate } from '@/components/AnimateIn'
import Hero from './components/Hero'
import Welcome from './components/Welcome'
import OurMissionSection from './components/OurMissionSection'
import TutorialSection from './components/TutorialSection/TutorialSection'
import WelcomeCard from './components/WelcomeCard/WelcomeCard'
import { Badge, Card, Group, Space, Stack, Text, Title } from '@mantine/core'
import CompaniesSection from './components/Companies'
import Footer from './components/Footer'

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Welcome />
      {/* <div>
        <OurMissionSection />
      </div>
      <Footer /> */}
    </main>
  )
}

export default IndexPage

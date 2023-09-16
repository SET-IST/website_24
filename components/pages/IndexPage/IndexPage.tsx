//  Components
import { Animate } from "@/components/AnimateIn";
import Hero from "./components/Hero";
import OurMissionSection from "./components/OurMissionSection";
import TutorialSection from "./components/TutorialSection/TutorialSection";
import WelcomeCard from "./components/WelcomeCard/WelcomeCard";

const IndexPage = () => {
  return (
    <main className="bg-tertiary-500">
      <Hero />
      <Animate.FadeUp>
        <WelcomeCard />
      </Animate.FadeUp>
      <Animate.FadeUp>{/* <CompaniesCarousel /> */}</Animate.FadeUp>
      <OurMissionSection />
      <TutorialSection />
    </main>
  );
};

export default IndexPage;

import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Experiences from "./components/homepage/experiences";
import AboutSection from "./components/homepage/about";

export default async function Home() {

  return (
    <>
      <HeroSection />
      <AboutSection/>
      <Experiences/>
      <Projects/>
      <Skills />
      <Education />
    </>
  )
};
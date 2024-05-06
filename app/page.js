import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Experiences from "./components/homepage/experiences";


export default async function Home() {

  return (
    <>
      <HeroSection />
      <Experiences/>
      <Projects/>
      <Skills />
      <Education />
    </>
  )
};
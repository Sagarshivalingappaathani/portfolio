"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import HeroSection from "./components/homepage/hero-section";
import AboutSection from "./components/homepage/about";
import Education from "./components/homepage/education";
import Experiences from "./components/homepage/experiences";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import ContactSection from "./components/homepage/contact";
import Preloader from "./components/preloader/preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <Education />
          <Experiences />
          <Projects />
          <Skills />
          <ContactSection />
        </>
      )}
    </>
  );
};
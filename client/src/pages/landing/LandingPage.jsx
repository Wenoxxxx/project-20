import React from 'react';
import TopNavLanding from './TopNavLanding';
import HeroSection from './HeroSection';
import Process from './Process';
import AboutSection from './AboutSection';
import FooterSection from './FooterSection';

export default function LandingPage() {
  return (
    <>
      <TopNavLanding />
      <main>
        <HeroSection />
        <Process />
        <AboutSection />
      </main>
      <FooterSection />
    </>
  );
}

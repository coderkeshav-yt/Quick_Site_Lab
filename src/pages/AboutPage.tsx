import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import ServicesOverview from '../components/sections/ServicesOverview';
import UniqueValueSection from '../components/sections/UniqueValueSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import TeamSection from '../components/sections/TeamSection';
import AboutCTA from '../components/sections/AboutCTA';

const AboutPage: React.FC = () => {
  return (
    <>
      <AboutHero />
      <ServicesOverview />
      <UniqueValueSection />
      <ExperienceSection />
      <TeamSection />
      <AboutCTA />
    </>
  );
};

export default AboutPage;

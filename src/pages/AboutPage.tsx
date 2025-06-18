import React from 'react';
import AboutHero from '../components/sections/AboutHero';
import ServicesOverview from '../components/sections/ServicesOverview';
import UniqueValueSection from '../components/sections/UniqueValueSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import TeamSection from '../components/sections/TeamSection';
import AboutCTA from '../components/sections/AboutCTA';
import { Helmet } from 'react-helmet';

const AboutPage: React.FC = () => {
  return (
    <main>
      <Helmet>
        <title>About Cybrida</title>
        <meta name="description" content="Learn about Cybrida, our mission, team, and commitment to digital innovation." />
        <meta property="og:title" content="About Cybrida" />
        <meta property="og:description" content="Learn about Cybrida, our mission, team, and commitment to digital innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Cybrida" />
        <meta name="twitter:description" content="Learn about Cybrida, our mission, team, and commitment to digital innovation." />
      </Helmet>
      <AboutHero />
      <ServicesOverview />
      <UniqueValueSection />
      <ExperienceSection />
      <TeamSection />
      <AboutCTA />
    </main>
  );
};

export default AboutPage;

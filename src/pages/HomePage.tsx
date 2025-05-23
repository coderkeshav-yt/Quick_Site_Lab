import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import StatsSection from '../components/sections/StatsSection';
import ProcessSection from '../components/sections/ProcessSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import BlogSection from '../components/sections/BlogSection';
import ClientsSection from '../components/sections/ClientsSection';
import FaqSection from '../components/sections/FaqSection';
import ContactSection from '../components/sections/ContactSection';
import CtaSection from '../components/sections/CtaSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ClientsSection />
      <BlogSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
    </>
  );
};

export default HomePage;

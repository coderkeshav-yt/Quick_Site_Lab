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
import { Helmet } from 'react-helmet';

const HomePage: React.FC = () => {
  return (
    <main>
      <Helmet>
        <title>Cybrida - Modern Web Solutions</title>
        <meta name="description" content="Cybrida delivers cutting-edge web design, development, and digital solutions for businesses of all sizes." />
        <meta property="og:title" content="Cybrida - Modern Web Solutions" />
        <meta property="og:description" content="Cybrida delivers cutting-edge web design, development, and digital solutions for businesses of all sizes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybrida - Modern Web Solutions" />
        <meta name="twitter:description" content="Cybrida delivers cutting-edge web design, development, and digital solutions for businesses of all sizes." />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': 'Cybrida',
          'url': window.location.origin,
          'logo': window.location.origin + '/logo192.png',
          'sameAs': [
            'https://www.linkedin.com/company/cybrida',
            'https://twitter.com/cybrida',
          ]
        })}</script>
      </Helmet>
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
    </main>
  );
};

export default HomePage;

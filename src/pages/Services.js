import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Web Development Services | Cybrida - Top Web Development Agency</title>
        <meta name="description" content="Cybrida is a leading web development agency offering custom web development, e-commerce solutions, and responsive website design services. Partner with us for your next project." />
        <meta name="keywords" content="web development agency, custom web development, website design company, ecommerce development, responsive web design, frontend development, backend development, full stack development" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cybrida.in/services/" />
        <meta property="og:title" content="Web Development Services | Cybrida - Top Web Development Agency" />
        <meta property="og:description" content="Professional web development services by Cybrida. We create stunning, high-performance websites and web applications tailored to your business needs." />
        <meta property="og:image" content="https://cybrida.in/images/web-development-services.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://cybrida.in/services/" />
        <meta name="twitter:title" content="Web Development Services | Cybrida - Top Web Development Agency" />
        <meta name="twitter:description" content="Professional web development services by Cybrida. We create stunning, high-performance websites and web applications tailored to your business needs." />
        <meta name="twitter:image" content="https://cybrida.in/images/web-development-services.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://cybrida.in/services/" />
      </Helmet>

      <header className="services-header">
        <div className="container">
          <h1>Web Development Services</h1>
          <p>Custom web solutions designed to grow your business</p>
        </div>
      </header>

      <main className="services-main">
        <section className="services-section">
          <div className="container">
            <div className="service-card">
              <h2>Custom Web Development</h2>
              <p>Bespoke web applications built with the latest technologies to meet your specific business requirements.</p>
              <Link to="/contact" className="cta-button">Get Started</Link>
            </div>
            
            <div className="service-card">
              <h2>E-commerce Solutions</h2>
              <p>Complete online store setup with secure payment gateways and inventory management.</p>
              <Link to="/contact" className="cta-button">Learn More</Link>
            </div>
            
            <div className="service-card">
              <h2>Responsive Design</h2>
              <p>Beautiful websites that work perfectly on all devices, from mobile phones to large desktop screens.</p>
              <Link to="/contact" className="cta-button">See Examples</Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;

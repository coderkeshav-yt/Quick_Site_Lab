import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowRight, FiCode, FiLayout, FiSmartphone, FiTrendingUp, FiShoppingBag, FiShield } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { Helmet } from 'react-helmet';

// Types for service data
interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: string;
  color: string;
  technologies: string[];
}

// Helper function to render icon based on string identifier
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FiCode':
      return <FiCode />;
    case 'FiLayout':
      return <FiLayout />;
    case 'FiSmartphone':
      return <FiSmartphone />;
    case 'FiTrendingUp':
      return <FiTrendingUp />;
    case 'FiShoppingBag':
      return <FiShoppingBag />;
    case 'FiShield':
      return <FiShield />;
    default:
      return <FiCode />;
  }
}

const ServicesPage: React.FC = () => {
  // Set document title
  useEffect(() => {
    document.title = 'Our Services | Cybrida';
  }, []);

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  // Use services data from the imported file
  const services: Service[] = servicesData.map(service => ({
    id: service.id,
    title: service.title,
    shortDescription: service.shortDescription,
    icon: service.icon,
    color: service.color,
    technologies: service.technologies.slice(0, 5) // Just take the first 5 technologies
  }));

  return (
    <main>
      <Helmet>
        <title>Web & Digital Services | Cybrida</title>
        <meta name="description" content="Explore Cybrida's full range of web development, design, and digital marketing services." />
        <meta property="og:title" content="Web & Digital Services | Cybrida" />
        <meta property="og:description" content="Explore Cybrida's full range of web development, design, and digital marketing services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web & Digital Services | Cybrida" />
        <meta name="twitter:description" content="Explore Cybrida's full range of web development, design, and digital marketing services." />
      </Helmet>
      <div className="bg-white min-h-screen overflow-hidden">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 py-24 px-4 sm:px-6"
          style={{ backgroundPosition: `50% ${backgroundY.get()}%` }}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/cosmic-grid-pattern_rslhgk.svg')] bg-repeat"></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-8">
                We offer a comprehensive range of digital services to help transform your business ideas into reality. 
                From web and mobile development to digital marketing and support.
              </p>
            </motion.div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </motion.section>

        {/* Main Services Section */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Comprehensive Digital Solutions
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Whatever your digital needs, we have the expertise to deliver exceptional results that exceed expectations.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 group"
                >
                  <div className="p-8">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white text-2xl">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      to={`/services/${service.id}`} 
                      className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                    >
                      Learn More <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              >
                Our Process
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-600 max-w-3xl mx-auto"
              >
                We follow a systematic approach to ensure the successful delivery of every project
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', desc: 'We start by understanding your business, goals, and requirements' },
                { step: '02', title: 'Planning', desc: 'Creating detailed project plans, wireframes, and design concepts' },
                { step: '03', title: 'Development', desc: 'Building your solution with attention to quality and details' },
                { step: '04', title: 'Launch & Support', desc: 'Deploying your project and providing ongoing maintenance' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative p-8 rounded-xl bg-white shadow-lg border border-gray-100"
                >
                  <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-900 to-purple-900 py-16 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/cosmic-grid-pattern_rslhgk.svg')] bg-repeat"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to get started?</h2>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project and explore how our services can help achieve your business goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-indigo-700 font-medium hover:bg-indigo-50 transition-colors"
                >
                  Contact Us <FiArrowRight className="ml-2" />
                </Link>
                <Link 
                  to="/get-started" 
                  className="inline-flex items-center px-8 py-4 rounded-lg bg-transparent text-white border border-white font-medium hover:bg-white/10 transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ServicesPage;

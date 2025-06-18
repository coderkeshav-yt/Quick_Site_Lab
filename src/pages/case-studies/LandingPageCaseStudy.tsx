import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiBarChart2, FiLayers, FiActivity, FiLock, FiArrowRight, FiCheck, FiMonitor, FiSmartphone, FiCode } from 'react-icons/fi';
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiVercel, SiGoogleanalytics, SiWebpack, SiVite, SiEslint, SiPrettier } from 'react-icons/si';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import ImageGallery from '../../components/ui/ImageGallery';
import { useHistory } from 'react-router-dom';
import { scrollToPortfolio } from '../../utils/scrollUtils';

const LandingPageCaseStudy: React.FC = () => {
  const history = useHistory();

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    history.push('/');
    scrollToPortfolio();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#1a1f2e] to-[#2a3142] text-white overflow-hidden py-24">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-30 animate-gradient"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <a href="/" onClick={handleBackClick}>
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-white/80 hover:text-white mb-12 transition-colors cursor-pointer group"
            >
              <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
              Back to Portfolio
            </motion.div>
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full mb-6"
              >
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Landing Page Design</span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Crafting High-Converting{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Digital Experiences
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                A modern landing page solution that combines stunning design with conversion-focused strategies, delivering exceptional results and engaging user experiences.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm text-white/70">Industry</p>
                  <p className="font-semibold">Marketing & Technology</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm text-white/70">Services</p>
                  <p className="font-semibold">Web Design & Development</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-square w-full max-w-lg mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              <DotLottieReact
                src="https://lottie.host/c15d7d7a-9afd-48d1-ac48-11dcef945b41/Pqzyta9B8N.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">45%</p>
              <p className="text-gray-600">Increase in Conversion Rate</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">2.5s</p>
              <p className="text-gray-600">Average Load Time</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">85%</p>
              <p className="text-gray-600">Mobile Traffic Retention</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Key Features & Technologies
            </h2>
            <p className="text-xl text-gray-600">
              Modern solutions engineered for maximum performance and user engagement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FiMonitor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
              <p className="text-gray-600">Perfectly optimized for all screen sizes and devices</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <FiSmartphone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mobile First</h3>
              <p className="text-gray-600">Optimized for the best mobile user experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <FiCode className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Clean Code</h3>
              <p className="text-gray-600">Modern and maintainable codebase</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <FiBarChart2 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Analytics</h3>
              <p className="text-gray-600">Built-in analytics and tracking</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full mb-6"
            >
              <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Project Showcase</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Visual Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore the key sections and features of our landing page implementation.</p>
          </motion.div>

          <ImageGallery
            images={[
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750184071/01_zzmab4.png",
                alt: "Landing Page Hero Section"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750184070/02_sw1zyr.png",
                alt: "Features and Benefits"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750184070/03_kmyi57.png",
                alt: "Call to Action and Testimonials"
              }
            ]}
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Development Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our systematic approach to creating the perfect landing page</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  title: "Research & Planning",
                  description: "Comprehensive analysis of target audience and competitors"
                },
                {
                  title: "Design & Prototyping",
                  description: "Creating wireframes and high-fidelity designs"
                },
                {
                  title: "Development",
                  description: "Building with modern web technologies"
                },
                {
                  title: "Testing & Launch",
                  description: "Rigorous testing and successful deployment"
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#1a1f2e] to-[#2a3142] p-8 rounded-2xl text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 opacity-30 animate-gradient"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent flex items-center gap-3">
                  <FiCode className="w-8 h-8 text-accent" />
                  Technology Stack
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-6 rounded-xl border border-white/10">
                    <h4 className="font-semibold mb-4 text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent flex items-center gap-2">
                      <SiReact className="w-5 h-5" />
                      Frontend
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-center transform transition-transform hover:translate-x-2">
                        <div className="w-10 h-10 bg-[#61DAFB]/10 rounded-lg flex items-center justify-center mr-3">
                          <SiReact className="w-6 h-6 text-[#61DAFB]" />
                        </div>
                        <span className="text-white/90">React</span>
                      </li>
                      <li className="flex items-center transform transition-transform hover:translate-x-2">
                        <div className="w-10 h-10 bg-[#3178C6]/10 rounded-lg flex items-center justify-center mr-3">
                          <SiTypescript className="w-6 h-6 text-[#3178C6]" />
                        </div>
                        <span className="text-white/90">TypeScript</span>
                      </li>
                      <li className="flex items-center transform transition-transform hover:translate-x-2">
                        <div className="w-10 h-10 bg-[#38BDF8]/10 rounded-lg flex items-center justify-center mr-3">
                          <SiTailwindcss className="w-6 h-6 text-[#38BDF8]" />
                        </div>
                        <span className="text-white/90">Tailwind CSS</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-6 rounded-xl border border-white/10">
                    <h4 className="font-semibold mb-4 text-lg text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary flex items-center gap-2">
                      <SiNextdotjs className="w-5 h-5" />
                      Performance
                    </h4>
                    <ul className="space-y-4">
                      <li className="flex items-center transform transition-transform hover:translate-x-2">
                        <div className="w-10 h-10 bg-black/20 rounded-lg flex items-center justify-center mr-3">
                          <SiNextdotjs className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white/90">Next.js</span>
                      </li>
                      <li className="flex items-center transform transition-transform hover:translate-x-2">
                        <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                          <SiVercel className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white/90">Vercel</span>
                      </li>
                      <li className="flex items-center transform transition-transform hover:translate-x-2">
                        <div className="w-10 h-10 bg-[#F9AB00]/10 rounded-lg flex items-center justify-center mr-3">
                          <SiGoogleanalytics className="w-6 h-6 text-[#F9AB00]" />
                        </div>
                        <span className="text-white/90">Analytics</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-2 mt-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-6 rounded-xl border border-white/10">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary flex items-center gap-2">
                        <FiLayers className="w-5 h-5" />
                        Development Tools
                      </h4>
                      <div className="flex gap-3">
                        <SiWebpack className="w-6 h-6 text-[#8DD6F9] opacity-80 hover:opacity-100 transition-opacity" />
                        <SiVite className="w-6 h-6 text-[#646CFF] opacity-80 hover:opacity-100 transition-opacity" />
                        <SiEslint className="w-6 h-6 text-[#4B32C3] opacity-80 hover:opacity-100 transition-opacity" />
                        <SiPrettier className="w-6 h-6 text-[#F7B93E] opacity-80 hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center transform hover:scale-105 transition-transform">
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1">98%</div>
                        <div className="text-sm text-white/70">Performance</div>
                      </div>
                      <div className="text-center transform hover:scale-105 transition-transform">
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary mb-1">100%</div>
                        <div className="text-sm text-white/70">Best Practices</div>
                      </div>
                      <div className="text-center transform hover:scale-105 transition-transform">
                        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1">99%</div>
                        <div className="text-sm text-white/70">Accessibility</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1f2e] to-[#2a3142] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-30 animate-gradient"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-white/80 mb-8">
              Let's create a high-converting landing page that drives real results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Start Your Project
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-300"
              >
                View More Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPageCaseStudy; 
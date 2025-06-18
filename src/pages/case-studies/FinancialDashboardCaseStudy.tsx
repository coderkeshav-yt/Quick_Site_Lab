import React, { useState, MouseEvent, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiDollarSign, FiTrendingUp, FiUsers, FiBarChart2, FiChevronLeft, FiChevronRight, FiMaximize2, FiX, FiPieChart, FiActivity, FiLock, FiCheckCircle, FiAward, FiLayers } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { scrollToPortfolio } from '../../utils/scrollUtils';

// Type Definitions
interface GalleryImageProps {
  src: string;
  alt: string;
  onClick: () => void;
}

interface StatisticItemProps {
  value: string | number;
  label: string;
  icon: React.ElementType;
  delay?: number;
}

interface ImageType {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: ImageType[];
}

// Gallery Image Component
const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, onClick }) => (
  <motion.div
    className="relative overflow-hidden rounded-xl cursor-pointer group"
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <FiMaximize2 className="text-white text-2xl" />
    </div>
  </motion.div>
);

// Statistic Item Component
const StatisticItem: React.FC<StatisticItemProps> = ({ value, label, icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
      <Icon className="w-6 h-6" />
    </div>
    <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
    <p className="text-gray-600">{label}</p>
  </motion.div>
);

// Image Gallery Component
const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction: 'next' | 'prev') => {
    let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;
    
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openImage(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <button 
              className="absolute top-4 right-4 text-white text-2xl z-10"
              onClick={(e: React.MouseEvent) => closeImage(e)}
            >
              <FiX />
            </button>
            
            <button 
              className="absolute left-4 text-white text-2xl z-10 p-2 bg-black/50 rounded-full"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                navigate('prev');
              }}
            >
              <FiChevronLeft />
            </button>
            
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            />
            
            <button 
              className="absolute right-4 text-white text-2xl z-10 p-2 bg-black/50 rounded-full"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                navigate('next');
              }}
            >
              <FiChevronRight />
            </button>
            
            <div className="absolute bottom-4 text-white text-center text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const FinancialDashboardCaseStudy: React.FC = () => {
  const history = useHistory();

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    history.push('/');
    scrollToPortfolio();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden py-4 md:py-6 flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <a href="/" onClick={handleBackClick}>
                <motion.div
                  whileHover={{ x: -5 }}
                  className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors cursor-pointer group"
                >
                  <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
                  Back to Portfolio
                </motion.div>
              </a>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <motion.span 
                  className="inline-block bg-gradient-to-r from-primary to-accent text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 shadow-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  Financial Dashboard
                </motion.span>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Modern Financial Analytics <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Made Simple</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  A powerful financial analytics platform that helped our client achieve a <span className="font-semibold text-white">45% increase in efficiency</span> and revolutionized their financial decision-making process.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <p className="text-sm text-white/70">Industry</p>
                    <p className="font-semibold">Finance & Technology</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <p className="text-sm text-white/70">Services</p>
                    <p className="font-semibold">Web App, Data Viz, Analytics</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
                  >
                    View Live Demo
                  </a>
                  <button className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                    Project Details
                  </button>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-5xl mx-auto"
            >
              <div className="relative h-[600px]">
                <DotLottieReact
                  src="https://lottie.host/735872d5-78c0-44a8-ba8b-2e0a06933a86/TeX3ZiIAAx.lottie"
                  loop
                  autoplay
                  className="w-full h-full scale-125"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Project Overview
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Our client needed a modern, intuitive financial dashboard that could handle complex data visualization while maintaining ease of use. The challenge was to create a powerful platform that could process large amounts of financial data in real-time while presenting it in an accessible way.
              </motion.p>
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                We developed a responsive web application using React and TypeScript, incorporating advanced charting libraries and real-time data processing capabilities. The result was a sophisticated yet user-friendly dashboard that transformed how our client handles financial analytics.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <StatisticItem
                icon={FiTrendingUp}
                value="45%"
                label="Efficiency Increase"
                delay={0}
              />
              <StatisticItem
                icon={FiUsers}
                value="10k+"
                label="Active Users"
                delay={1}
              />
              <StatisticItem
                icon={FiBarChart2}
                value="2.5M"
                label="Data Points Processed"
                delay={2}
              />
              <StatisticItem
                icon={FiActivity}
                value="99.9%"
                label="Uptime"
                delay={3}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our financial dashboard combines powerful analytics with intuitive design to deliver a comprehensive financial management solution.</p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <FiCheckCircle className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Complex financial data visualization
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Real-time data processing needs
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Legacy system integration
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <FiAward className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">The Outcome</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Interactive data visualization
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Real-time analytics engine
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Seamless API integration
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                <FiBarChart2 className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold text-gray-900">Advanced Analytics</h3>
                <p className="text-sm text-gray-600">Real-time data insights</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                <FiLayers className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-semibold text-gray-900">Modular Design</h3>
                <p className="text-sm text-gray-600">Customizable components</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gray-100 rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                <FiActivity className="w-6 h-6 text-green-500 mb-3" />
                <h3 className="font-semibold text-gray-900">Real-time Updates</h3>
                <p className="text-sm text-gray-600">Live market data</p>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                <FiLock className="w-6 h-6 text-purple-500 mb-3" />
                <h3 className="font-semibold text-gray-900">Secure</h3>
                <p className="text-sm text-gray-600">Enterprise security</p>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore the visual journey of our financial dashboard project.</p>
          </motion.div>

          <ImageGallery
            images={[
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160786/01_bpupdv.png",
                alt: "Financial Dashboard Overview"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160786/02_cqxecy.png",
                alt: "Real-time Analytics View"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160785/03_xjomts.png",
                alt: "Performance Metrics Dashboard"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160785/04_rgm06u.png",
                alt: "Interactive Data Visualization"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160785/05_wlcs2p.png",
                alt: "Market Analysis Interface"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160785/06_tihpub.png",
                alt: "Portfolio Management View"
              }
            ]}
          />
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies Used</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Built with modern technologies to ensure performance, scalability, and maintainability.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">React</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">TypeScript</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/d3js/d3js-original.svg"
                  alt="D3.js"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">D3.js</h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 mb-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">Node.js</h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                CLIENT TESTIMONIAL
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What Our Client Says
              </h2>
              <div className="relative">
                <div className="absolute -top-6 -left-6 text-6xl text-primary/20">"</div>
                <blockquote className="relative z-10">
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    The financial dashboard has revolutionized how we analyze and visualize our data. The real-time insights and predictive analytics have helped us make faster, more informed decisions. It's been a game-changer for our business operations.
                  </p>
                  <footer className="flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/men/45.jpg" 
                      alt="John Smith" 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <cite className="font-semibold text-gray-900 not-italic">John Smith</cite>
                      <p className="text-gray-600">CTO, Market Pulse</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">45%</div>
                  <p className="text-gray-600">Faster Analysis</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-green-500 mb-2">2.5M</div>
                  <p className="text-gray-600">Data Points/Day</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
                  <p className="text-gray-600">Real-time Updates</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Analytics?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">Let's create a powerful financial dashboard tailored to your needs.</p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FinancialDashboardCaseStudy; 
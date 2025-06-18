import React, { useState, MouseEvent, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiActivity, FiUsers, FiCalendar, FiTrendingUp, FiBarChart2, FiChevronLeft, FiChevronRight, FiMaximize2, FiX, FiClock, FiDollarSign, FiAward, FiCheckCircle, FiSmartphone, FiMonitor, FiLayers } from 'react-icons/fi';
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

const GymWebsiteCaseStudy: React.FC = () => {
  const history = useHistory();

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    history.push('/');
    scrollToPortfolio();
  };

  // Sample images - replace with actual gym website screenshots
  const projectImages: ImageType[] = [
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160242/gym06_hnlmne.png",
      alt: "Gym Website Homepage"
    },
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160243/gym01_sdg2vj.png",
      alt: "Membership Dashboard"
    },
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160243/gym04_hxvsex.png",
      alt: "Class Schedule Interface"
    },
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160243/gym05_fljdag.png",
      alt: "Trainer Profiles"
    },
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160242/gym02_prlhpj.png",
      alt: "Fitness Programs"
    },
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160242/gym03_y95nn6.png",
      alt: "Member Progress Tracking"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
        
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <motion.div 
                className="flex flex-wrap gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="inline-block bg-primary/20 text-primary-light px-4 py-1.5 rounded-full text-sm font-medium">
                  Web Development
                </span>
                <span className="inline-block bg-accent/20 text-accent-light px-4 py-1.5 rounded-full text-sm font-medium">
                  UI/UX Design
                </span>
                <span className="inline-block bg-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-sm font-medium">
                  Completed 2024
                </span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Transforming Fitness Experience with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Digital Innovation
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                How we revolutionized a traditional gym's digital presence, resulting in a <span className="font-semibold text-white">250% increase in membership signups</span> and enhanced member engagement through our innovative web platform.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm text-white/70">Client</p>
                  <p className="font-semibold">Be in Shape Fitness</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm text-white/70">Timeline</p>
                  <p className="font-semibold">12 Weeks</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-sm text-white/70">Platform</p>
                  <p className="font-semibold">Web & Mobile</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a 
                  href="https://gymweb-zeta.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
                >
                  Visit Live Site <FiExternalLink className="inline ml-2" />
                </a>
                <button className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                  Watch Demo
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-4xl mx-auto"
            >
              <div className="relative">
                <DotLottieReact
                  src="https://lottie.host/0b83e105-fda9-45a3-802e-ef77ea3c0838/tDjBAc4Z7o.lottie"
                  loop
                  autoplay
                  className="w-full h-[500px]"
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-sm flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <motion.div 
                className="w-1 h-2 bg-white rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">PROJECT OVERVIEW</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Revolutionizing the Fitness Experience</h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p className="text-lg">
                  Be in Shape Fitness came to us with a vision: transform their traditional gym operations into a modern, digital-first experience. Their existing system was manual, time-consuming, and couldn't keep up with their growing membership base.
                </p>
                <p className="text-lg">
                  Our solution was a comprehensive web platform that not only streamlined their operations but also enhanced the member experience through intuitive class booking, progress tracking, and seamless communication with trainers.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <FiCheckCircle className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Manual class booking system
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Limited member engagement
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Inefficient admin processes
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <FiAward className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Outcome</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Automated booking system
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Enhanced member experience
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      Streamlined operations
                    </li>
                  </ul>
                </div>
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
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                    <FiSmartphone className="w-6 h-6 text-primary mb-3" />
                    <h3 className="font-semibold text-gray-900">Mobile First</h3>
                    <p className="text-sm text-gray-600">Optimized for all devices</p>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                    <FiMonitor className="w-6 h-6 text-accent mb-3" />
                    <h3 className="font-semibold text-gray-900">Modern UI</h3>
                    <p className="text-sm text-gray-600">Intuitive interface</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-100 rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                    <FiLayers className="w-6 h-6 text-green-500 mb-3" />
                    <h3 className="font-semibold text-gray-900">Scalable</h3>
                    <p className="text-sm text-gray-600">Built for growth</p>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-6 transform hover:-translate-y-1 transition-transform duration-300">
                    <FiActivity className="w-6 h-6 text-purple-500 mb-3" />
                    <h3 className="font-semibold text-gray-900">Real-time</h3>
                    <p className="text-sm text-gray-600">Live updates</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.span 
              className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              PROJECT SHOWCASE
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Visual Journey
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore the key features and design elements that make this platform stand out.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ImageGallery images={projectImages} />
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Design",
                description: "Clean and intuitive interface that puts user experience first",
                icon: <FiMonitor className="w-6 h-6" />
              },
              {
                title: "Responsive Layout",
                description: "Perfect viewing experience across all devices and screen sizes",
                icon: <FiSmartphone className="w-6 h-6" />
              },
              {
                title: "Performance",
                description: "Lightning-fast load times and smooth interactions",
                icon: <FiActivity className="w-6 h-6" />
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
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
                    The new platform has completely transformed how we operate. Our members love the ease of booking classes and tracking their progress, while our staff has seen a significant reduction in administrative tasks. The impact on our business has been remarkable.
                  </p>
                  <footer className="flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/men/32.jpg" 
                      alt="Aditya Jha" 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <cite className="font-semibold text-gray-900 not-italic">Aditya Jha</cite>
                      <p className="text-gray-600">CEO, Be in Shape Fitness</p>
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
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-2">
                      <FiUsers className="w-5 h-5 text-primary mr-2" />
                      <span className="font-semibold text-gray-900">2,500+</span>
                    </div>
                    <p className="text-sm text-gray-600">Active Members</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-2">
                      <FiCalendar className="w-5 h-5 text-accent mr-2" />
                      <span className="font-semibold text-gray-900">50+</span>
                    </div>
                    <p className="text-sm text-gray-600">Weekly Classes</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-2">
                      <FiActivity className="w-5 h-5 text-green-500 mr-2" />
                      <span className="font-semibold text-gray-900">98%</span>
                    </div>
                    <p className="text-sm text-gray-600">Member Satisfaction</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center mb-2">
                      <FiTrendingUp className="w-5 h-5 text-purple-500 mr-2" />
                      <span className="font-semibold text-gray-900">40%</span>
                    </div>
                    <p className="text-sm text-gray-600">Revenue Growth</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Fitness Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's create an impactful digital presence that takes your fitness center to the next level.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-primary hover:bg-white/90 transition-colors font-medium"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-white/20 hover:bg-white/10 transition-colors font-medium text-white"
            >
              View More Work
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GymWebsiteCaseStudy; 
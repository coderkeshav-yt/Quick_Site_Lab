import React, { useState, MouseEvent, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiShoppingCart, FiTruck, FiTrendingUp, FiUsers, FiBarChart2, FiChevronLeft, FiChevronRight, FiMaximize2, FiX, FiLayers, FiClock, FiDollarSign, FiPercent } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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

const EcommerceCaseStudy: React.FC = () => {
  const history = useHistory();

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
              <Link to="/portfolio">
                <motion.div
                  whileHover={{ x: -5 }}
                  className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors cursor-pointer group"
                >
                  <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
                  Back to Work
                </motion.div>
              </Link>
              
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
                  E-commerce Platform
                </motion.span>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Revolutionizing Online Retail with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Next-Gen E-commerce</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  How we transformed a leading retail brand's online presence, delivering a <span className="font-semibold text-white">187% boost in sales</span> with our cutting-edge e-commerce solution.
                </motion.p>
                
                <motion.div 
                  className="flex flex-wrap gap-4 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <p className="text-sm text-white/70">Industry</p>
                    <p className="font-semibold">Retail & E-commerce</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <p className="text-sm text-white/70">Services</p>
                    <p className="font-semibold">Web Dev, UI/UX, SEO</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a 
                    href="https://www.naturalpuff.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
                  >
                    View Live Project
                  </a>
                  <button className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:-translate-y-1">
                    Learn More
                  </button>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="flex justify-center items-center w-full">
  <div className="relative w-full max-w-xl">
    <DotLottieReact
      src="https://lottie.host/b9751353-fc98-44ff-b9fc-898fc441afb0/Tl80JDDLXt.lottie"
      loop
      autoplay
      style={{ width: '100%', height: '400px', background: 'transparent' }}
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
      <h3 className="text-xl font-bold text-white mb-2">Summer Collection 2023</h3>
      <p className="text-white/80 text-sm mb-4">Discover our latest arrivals with up to 40% off</p>
      <button className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-6 py-2 rounded-lg text-sm transition-colors">
        Shop Now
      </button>
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent pointer-events-none"></div>
  </div>
</div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 text-sm flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
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

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">RESULTS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impressive Growth Metrics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our e-commerce solution delivered outstanding results that transformed our client's business.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatisticItem 
              icon={FiTrendingUp} 
              value="187%" 
              label="Increase in Sales" 
              delay={0}
            />
            <StatisticItem 
              icon={FiUsers} 
              value="143%" 
              label="More Customers" 
              delay={1}
            />
            <StatisticItem 
              icon={FiShoppingCart} 
              value="3.2x" 
              label="Higher Conversion" 
              delay={2}
            />
            <StatisticItem 
              icon={FiBarChart2} 
              value="68%" 
              label="Faster Load Time" 
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">GALLERY</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Showcase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Explore the key features and design elements of our e-commerce solution.</p>
          </motion.div>
          
          <ImageGallery
            images={[
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621112/Screenshot_243_hpggoa.png",
                alt: "E-commerce Dashboard"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621112/Screenshot_246_gpk4x6.png",
                alt: "Product Listing Page"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621112/Screenshot_245_wyrkar.png",
                alt: "Mobile Responsive Design"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621110/Screenshot_249_eh3hw5.png",
                alt: "Checkout Process"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621110/Screenshot_248_dkg1kd.png",
                alt: "Admin Dashboard"
              },
              {
                src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1749621110/Screenshot_250_ksfh37.png",
                alt: "Order Management"
              }
            ]}
          />
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4">OVERVIEW</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  StyleHub Retail approached us with a challenge: their existing e-commerce platform was outdated, slow, and couldn't scale with their growing business needs. They needed a complete overhaul to provide a seamless shopping experience across all devices.
                </p>
                <p>
                  Our team designed and developed a custom e-commerce solution that not only addressed their immediate needs but also positioned them for future growth. The new platform features a modern, intuitive interface, lightning-fast performance, and robust backend infrastructure.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://www.naturalpuff.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors group"
                  >
                    Visit Live Site 
                    <FiExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
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
              <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-xl transform rotate-1">
                <img 
                  src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1749623666/Untitled_design_3_x8la0m.jpg" 
                  alt="E-commerce Platform Dashboard"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Challenge & Solution</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-6">
                <FiShoppingCart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Outdated platform with poor mobile experience
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Slow page load times affecting conversions
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Limited payment and shipping options
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Poor search and filtering capabilities
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500 mb-6">
                <FiTruck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Modern, mobile-first responsive design
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Optimized performance with 3x faster load times
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Integrated multiple payment gateways & shipping providers
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Advanced search with Functional sort & filter
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Results</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">The new platform delivered exceptional results, exceeding all expectations and setting new benchmarks for the client's online business.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <FiTrendingUp className="w-8 h-8" />, value: '187%', label: 'Increase in Sales' },
              { icon: <FiUsers className="w-8 h-8" />, value: '3.2x', label: 'More Customers' },
              { icon: <FiBarChart2 className="w-8 h-8" />, value: '68%', label: 'Faster Load Time' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <svg className="absolute -top-8 left-1/2 transform -translate-x-1/2 -translate-y-8 w-16 h-16 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="relative">
              <p className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "Working with Cybrida was a game-changer for our business. The new e-commerce platform has transformed our online presence and significantly boosted our sales. The team's attention to detail and technical expertise is unmatched."
              </p>
              <footer className="flex items-center justify-center">
                <img 
                  className="w-12 h-12 rounded-full mr-4" 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Animesh Doshi"
                />
                <div className="text-left">
                  <p className="font-bold text-gray-900">Animesh Doshi</p>
                  <p className="text-gray-600">CEO, Natural Puff</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you create an exceptional e-commerce experience for your customers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:opacity-90 transition-opacity inline-block"
            >
              Start Your Project
            </Link>
            <Link 
              to="/portfolio" 
              className="px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors inline-block"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceCaseStudy;

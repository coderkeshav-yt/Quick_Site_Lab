import React, { useState, MouseEvent, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiShoppingCart, FiTrendingUp, FiUsers, FiHeart, FiChevronLeft, FiChevronRight, FiMaximize2, FiX, FiPackage, FiActivity, FiLock, FiCheckCircle, FiAward, FiLayers } from 'react-icons/fi';
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

const DigitalPetStoreCaseStudy: React.FC = () => {
  const history = useHistory();

  // Project images with actual screenshots
  const projectImages: ImageType[] = [
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750180591/01_z3kfup.png",
      alt: "Pet Store Dashboard Overview"
    },
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750180592/02_vvz6yd.png",
      alt: "Product Catalog and Search"
    },
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750180590/03_gfdmuf.png",
      alt: "Pet Profile Management"
    },
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750180590/04_z7f4wl.png",
      alt: "Order Management System"
    },
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750180590/05_vv0zn9.png",
      alt: "Customer Analytics Dashboard"
    },
    {
      src: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750180590/06_hyfqcz.png",
      alt: "Inventory Management Interface"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/portfolio">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center text-white/80 hover:text-white mb-12 transition-colors cursor-pointer group"
            >
              <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
              Back to Portfolio
            </motion.div>
          </Link>

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
                  E-commerce
                </span>
                <span className="inline-block bg-accent/20 text-accent-light px-4 py-1.5 rounded-full text-sm font-medium">
                  Pet Care
                </span>
                <span className="inline-block bg-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-sm font-medium">
                  Launched 2024
                </span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Revolutionizing Pet Care with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Smart Shopping
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl text-white/80 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                A comprehensive e-commerce platform that transformed pet care shopping with a <span className="text-primary-light font-semibold">40% increase in customer satisfaction</span> and innovative features for pet owners.
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl">
                  <p className="text-sm text-white/70">Client</p>
                  <p className="font-semibold">Pawfectly Yours</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl">
                  <p className="text-sm text-white/70">Timeline</p>
                  <p className="font-semibold">4 Months</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-xl">
                  <p className="text-sm text-white/70">Platform</p>
                  <p className="font-semibold">Web & Mobile</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <a 
                  href="https://pawfectly-yours.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                >
                  <span>Visit Website</span>
                  <FiExternalLink />
                </a>
                <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                  View Process
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full h-full"
            >
              <DotLottieReact
                src="https://lottie.host/5f9b61a2-5e85-41b0-ac3a-e12887f41c49/y6SYacKwhf.lottie"
                loop
                autoplay
                className="w-[120%] h-[120%] -mt-10"
                style={{ transform: 'scale(1.1)' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatisticItem
              icon={FiUsers}
              value="50k+"
              label="Active Users"
              delay={1}
            />
            <StatisticItem
              icon={FiShoppingCart}
              value="120k"
              label="Orders Processed"
              delay={2}
            />
            <StatisticItem
              icon={FiTrendingUp}
              value="40%"
              label="Sales Increase"
              delay={3}
            />
            <StatisticItem
              icon={FiHeart}
              value="95%"
              label="Customer Satisfaction"
              delay={4}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">Innovative solutions for modern pet care needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <FiPackage className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Smart Inventory</h3>
              <p className="text-gray-600">Automated inventory management with real-time stock updates and reorder notifications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <FiActivity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Pet Profiles</h3>
              <p className="text-gray-600">Personalized shopping experience based on pet type, age, and preferences</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                <FiLock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Secure Checkout</h3>
              <p className="text-gray-600">Multi-step secure checkout process with various payment options</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-xl text-gray-600">Our approach to building the perfect pet care platform</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Research & Planning</h3>
                  <p className="text-gray-600">Conducted extensive market research and user interviews to understand pet owner needs</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">UX Design</h3>
                  <p className="text-gray-600">Created intuitive user flows and wireframes focused on pet-centric shopping experience</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Development</h3>
                  <p className="text-gray-600">Built with React, Node.js, and modern e-commerce technologies</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1f2744]/10 rounded-lg flex items-center justify-center text-[#1f2744] flex-shrink-0">
                  <span className="text-lg font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Testing & Launch</h3>
                  <p className="text-gray-600">Rigorous testing with real pet owners and successful market launch</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#1f2744] to-[#2f3754] p-8 rounded-xl text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Frontend</h4>
                  <ul className="space-y-2 text-sm">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>Redux Toolkit</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Backend</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Redis</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">DevOps</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>CI/CD</li>
                    <li>Monitoring</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li>Stripe</li>
                    <li>Algolia</li>
                    <li>Cloudinary</li>
                    <li>SendGrid</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Gallery</h2>
            <p className="text-xl text-gray-600">Key screens and features of our digital pet store</p>
          </motion.div>

          <ImageGallery images={projectImages} />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Impact</h2>
            <p className="text-xl text-gray-600">Measurable improvements and achievements</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Key Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-[#1f2744] mr-4 flex-shrink-0 mt-1" />
                  <span>40% increase in overall sales within first 3 months</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-[#1f2744] mr-4 flex-shrink-0 mt-1" />
                  <span>95% customer satisfaction rate</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-[#1f2744] mr-4 flex-shrink-0 mt-1" />
                  <span>30% reduction in cart abandonment rate</span>
                </li>
                <li className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-[#1f2744] mr-4 flex-shrink-0 mt-1" />
                  <span>50% increase in repeat customers</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Client Testimonial</h3>
              <blockquote className="text-gray-600 italic mb-6">
                "The digital pet store platform has transformed our business. The team's attention to detail and understanding of pet owners' needs resulted in a solution that exceeded our expectations."
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1750160242/pet-store/client.jpg"
                  alt="Client"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">CEO, Pawfectly Yours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1f2744] to-[#2f3754] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/80 mb-8">
              Let's create an innovative digital solution that drives results for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-block bg-white text-[#1f2744] hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
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

export default DigitalPetStoreCaseStudy; 
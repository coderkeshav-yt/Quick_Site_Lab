import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiTrendingUp, FiSearch, FiShield, FiSettings, FiArrowRight } from 'react-icons/fi';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  index: number;
}

// Custom images for each service with reliable URLs
const ServiceIllustrations: { [key: string]: () => JSX.Element } = {
  webdevelopment: () => (
    <img 
      key="web-dev"
      src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1749549190/web_dev_pic_hbik6q.jpg"
      alt="Web Development" 
      className="w-full h-48 object-cover rounded-lg"
      onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/2563eb/white?text=Web+Dev')}
    />
  ),
  uiuxdesign: () => (
    <img 
      key="ui-ux"
      src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1749564919/a855f7_gm6glw.jpg"
      alt="UI/UX Design" 
      className="w-full h-48 object-cover rounded-lg"
      onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/7c3aed/white?text=UI%2FUX+Design')}
    />
  ),
  mobiledevelopment: () => (
    <img 
      key="mobile-dev"
      src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1749551903/app_dev_fv8wuq.jpg"
      alt="Mobile Development" 
      className="w-full h-48 object-cover rounded-lg"
      onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/059669/white?text=Mobile+Dev')}
    />
  ),
  digitalmarketing: () => (
    <img 
      key="digital-mkt"
      src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1749564452/Untitled_design_ub6zy0.jpg"
      alt="Digital Marketing" 
      className="w-full h-48 object-cover rounded-lg"
      onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/d97706/white?text=Marketing')}
    />
  ),
  seooptimization: () => (
    <img 
      key="seo-opt"
      src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1749566396/a855f7_1_ubgpd6.jpg"
      alt="SEO Optimization" 
      className="w-full h-48 object-cover rounded-lg"
      onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/2563eb/white?text=SEO+Image+Not+Found')}
    />
  ),
  websitemaintenance: () => (
    <img 
      key="maintenance"
      src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1749551908/maintance_qrhzr8.jpg"
      alt="Website Maintenance" 
      className="w-full h-48 object-cover rounded-lg"
      onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400/6b7280/white?text=Maintenance')}
    />
  )
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, index }) => {
  // Get the appropriate illustration based on the title
  const getIllustration = (title: string) => {
    // Normalize: lowercase and remove all non-alphanumeric characters
    const key = title.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (ServiceIllustrations[key]) {
      return ServiceIllustrations[key];
    }
    // Fallback to webdevelopment illustration if no match found
    return ServiceIllustrations.webdevelopment;
  };
  
  // Create alternating gradient styles for cards
  const gradients = [
    { bg: 'from-green-50 to-green-100', accent: 'text-green-500', fill: '#4ade80', border: 'border-green-200' },
    { bg: 'from-blue-50 to-blue-100', accent: 'text-blue-500', fill: '#60a5fa', border: 'border-blue-200' },
    { bg: 'from-purple-50 to-purple-100', accent: 'text-purple-500', fill: '#c084fc', border: 'border-purple-200' },
    { bg: 'from-orange-50 to-orange-100', accent: 'text-orange-500', fill: '#fb923c', border: 'border-orange-200' },
    { bg: 'from-pink-50 to-pink-100', accent: 'text-pink-500', fill: '#f472b6', border: 'border-pink-200' },
    { bg: 'from-indigo-50 to-indigo-100', accent: 'text-indigo-500', fill: '#818cf8', border: 'border-indigo-200' },
  ];
  
  const style = gradients[index % gradients.length];
  const Illustration = getIllustration(title);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`relative group overflow-hidden bg-gradient-to-br ${style.bg} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent h-full`}
    >
      {/* Sharp border effect on hover - thinner and more precise */}
      <div className={`absolute inset-0 border-[3px] ${style.border} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-200 pointer-events-none z-20 group-hover:shadow-sm`}></div>
      
      {/* Subtle shadow for depth */}
      <div className={`absolute inset-0 shadow-md opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-200 pointer-events-none z-10`}></div>
      {/* Card content */}
      <div className="relative p-5 z-10 flex flex-col h-full">
        {/* Top section with tag */}
        <div className="flex justify-end">
          {/* Decorative tag */}
          <div className={`px-3 py-1 rounded-full ${style.bg} ${style.accent} text-xs font-semibold border ${style.border}`}>
            Solution
          </div>
        </div>
        
        {/* Illustration - larger and more prominent like in the image */}
        <div className="flex justify-center items-center pt-4 pb-6 min-h-[160px]">
          <Illustration />
        </div>
        
        {/* Main content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <FiCode />,
      title: 'Web Development',
      description: 'We build responsive, high-performance websites that deliver exceptional user experiences and drive business growth.',
      delay: 0.1,
    },
    {
      icon: <FiLayout />,
      title: 'UI/UX Design',
      description: 'Our design team creates intuitive, engaging user interfaces that enhance usability and strengthen your brand identity.',
      delay: 0.2,
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile Development',
      description: 'We develop custom mobile applications that provide seamless experiences across all devices and platforms.',
      delay: 0.3,
    },
    {
      icon: <FiTrendingUp />,
      title: 'Digital Marketing',
      description: 'Our data-driven marketing strategies help you reach your target audience and achieve measurable business results.',
      delay: 0.4,
    },
    {
      icon: <FiSearch />,
      title: 'SEO Optimization',
      description: 'We optimize your website to improve visibility in search engines and drive more qualified traffic to your business.',
      delay: 0.5,
    },
    {
      icon: <FiSettings />,
      title: 'Website Maintenance',
      description: 'Our ongoing maintenance services ensure your website remains secure, up-to-date, and performing at its best.',
      delay: 0.6,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4"
          >
            <span className="text-sm font-medium text-primary">Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Services & Solutions at <span className="text-primary">Cybrida</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We offer cutting-edge web development and digital marketing services to help your business stand out and succeed in today's competitive online landscape.
          </motion.p>
        </div>

        {/* Service cards with improved layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay * 1.2}
              index={index}
            />
          ))}
        </div>
        
        {/* Decorative divider */}
        <div className="relative my-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-sm text-gray-500">Explore More</span>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Looking for a comprehensive solution? Explore our full range of services and discover how we can help transform your digital presence.</p>
          
          <Link 
            to="/services" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            View All Services <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;

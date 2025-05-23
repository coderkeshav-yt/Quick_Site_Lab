import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiShoppingCart, FiServer, FiLayout, FiTool } from 'react-icons/fi';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; delay: number }> = ({ 
  icon, title, delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 shadow-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
    </motion.div>
  );
};

const ServicesOverview: React.FC = () => {
  const services = [
    { icon: <FiCode size={24} />, title: 'Custom Website Development' },
    { icon: <FiShoppingCart size={24} />, title: 'E-commerce Solutions' },
    { icon: <FiServer size={24} />, title: 'Web App Development' },
    { icon: <FiLayout size={24} />, title: 'UI/UX Design' },
    { icon: <FiTool size={24} />, title: 'Maintenance & Support' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-indigo-950 mb-4">Services Overview</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We provide comprehensive web development services to help you establish a strong online presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              delay={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;

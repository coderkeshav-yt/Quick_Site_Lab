import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const CtaSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with premium gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-white opacity-5 rounded-full"></div>
        <div className="absolute -bottom-24 left-1/4 w-80 h-80 bg-white opacity-5 rounded-full"></div>
      </div>
      
      {/* Glass overlay for depth */}
      <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-blue-900/10 to-indigo-900/20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20"
            >
              <span className="text-sm font-medium text-white">Start Your Journey Today</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
            >
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Digital Presence</span>?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-10 leading-relaxed"
            >
              Let's work together to create a website that drives results for your business. 
              Our team of experts is ready to help you achieve your goals.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-indigo-900 bg-white hover:bg-blue-50 shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Get Started Today <FiArrowRight className="ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/30 backdrop-blur-sm bg-white/10 text-base font-medium rounded-full text-white hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
              >
                Explore Our Services
              </Link>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-blue-100"
            >
              <div className="flex items-center">
                <FiCheckCircle className="mr-2 text-blue-200" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center">
                <FiCheckCircle className="mr-2 text-blue-200" />
                <span>14-day satisfaction guarantee</span>
              </div>
              <div className="flex items-center">
                <FiCheckCircle className="mr-2 text-blue-200" />
                <span>24/7 support</span>
              </div>
            </motion.div>
          </div>
          
          {/* Right content - decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute inset-8 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 8L16 12L10 16V8Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

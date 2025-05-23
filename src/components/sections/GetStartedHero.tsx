import React from 'react';
import { motion } from 'framer-motion';

const GetStartedHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-12">
      {/* Space background with matching theme */}
      <div className="absolute inset-0 z-0 bg-indigo-950">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'url("https://res.cloudinary.com/dlvxjnycr/image/upload/v1747909355/bunnynet-the-best-content-delivery-network-cdn_hsz9og.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8
          }}
        ></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-5xl font-bold text-white mb-4 font-['Rubik']">Get Started with Quick Site Lab</h1>
            <div className="w-24 h-1 bg-purple-500 mx-auto"></div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto font-['Rubik'] font-light"
          >
            Tell us about your project and let's build something amazing together.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default GetStartedHero;

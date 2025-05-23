import React from 'react';
import { motion } from 'framer-motion';

const ClientsSection: React.FC = () => {
  // Client logos with image URLs
  const clients = [
    { 
      name: 'Microsoft', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png'
    },
    { 
      name: 'Google', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png'
    },
    { 
      name: 'Amazon', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
    },
    { 
      name: 'IBM', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/800px-IBM_logo.svg.png'
    },
    { 
      name: 'Adobe', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Adobe_Systems_logo_and_wordmark.svg/800px-Adobe_Systems_logo_and_wordmark.svg.png'
    },
    { 
      name: 'Shopify', 
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/744px-Shopify_logo_2018.svg.png'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-indigo-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-1/4 translate-y-1/4"></div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h4 className="text-sm font-semibold tracking-wider text-primary uppercase mb-3">Trusted Worldwide</h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600">Join the world's most innovative companies that rely on our expertise to transform their digital presence.</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center group"
            >
              <div 
                className="h-20 w-full max-w-[160px] rounded-lg flex items-center justify-center bg-white p-4 shadow-md transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
              >
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          <div className="flex flex-col items-center px-8">
            <span className="text-3xl font-bold text-primary mb-2">250+</span>
            <span className="text-gray-600">Projects Completed</span>
          </div>
          <div className="flex flex-col items-center px-8">
            <span className="text-3xl font-bold text-primary mb-2">98%</span>
            <span className="text-gray-600">Client Satisfaction</span>
          </div>
          <div className="flex flex-col items-center px-8">
            <span className="text-3xl font-bold text-primary mb-2">7+</span>
            <span className="text-gray-600">Years Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;

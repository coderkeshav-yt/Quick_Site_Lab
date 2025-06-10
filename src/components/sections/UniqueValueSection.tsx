import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiCode, FiLayout, FiClock, FiAward } from 'react-icons/fi';

const ValueItem: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({
  icon, title, description, delay
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
      viewport={{ once: true }}
      className="flex items-start p-6 bg-indigo-900/30 backdrop-blur-sm rounded-xl shadow-lg border border-indigo-500/20"
    >
      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};

const UniqueValueSection: React.FC = () => {
  const valueProps = [
    {
      icon: <FiCode size={24} />,
      title: 'Specialized Tech Stack',
      description: 'We use cutting-edge technologies like React, Next.js, and Node.js to build fast, scalable web applications.',
    },
    {
      icon: <FiLayout size={24} />,
      title: 'Design + Dev Integration',
      description: 'Our designers and developers work closely together from day one, ensuring seamless implementation of designs.',
    },
    {
      icon: <FiClock size={24} />,
      title: 'Fast Delivery, Clean Code',
      description: 'We focus on writing maintainable, well-documented code that allows for rapid development without sacrificing quality.',
    },
    {
      icon: <FiAward size={24} />,
      title: 'Proven Track Record',
      description: 'With 100+ successful projects across various industries, our portfolio speaks for itself.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-950 to-indigo-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute -top-[400px] -left-[400px] w-[800px] h-[800px] rounded-full bg-purple-600 blur-3xl"></div>
        <div className="absolute top-[50%] -right-[400px] w-[800px] h-[800px] rounded-full bg-indigo-600 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Cybrida</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our approach to web development sets us apart from the competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueProps.map((prop, index) => (
            <ValueItem
              key={index}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueValueSection;

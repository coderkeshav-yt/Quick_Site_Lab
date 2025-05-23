import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiUsers, FiCheckCircle, FiAward, FiCode, FiBriefcase, FiGlobe } from 'react-icons/fi';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  description?: string;
  delay: number;
  color: string;
  accentColor: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, description, delay, color, accentColor }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const numberRef = useRef<HTMLHeadingElement>(null);
  
  // Animate the counter when in view
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay, ease: "easeOut" }
      });
      
      // Animate the number counting up
      if (numberRef.current) {
        const finalValue = parseInt(value.replace(/\D/g, ''));
        let startValue = 0;
        const duration = 2000;
        const increment = Math.ceil(finalValue / (duration / 30));
        
        const counter = setInterval(() => {
          startValue += increment;
          if (startValue >= finalValue) {
            if (numberRef.current) numberRef.current.textContent = value;
            clearInterval(counter);
          } else {
            if (numberRef.current) numberRef.current.textContent = `${startValue}+`;
          }
        }, 30);
      }
    }
  }, [isInView, controls, delay, value]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="relative p-8 rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100"
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      {/* Background gradient with subtle animation */}
      <div className={`absolute inset-0 ${color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 ${accentColor}`}></div>
      
      {/* Decorative elements */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 opacity-50"></div>
      <div className="absolute -left-4 -top-4 w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 opacity-30"></div>
      
      <div className="relative z-10">
        <div className={`inline-flex items-center justify-center p-4 ${color} bg-opacity-10 ${accentColor} bg-opacity-20 text-white rounded-xl mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
          <span className="h-7 w-7">{icon}</span>
        </div>
        
        <h3 ref={numberRef} className={`text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent ${accentColor}`}>
          {value}
        </h3>
        
        <p className="text-gray-800 font-semibold text-lg mb-2">{label}</p>
        {description && <p className="text-gray-500 text-sm">{description}</p>}
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <FiUsers className="stroke-[2.5px]" />,
      value: "250+",
      label: "Projects Delivered",
      description: "Successful projects across various industries",
      delay: 0.1,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      accentColor: "bg-gradient-to-r from-blue-500 to-indigo-600"
    },
    {
      icon: <FiCheckCircle className="stroke-[2.5px]" />,
      value: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project client surveys",
      delay: 0.2,
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
      accentColor: "bg-gradient-to-r from-purple-500 to-pink-600"
    },
    {
      icon: <FiGlobe className="stroke-[2.5px]" />,
      value: "40+",
      label: "Countries Served",
      description: "Global clients across 6 continents",
      delay: 0.3,
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      accentColor: "bg-gradient-to-r from-amber-500 to-orange-600"
    },
    {
      icon: <FiCode className="stroke-[2.5px]" />,
      value: "1.2M+",
      label: "Lines of Code",
      description: "Clean, efficient, and maintainable",
      delay: 0.4,
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      accentColor: "bg-gradient-to-r from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/dot-pattern_qdcvml.svg')] bg-repeat opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with animated underline */}
        <div className="text-center mb-16 relative">
          <motion.div 
            className="absolute left-1/2 -bottom-4 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: 0, x: '-50%' }}
            whileInView={{ width: '80px', x: '-50%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Impact</span> in Numbers
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-light"
          >
            Delivering measurable results and exceptional value for our clients worldwide
          </motion.p>
        </div>
        
        {/* Stats grid with improved spacing and layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              description={stat.description}
              delay={stat.delay}
              color={stat.color}
              accentColor={stat.accentColor}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their digital presence with our expert services.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg transition-shadow duration-300"
          >
            Start Your Project
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;

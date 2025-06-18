import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiUsers, FiCheckCircle, FiAward, FiCode, FiBriefcase, FiGlobe, FiStar } from 'react-icons/fi';
import { FaCrown } from 'react-icons/fa';

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
      className="relative p-10 rounded-3xl overflow-hidden group shadow-xl border border-transparent bg-white/40 backdrop-blur-2xl transition-all duration-300 hover:scale-[1.045] hover:border-gradient-to-r hover:from-primary hover:to-accent"
      whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
      style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 z-0 rounded-3xl pointer-events-none animate-gradient-x bg-gradient-to-r from-primary via-accent to-primary opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-2xl rounded-3xl z-0" />
      {/* Icon with glow */}
      <div className="relative z-10 flex items-center justify-center mb-7">
        <div className={`inline-flex items-center justify-center p-5 bg-white/30 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
          {typeof icon === 'string' ? (
            <img src={icon} alt="stat icon" className="h-12 w-12 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 18px #a5b4fc)' }} />
          ) : (
            <span className="h-10 w-10 text-4xl text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ filter: 'drop-shadow(0 0 18px #a5b4fc)' }}>{icon}</span>
          )}
        </div>
        <div className="absolute -z-10 w-20 h-20 rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition-all duration-300" style={{ background: 'radial-gradient(circle, #a5b4fc 0%, transparent 70%)' }} />
      </div>
      {/* Animated number with shimmer and luxury font */}
      <h3 ref={numberRef} className={`text-5xl md:text-6xl font-extrabold mb-3 bg-clip-text text-transparent ${accentColor} relative z-10 tracking-tight animate-shimmer-premium`} style={{ fontFamily: 'Poppins, Inter, Segoe UI, Arial, sans-serif', letterSpacing: '0.01em' }}>
        {value}
      </h3>
      <p className="text-gray-900 font-semibold text-lg mb-2 z-10 relative tracking-wide" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>{label}</p>
      {description && <p className="text-gray-700 text-sm z-10 relative" style={{ fontFamily: 'Inter, Segoe UI, Arial, sans-serif' }}>{description}</p>}
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: '/images/icons/1.png',
      value: "250+",
      label: "Projects Delivered",
      description: "Successful projects across various industries",
      delay: 0.1,
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      accentColor: "bg-gradient-to-r from-blue-500 to-indigo-600"
    },
    {
      icon: '/images/icons/2.png',
      value: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project client surveys",
      delay: 0.2,
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
      accentColor: "bg-gradient-to-r from-purple-500 to-pink-600"
    },
    {
      icon: '/images/icons/3.png',
      value: "40+",
      label: "Countries Served",
      description: "Global clients across 6 continents",
      delay: 0.3,
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
      accentColor: "bg-gradient-to-r from-amber-500 to-orange-600"
    },
    {
      icon: '/images/icons/4.png',
      value: "1.2M+",
      label: "Lines of Code",
      description: "Clean, efficient, and maintainable",
      delay: 0.4,
      color: "bg-gradient-to-br from-emerald-500 to-teal-600",
      accentColor: "bg-gradient-to-r from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Subtle animated blurred shape background */}
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-primary/20 blur-3xl opacity-30 animate-float pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-accent/20 blur-2xl opacity-20 animate-float2 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium badge above title */}
        <div className="flex justify-center mb-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg text-sm uppercase tracking-wider">
            <FiStar className="text-yellow-300" /> Premium Results
          </span>
        </div>
        {/* Section header with animated underline */}
        <div className="text-center mb-16 relative">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-xl"
          >
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent animate-gradient-x">Impact</span> in Numbers
          </motion.h2>
          <motion.div 
            className="mx-auto h-2 w-32 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse"
            initial={{ width: 0 }}
            whileInView={{ width: '8rem' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 max-w-3xl mx-auto font-light mt-6"
          >
            Delivering measurable results and exceptional value for our clients worldwide
          </motion.p>
        </div>
        {/* Stats grid with more whitespace */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
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
        {/* Premium CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg">
            Join hundreds of satisfied clients who have transformed their digital presence with our expert services.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-accent animate-glow"
            style={{ boxShadow: '0 0 32px 0 #a5b4fc33' }}
          >
            Start Your Project
            <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
      {/* Custom shimmer and float animations */}
      <style>{`
        .animate-shimmer-premium {
          background-size: 200% 100%;
          animation: shimmerPremium 2.5s linear infinite;
        }
        @keyframes shimmerPremium {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-float {
          animation: floatY 7s ease-in-out infinite alternate;
        }
        .animate-float2 {
          animation: floatX 9s ease-in-out infinite alternate;
        }
        @keyframes floatY {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        @keyframes floatX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-32px); }
        }
      `}</style>
    </section>
  );
};

export default StatsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiCheckCircle, FiUsers, FiBriefcase } from 'react-icons/fi';

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string; delay: number }> = ({
  icon, value, label, delay
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-indigo-900/30 backdrop-blur-sm rounded-xl p-6 text-center border border-indigo-500/20"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>
      <p className="text-gray-300">{label}</p>
    </motion.div>
  );
};

const IndustryBadge: React.FC<{ name: string; delay: number }> = ({ name, delay }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: delay * 0.05 }}
      viewport={{ once: true }}
      className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full px-4 py-2 text-sm font-medium text-white m-1"
    >
      {name}
    </motion.span>
  );
};

const ExperienceSection: React.FC = () => {
  const stats = [
    { icon: <FiCalendar size={28} />, value: "8+", label: "Years of Experience" },
    { icon: <FiCheckCircle size={28} />, value: "150+", label: "Projects Completed" },
    { icon: <FiUsers size={28} />, value: "95+", label: "Happy Clients" },
    { icon: <FiBriefcase size={28} />, value: "15+", label: "Industry Experts" }
  ];

  const industries = [
    "E-commerce", "Healthcare", "Education", "Finance", "Technology", 
    "Real Estate", "Manufacturing", "Entertainment", "Food & Beverage", 
    "Fitness & Wellness", "Travel & Tourism", "Non-profit"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-950 to-purple-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Experience</h2>
          <div className="w-24 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With years of experience and hundreds of successful projects, we've developed expertise across many industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              delay={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Industries We've Worked With</h3>
          <div className="flex flex-wrap justify-center">
            {industries.map((industry, index) => (
              <IndustryBadge key={index} name={industry} delay={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;

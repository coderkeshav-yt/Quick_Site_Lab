import React from 'react';
import { motion } from 'framer-motion';
import { FiCoffee, FiLayout, FiCode, FiCheckCircle } from 'react-icons/fi';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  icon, 
  title, 
  description, 
  stepNumber, 
  delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 relative">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white text-xl font-bold">
            {stepNumber}
          </div>
          {stepNumber < 4 && (
            <div className="absolute top-14 left-1/2 w-px h-full -ml-px border-l-2 border-dashed border-gray-300" />
          )}
        </div>
        <div className="ml-6">
          <div className="flex items-center mb-2">
            <div className="mr-3 text-primary">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: <span className="h-6 w-6"><FiCoffee /></span>,
      title: "Discovery",
      description: "We start by understanding your business goals, target audience, and project requirements through in-depth consultations.",
      stepNumber: 1,
      delay: 0.1
    },
    {
      icon: <span className="h-6 w-6"><FiLayout /></span>,
      title: "Design",
      description: "Our design team creates wireframes and mockups that align with your brand identity and provide optimal user experience.",
      stepNumber: 2,
      delay: 0.2
    },
    {
      icon: <span className="h-6 w-6"><FiCode /></span>,
      title: "Development",
      description: "Our developers bring the designs to life using the latest technologies and best practices for performance and security.",
      stepNumber: 3,
      delay: 0.3
    },
    {
      icon: <span className="h-6 w-6"><FiCheckCircle /></span>,
      title: "Deployment",
      description: "After thorough testing and your approval, we launch your website or application and provide ongoing support.",
      stepNumber: 4,
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We follow a proven methodology to deliver successful projects that exceed expectations.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                stepNumber={step.stepNumber}
                delay={step.delay}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

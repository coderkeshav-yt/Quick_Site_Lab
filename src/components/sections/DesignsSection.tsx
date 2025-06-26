import React from 'react';
import { motion } from 'framer-motion';
import { FiFigma, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';

const designs = [
  {
    id: 1,
    title: 'Pizza E-commerce App',
    description: 'Modern food delivery app interface with seamless ordering experience',
    category: 'Web App',
    link: 'https://www.figma.com/proto/j7B2QzzCJ0T45eurr35J0c/Untitled?node-id=1-2&t=L5Unyz6t8vaJDuVE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
    preview: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1750691280/pizza_e-commerce_kkhnup.png'
  },
  {
    id: 2,
    title: 'MotoCare Companion App',
    description: 'Smart bike interface for effortless maintenance tracking and service booking',
    category: 'Web App',
    link: 'https://www.figma.com/proto/PDzUOH86qMCxHjLChhmfNW/Royal-Enfield-Bike-design?node-id=1-2&p=f&t=EahPCIwZCOGKR3p4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    preview: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1750950545/bike_c51s8t.png'
  },
  {
    id: 3,
    title: 'Mac D Digital Mall',
    description: 'Next-gen online mall for exclusive Mac D drops and smooth shopping vibes',
    category: 'Mobile App',
    link: 'https://www.figma.com/proto/LhQupBZFDo8tMA4HvWrtoe/McDonald-App-Prototype--Community-?node-id=1-1553&p=f&t=8UlU1w0W4nJekpXd-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    preview: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1750952241/000_sg6u97.png'
  },
];

const DesignCard = ({ design }: { design: typeof designs[0] }) => (
  <motion.div
    className="group bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <div className="relative h-64 overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 z-0" />
      <div className="relative h-full w-full flex items-center justify-center p-2">
        <img
          src={design.preview}
          alt={design.title}
          className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          style={{ maxHeight: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 mb-3">
            <FiFigma className="mr-1.5 h-3.5 w-3.5 text-pink-500" />
            {design.category}
          </span>
          <h3 className="text-xl font-bold text-white">{design.title}</h3>
        </div>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {design.title}
        </h3>
        <SiFigma className="h-5 w-5 text-pink-500 mt-1" />
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">
        {design.description}
      </p>
      <a
        href={design.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-blue-500/20"
      >
        View on Figma
        <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </motion.div>
);

const DesignsSection: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block mb-3 px-4 py-1.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            DESIGN RESOURCES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Design Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our collection of premium design resources and UI kits available on Figma. 
            Each design is crafted with attention to detail and ready for your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://www.figma.com/@launchory"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
          >
            <span>Explore All Designs</span>
            <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignsSection;

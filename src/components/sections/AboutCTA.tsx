import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const AboutCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 opacity-20 blur-3xl"></div>
        <div className="absolute top-[40%] left-[30%] w-[150px] h-[150px] rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-10 blur-2xl"></div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOHY2QTEyIDEyIDAgMDAzMCAxOGg2eiIgZmlsbD0icmdiYSgxMDMsNTgsMTgzLDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-40 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 md:p-16 border border-indigo-500/20 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Decorative border */}
          <div className="absolute inset-0 border-8 border-indigo-500/5 rounded-3xl pointer-events-none"></div>
          
          {/* Subtle glow effect */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[500px] h-[200px] bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 blur-3xl rounded-full"></div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-indigo-950 mb-6 font-['Rubik'] tracking-tight"
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-indigo-900/80 mb-10 max-w-3xl mx-auto font-['Rubik'] font-light leading-relaxed"
          >
            Let's discuss how we can help bring your vision to life with our expertise in web development and design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-['Rubik'] font-bold rounded-xl text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Us
              <FiArrowRight className="ml-2" />
            </Link>
            <Link 
              to="/portfolio" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-indigo-500/30 text-lg font-['Rubik'] font-bold rounded-xl text-indigo-700 bg-transparent hover:bg-indigo-50 hover:border-indigo-500/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;

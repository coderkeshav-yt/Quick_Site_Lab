import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
const portfolio1 = 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1750149187/ECOM_zhn53a.webp';
const portfolio2 = 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1750149187/GYM_pyy6dt.webp';
const portfolio3 = 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1750149186/ADMIN_m03axo.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  technologies?: string[];
  link?: string;
  caseStudyLink?: string;
}

const PortfolioSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleFilterChange = (newFilter: string) => {
    setIsAnimating(true);
    setFilter(newFilter);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [filter]);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      image: portfolio1,
      description: "A modern e-commerce platform with advanced filtering, payment integration, and personalized recommendations.",
      client: "Natural Puff",
      technologies: ["React", "Node.js", "MongoDB", "Razorpay"],
      link: "https://www.naturalpuff.com/",
      caseStudyLink: "/case-studies/ecommerce"
    },
    {
      id: 2,
      title: "Gym Website",
      category: "web",
      image: portfolio2,
      description: "A comprehensive gym website with class schedules, membership plans, and trainer profiles.",
      client: "Be in Shape",
      technologies: ["React", "Node.js", "Vite", "Tailwind CSS"],
      link: "https://gymweb-zeta.vercel.app/",
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "web",
      image: portfolio3,
      description: "Interactive dashboard for financial data visualization and analysis with real-time updates and predictive analytics.",
      client: "Market Pulse",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      link: "https://market-pulse-three.vercel.app/",
    },
    {
      id: 4,
      title: "Digital Pet Store",
      category: "mobile",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750149235/PET_mtepca.jpg",
      description: "Mobile app for tracking workouts, nutrition, and health metrics with personalized coaching and social features.",
      client: "Pawfectly Yours",
      technologies: ["React", "Firebase", "Node.js", "Stripe"],
      link: "https://pawfectly-yours.vercel.app/"
    },
    {
      id: 5,
      title: "Landing Page",
      category: "web",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750149186/LAND_vzb2pe.jpg",
      description: "Content-focused travel blog with custom CMS, interactive maps, and social sharing integration.",
      client: "Wanderlust Adventures",
      technologies: ["Next.js", "Vue.js", "Tailwind CSS", "Webflow"],
      link: "https://landing-page-olive-five-82.vercel.app/"
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      category: "web",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750149189/RESTAURANT_z3klfi.webp",
      description: "Online ordering system for restaurants with real-time updates, table reservations, and loyalty program.",
      client: "Gourmet Dining Group",
      technologies: ["React", "Node.js", "Socket.io", "Stripe"],
      link: "https://www.gourmetdining.com/"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-4"
          >
            <span className="text-sm font-medium text-accent">Our Portfolio</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Recent Projects by <span className="text-primary">Cybrida</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Explore our showcase of innovative digital solutions that have helped businesses transform their online presence and achieve their goals.
          </motion.p>
        </div>
        
        {/* Filter buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <button
            onClick={() => handleFilterChange('all')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
              filter === 'all' 
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-button transform scale-105' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => handleFilterChange('web')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
              filter === 'web' 
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-button transform scale-105' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => handleFilterChange('mobile')}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-sm ${
              filter === 'mobile' 
                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-button transform scale-105' 
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            Mobile Apps
          </button>
        </motion.div>
        
        {/* Projects grid */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 h-full overflow-hidden border border-gray-100 flex flex-col">
                    <div className="relative overflow-hidden">
                      <div className="absolute top-4 right-4 z-10">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/80 backdrop-blur-sm text-gray-700">
                          {project.category === 'web' ? 'Web App' : 'Mobile App'}
                        </span>
                      </div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover"
                      />
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 left-4 p-2 rounded-full bg-white/80 backdrop-blur-sm text-primary hover:bg-white transition-colors duration-300 opacity-0 group-hover:opacity-100"
                          aria-label={`Visit ${project.title} website`}
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">
                          Client: <span className="font-medium">{project.client}</span>
                        </p>
                        <p className="text-gray-700">{project.description}</p>
                      </div>
                      
                      {project.technologies && (
                        <div className="mt-auto pt-4">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, i) => (
                              <span 
                                key={i} 
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <Link 
                            to={project.caseStudyLink || `/portfolio/${project.id}`} 
                            className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors duration-200"
                          >
                            View Case Study <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link 
            to="/portfolio" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-button transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore All Projects <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

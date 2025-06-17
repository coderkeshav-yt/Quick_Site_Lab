import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiRazorpay, 
  SiVite, 
  SiTailwindcss, 
  SiVuedotjs, 
  SiD3Dotjs, 
  SiExpress, 
  SiPostgresql, 
  SiFirebase, 
  SiStripe, 
  SiNextdotjs, 
  SiWebflow, 
  SiSocketdotio 
} from 'react-icons/si';

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
  technologies?: Array<{
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }>;
  link?: string;
  caseStudyLink?: string;
}

const getTechConfig = (techName: string): { icon: React.ComponentType<{ className?: string }>, color: string } => {
  const techConfig: { [key: string]: { icon: React.ComponentType<{ className?: string }>, color: string } } = {
    'React': { icon: SiReact, color: '#61DAFB' },
    'Node.js': { icon: SiNodedotjs, color: '#339933' },
    'MongoDB': { icon: SiMongodb, color: '#47A248' },
    'Razorpay': { icon: SiRazorpay, color: '#2C63FF' },
    'Vite': { icon: SiVite, color: '#646CFF' },
    'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
    'Vue.js': { icon: SiVuedotjs, color: '#4FC08D' },
    'D3.js': { icon: SiD3Dotjs, color: '#F9A03C' },
    'Express': { icon: SiExpress, color: '#000000' },
    'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
    'Firebase': { icon: SiFirebase, color: '#FFCA28' },
    'Stripe': { icon: SiStripe, color: '#008CDD' },
    'Next.js': { icon: SiNextdotjs, color: '#000000' },
    'Webflow': { icon: SiWebflow, color: '#4353FF' },
    'Socket.io': { icon: SiSocketdotio, color: '#010101' }
  };
  return techConfig[techName] || { icon: SiReact, color: '#61DAFB' };
};

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
      technologies: [
        { name: "React", icon: SiReact, color: '#61DAFB' },
        { name: "Node.js", icon: SiNodedotjs, color: '#339933' },
        { name: "MongoDB", icon: SiMongodb, color: '#47A248' },
        { name: "Razorpay", icon: SiRazorpay, color: '#2C63FF' }
      ],
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
      technologies: [
        { name: "React", icon: SiReact, color: '#61DAFB' },
        { name: "Node.js", icon: SiNodedotjs, color: '#339933' },
        { name: "Vite", icon: SiVite, color: '#646CFF' },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: '#06B6D4' }
      ],
      link: "https://gymweb-zeta.vercel.app/",
      caseStudyLink: "/case-studies/gym"
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "web",
      image: portfolio3,
      description: "Interactive dashboard for financial data visualization and analysis with real-time updates and predictive analytics.",
      client: "Market Pulse",
      technologies: [
        { name: "Vue.js", icon: SiVuedotjs, color: '#4FC08D' },
        { name: "D3.js", icon: SiD3Dotjs, color: '#F9A03C' },
        { name: "Express", icon: SiExpress, color: '#000000' },
        { name: "PostgreSQL", icon: SiPostgresql, color: '#4169E1' }
      ],
      link: "https://market-pulse-three.vercel.app/",
      caseStudyLink: "/case-studies/financial-dashboard"
    },
    {
      id: 4,
      title: "Digital Pet Store",
      category: "mobile",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750149235/PET_mtepca.jpg",
      description: "Mobile app for tracking workouts, nutrition, and health metrics with personalized coaching and social features.",
      client: "Pawfectly Yours",
      technologies: [
        { name: "React", icon: SiReact, color: '#61DAFB' },
        { name: "Firebase", icon: SiFirebase, color: '#FFCA28' },
        { name: "Node.js", icon: SiNodedotjs, color: '#339933' },
        { name: "Stripe", icon: SiStripe, color: '#008CDD' }
      ],
      link: "https://pawfectly-yours.vercel.app/",
      caseStudyLink: "/case-studies/digital-pet-store"
    },
    {
      id: 5,
      title: "Landing Page",
      category: "web",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750149186/LAND_vzb2pe.jpg",
      description: "Content-focused travel blog with custom CMS, interactive maps, and social sharing integration.",
      client: "Cybrida",
      technologies: [
        { name: "Next.js", icon: SiNextdotjs, color: '#000000' },
        { name: "Vue.js", icon: SiVuedotjs, color: '#4FC08D' },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: '#06B6D4' },
        { name: "Webflow", icon: SiWebflow, color: '#4353FF' }
      ],
      link: "https://landing-page-olive-five-82.vercel.app/",
      caseStudyLink: "/case-studies/landing-page"
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      category: "web",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1750149189/RESTAURANT_z3klfi.webp",
      description: "Online ordering system for restaurants with real-time updates, table reservations, and loyalty program.",
      client: "Bawarchi restaurant",
      technologies: [
        { name: "React", icon: SiReact, color: '#61DAFB' },
        { name: "Node.js", icon: SiNodedotjs, color: '#339933' },
        { name: "Socket.io", icon: SiSocketdotio, color: '#010101' },
        { name: "Stripe", icon: SiStripe, color: '#008CDD' }
      ],
      link: "#",
      caseStudyLink: "/development-progress"
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
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.technologies.map((tech, i) => (
                              <span 
                                key={i} 
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full transition-all duration-300 text-[11px]"
                                style={{
                                  backgroundColor: `${tech.color}15`,
                                  color: tech.color,
                                  border: `1px solid ${tech.color}30`
                                }}
                              >
                                <tech.icon className="w-3 h-3" />
                                <span className="font-medium">{tech.name}</span>
                              </span>
                            ))}
                          </div>
                          
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link 
                              to={project.caseStudyLink || `/portfolio/${project.id}`} 
                              className="inline-flex items-center px-4 py-2 rounded-lg relative overflow-hidden group"
                            >
                              <motion.div
                                className="absolute inset-0 bg-primary/10"
                                initial={{ opacity: 1 }}
                                whileHover={{ 
                                  opacity: 1,
                                  background: "linear-gradient(90deg, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--primary-rgb), 0.2) 50%, rgba(var(--primary-rgb), 0.1) 100%)",
                                }}
                                transition={{ duration: 0.3 }}
                              />
                              <motion.div 
                                className="relative flex items-center"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                              >
                                <span className="font-medium text-primary">View Case Study</span>
                                <motion.div
                                  className="ml-2"
                                  whileHover={{ x: 4 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                  <FiArrowRight className="w-4 h-4 text-primary" />
                                </motion.div>
                              </motion.div>
                            </Link>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { FiExternalLink, FiArrowRight, FiSearch, FiFilter, FiAward, FiStar, FiClock, FiUsers, FiGrid, FiTrendingUp, FiLayers, FiCheck, FiCoffee, FiHeart, FiChevronDown, FiX, FiMessageCircle } from 'react-icons/fi';
import portfolio1 from '../assets/portfolio-1.svg';
import portfolio2 from '../assets/portfolio-2.svg';
import portfolio3 from '../assets/portfolio-3.svg';

interface Project {
  id: number;
  title: string;
  category: string;
  industry: string;
  image: string;
  description: string;
  client?: string;
  technologies?: string[];
  link?: string;
  year: number;
  results?: string[];
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [industryFilter, setIndustryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleFilterChange = (newFilter: string) => {
    setIsAnimating(true);
    setFilter(newFilter);
  };
  
  const handleIndustryFilterChange = (newFilter: string) => {
    setIsAnimating(true);
    setIndustryFilter(newFilter);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [filter, industryFilter]);
  
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      industry: "retail",
      image: portfolio1,
      description: "A sophisticated e-commerce platform with advanced filtering, seamless payment integration, and personalized recommendation engine that increased conversion rates by 35%.",
      client: "StyleHub Fashion",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
      link: "https://stylehub-demo.launchory.com",
      year: 2024,
      results: [
        "Increased conversion rate by 35%",
        "Reduced cart abandonment by 25%",
        "Improved page load speed by 60%"
      ]
    },
    {
      id: 2,
      title: "Real Estate Application",
      category: "mobile",
      industry: "real-estate",
      image: portfolio2,
      description: "Premium mobile application for real estate listings with interactive maps, virtual tours, and mortgage calculator. Seamless experience across iOS and Android.",
      client: "HomeQuest Properties",
      technologies: ["React Native", "Firebase", "Google Maps API", "AR Kit"],
      link: "https://homequest-demo.launchory.com",
      year: 2023,
      results: [
        "50,000+ downloads in first month",
        "4.8/5 average app store rating",
        "28% increase in lead generation"
      ]
    },
    {
      id: 3,
      title: "Financial Dashboard",
      category: "web",
      industry: "finance",
      image: portfolio3,
      description: "Interactive dashboard for financial data visualization and analysis with real-time updates and predictive analytics powered by machine learning algorithms.",
      client: "InvestWise Financial",
      technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL", "TensorFlow.js"],
      link: "https://investwise-demo.launchory.com",
      year: 2024,
      results: [
        "Reduced data analysis time by 75%",
        "Improved forecast accuracy by 40%",
        "Automated reporting saved 20 hours/week"
      ]
    },
    {
      id: 4,
      title: "Premium Fitness Tracker",
      category: "mobile",
      industry: "health",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/fitness-app_mzc4u9.jpg",
      description: "Elegant mobile app for tracking workouts, nutrition, and health metrics with personalized AI coaching and social features.",
      client: "FitLife Health",
      technologies: ["Flutter", "Firebase", "HealthKit", "Google Fit API", "TensorFlow Lite"],
      link: "https://fitlife-demo.launchory.com",
      year: 2023,
      results: [
        "85% user retention after 3 months",
        "Users reported 32% better workout consistency",
        "Featured in App Store's 'Apps We Love'"
      ]
    },
    {
      id: 5,
      title: "Luxury Travel Blog",
      category: "web",
      industry: "travel",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/travel-blog_xsfgdq.jpg",
      description: "Content-focused travel blog with custom CMS, interactive maps, and social sharing integration for a premium travel experience company.",
      client: "Wanderlust Adventures",
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Mapbox", "Cloudinary"],
      link: "https://wanderlust-demo.launchory.com",
      year: 2024,
      results: [
        "300% increase in organic traffic",
        "Conversion rate from reader to customer up 15%",
        "Average session duration increased to 4.5 minutes"
      ]
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      category: "web",
      industry: "hospitality",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648343/restaurant-app_j5f1zs.jpg",
      description: "Sophisticated online ordering system for high-end restaurants with real-time updates, table reservations, and loyalty program.",
      client: "Gourmet Dining Group",
      technologies: ["React", "Node.js", "Socket.io", "Stripe", "Redis"],
      link: "https://gourmet-demo.launchory.com",
      year: 2023,
      results: [
        "Increased average order value by 22%",
        "Reduced wait time by 35%",
        "Loyalty program saw 68% opt-in rate"
      ]
    },
    {
      id: 7,
      title: "Telemedicine Platform",
      category: "web",
      industry: "health",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648343/telemedicine_txfrih.jpg",
      description: "Secure and HIPAA-compliant telemedicine platform with video consultations, prescription management, and patient records.",
      client: "MedConnect Health",
      technologies: ["React", "WebRTC", "Node.js", "MongoDB", "AWS"],
      link: "https://medconnect-demo.launchory.com",
      year: 2024,
      results: [
        "Facilitated 10,000+ virtual consultations monthly",
        "Reduced patient wait times by 65%",
        "98% patient satisfaction rating"
      ]
    },
    {
      id: 8,
      title: "Investment Portfolio App",
      category: "mobile",
      industry: "finance",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/investment-app_wbwxp4.jpg",
      description: "Sophisticated mobile application for managing investment portfolios with real-time market data, personalized alerts, and AI-driven recommendations.",
      client: "WealthWise Investments",
      technologies: ["React Native", "Redux", "Firebase", "Alpha Vantage API"],
      link: "https://wealthwise-demo.launchory.com",
      year: 2023,
      results: [
        "Assets under management grew by $50M in 6 months",
        "User engagement increased by 45%",
        "Ranked #3 in Finance category in App Store"
      ]
    },
    {
      id: 9,
      title: "Luxury Hotel Booking Platform",
      category: "web",
      industry: "hospitality",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/hotel-booking_khp2xj.jpg",
      description: "Premium hotel booking platform featuring immersive virtual tours, AI-powered concierge, and personalized travel recommendations.",
      client: "Elite Stays International",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Stripe", "Three.js"],
      link: "https://elitestays-demo.launchory.com",
      year: 2024,
      results: [
        "Booking conversion rate increased to 12%",
        "Average booking value increased by 28%",
        "Customer retention improved by 40%"
      ]
    }
  ];
  
  // Apply filters
  const filteredProjects = projects
    .filter(project => {
      // Apply category filter
      if (filter !== 'all' && project.category !== filter) return false;
      
      // Apply industry filter
      if (industryFilter !== 'all' && project.industry !== industryFilter) return false;
      
      // Apply search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.client?.toLowerCase().includes(query) ||
          project.technologies?.some(tech => tech.toLowerCase().includes(query))
        );
      }
      
      return true;
    });
    
  // Get unique industries for filter
  const industries = Array.from(new Set(projects.map(project => project.industry)));
  
  // Refs for scroll animations
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px 0px" });
  
  // Scroll progress for parallax effect
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.3], [1, 0.5]);
  
  useEffect(() => {
    // Set document title
    document.title = 'Portfolio | Quick Site Lab';
  }, []);
  
  // Project statistics
  const statistics = [
    { id: 1, icon: <FiAward />, value: '300+', label: 'Projects Completed', color: 'from-blue-500 to-blue-600' },
    { id: 2, icon: <FiUsers />, value: '150+', label: 'Happy Clients', color: 'from-purple-500 to-purple-600' },
    { id: 3, icon: <FiTrendingUp />, value: '95%', label: 'Client Retention', color: 'from-indigo-500 to-indigo-600' },
    { id: 4, icon: <FiStar />, value: '45+', label: 'Industry Awards', color: 'from-violet-500 to-violet-600' },
  ];
  
  // Client testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechVision Inc.",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/testimonial-1_eac7dp.jpg",
      content: "Cybrida transformed our digital presence with their exceptional web design and development expertise. Their team's attention to detail and commitment to excellence is unmatched.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director, Elevate Brands",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/testimonial-2_eifgzf.jpg",
      content: "Working with Cybrida was a game-changer for our e-commerce platform. Their development expertise and design sensibility helped us increase conversions by 40%.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager, FinTech Solutions",
      image: "https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/testimonial-3_hfdmxt.jpg",
      content: "The team at Cybrida brings both technical excellence and creative vision. They delivered our financial dashboard ahead of schedule and exceeded all expectations.",
      rating: 5
    },
  ];
  
  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Parallax Background with Grid Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-950 overflow-hidden"
          style={{ y: backgroundY, opacity: opacityTransform }}
        >
          {/* Grid pattern overlay */}
          <div className="absolute inset-0" 
            style={{ 
              backgroundImage: `
                linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          ></div>
          
          {/* Glowing accent circles */}
          <div className="absolute -top-20 -right-20 w-[40rem] h-[40rem] rounded-full bg-purple-600/10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-[50rem] h-[50rem] rounded-full bg-indigo-600/10 blur-3xl"></div>
          
          {/* Subtle dot pattern */}
          <div className="absolute inset-0 opacity-30" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.2"%3E%3Ccircle cx="10" cy="10" r="1"%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '20px 20px'
          }}></div>
          
          {/* Gradient border bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-indigo-900/30 border border-indigo-700/30 backdrop-blur-sm rounded-md mb-6">
              <span className="text-sm font-medium text-indigo-300 font-['Rubik']">CRAFTING PREMIUM DIGITAL EXPERIENCES</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Rubik'] tracking-tight"
            >
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">Portfolio</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-indigo-200 mx-auto leading-relaxed"
            >
              Discover how we've helped industry leaders transform their digital presence with 
              cutting-edge solutions engineered for performance, aesthetics, and exceptional user experience.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-md hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-600/30 transition-all duration-300 transform hover:-translate-y-1 font-['Rubik']">
                View Projects
              </a>
              <a href="/get-started" className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-indigo-500/30 font-medium rounded-md hover:bg-white/20 transition-all duration-300 font-['Rubik']">
                Start Your Project
              </a>
            </motion.div>
          </div>
          
          {/* Statistics Row */}
          <motion.div 
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-12"
          >
            {statistics.map((stat, index) => (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-indigo-500/20 rounded-md p-6 text-center flex flex-col items-center justify-center group hover:bg-white/10 transition-all duration-300"
              >
                <div className={`p-3 rounded-md bg-gradient-to-br ${stat.color} mb-4 text-white`}>
                  <span className="text-xl">{stat.icon}</span>
                </div>
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={statsInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className="text-3xl font-bold text-white font-['Rubik'] mb-1"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-indigo-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Projects section with enhanced filtering */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-md mb-3"
            >
              <span className="text-sm font-medium text-indigo-700 font-['Rubik']">EXPLORE OUR WORK</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Rubik']"
            >
              Premium Digital Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Browse our portfolio of successful projects across various industries and technologies
            </motion.p>
          </div>
          
          {/* Search and filter controls */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 space-y-6"
          >
            <div className="bg-white rounded-xl shadow-xl p-4 md:p-6 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Search */}
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 mb-2 block font-['Rubik']">Search Projects</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="h-5 w-5 text-indigo-400" />
                    </div>
                    <input
                      type="text"
                      className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all duration-200"
                      placeholder="Search by name, technology..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                {/* Category filter */}
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 mb-2 block font-['Rubik']">Project Type</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLayers className="h-5 w-5 text-indigo-400" />
                    </div>
                    <select
                      className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm appearance-none transition-all duration-200"
                      value={filter}
                      onChange={(e) => handleFilterChange(e.target.value)}
                    >
                      <option value="all">All Project Types</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile Applications</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <FiChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                {/* Industry filter */}
                <div className="relative">
                  <label className="text-sm font-medium text-gray-700 mb-2 block font-['Rubik']">Industry</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiGrid className="h-5 w-5 text-indigo-400" />
                    </div>
                    <select
                      className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm appearance-none transition-all duration-200"
                      value={industryFilter}
                      onChange={(e) => handleIndustryFilterChange(e.target.value)}
                    >
                      <option value="all">All Industries</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry.charAt(0).toUpperCase() + industry.slice(1)}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <FiChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Active filters display */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {filter !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {filter === 'web' ? 'Web Development' : 'Mobile Applications'}
                    <button 
                      className="ml-1.5 text-indigo-500 hover:text-indigo-700"
                      onClick={() => handleFilterChange('all')}
                    >
                      <FiX className="h-4 w-4" />
                    </button>
                  </span>
                )}
                
                {industryFilter !== 'all' && (
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">
                    {industryFilter.charAt(0).toUpperCase() + industryFilter.slice(1)}
                    <button 
                      className="ml-1.5 text-indigo-500 hover:text-indigo-700"
                      onClick={() => handleIndustryFilterChange('all')}
                    >
                      <FiX className="h-4 w-4" />
                    </button>
                  </span>
                )}
                
                {searchQuery && (
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm bg-indigo-50 text-indigo-700 border border-indigo-100">
                    Search: "{searchQuery}"
                    <button 
                      className="ml-1.5 text-indigo-500 hover:text-indigo-700"
                      onClick={() => setSearchQuery('')}
                    >
                      <FiX className="h-4 w-4" />
                    </button>
                  </span>
                )}
                
                {(filter !== 'all' || industryFilter !== 'all' || searchQuery) && (
                  <button 
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium ml-2"
                    onClick={() => {
                      setFilter('all');
                      setIndustryFilter('all');
                      setSearchQuery('');
                    }}
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* Results count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-gray-600">
              Showing <span className="font-semibold text-indigo-700">{filteredProjects.length}</span> of <span className="font-semibold text-indigo-700">{projects.length}</span> projects
            </p>
          </motion.div>
          
          {/* Projects grid */}
          <div className="relative min-h-[600px]">
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <motion.div 
                  key={`${filter}-${industryFilter}-${searchQuery}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
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
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full overflow-hidden border border-gray-100 flex flex-col">
                        <div className="relative overflow-hidden h-60">
                          <div className="absolute top-4 right-4 z-10">
                            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-white/80 backdrop-blur-sm text-indigo-700 border border-indigo-100">
                              {project.category === 'web' ? 'Web App' : 'Mobile App'}
                            </span>
                          </div>
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          {project.link && (
                            <a 
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute top-4 left-4 p-2 rounded-md bg-white/80 backdrop-blur-sm text-indigo-700 hover:text-indigo-900 hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 border border-indigo-100"
                              aria-label={`Visit ${project.title} website`}
                            >
                              <FiExternalLink className="w-5 h-5" />
                            </a>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors duration-300 font-['Rubik']">{project.title}</h3>
                            <span className="text-sm text-gray-500">{project.year}</span>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-3">
                            Client: <span className="font-medium text-gray-800">{project.client}</span>
                          </p>
                          
                          <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                          
                          {project.results && (
                            <div className="mb-4 mt-auto">
                              <h4 className="text-sm font-semibold text-indigo-700 mb-2 font-['Rubik']">Key Results:</h4>
                              <ul className="space-y-1">
                                {project.results.map((result, i) => (
                                  <li key={i} className="text-sm text-gray-700 flex items-start">
                                    <span className="text-indigo-500 mr-2">•</span>
                                    {result}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          {project.technologies && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                  <span 
                                    key={i} 
                                    className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-md"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              
                              <a 
                                href={`/portfolio/${project.id}`} 
                                className="inline-flex items-center text-sm font-medium text-indigo-700 hover:text-indigo-900 transition-colors duration-200"
                              >
                                View Case Study <FiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-20"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-['Rubik']">No projects found</h3>
                    <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
                    <button
                      onClick={() => {
                        setFilter('all');
                        setIndustryFilter('all');
                        setSearchQuery('');
                      }}
                      className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200"
                    >
                      Reset Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-purple-400/5 to-indigo-400/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-indigo-400/5 to-purple-400/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section heading */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-md mb-3"
            >
              <span className="text-sm font-medium text-indigo-700 font-['Rubik']">CLIENT TESTIMONIALS</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Rubik']"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Trusted by industry leaders and innovative startups alike
            </motion.p>
          </div>
          
          {/* Testimonials grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-md shadow-lg p-6 border border-gray-100 relative"
              >
                <div className="absolute -top-5 left-6 w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-md shadow-md">
                  <FiMessageCircle className="w-5 h-5" />
                </div>
                
                <div className="mb-4 pt-3">
                  <div className="flex mb-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-md object-cover mr-4 border border-indigo-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 font-['Rubik']">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Client logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="py-10 border-t border-indigo-100"
          >
            <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8 font-medium">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <img src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/logo-1_wuaqon.svg" alt="Client logo" className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/logo-2_lxbmx3.svg" alt="Client logo" className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/logo-3_rh0mcp.svg" alt="Client logo" className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/logo-4_ibxg5c.svg" alt="Client logo" className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1716648342/logo-5_jxtv3c.svg" alt="Client logo" className="h-8 md:h-10 opacity-70 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid pattern overlay */}
          <div className="absolute inset-0" 
            style={{ 
              backgroundImage: `
                linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          ></div>
          <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-3xl"></div>
          <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-md p-8 md:p-12 shadow-xl border border-indigo-500/20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6 font-['Rubik']"
            >
              Ready to Build Your Next Digital Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-indigo-200 mb-8 max-w-2xl mx-auto"
            >
              Let's create a premium digital experience that elevates your brand and drives measurable results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a 
                href="/get-started" 
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-gray-50 shadow-lg transition-all duration-300 font-['Rubik']"
              >
                Start Your Project <FiArrowRight className="ml-2" />
              </a>
              <a 
                href="mailto:quicksitelabteam@gmail.com" 
                className="inline-flex items-center px-8 py-4 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-all duration-300 font-['Rubik']"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

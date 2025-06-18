import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiDownload, FiGitBranch, FiCode, FiLayers, FiShield, FiZap, FiPackage, FiStar, FiCpu, FiGlobe, FiArrowRight, FiGift, FiClock, FiHeart } from 'react-icons/fi';

const SourceCodeProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Modern React Architecture",
      description: "Built with the latest React 18 features and best practices",
      icon: FiCode
    },
    {
      title: "TypeScript Integration",
      description: "100% type-safe code with strict TypeScript configuration",
      icon: FiShield
    },
    {
      title: "Responsive Design",
      description: "Fully responsive layouts with Tailwind CSS",
      icon: FiLayers
    },
    {
      title: "Authentication System",
      description: "Secure auth flow with multiple providers",
      icon: FiShield
    },
    {
      title: "API Integration",
      description: "RESTful and GraphQL API integration ready",
      icon: FiGlobe
    },
    {
      title: "Database Setup",
      description: "Configured with modern database solutions",
      icon: FiCpu
    },
    {
      title: "Payment Gateway",
      description: "Stripe integration with webhook support",
      icon: FiGift
    },
    {
      title: "Admin Dashboard",
      description: "Full-featured admin panel included",
      icon: FiLayers
    },
    {
      title: "SEO Optimized",
      description: "Built-in SEO best practices",
      icon: FiZap
    },
    {
      title: "Performance Optimized",
      description: "Lighthouse score of 95+",
      icon: FiZap
    }
  ];

  const techStack = [
    { 
      icon: FiCode, 
      label: "React + TypeScript", 
      details: "Latest version with strict typing",
      version: "v18.0+",
      benefits: ["Type Safety", "Better DX", "Modern Features"]
    },
    { 
      icon: FiLayers, 
      label: "TailwindCSS", 
      details: "Modern utility-first CSS",
      version: "v3.0+",
      benefits: ["Rapid UI", "Custom Design", "Zero Bundle"]
    },
    { 
      icon: FiPackage, 
      label: "Node.js", 
      details: "Scalable backend architecture",
      version: "v16+",
      benefits: ["High Performance", "Easy Deploy", "Large Ecosystem"]
    },
    { 
      icon: FiShield, 
      label: "Auth System", 
      details: "Secure authentication flow",
      version: "Latest",
      benefits: ["Multi-provider", "JWT Support", "Role-based"]
    }
  ];

  const reviews = [
    {
      name: "John Doe",
      role: "Senior Developer",
      rating: 5,
      comment: "Exceptional code quality and documentation. Saved us weeks of development time.",
      company: "Tech Corp",
      avatar: "https://i.pravatar.cc/100?img=1",
      verified: true
    },
    {
      name: "Sarah Smith",
      role: "Tech Lead",
      rating: 5,
      comment: "The best template I've used. Clean architecture and easy to customize.",
      company: "StartupX",
      avatar: "https://i.pravatar.cc/100?img=2",
      verified: true
    }
  ];

  const benefits = [
    { icon: FiClock, text: "Save 100+ Development Hours" },
    { icon: FiHeart, text: "6 Months Support Included" },
    { icon: FiGift, text: "Regular Updates & New Features" }
  ];

  return (
    <div className="relative">
      {/* Ultra Premium Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 p-[1px] rounded-full shadow-lg">
          <div className="px-6 py-2 rounded-full bg-white backdrop-blur-sm">
            <span className="text-sm font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
              PREMIUM TEMPLATE
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Product Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform-gpu hover:scale-[1.02] transition-transform duration-500"
        style={{
          backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
        }}
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(0, 0, 0, 0.2) 2%, transparent 0%)',
            backgroundSize: '50px 50px'
          }} />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500" />
        </div>

        {/* Glowing corner effects */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-[100px] opacity-30 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-[100px] opacity-30 animate-pulse" />

        <div className="relative p-8 md:p-12">
          {/* Enhanced Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="transform hover:translate-z-10 transition-transform duration-300">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-transparent bg-clip-text">
                Modern E-commerce Starter Template
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Launch your online store with our production-ready, feature-rich e-commerce template.
              </p>
              {/* Benefits List */}
              <div className="flex flex-wrap gap-4 mt-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-full">
                    <benefit.icon className="w-4 h-4 text-purple-600" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="px-3 py-1 bg-green-100 rounded-full">
                      <span className="text-xs font-semibold text-green-700">50% OFF</span>
                    </div>
                    <div className="px-3 py-1 bg-purple-100 rounded-full">
                      <span className="text-xs font-semibold text-purple-700">LIMITED TIME</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 line-through">$99.99</p>
                  <div className="flex items-center gap-2">
                    <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">$49.99</p>
                    <span className="text-sm text-gray-600">USD</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">One-time payment, lifetime access</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Details
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100 p-1 rounded-xl flex gap-2">
              {['features', 'tech', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab 
                      ? 'bg-white text-gray-900 shadow-md transform scale-105' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Content Sections */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'features' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group relative"
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 p-[1px] group-hover:scale-110 transition-transform duration-300">
                          <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                            <feature.icon className="w-5 h-5 text-purple-600" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                        </div>
                      </div>
                      {hoveredFeature === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-lg p-4 z-10"
                        >
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'tech' && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group bg-gray-50 rounded-xl p-6 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 p-[1px] mb-4 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                          <tech.icon className="w-6 h-6 text-purple-600" />
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{tech.label}</h4>
                      <p className="text-sm text-gray-600 mb-3">{tech.details}</p>
                      <div className="text-xs text-purple-600 font-medium">{tech.version}</div>
                      <ul className="mt-3 space-y-1">
                        {tech.benefits.map((benefit, i) => (
                          <li key={i} className="text-xs text-gray-500 flex items-center gap-1">
                            <FiCheck className="w-3 h-3 text-green-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <img 
                          src={review.avatar} 
                          alt={review.name} 
                          className="w-12 h-12 rounded-full border-2 border-purple-200"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-gray-900">{review.name}</h4>
                            {review.verified && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Verified</span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">{review.role} at {review.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 mb-4 italic">"{review.comment}"</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Bottom Stats */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { 
                  icon: FiDownload, 
                  label: "100+ Downloads", 
                  sublabel: "This Month", 
                  color: "from-green-500 to-emerald-500",
                  stat: "+127%"
                },
                { 
                  icon: FiGitBranch, 
                  label: "Regular Updates", 
                  sublabel: "Weekly Releases", 
                  color: "from-purple-500 to-indigo-500",
                  stat: "24/7"
                },
                { 
                  icon: FiShield, 
                  label: "Secure Code", 
                  sublabel: "Penetration Tested", 
                  color: "from-blue-500 to-cyan-500",
                  stat: "A+"
                },
                { 
                  icon: FiZap, 
                  label: "Fast Setup", 
                  sublabel: "5 Min Deploy", 
                  color: "from-amber-500 to-orange-500",
                  stat: "< 5m"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group text-center transform hover:translate-y-[-4px] transition-all duration-300"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} p-[1px] group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900">{stat.label}</p>
                  <p className="text-sm text-gray-600">{stat.sublabel}</p>
                  <p className="text-xs font-medium text-purple-600 mt-1">{stat.stat}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SourceCodeProducts;

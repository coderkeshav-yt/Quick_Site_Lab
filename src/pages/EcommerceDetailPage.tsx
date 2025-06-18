import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FiShield, FiCpu, FiUsers, FiGlobe, FiZap, FiPackage, FiCode, FiGift, FiBook, FiCheck, FiShoppingCart, FiLayers, FiDatabase, FiTrendingUp, FiSmartphone } from 'react-icons/fi';

const EcommerceDetailPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Modern E-commerce Template | Launchory</title>
        <meta name="description" content="Complete e-commerce solution with React, TypeScript, and modern tech stack" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 mb-8">
              <FiShoppingCart className="w-4 h-4 mr-2" />
              <span>Complete E-commerce Solution</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Modern E-commerce Template
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Launch your online store with a production-ready, scalable, and customizable e-commerce solution
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">React 18+</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">TypeScript</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Tailwind CSS</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Node.js</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-[1px] rounded-lg">
                <button className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Live Demo
                </button>
              </div>
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg hover:from-purple-600 hover:to-indigo-600 transition-colors">
                Purchase Now - $99
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Navigation Tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <nav className="flex justify-center space-x-8 border-b border-gray-200">
            {[
              { id: 'features', label: 'Features' },
              { id: 'tech', label: 'Tech Stack' },
              { id: 'included', label: "What's Included" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-4 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id ? 'text-purple-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600"
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Complete Shopping Experience",
                  description: "Product catalog, cart management, and seamless checkout process",
                  icon: FiShoppingCart,
                  gradient: "from-purple-500 to-indigo-500"
                },
                {
                  title: "User Authentication",
                  description: "Secure login, registration, and profile management",
                  icon: FiUsers,
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Payment Processing",
                  description: "Integrated Stripe payments with webhook support",
                  icon: FiCpu,
                  gradient: "from-teal-500 to-green-500"
                },
                {
                  title: "Admin Dashboard",
                  description: "Complete product and order management interface",
                  icon: FiLayers,
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  title: "Analytics Integration",
                  description: "Track sales, user behavior, and performance metrics",
                  icon: FiTrendingUp,
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  title: "Mobile Responsive",
                  description: "Optimized for all devices and screen sizes",
                  icon: FiSmartphone,
                  gradient: "from-violet-500 to-purple-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'tech' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Frontend Technologies</h3>
                  <ul className="space-y-4">
                    {[
                      { name: "React 18+", desc: "Latest features and improvements" },
                      { name: "TypeScript", desc: "Type-safe development" },
                      { name: "Tailwind CSS", desc: "Modern utility-first styling" },
                      { name: "Redux Toolkit", desc: "State management" },
                      { name: "React Query", desc: "Data fetching and caching" }
                    ].map((tech, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheck className="w-5 h-5 text-green-500 mt-1 mr-3" />
                        <div>
                          <span className="font-medium text-gray-900">{tech.name}</span>
                          <p className="text-sm text-gray-600">{tech.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Backend & Services</h3>
                  <ul className="space-y-4">
                    {[
                      { name: "Node.js", desc: "Server runtime environment" },
                      { name: "Express.js", desc: "Backend framework" },
                      { name: "MongoDB", desc: "Database solution" },
                      { name: "Stripe", desc: "Payment processing" },
                      { name: "AWS S3", desc: "File storage" }
                    ].map((tech, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheck className="w-5 h-5 text-green-500 mt-1 mr-3" />
                        <div>
                          <span className="font-medium text-gray-900">{tech.name}</span>
                          <p className="text-sm text-gray-600">{tech.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* What's Included Tab */}
          {activeTab === 'included' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Package Contents</h3>
                <ul className="space-y-4">
                  {[
                    { icon: FiCode, text: "Complete source code" },
                    { icon: FiBook, text: "Detailed documentation" },
                    { icon: FiDatabase, text: "Database schemas" },
                    { icon: FiGift, text: "Regular updates" },
                    { icon: FiUsers, text: "6 months support" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center mr-3">
                        <item.icon className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Support & Updates</h3>
                <ul className="space-y-4">
                  {[
                    "Priority email support",
                    "Bug fixes and updates",
                    "Access to private repository",
                    "Implementation guidance",
                    "Performance optimization tips"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <FiCheck className="w-5 h-5 mr-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Get Started Now
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Launch Your E-commerce Store?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get started with our modern e-commerce template and launch your online store in minutes.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-colors">
              Purchase Now - $99
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDetailPage; 
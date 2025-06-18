import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { FiCode, FiGitBranch, FiPackage, FiShield, FiZap, FiDownload, FiClock, FiCheckCircle, FiStar, FiAward, FiTrendingUp, FiUsers, FiGlobe, FiCpu, FiArrowRight, FiHeart, FiGift, FiTarget, FiBook } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SourceCodePage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax refs
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef);
  const isFeaturesInView = useInView(featuresRef);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Mouse parallax effect
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        const { left, top, width, height } = heroRef.current.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        heroRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);



  return (
    <div className="min-h-screen bg-[#0A1121] scroll-smooth">
      <Helmet>
        <title>Premium Source Code Templates | Launchory</title>
        <meta name="description" content="Get high-quality, production-ready source code templates to accelerate your development process." />
        <style>
          {`
            html {
              scroll-behavior: smooth;
            }
            
            @media (prefers-reduced-motion: reduce) {
              html {
                scroll-behavior: auto;
              }
            }

            .gradient-text {
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
              background-image: linear-gradient(to right, #fff, #e2e8f0, #fff);
            }

            .gradient-text-accent {
              background-clip: text;
              -webkit-background-clip: text;
              color: transparent;
              background-image: linear-gradient(to right, #a855f7, #3b82f6, #a855f7);
            }

            .hover-translate {
              transition: transform 0.2s ease-out;
            }

            .hover-translate:hover {
              transform: translateY(-2px);
            }
          `}
        </style>
      </Helmet>

      {/* Enhanced Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 origin-left z-50"
        style={{ scaleX }}
      />


      {/* Hero Section */}
      <section 
        id="hero" 
        ref={heroRef} 
        className="relative bg-gradient-to-b from-[#0A1121] via-[#0F172A] to-[#1E293B] text-white overflow-hidden min-h-[50vh] flex items-center"
      >
        {/* Background */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '64px 64px'
            }}
          />

          {/* Static Glow Effects */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-500/5" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/5" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="gradient-text block">
                Launch Your Project
              </span>
            </h1>

            {/* Feature Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {[
                { icon: FiShield, text: "Security First", color: "text-purple-400" },
                { icon: FiZap, text: "Performance Optimized", color: "text-blue-400" },
                { icon: FiPackage, text: "Modern Stack", color: "text-indigo-400" },
                { icon: FiGlobe, text: "Production Ready", color: "text-cyan-400" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                >
                  <feature.icon className={`${feature.color} w-3.5 h-3.5`} />
                  <span className="text-xs font-medium text-gray-200">{feature.text}</span>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* Enhanced Features Grid */}
      <div id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
              Enterprise-Grade Templates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with scalability and performance in mind, our templates help you launch faster without compromising quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FiZap,
                title: "Rapid Development",
                description: "Get your project up and running in minutes with our pre-built templates and comprehensive documentation.",
                gradient: "from-amber-500 to-orange-500",
                features: ["Instant setup", "Clear documentation", "Code examples"]
              },
              {
                icon: FiCode,
                title: "Clean Architecture",
                description: "Well-structured and documented code following industry best practices and design patterns.",
                gradient: "from-purple-500 to-indigo-500",
                features: ["SOLID principles", "Design patterns", "Best practices"]
              },
              {
                icon: FiShield,
                title: "Production Ready",
                description: "Thoroughly tested and optimized for immediate deployment with security best practices.",
                gradient: "from-emerald-500 to-teal-500",
                features: ["Security tested", "Performance optimized", "Error handling"]
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                <div className="p-8">
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <FiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}


      {/* E-commerce Template Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Main Product Card */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full transform translate-x-20 -translate-y-20"></div>
              
              {/* Premium Badge */}
              <div className="absolute top-4 left-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border border-purple-100">
                  <FiStar className="w-3 h-3 text-purple-600 mr-1" />
                  <span className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    Premium
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Modern E-commerce Template
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Complete solution for your online store
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">React 18+</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">TypeScript</span>
                    <span className="px-2 py-1 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">Tailwind CSS</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3 mb-6">
                  {[
                    { icon: FiShield, text: "Complete shopping experience with cart & checkout" },
                    { icon: FiCpu, text: "Secure payment processing with Stripe" },
                    { icon: FiUsers, text: "User authentication & account management" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <feature.icon className="w-4 h-4 text-purple-600 mr-2" />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Price & Actions */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-gray-500 line-through">$199</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">$99</span>
                    </div>
                    <p className="text-xs text-gray-500">One-time payment</p>
                  </div>
                  <div className="space-y-2">
                    <Link 
                      to="/source-code/ecommerce-starter"
                      className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm rounded-lg font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 block text-center"
                    >
                      Purchase Now
                    </Link>
                    <Link 
                      to="/source-code/ecommerce-starter"
                      className="w-full px-4 py-2 border border-purple-200 text-purple-600 text-sm rounded-lg font-medium hover:bg-purple-50 transition-all duration-200 block text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Process Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-semibold mb-4">
              How It Works
            </span>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 text-transparent bg-clip-text">
              Simple Process, Exceptional Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes with our streamlined process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: FiDownload,
                title: "1. Choose",
                description: "Select your perfect template from our curated collection.",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                icon: FiClock,
                title: "2. Purchase",
                description: "Quick and secure payment process with instant access.",
                gradient: "from-violet-500 to-purple-500"
              },
              {
                icon: FiGitBranch,
                title: "3. Customize",
                description: "Easily modify the code to match your specific needs.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: FiCheckCircle,
                title: "4. Launch",
                description: "Deploy your project with confidence and support.",
                gradient: "from-emerald-500 to-green-500"
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-r ${step.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 transform -translate-x-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>



      {/* Enhanced CTA Section */}
      <div className="relative py-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
            backgroundSize: '50px 50px'
          }} />
          {/* Animated gradient border */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-purple-500/30 animate-gradient-x" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm font-semibold mb-6">
              Get Started Today
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                Development Process
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of developers who trust our premium templates.
            </p>
            <motion.a 
              href="#products"
              className="group relative bg-gradient-to-r from-purple-600 to-blue-600 p-[1px] rounded-xl inline-block overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative bg-[#0F172A] px-8 py-4 rounded-xl group-hover:bg-transparent transition-all duration-300">
                <span className="font-bold text-white">Get Started Today</span>
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-45 translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SourceCodePage;

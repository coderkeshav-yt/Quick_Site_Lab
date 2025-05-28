import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, 
  FiCheckCircle,
  FiSmartphone,
  FiCode,
  FiLayers,
  FiTrendingUp,
  FiShield,
  FiUsers,
  FiBarChart2,
  FiDatabase,
  FiServer,
  FiGlobe,
  FiStar,
  FiClock,
  FiDollarSign,
  FiPlay,
  FiMessageSquare,
  FiChevronDown,
  FiChevronUp,
  FiSearch,
  FiGitBranch
} from 'react-icons/fi';

// Stats data
const stats = [
  { value: '98%', label: 'Client Satisfaction' },
  { value: '150+', label: 'Apps Delivered' },
  { value: '5M+', label: 'App Downloads' },
  { value: '24/7', label: 'Support' }
];

// Technology stacks
const technologies = {
  frontend: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'SwiftUI', 'Jetpack Compose'],
  backend: ['Node.js', 'Firebase', 'AWS', 'GraphQL', 'REST APIs'],
  tools: ['Git', 'Jira', 'Figma', 'TestFlight', 'Google Play Console']
};

const MobileAppsPage: React.FC = () => {
  // State for testimonial carousel and FAQ accordion
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Toggle FAQ accordion
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const features = [
    {
      icon: <FiSmartphone className="w-8 h-8 text-purple-600" />,
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with our cross-platform solutions using React Native and Flutter. Reach both iOS and Android users with a single codebase while maintaining native performance.',
      benefits: ['Faster time-to-market', 'Cost-effective', 'Consistent experience across platforms']
    },
    {
      icon: <FiLayers className="w-8 h-8 text-blue-600" />,
      title: 'Native App Development',
      description: 'High-performance native applications for iOS and Android using Swift, Kotlin, and Java. Perfect for apps requiring maximum performance and platform-specific features.',
      benefits: ['Optimal performance', 'Full platform integration', 'Advanced hardware access']
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-green-600" />,
      title: 'App Optimization',
      description: 'Enhance your app\'s performance, speed, and user experience. We optimize for battery life, data usage, and responsiveness to keep users engaged.',
      benefits: ['Faster load times', 'Reduced battery consumption', 'Smoother animations']
    },
    {
      icon: <FiShield className="w-8 h-8 text-yellow-600" />,
      title: 'App Security',
      description: 'Enterprise-grade security measures including data encryption, secure authentication, and compliance with GDPR, HIPAA, and other regulations.',
      benefits: ['Data encryption', 'Secure authentication', 'Regulatory compliance']
    },
    {
      icon: <FiUsers className="w-8 h-8 text-pink-600" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with your users in mind. We create engaging experiences that drive user retention and satisfaction.',
      benefits: ['User-centered design', 'Intuitive navigation', 'Engaging interactions']
    },
    {
      icon: <FiBarChart2 className="w-8 h-8 text-indigo-600" />,
      title: 'Analytics Integration',
      description: 'Comprehensive analytics integration to track user behavior, performance metrics, and business KPIs. Make data-driven decisions to grow your app.',
      benefits: ['User behavior insights', 'Performance tracking', 'Conversion optimization']
    }
  ];

  const faqs = [
    {
      question: 'What platforms do you develop for?',
      answer: 'We develop for both iOS and Android platforms, with expertise in cross-platform solutions that work seamlessly across all devices.'
    },
    {
      question: 'How long does it take to develop a mobile app?',
      answer: 'The timeline varies based on complexity, but most apps take between 3-6 months from concept to launch.'
    },
    {
      question: 'Do you provide app maintenance?',
      answer: 'Yes, we offer ongoing maintenance and support packages to keep your app updated and running smoothly.'
    },
    {
      question: 'What is your app development process?',
      answer: 'Our process includes discovery, design, development, testing, deployment, and ongoing support.'
    }
  ];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white pt-32 pb-32">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/pattern-grid_v1kf8z.svg')] opacity-10"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-semibold text-purple-100 bg-purple-800/40 rounded-full border border-purple-700/30">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-300"></span>
                    </span>
                    Mobile App Development
                  </span>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Transform Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Powerful Mobile Apps</span>
                  </h1>
                  
                  <p className="text-xl text-purple-100/90 mb-10 max-w-2xl">
                    We create stunning, high-performance mobile applications that engage users, drive business growth, and deliver measurable results across all platforms.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/get-started"
                      className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-purple-50 hover:-translate-y-0.5 transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl"
                    >
                      Start Your Project
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <button 
                      onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
                      className="px-6 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center group"
                    >
                      <FiPlay className="mr-2" /> Watch Demo
                    </button>
                  </div>
                  
                  {/* Stats */}
                  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/10"
                      >
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-purple-200 font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-10"
                >
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
                    <div className="absolute -bottom-8 -right-8 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                    <img 
                      src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/mobile-app-showcase_xtgqnr.png" 
                      alt="Mobile App Development" 
                      className="relative z-10 w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full">
                OUR EXPERTISE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive <span className="text-purple-600">Mobile App Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to launch and beyond, we deliver end-to-end mobile app development services that drive real business results.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-100"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                {/* Feature benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/pattern-dots_v1kf8z.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Development</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven agile methodology to ensure your project's success from concept to launch and beyond.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-20">
              {[
                {
                  step: '01',
                  title: 'Discovery & Planning',
                  description: 'We analyze your requirements, target audience, and business goals to create a comprehensive app strategy.',
                  icon: <FiSearch className="w-6 h-6" />,
                  image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/discovery_v1kf8z.jpg'
                },
                {
                  step: '02',
                  title: 'UI/UX Design',
                  description: 'Our designers create intuitive, beautiful interfaces that provide exceptional user experiences.',
                  icon: <FiLayers className="w-6 h-6" />,
                  image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/ui-ux_v1kf8z.jpg'
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'Agile development process with regular updates and iterations based on your feedback.',
                  icon: <FiCode className="w-6 h-6" />,
                  image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/development_v1kf8z.jpg'
                },
                {
                  step: '04',
                  title: 'Testing & QA',
                  description: 'Rigorous testing across devices and platforms to ensure quality and performance.',
                  icon: <FiCheckCircle className="w-6 h-6" />,
                  image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/testing_v1kf8z.jpg'
                },
                {
                  step: '05',
                  title: 'Deployment',
                  description: 'App store submission and deployment with best practices for maximum visibility.',
                  icon: <FiServer className="w-6 h-6" />,
                  image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/deployment_v1kf8z.jpg'
                },
                {
                  step: '06',
                  title: 'Support & Maintenance',
                  description: 'Ongoing support, updates, and feature enhancements to keep your app competitive.',
                  icon: <FiMessageSquare className="w-6 h-6" />,
                  image: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/support_v1kf8z.jpg'
                }
              ].map((step, index) => (
                <motion.div 
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 h-full">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold mr-4">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      <div className="bg-gray-50 p-4 rounded-xl">
                        <h4 className="font-semibold text-gray-800 mb-2">What you get:</h4>
                        <ul className="space-y-2">
                          {[
                            'Detailed documentation',
                            'Regular progress updates',
                            'Collaborative feedback sessions',
                            'Clear milestone deliverables'
                          ].map((item, i) => (
                            <li key={i} className="flex items-start">
                              <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg z-10 flex items-center justify-center text-purple-600">
                      {React.cloneElement(step.icon, { className: 'w-6 h-6' })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-purple-900 text-white relative">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/pattern-dots-white_v1kf8z.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-purple-200 bg-purple-800/40 rounded-full border border-purple-700/30">
              CLIENT SUCCESS STORIES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our <span className="text-purple-300">Clients</span> Say
            </h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our mobile app development services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden">
                {/* Testimonials */}
                <div className="relative h-[400px] md:h-[350px]">
                  {[
                    {
                      content: "The mobile app developed by Quick Site Lab exceeded our expectations. Their attention to detail and user experience design resulted in a 200% increase in user engagement within just three months of launch.",
                      author: "Sarah Johnson",
                      role: "CEO, TechStart Inc.",
                      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                      rating: 5
                    },
                    {
                      content: "Working with Quick Site Lab was a game-changer for our business. Their cross-platform solution saved us time and money without compromising on quality. The app has been downloaded over 100,000 times in just six months.",
                      author: "Michael Chen",
                      role: "Product Manager, InnovateX",
                      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                      rating: 5
                    },
                    {
                      content: "The team delivered our healthcare app ahead of schedule and provided excellent post-launch support. Their expertise in mobile app security gave us the confidence to handle sensitive user data. Highly recommended!",
                      author: "Emily Rodriguez",
                      role: "Founder, WellnessApp",
                      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                      rating: 5
                    }
                  ].map((testimonial, index) => (
                    <AnimatePresence key={index} mode="wait">
                      {activeTestimonial === index && (
                        <motion.div 
                          className="absolute inset-0"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-white/10 h-full flex flex-col">
                            <div className="flex mb-6">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <FiStar key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <p className="text-xl text-white mb-8 leading-relaxed flex-grow">"{testimonial.content}"</p>
                            <div className="flex items-center">
                              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-purple-300">
                                <img src={testimonial.avatar} alt={testimonial.author} className="w-full h-full object-cover" />
                              </div>
                              <div>
                                <h4 className="font-bold text-white">{testimonial.author}</h4>
                                <p className="text-purple-200 text-sm">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-10 space-x-2">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeTestimonial === index ? 'bg-white w-8' : 'bg-white/50'}`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-purple-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our mobile app development services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`border border-gray-200 rounded-xl overflow-hidden ${activeFaq === index ? 'shadow-md' : ''}`}
              >
                <button 
                  className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                  <div className={`ml-4 transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                    <FiChevronDown className="w-5 h-5 text-purple-600" />
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 bg-white border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full">
              PRICING PLANS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transparent <span className="text-purple-600">Pricing</span> Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs and budget. All plans include our core development services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$25,000',
                description: 'Perfect for MVPs and startups',
                features: [
                  'Single Platform (iOS or Android)',
                  'Basic UI/UX Design',
                  'Core Features Implementation',
                  '3 Months Support',
                  'App Store Submission',
                  'Basic Analytics Integration'
                ],
                popular: false,
                cta: 'Get Started'
              },
              {
                name: 'Business',
                price: '$45,000',
                description: 'Ideal for growing businesses',
                features: [
                  'Cross-Platform Development',
                  'Custom UI/UX Design',
                  'Advanced Features',
                  '6 Months Support',
                  'App Store Optimization',
                  'Advanced Analytics',
                  'Admin Dashboard',
                  'Push Notifications'
                ],
                popular: true,
                cta: 'Most Popular'
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For large-scale applications',
                features: [
                  'Cross-Platform Development',
                  'Premium UI/UX Design',
                  'Custom Feature Development',
                  '12 Months Support',
                  'Advanced Security Features',
                  'Third-party Integrations',
                  'Scalable Architecture',
                  'Dedicated Project Manager',
                  'White Label Options'
                ],
                popular: false,
                cta: 'Contact Us'
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden border ${plan.popular ? 'border-purple-400 ring-2 ring-purple-400 ring-opacity-20' : 'border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.name !== 'Enterprise' && <span className="text-gray-500 ml-2">starting price</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <FiCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/get-started"
                    className={`block w-full py-3 text-center rounded-lg font-medium transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/pattern-grid_v1kf8z.svg')] opacity-10"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/10">
              <div className="lg:w-2/3 mb-10 lg:mb-0 lg:pr-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                    Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Business</span> with a Powerful Mobile App?
                  </h2>
                  <p className="text-xl text-purple-100/90 mb-8 max-w-2xl">
                    Let's discuss your project and create a mobile experience that your users will love. Our team is ready to bring your vision to life.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/get-started"
                      className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-purple-50 hover:-translate-y-0.5 transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl"
                    >
                      Start Your Project
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/30 transition-all duration-300 flex items-center"
                    >
                      <FiMessageSquare className="mr-2" /> Schedule a Call
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:w-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-white/10 to-white/5 p-6 rounded-2xl border border-white/10"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                      <FiClock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Quick Response</h3>
                    <p className="text-purple-200">We'll get back to you within 24 hours</p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: <FiCheckCircle className="w-5 h-5 text-green-400" />, text: 'Free initial consultation' },
                      { icon: <FiCheckCircle className="w-5 h-5 text-green-400" />, text: 'Detailed project proposal' },
                      { icon: <FiCheckCircle className="w-5 h-5 text-green-400" />, text: 'No obligation quote' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center">
                        {item.icon}
                        <span className="ml-3 text-white">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppsPage;

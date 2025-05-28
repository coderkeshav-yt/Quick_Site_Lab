import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiArrowRight, 
  FiCheckCircle,
  FiTrendingUp,
  FiSearch,
  FiUsers,
  FiBarChart2,
  FiGlobe,
  FiDollarSign,
  FiStar,
  FiMessageSquare,
  FiChevronDown,
  FiChevronUp,
  FiTarget,
  FiMail,
  FiShare2,
  FiPlay,
  FiClock,
  FiPieChart,
  FiLayers,
  FiMonitor
} from 'react-icons/fi';

// Stats data
const stats = [
  { value: '95%', label: 'Client Satisfaction' },
  { value: '200+', label: 'Campaigns Managed' },
  { value: '10M+', label: 'Monthly Impressions' },
  { value: '24/7', label: 'Campaign Monitoring' }
];

// Technology stacks
const marketingTools = {
  analytics: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Hotjar', 'Google Search Console'],
  advertising: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Twitter Ads', 'Instagram Ads'],
  tools: ['Mailchimp', 'HubSpot', 'Buffer', 'Canva', 'Hootsuite', 'WordPress']
};

const DigitalMarketingPage: React.FC = () => {
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

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <FiSearch className="w-8 h-8 text-purple-600" />,
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility in search results and drive organic traffic with our data-driven SEO strategies.',
      benefits: ['Keyword research & optimization', 'Technical SEO audits', 'Content strategy']
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-blue-600" />,
      title: 'Pay-Per-Click Advertising',
      description: 'Target your ideal customers with strategic paid advertising campaigns that maximize ROI and drive qualified leads.',
      benefits: ['Campaign management', 'A/B testing', 'Conversion optimization']
    },
    {
      icon: <FiUsers className="w-8 h-8 text-green-600" />,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage with your audience through strategic social media campaigns across all platforms.',
      benefits: ['Content creation', 'Community management', 'Influencer partnerships']
    },
    {
      icon: <FiMail className="w-8 h-8 text-yellow-600" />,
      title: 'Email Marketing',
      description: 'Nurture leads and drive conversions with personalized email campaigns that deliver the right message at the right time.',
      benefits: ['List segmentation', 'Automated workflows', 'Performance analytics']
    },
    {
      icon: <FiBarChart2 className="w-8 h-8 text-pink-600" />,
      title: 'Analytics & Reporting',
      description: 'Gain valuable insights into your marketing performance with comprehensive analytics and custom reporting dashboards.',
      benefits: ['Custom dashboards', 'ROI tracking', 'Actionable insights']
    },
    {
      icon: <FiLayers className="w-8 h-8 text-indigo-600" />,
      title: 'Content Marketing',
      description: 'Attract and engage your target audience with high-quality, relevant content that establishes your brand as an industry leader.',
      benefits: ['Content strategy', 'Blog management', 'Lead magnet creation']
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to see results from digital marketing?',
      answer: 'While some strategies like PPC can show immediate results, organic methods like SEO and content marketing typically take 3-6 months to show significant impact. We focus on both short-term wins and long-term sustainable growth.'
    },
    {
      question: 'What makes your digital marketing services different?',
      answer: 'We take a data-driven approach to digital marketing, focusing on measurable results and ROI. Our team combines creative thinking with analytical expertise to develop customized strategies that align with your specific business goals.'
    },
    {
      question: 'How do you measure the success of digital marketing campaigns?',
      answer: 'We track key performance indicators (KPIs) specific to your goals, such as website traffic, conversion rates, lead quality, cost per acquisition, and return on ad spend. You receive regular reports with actionable insights.'
    },
    {
      question: 'Do you work with businesses in specific industries?',
      answer: 'We have experience working with businesses across various industries including e-commerce, B2B services, healthcare, technology, and professional services. Our strategies are tailored to your specific industry and target audience.'
    }
  ];

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
                    Digital Marketing Services
                  </span>
                  
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Grow Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Strategic Digital Marketing</span>
                  </h1>
                  
                  <p className="text-xl text-purple-100/90 mb-10 max-w-2xl">
                    We create data-driven digital marketing strategies that increase your online visibility, drive qualified traffic, and convert visitors into loyal customers.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/get-started"
                      className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-purple-50 hover:-translate-y-0.5 transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl"
                    >
                      Start Your Campaign
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
                      src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/digital-marketing-dashboard_xtgqnr.png" 
                      alt="Digital Marketing Dashboard" 
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
                Comprehensive <span className="text-purple-600">Digital Marketing Solutions</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From strategy to execution, we deliver end-to-end digital marketing services that drive real business results.
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

      {/* Process Section */}
      <section className="py-24 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/pattern-dots_v1kf8z.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Marketing</span> Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your digital marketing campaigns deliver measurable results.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 transform -translate-x-1/2 hidden lg:block"></div>
            
            <div className="space-y-20">
              {[
                {
                  step: '01',
                  title: 'Research & Strategy',
                  description: 'We analyze your business, target audience, competitors, and industry to develop a tailored marketing strategy.',
                  icon: <FiSearch className="w-6 h-6" />,
                  color: 'purple'
                },
                {
                  step: '02',
                  title: 'Campaign Development',
                  description: 'We create compelling content, design ads, optimize landing pages, and set up tracking systems for your campaigns.',
                  icon: <FiLayers className="w-6 h-6" />,
                  color: 'blue'
                },
                {
                  step: '03',
                  title: 'Launch & Optimization',
                  description: 'We launch your campaigns and continuously monitor performance, making data-driven optimizations to improve results.',
                  icon: <FiTrendingUp className="w-6 h-6" />,
                  color: 'green'
                },
                {
                  step: '04',
                  title: 'Analysis & Reporting',
                  description: 'We provide detailed reports on campaign performance, insights, and recommendations for ongoing improvement.',
                  icon: <FiBarChart2 className="w-6 h-6" />,
                  color: 'pink'
                }
              ].map((process, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
                >
                  <div className="lg:w-1/2 mb-8 lg:mb-0 lg:px-12">
                    <div className={`text-${process.color}-600 text-5xl font-bold mb-2 opacity-30`}>{process.step}</div>
                    <h3 className="text-2xl font-bold mb-4">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </div>
                  
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="relative">
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 top-1/2 w-8 h-8 bg-white rounded-full border-4 border-purple-500 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block"></div>
                      
                      <div className={`w-64 h-64 rounded-2xl bg-gradient-to-br from-${process.color}-100 to-${process.color}-50 p-6 flex items-center justify-center shadow-lg`}>
                        <div className={`w-24 h-24 rounded-xl bg-gradient-to-br from-${process.color}-500 to-${process.color}-600 flex items-center justify-center text-white`}>
                          {process.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/pattern-grid_v1kf8z.svg')] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold text-purple-100 bg-purple-800/40 rounded-full">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Clients</span> Say
            </h2>
            <p className="text-xl text-purple-100/90 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="overflow-hidden">
                {/* Testimonials */}
                <div className="relative h-[400px] md:h-[350px]">
                  {[
                    {
                      content: "The digital marketing strategy developed by Quick Site Lab transformed our online presence. Our organic traffic increased by 150% and lead generation improved by 200% within just six months.",
                      author: "Sarah Johnson",
                      role: "Marketing Director, TechStart Inc.",
                      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                      rating: 5
                    },
                    {
                      content: "Their PPC campaigns delivered an exceptional ROI for our business. The team's data-driven approach and continuous optimization resulted in a 40% reduction in cost per acquisition.",
                      author: "Michael Chen",
                      role: "CEO, GrowthSmart",
                      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
                      rating: 5
                    },
                    {
                      content: "The social media strategy they implemented helped us build a loyal community around our brand. Engagement rates increased by 300% and we've seen a significant impact on our bottom line.",
                      author: "Emily Rodriguez",
                      role: "Founder, EcoStyle",
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
              Everything you need to know about our digital marketing services.
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
              Choose the plan that best fits your business needs and budget. All plans include our core marketing services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Starter',
                price: '$1,500',
                period: 'per month',
                description: 'Perfect for small businesses',
                features: [
                  'SEO Optimization',
                  'Social Media Management (2 platforms)',
                  'Basic Content Creation',
                  'Monthly Performance Reports',
                  'Email Marketing Setup',
                  'Google Analytics Integration'
                ],
                popular: false,
                cta: 'Get Started'
              },
              {
                name: 'Business',
                price: '$3,500',
                period: 'per month',
                description: 'Ideal for growing businesses',
                features: [
                  'Comprehensive SEO Strategy',
                  'Social Media Management (4 platforms)',
                  'Advanced Content Strategy',
                  'PPC Campaign Management',
                  'Weekly Performance Reports',
                  'Email Marketing Automation',
                  'Conversion Rate Optimization',
                  'Dedicated Account Manager'
                ],
                popular: true,
                cta: 'Most Popular'
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'pricing',
                description: 'For established organizations',
                features: [
                  'Custom Marketing Strategy',
                  'Full-Service Digital Marketing',
                  'Premium Content Production',
                  'Advanced Analytics & Reporting',
                  'Multi-Channel Campaign Management',
                  'Conversion Funnel Optimization',
                  'Competitive Analysis',
                  'Executive Strategy Sessions',
                  'White-Glove Support'
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
                className={`relative bg-white rounded-2xl overflow-hidden shadow-xl border ${plan.popular ? 'border-purple-200' : 'border-gray-100'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 uppercase tracking-wider">
                    Popular
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'bg-gradient-to-br from-purple-50 to-blue-50' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-end mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <FiCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className={`block w-full py-3 px-6 text-center rounded-lg font-semibold ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} transition-colors duration-300`}
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
      <section className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1716877577/pattern-grid_v1kf8z.svg')] opacity-10"></div>
        
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
                    Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">Marketing</span> Strategy?
                  </h2>
                  <p className="text-xl text-purple-100/90 mb-8 max-w-2xl">
                    Let's discuss your goals and create a digital marketing strategy that drives real results for your business.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/get-started"
                      className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-full hover:bg-purple-50 hover:-translate-y-0.5 transition-all duration-300 flex items-center group shadow-lg hover:shadow-xl"
                    >
                      Start Your Campaign
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
                      { icon: <FiCheckCircle className="w-5 h-5 text-green-400" />, text: 'Free strategy consultation' },
                      { icon: <FiCheckCircle className="w-5 h-5 text-green-400" />, text: 'Custom marketing proposal' },
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

export default DigitalMarketingPage;

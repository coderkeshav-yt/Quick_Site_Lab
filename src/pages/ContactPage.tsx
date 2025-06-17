import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiSend, FiCheck, FiAlertCircle, FiArrowRight, FiClock, FiMessageCircle, FiStar } from 'react-icons/fi';

const ContactPage: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // State for form validation
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  
  // Refs for scroll animations
  const formRef = useRef<HTMLDivElement>(null);
  
  // Scroll animations
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  // Set document title
  useEffect(() => {
    document.title = 'Contact Us | Quick Site Lab';
  }, []);
  
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    
    // Phone validation (optional)
    if (formData.phone && !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/i.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number';
      isValid = false;
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      isValid = false;
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message is too short (minimum 10 characters)';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      // Error
      setSubmitError('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // FAQ items
  const faqItems = [
    {
      question: 'What services does Cybrida offer?',
      answer: 'Cybrida offers premium website design and development, mobile app development, brand identity design, and digital marketing solutions tailored to elevate your business presence.'
    },
    {
      question: 'How long does it take to complete a project?',
      answer: 'Project timelines vary based on complexity and scope. Typically, a website project takes 4-6 weeks, while larger applications may take 2-3 months. We provide detailed timelines during our initial consultation.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is tailored to each project\'s specific requirements. We offer transparent project-based pricing rather than hourly rates, ensuring you know exactly what to expect. Contact us for a customized quote.'
    },
    {
      question: 'Do you offer ongoing support after launch?',
      answer: 'Yes, we provide comprehensive post-launch support and maintenance packages to ensure your digital products remain secure, up-to-date, and performing optimally.'
    },
    {
      question: 'How do we get started with Cybrida ?',
      answer: 'Getting started is simple! Fill out the contact form on this page or schedule a consultation call. We\'ll discuss your requirements, provide recommendations, and outline the next steps for your project.'
    }
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 py-24 px-4 sm:px-6"
        style={{ backgroundPosition: `50% ${backgroundY.get()}%` }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/cosmic-grid-pattern_rslhgk.svg')] bg-repeat"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              Have a project in mind or want to learn more about our services? 
              We're here to answer your questions and help you bring your vision to life.
            </p>
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3 text-white">
                <FiMail className="text-purple-300 text-xl" />
                <span>cybridaagency@gmail.com</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3 text-white">
                <FiPhone className="text-purple-300 text-xl" />
                <span>+91 8579956949</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3 text-white">
                <FiMapPin className="text-purple-300 text-xl" />
                <span>New Delhi, India</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form Section */}
          <motion.div 
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-white rounded-xl shadow-xl p-6 lg:p-10 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <FiCheck className="text-green-500 text-3xl" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitError && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-3 mb-4">
                      <FiAlertCircle className="text-red-500" />
                      <span>{submitError}</span>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-300' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}
                        placeholder="Enter your email"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-300' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}
                        placeholder="Enter your phone number"
                      />
                      {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-300' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}
                      placeholder="What is your inquiry about?"
                    />
                    {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-300' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors`}
                      placeholder="Tell us more about your project or inquiry..."
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                  </div>
                  
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center px-8 py-4 rounded-lg text-white font-medium transition-all ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:translate-y-[-1px]'}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message <FiSend className="ml-2" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">We'd love to hear from you</h2>
            <p className="text-gray-600 mb-10">
              Ready to transform your digital presence? Whether you have a specific project in mind or 
              just want to explore possibilities, our team is here to help you achieve your goals.
            </p>
            
            {/* Contact Cards */}
            <div className="space-y-5 mb-12">
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100/60 flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <FiMapPin className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Our Location</h3>
                  <p className="text-gray-600">New Delhi, India ,110005</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100/60 flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <FiClock className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100/60 flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <FiMessageCircle className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">Get in Touch</h3>
                  <p className="text-gray-600">Email: cybridaagency@gmail.com</p>
                  <p className="text-gray-600">Phone: +91 8579956949</p>
                </div>
              </motion.div>
            </div>
            
            {/* FAQ Section */}
            <div className="pt-4 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                      className="w-full flex justify-between items-center p-5 bg-white text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                    >
                      <span>{item.question}</span>
                      <FiArrowRight className={`transform transition-transform ${activeAccordion === index ? 'rotate-90' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeAccordion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-600">{item.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 py-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/cosmic-grid-pattern_rslhgk.svg')] bg-repeat"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your digital presence?</h2>
            <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
              Partner with Cybrida to create stunning digital experiences that engage your audience and grow your business.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center px-8 py-4 rounded-lg bg-white text-indigo-700 font-medium hover:bg-indigo-50 transition-colors"
            >
              Start Your Project <FiArrowRight className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

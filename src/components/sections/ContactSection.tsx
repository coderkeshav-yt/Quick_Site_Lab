import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiArrowRight, FiGlobe, FiClock, FiAlertCircle } from 'react-icons/fi';
import { firebase, db } from '../../firebase/firebaseConfig.js';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    company: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [activeStep, setActiveStep] = useState(1);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };
  
  const handleBlur = () => {
    setFocusedField(null);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Create a simple object with the form data
      const contactData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        company: formData.company,
        timestamp: new Date(),
        createdAt: new Date().toISOString() // Add a string timestamp for easier debugging
      };
      
      console.log('CONTACT FORM: Preparing to submit data:', contactData);
      
      // Direct approach with await to ensure completion
      const docRef = await db.collection('contactSubmissions').add(contactData);
      
      console.log('CONTACT FORM: Document successfully written with ID:', docRef.id);
      
      // Set success state
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        company: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('CONTACT FORM ERROR:', error);
      setIsSubmitting(false);
      setSubmitError('There was an error submitting your message. Please try again.');
    }
  
  };
  
  const nextStep = () => {
    setActiveStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    setActiveStep(prev => prev - 1);
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-4"
          >
            <span className="text-sm font-medium text-secondary">Let's Connect</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Get in Touch with <span className="text-primary">Cybrida</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have a project in mind or want to learn more about our services? We're here to turn your digital vision into reality.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-card border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-50"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-button">
                        <FiMail className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Email Us</h4>
                      <p className="mt-1 text-gray-600 hover:text-primary transition-colors">
                        <a href="mailto:quicksitelabteam@gmail.com">quicksitelabteam@gmail.com
</a>
                      </p>
                      <p className="mt-1 text-gray-600 hover:text-primary transition-colors">
                        <a href="mailto:quicksitelabteam@gmail.com">quicksitelabteam@gmail.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-button">
                        <FiPhone className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Call Us</h4>
                      <p className="mt-1 text-gray-600 hover:text-primary transition-colors">
                        <a href="tel:+919876543210">+91 9876543210</a>
                      </p>
                      <p className="mt-1 text-gray-600 hover:text-primary transition-colors">
                        <a href="tel:+919876543210">+91 9876543210</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-button">
                        <FiMapPin className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Visit Us</h4>
                      <address className="mt-1 text-gray-600 not-italic">
                        New Delhi<br />
                        India, 110005<br />
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-primary to-accent text-white shadow-button">
                        <FiClock className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                      <p className="mt-1 text-gray-600">Monday - Friday: 9AM - 6PM</p>
                      <p className="mt-1 text-gray-600">Saturday: 10AM - 4PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-white rounded-full shadow-sm border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors">
                      <span className="sr-only">Facebook</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full shadow-sm border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors">
                      <span className="sr-only">Instagram</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full shadow-sm border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="p-3 bg-white rounded-full shadow-sm border border-gray-200 text-gray-600 hover:text-primary hover:border-primary transition-colors">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-card border border-gray-100 relative overflow-hidden"
            >
              {/* Decorative gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-30"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Let's Discuss Your Project</h3>
                  <div className="hidden md:flex space-x-2">
                    <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                    <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                    <span className="h-2 w-2 rounded-full bg-primary"></span>
                  </div>
                </div>
                
                {submitSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center"
                  >
                    <FiCheck className="w-5 h-5 mr-2 text-green-500" />
                    Thank you for your message! We'll get back to you as soon as possible.
                  </motion.div>
                )}
                
                {submitError && (
                  <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
                    {submitError}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  {/* Progress steps - visible on mobile */}
                  <div className="flex justify-between mb-8 md:hidden">
                    <div className={`flex flex-col items-center ${activeStep >= 1 ? 'text-primary' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${activeStep >= 1 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>1</div>
                      <span className="text-xs">Info</span>
                    </div>
                    <div className={`flex flex-col items-center ${activeStep >= 2 ? 'text-primary' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${activeStep >= 2 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>2</div>
                      <span className="text-xs">Details</span>
                    </div>
                    <div className={`flex flex-col items-center ${activeStep >= 3 ? 'text-primary' : 'text-gray-400'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${activeStep >= 3 ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}>3</div>
                      <span className="text-xs">Message</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-1 transition-colors duration-200 ${focusedField === 'name' ? 'text-primary' : 'text-gray-700'}`}>
                        Your Name *
                      </label>
                      <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${focusedField === 'name' ? 'ring-2 ring-primary/50' : 'ring-1 ring-gray-200'}`}>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => handleFocus('name')}
                          onBlur={handleBlur}
                          required
                          className="w-full px-4 py-3 border-0 focus:ring-0 focus:outline-none bg-white"
                          placeholder="Aditya Singh"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-1 transition-colors duration-200 ${focusedField === 'email' ? 'text-primary' : 'text-gray-700'}`}>
                        Your Email *
                      </label>
                      <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${focusedField === 'email' ? 'ring-2 ring-primary/50' : 'ring-1 ring-gray-200'}`}>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => handleFocus('email')}
                          onBlur={handleBlur}
                          required
                          className="w-full px-4 py-3 border-0 focus:ring-0 focus:outline-none bg-white"
                          placeholder="Aditya@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className={`block text-sm font-medium mb-1 transition-colors duration-200 ${focusedField === 'phone' ? 'text-primary' : 'text-gray-700'}`}>
                        Phone Number
                      </label>
                      <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${focusedField === 'phone' ? 'ring-2 ring-primary/50' : 'ring-1 ring-gray-200'}`}>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => handleFocus('phone')}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 border-0 focus:ring-0 focus:outline-none bg-white"
                          placeholder="+91 9876543210"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="company" className={`block text-sm font-medium mb-1 transition-colors duration-200 ${focusedField === 'company' ? 'text-primary' : 'text-gray-700'}`}>
                        Company Name
                      </label>
                      <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${focusedField === 'company' ? 'ring-2 ring-primary/50' : 'ring-1 ring-gray-200'}`}>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => handleFocus('company')}
                          onBlur={handleBlur}
                          className="w-full px-4 py-3 border-0 focus:ring-0 focus:outline-none bg-white"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className={`block text-sm font-medium mb-1 transition-colors duration-200 ${focusedField === 'subject' ? 'text-primary' : 'text-gray-700'}`}>
                      Project Type *
                    </label>
                    <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${focusedField === 'subject' ? 'ring-2 ring-primary/50' : 'ring-1 ring-gray-200'}`}>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => handleFocus('subject')}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 border-0 focus:ring-0 focus:outline-none bg-white appearance-none"
                      >
                        <option value="">Select a project type</option>
                        <option value="Website Design">Website Design</option>
                        <option value="Web Application">Web Application</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="SEO & Marketing">SEO & Marketing</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className={`block text-sm font-medium mb-1 transition-colors duration-200 ${focusedField === 'message' ? 'text-primary' : 'text-gray-700'}`}>
                      Project Details *
                    </label>
                    <div className={`relative rounded-lg overflow-hidden transition-all duration-300 ${focusedField === 'message' ? 'ring-2 ring-primary/50' : 'ring-1 ring-gray-200'}`}>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        required
                        className="w-full px-4 py-3 border-0 focus:ring-0 focus:outline-none bg-white"
                        placeholder="Tell us about your project and requirements..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-500">* Required fields</p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-button transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

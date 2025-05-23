import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiArrowLeft, FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import testimonial1 from '../../assets/testimonial-1.svg';
import testimonial2 from '../../assets/testimonial-2.svg';
import testimonial3 from '../../assets/testimonial-3.svg';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      image: testimonial1,
      content: "Working with Quick Site Lab was a game-changer for our business. They completely transformed our online presence and helped us reach a wider audience. The team was professional, responsive, and delivered beyond our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director",
      company: "GrowthBox",
      image: testimonial2,
      content: "The Quick Site Lab team understood our vision from day one. They created a website that perfectly represents our brand and has significantly improved our conversion rates. I highly recommend their services!",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder",
      company: "Artisan Crafts",
      image: testimonial3,
      content: "As a small business owner, I needed a website that would help me compete with larger companies. Quick Site Lab delivered exactly that - a beautiful, functional site that has helped my business grow exponentially.",
      rating: 5
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full translate-x-1/4 translate-y-1/4"></div>
        
        <div className="text-center mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-4"
          >
            <span className="text-sm font-medium text-secondary">Client Success Stories</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our Clients Say About <span className="text-primary">Quick Site Lab</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Don't just take our word for it - hear from some of our satisfied clients about their experience working with our team.
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative z-10 mb-12"
        >
          <div className="relative overflow-hidden py-10">
            <div className="relative">
              {/* Current testimonial */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-card p-8 md:p-10 max-w-4xl mx-auto border border-gray-100"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img 
                          src={testimonials[activeIndex].image} 
                          alt={testimonials[activeIndex].name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2 shadow-lg">
                        <FiStar className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center mb-4 justify-center md:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 mr-1">
                          <FiStar className="w-5 h-5 fill-current" />
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 text-lg md:text-xl italic mb-6 text-center md:text-left">
                      "{testimonials[activeIndex].content}"
                    </p>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-900">{testimonials[activeIndex].name}</h3>
                      <p className="text-gray-600">{testimonials[activeIndex].position}, {testimonials[activeIndex].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-colors duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center relative z-10 mt-8"
        >
          <p className="text-lg text-gray-600 mb-6">
            Join our growing list of satisfied clients and experience the Quick Site Lab difference.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary shadow-button transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Started Today <FiArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

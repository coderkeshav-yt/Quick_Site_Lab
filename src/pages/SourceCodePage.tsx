import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import SourceCodeProducts from '../components/sections/SourceCodeProducts';
import Breadcrumb from '../components/ui/Breadcrumb';

const SourceCodePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        <title>Source Code Packages | Launchory</title>
        <meta name="description" content="Premium source code packages for web developers and businesses. Ready-to-use, high-quality code to accelerate your projects." />
      </Helmet>
      

      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("/images/pattern-bg.png")', backgroundSize: 'cover' }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Source Code Packages</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto font-light">
              Premium, ready-to-use source code to accelerate your development projects.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#products" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                View Packages
              </a>
              <a href="/contact" className="bg-transparent hover:bg-white/10 border-2 border-white px-8 py-3 rounded-full font-bold transition-all duration-300">
                Custom Request
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Premium Curve Divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-auto" style={{ filter: 'drop-shadow(0px -2px 5px rgba(0,0,0,0.05))' }}>
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#f9fafb" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            <path 
              d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,112C672,128,768,160,864,154.7C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="url(#wave-gradient)"
              className="opacity-100 transition-all duration-300"
            ></path>
            <path 
              d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,122.7C672,139,768,149,864,138.7C960,128,1056,96,1152,80C1248,64,1344,64,1392,64L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="white"
              className="opacity-90 transition-all duration-300"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose Our Source Code?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our code packages are built with the latest technologies and best practices to save you time and money.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Ready to Use</h3>
            <p className="text-gray-600">
              Our code packages are thoroughly tested and ready for immediate implementation in your projects.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Customizable</h3>
            <p className="text-gray-600">
              All code is well-structured and documented, making it easy to customize to your specific needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Best Practices</h3>
            <p className="text-gray-600">
              Built following industry standards and best practices for security, performance, and maintainability.
            </p>
          </div>
        </div>
      </div>
      
      {/* Products Section */}
      <div id="products" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Available Packages</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our collection of premium source code packages. Purchase once, use forever.
          </p>
        </div>
        
        <SourceCodeProducts />
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our source code packages? Find answers to common questions below.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-md p-6 mb-4">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Can I use the code for multiple projects?</h3>
              <p className="text-gray-600">
                Yes, once you purchase a code package, you can use it for multiple projects without additional licensing fees.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md p-6 mb-4">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Do you provide support after purchase?</h3>
              <p className="text-gray-600">
                Yes, we provide basic support for all purchases. If you need more extensive support, we offer premium support packages.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md p-6 mb-4">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Are updates included?</h3>
              <p className="text-gray-600">
                Yes, you'll receive free updates for the purchased version. Major version upgrades may require an additional fee.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Can I request a custom package?</h3>
              <p className="text-gray-600">
                Absolutely! If you need a custom solution, please <a href="/contact" className="text-purple-600 hover:underline">contact us</a> with your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceCodePage;

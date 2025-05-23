import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

const HeroSection: React.FC = () => {
  return (
    <>
      {/* Main Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12">
        {/* Space background with Bunny.net theme */}
        <div className="absolute inset-0 z-0 bg-indigo-950">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: 'url("https://res.cloudinary.com/dlvxjnycr/image/upload/v1747909355/bunnynet-the-best-content-delivery-network-cdn_hsz9og.webp")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left content - Text */}
            <div className="py-8 text-white">
              {/* Heading */}
              <h1 className="text-5xl font-bold leading-tight mb-6">
                <div className="block">Turning Your Bold</div>
                <div className="block">Ideas Into Web</div>
                <div className="block">Success</div>
              </h1>
              
              {/* Description */}
              <p className="text-xl mb-8 text-white leading-relaxed max-w-xl">
                 <span className="font-semibold">Quick Site Lab</span> transform your unique vision into high-performing,
                  scalable, and visually stunning digital solutions—built
                 to engage users and drive measurable online success.
              </p>
              
              {/* CTA Button */}
              <div className="mb-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 shadow-lg transition-all duration-300"
                >
                  Get Demo for FREE <HiArrowNarrowRight className="ml-2" />
                </Link>
              </div>
              
              {/* No credit card required */}
              <div className="text-sm text-gray-300">
                No credit card required. Complete setup in 2 minutes.
                <div className="mt-1 text-orange-400 flex items-center">
                  <span className="inline-block w-2 h-2 bg-orange-400 mr-2 transform rotate-45"></span>
                </div>
              </div>
            </div>
            
            {/* Right side - leave empty for now */}
            <div className="hidden lg:block">
              {/* Intentionally left empty */}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="bg-indigo-950 border-t border-indigo-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Join over 15,000+ websites already powered by Quick Site lab</h3>
              <p className="text-blue-300 mt-1">Our dedication to quality has won the trust of many well-known brands in their industries.</p>
            </div>
            
            <div className="flex flex-col items-start md:items-end">
              <div className="flex items-center">
                <p className="text-white mr-2">We're rated <span className="font-bold">Excellent 4.9</span></p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-green-400 text-xl">★</div>
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-1">4.9 out of 5 based on 900+ reviews</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

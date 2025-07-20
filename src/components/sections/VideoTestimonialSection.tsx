import React, { useState } from 'react';

const VideoTestimonialSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full mb-4">
            Video Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-blue-600">Amazing</span> Clients
          </h2>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear success stories from businesses we've helped transform.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl relative group">
          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          
          {/* Video Container */}
          <div className={`relative aspect-w-16 aspect-h-9 bg-black ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            <iframe
              src="https://player.cloudinary.com/embed/?cloud_name=dlvxjnycr&public_id=review_natural_puff_ijh9c3&profile=cld-default&autoplay=false&muted=false&controls=1"
              className="absolute top-0 left-0 w-full h-full"
              allow="fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              title="Client Testimonial"
              onLoad={handleIframeLoad}
              style={{ backgroundColor: '#000' }}
              sandbox="allow-same-origin allow-scripts allow-popups"
            />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to start your success story?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started Today
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Modern Glass-morphism Trust Badges */}
        <div className="mt-20 relative">
          {/* Decorative Background Elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              {
                title: '100+',
                description: 'Happy Clients',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                gradient: 'from-blue-500 to-blue-600',
                accent: 'via-blue-400',
                shadow: 'shadow-blue-500/20'
              },
              {
                title: '5.0',
                description: 'Star Rating',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ),
                gradient: 'from-amber-500 to-amber-600',
                accent: 'via-amber-400',
                shadow: 'shadow-amber-500/20'
              },
              {
                title: '24/7',
                description: 'Support Team',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                gradient: 'from-emerald-500 to-emerald-600',
                accent: 'via-emerald-400',
                shadow: 'shadow-emerald-500/20'
              },
              {
                title: '100%',
                description: 'Satisfaction',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                gradient: 'from-purple-500 to-purple-600',
                accent: 'via-purple-400',
                shadow: 'shadow-purple-500/20'
              }
            ].map((badge, index) => (
              <div 
                key={index}
                className={`group relative p-6 rounded-2xl backdrop-blur-sm bg-white/80 border border-white/20 hover:border-transparent transition-all duration-500 overflow-hidden hover:shadow-lg ${badge.shadow} hover:-translate-y-2`}
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${badge.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated Accent Line */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${badge.gradient} ${badge.accent} opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
                
                <div className="relative z-10 flex items-start space-x-4">
                  {/* Icon with gradient background */}
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${badge.gradient} ${badge.accent} text-white shadow-lg`}>
                    {badge.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-500">
                      {badge.title}
                    </h3>
                    <p className="text-gray-600 font-medium mt-1 group-hover:text-gray-800 transition-colors duration-300">
                      {badge.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" 
                     style={{
                       backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
                       backgroundSize: '10px 10px',
                     }}>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialSection;

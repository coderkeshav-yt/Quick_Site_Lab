import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFigma, FiExternalLink, FiSearch, FiX } from 'react-icons/fi';
import { SiFigma } from 'react-icons/si';

const designs = [
  {
    id: 1,
    title: 'Pizza E-commerce App',
    description: 'Modern food delivery app interface with seamless ordering experience',
    category: 'Web App',
    link: 'https://www.figma.com/proto/j7B2QzzCJ0T45eurr35J0c/Untitled?node-id=1-2&t=L5Unyz6t8vaJDuVE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2',
    preview: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1750691280/pizza_e-commerce_kkhnup.png'
  },
  {
    id: 2,
    title: 'MotoCare Companion App',
    description: 'Smart bike interface for effortless maintenance tracking and service booking',
    category: 'Web App',
    link: 'https://www.figma.com/proto/PDzUOH86qMCxHjLChhmfNW/Royal-Enfield-Bike-design?node-id=1-2&p=f&t=EahPCIwZCOGKR3p4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
    preview: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1750950545/bike_c51s8t.png'
  },
  {
    id: 3,
    title: 'Mac D Digital Mall',
    description: 'Next-gen online mall for exclusive Mac D drops and smooth shopping vibes',
    category: 'Mobile App',
    link: 'https://www.figma.com/proto/LhQupBZFDo8tMA4HvWrtoe/McDonald-App-Prototype--Community-?node-id=1-1553&p=f&t=8UlU1w0W4nJekpXd-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    preview: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1750952241/000_sg6u97.png'
  },
  {
    id: 4,
    title: 'The New Safari',
    description: 'Bold by Nature, Refined by Design - Modern browser interface concept',
    category: 'Browser UI',
    link: 'https://www.figma.com/proto/lZqLi3QKA4rP2vNrlMIjH6/The-New-Safari-%E2%80%93-Bold-by-Nature--Refined-by-Design?t=hpbAzlubO9pfLkN6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=3-9&starting-point-node-id=3%3A9',
    preview: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1752162198/car_jbivuq.png'
  },
  {
    id: 5,
    title: 'Pringles Potato Crisps',
    description: 'Modern packaging design concept for Pringles with vibrant colors and engaging visuals',
    category: 'Packaging Design',
    link: 'https://www.figma.com/proto/2mzbMMIGUcgHfeEBm2qt7q/Pringles-Potato-Crisps-design?node-id=2-69&p=f&t=HAawKHwKZEJbdOvO-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A69',
    preview: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1752162204/chips_z1cxex.png'
  },
  {
    id: 6,
    title: 'Royal Fashion Slider App',
    description: 'Interactive fashion showcase with smooth animations and product discovery',
    category: 'Mobile App',
    link: 'https://www.figma.com/proto/MVXd7Z79KcS9KuFzP2KBym/Runway-Fashion-Slider-App--Community-?page-id=0%3A1&node-id=0-2577&p=f&viewport=544%2C104%2C0.13&t=NU1aQpVCHWuMmr47-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=0%3A2621',
    preview: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1752941999/Untitled_design_2_ngcfoc.png',
    mostRated: true
  },
  {
    id: 7,
    title: 'Modern UI/UX Dashboard',
    description: 'Clean and modern dashboard interface with data visualization and user management',
    category: 'Web App',
    link: 'https://www.figma.com/proto/RxcWXr7KkWy74ZStA1Cy6m/Untitled?page-id=0%3A1&node-id=1-2&viewport=265%2C255%2C0.23&t=aQin4lz01rJg797O-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=38%3A54',
    preview: 'https://res.cloudinary.com/dlvxjnycr/image/upload/v1754377511/k_muh9ch.png'
  },
];

const DesignCard = ({ design }: { design: typeof designs[0] & { mostRated?: boolean } }) => (
  <motion.div
    className="group bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 h-full flex flex-col"
    whileHover={{ y: -5 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <div className="relative h-64 overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 z-0" />
      <div className="relative h-full w-full flex items-center justify-center p-2">
        <img
          src={design.preview}
          alt={design.title}
          className="h-full w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          style={{ maxHeight: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 mb-3">
            <FiFigma className="mr-1.5 h-3.5 w-3.5 text-pink-500" />
            {design.category}
          </span>
          <h3 className="text-xl font-bold text-white">{design.title}</h3>
        </div>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {design.title}
          </h3>
          {design.mostRated && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200 mt-1">
              ⭐ Most Rated
            </span>
          )}
        </div>
        <SiFigma className="h-5 w-5 text-pink-500 mt-1" />
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed flex-grow">
        {design.description}
      </p>
      <a
        href={design.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-blue-500/20 mt-auto"
      >
        View on Figma
        <FiExternalLink className="ml-2 group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  </motion.div>
);

const FigmaDesigns: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchTerms = ['UI Kits', 'Mobile Apps', 'Web Templates', 'Dashboard Designs'];
  const [currentTermIndex, setCurrentTermIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showSearch, setShowSearch] = useState(true);

  // Auto-typing effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const type = () => {
      const currentTerm = searchTerms[currentTermIndex];
      
      if (isTyping) {
        // Typing effect
        if (typingText.length < currentTerm.length) {
          setTypingText(currentTerm.substring(0, typingText.length + 1));
          setTypingSpeed(150);
        } else {
          // Pause at the end of typing
          timeout = setTimeout(() => {
            setIsTyping(false);
            setIsDeleting(true);
          }, 2000);
          return;
        }
      } else if (isDeleting) {
        // Deleting effect
        if (typingText.length > 0) {
          setTypingText(typingText.substring(0, typingText.length - 1));
          setTypingSpeed(100);
        } else {
          // Move to next term
          setIsDeleting(false);
          setCurrentTermIndex((prevIndex) => (prevIndex + 1) % searchTerms.length);
          setIsTyping(true);
          return;
        }
      }

      timeout = setTimeout(type, typingSpeed);
    };

    timeout = setTimeout(type, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [typingText, isTyping, isDeleting, currentTermIndex]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // Filter designs based on search query
  const filteredDesigns = designs.filter(design => 
    design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    design.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">

      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-3"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                DESIGN RESOURCES
              </span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Design Portfolio</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Browse through our collection of premium Figma designs, UI kits, and design resources.
              Each design is crafted with attention to detail and ready for your next project.
            </motion.p>
          </div>

          {/* Search and Filter */}
          <motion.div 
            className="mb-12 max-w-2xl mx-auto relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => searchInputRef.current?.focus()}
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                className="block w-full pl-12 pr-12 py-4 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 shadow-sm hover:shadow-md"
                placeholder={`Search ${typingText}...`}
              />
              {searchQuery && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    clearSearch();
                  }}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                >
                  <FiX className="h-5 w-5" />
                </button>
              )}
            </div>
            <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {filteredDesigns.length} {filteredDesigns.length === 1 ? 'design' : 'designs'} found
            </div>
          </motion.div>

          {/* Designs Grid */}
          <AnimatePresence>
            {filteredDesigns.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                key="designs-grid"
              >
                {filteredDesigns.map((design) => (
                  <DesignCard key={design.id} design={design} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="no-results"
              >
                <div className="text-gray-400 dark:text-gray-500">
                  <FiSearch className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-medium text-gray-600 dark:text-gray-300">No designs found</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">Try a different search term</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={filteredDesigns.length === 0 ? { display: 'none' } : {}}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Want to see more of our designs?
            </p>
            <a
              href="https://www.figma.com/@launchory"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >
              <SiFigma className="mr-2" />
              Visit our Figma Profile
              <FiExternalLink className="ml-2" />
            </a>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Cybrida. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ by the Cybrida team</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FigmaDesigns;

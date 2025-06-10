import React, { useState, useEffect, useRef, useCallback, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiMenu, 
  FiX, 
  FiChevronDown, 
  FiCode, 
  FiLayers, 
  FiMonitor, 
  FiSmartphone,
  FiZap,
  FiGlobe,
  FiTrendingUp,
  FiCloud,
  FiBarChart2,
  FiHome
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItemProps {
  to: string;
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  badge?: string;
  onClose: () => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ to, icon, title, description, color, badge, onClose }) => {
  const colorClasses = {
    purple: 'from-purple-50 to-white text-purple-600 hover:from-purple-600 hover:text-white group-hover/item:text-white',
    blue: 'from-blue-50 to-white text-blue-600 hover:from-blue-600 hover:text-white group-hover/item:text-white',
    pink: 'from-pink-50 to-white text-pink-600 hover:from-pink-600 hover:text-white group-hover/item:text-white',
    green: 'from-green-50 to-white text-green-600 hover:from-green-600 hover:text-white group-hover/item:text-white',
    indigo: 'from-indigo-50 to-white text-indigo-600 hover:from-indigo-600 hover:text-white group-hover/item:text-white',
    yellow: 'from-yellow-50 to-white text-yellow-600 hover:from-yellow-600 hover:text-white group-hover/item:text-white',
  };

  const badgeColors = {
    Popular: 'bg-purple-100 text-purple-800',
    Trending: 'bg-blue-100 text-blue-800',
    New: 'bg-green-100 text-green-800',
  };

  return (
    <Link 
      to={to}
      className={`flex items-center px-4 py-3 text-sm group/item transition-all duration-200 hover:bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses] || ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className={`p-2 mr-3 rounded-lg transition-colors ${colorClasses[color as keyof typeof colorClasses].split(' ')[0]} group-hover/item:bg-opacity-100`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="font-medium truncate">{title}</span>
          {badge && (
            <span className={`text-xs px-2 py-0.5 rounded-full ml-2 ${badgeColors[badge as keyof typeof badgeColors] || 'bg-gray-100 text-gray-800'}`}>
              {badge}
            </span>
          )}
        </div>
        <div className="text-xs text-gray-500 group-hover/item:text-white/80 truncate">
          {description}
        </div>
      </div>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [isServicesHovering, setIsServicesHovering] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [servicesCloseTimeout, setServicesCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);  

  const handleServicesMobileClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setServicesDropdown(prev => !prev);
  }, []);

  const closeServices = useCallback(() => {
    setServicesDropdown(false);
  }, []);

  const openServicesDropdown = useCallback(() => {
    if (!isDesktop) return; // Only for desktop
    setIsServicesHovering(true);
    if (servicesCloseTimeout) {
      clearTimeout(servicesCloseTimeout);
      setServicesCloseTimeout(null);
    }
    setServicesDropdown(true);
  }, [servicesCloseTimeout, isDesktop]);

  const closeServicesDropdown = useCallback(() => {
    if (!isDesktop) return; // Only for desktop
    setIsServicesHovering(false);
    const timeout = setTimeout(() => {
      setServicesDropdown(false);
    }, 300);
    setServicesCloseTimeout(timeout);
  }, [servicesCloseTimeout, isDesktop]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesCloseTimeout) {
        clearTimeout(servicesCloseTimeout);
      }
    };
  }, [servicesCloseTimeout]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = prevScrollPos < currentScrollY;
      setScrolled(currentScrollY > 10);
      if (isScrollingDown && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setPrevScrollPos(currentScrollY);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    if (!isDesktop) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeServicesDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeServicesDropdown, isDesktop]);

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <nav className={`transition-all duration-300 max-w-4xl mx-auto rounded-full ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`} style={{
          marginTop: visible ? '1rem' : '0',
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: scrolled ? 'blur(8px)' : 'blur(4px)',
          WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'blur(4px)',
          boxShadow: scrolled ? '0 4px 12px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.05)',
          padding: scrolled ? '0.5rem 1rem' : '0.5rem 1rem',
          border: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255,255,255,0.2)'
        }}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity duration-200">
                  <img
                    className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
                    src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/a-logo-design-featuring-the-text-quicksi_CifZevJ7Sammm7AHdhV0Sw_SyfaagIaQPK5czYYfc-VCQ_iwzml0.jpg"
                    alt="Cybrida"
                  />
                </Link>
              </div>

              <div className="hidden md:flex md:items-center md:space-x-1">
                <Link to="/" className="px-3 py-1.5 text-sm font-bold text-gray-800 hover:text-primary transition-all duration-200">
                  Home
                </Link>
                
                <div 
                  className="relative group"
                  ref={dropdownRef}
                  onMouseEnter={openServicesDropdown}
                  onMouseLeave={closeServicesDropdown}
                >
                  <button 
                    onClick={handleServicesMobileClick}
                    className="flex items-center px-4 py-1.5 text-sm font-bold text-gray-800 hover:text-primary transition-all duration-300 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <span className="mr-2">Services</span>
                      <FiChevronDown className={`transition-transform duration-300 ease-out ${servicesDropdown ? 'rotate-180' : ''}`} />
                    </span>
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </button>
                  
                  <AnimatePresence>
                    {(servicesDropdown || isServicesHovering) && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        className="absolute left-0 mt-2 w-72 bg-white backdrop-blur-xl rounded-xl shadow-2xl py-3 z-50 border border-gray-100/50 overflow-hidden"
                        onMouseEnter={() => setIsServicesHovering(true)}
                        onMouseLeave={() => {
                          setIsServicesHovering(false);
                          closeServicesDropdown();
                        }}
                      >
                        <div className="px-4 py-3 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-100">
                          <h3 className="text-sm font-semibold text-gray-800 flex items-center">
                            <FiZap className="text-purple-500 mr-2" />
                            Our Services
                          </h3>
                        </div>
                        <div className="max-h-96 overflow-y-auto custom-scrollbar">
                          <ServiceItem
                            to="/services/web-development"
                            icon={<FiCode className="w-5 h-5" />}
                            title="Web Development"
                            description="Custom websites and web applications"
                            color="blue"
                            badge="Popular"
                            onClose={closeServices}
                          />
                          <ServiceItem
                            to="/services/mobile-apps"
                            icon={<FiSmartphone className="w-5 h-5" />}
                            title="Mobile Apps"
                            description="iOS and Android applications"
                            color="purple"
                            onClose={closeServices}
                          />
                          <ServiceItem
                            to="/services/ui-ux-design"
                            icon={<FiMonitor className="w-5 h-5" />}
                            title="UI/UX Design"
                            description="Beautiful and intuitive interfaces"
                            color="pink"
                            badge="Trending"
                            onClose={closeServices}
                          />
                          <ServiceItem
                            to="/services/digital-marketing"
                            icon={<FiTrendingUp className="w-5 h-5" />}
                            title="Digital Marketing"
                            description="Grow your online presence"
                            color="green"
                            onClose={closeServices}
                          />
                          <ServiceItem
                            to="/services/seo"
                            icon={<FiGlobe className="w-5 h-5" />}
                            title="SEO Services"
                            description="Improve your search rankings"
                            color="indigo"
                            onClose={closeServices}
                          />
                          <ServiceItem
                            to="/services/cloud-solutions"
                            icon={<FiCloud className="w-5 h-5" />}
                            title="Cloud Solutions"
                            description="Scalable cloud infrastructure"
                            color="yellow"
                            badge="New"
                            onClose={closeServices}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <Link to="/about" className="px-3 py-1.5 text-sm font-bold text-gray-800 hover:text-primary transition-all duration-200">
                  About
                </Link>
                <Link to="/portfolio" className="px-3 py-1.5 text-sm font-bold text-gray-800 hover:text-primary transition-all duration-200">
                  Portfolio
                </Link>
                <Link to="/source-code" className="px-3 py-1.5 text-sm font-bold text-gray-800 hover:text-primary transition-all duration-200">
                  Source Code
                </Link>
                <Link 
                  to="/get-started" 
                  className="ml-2 px-6 py-2 rounded-full shadow-lg text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-500/30"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <motion.button
                  onClick={toggleMenu}
                  className="relative flex flex-col items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-white shadow-lg hover:shadow-xl hover:from-white hover:to-indigo-50 transition-all duration-300 border-2 border-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 overflow-hidden group"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0.9 }}
                  animate={{ 
                    opacity: 1,
                    rotate: isMenuOpen ? 180 : 0,
                    backgroundColor: isMenuOpen ? 'rgba(99, 102, 241, 0.1)' : 'rgba(255, 255, 255, 0.9)'
                  }}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle menu"
                >
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <motion.span 
                      className="block absolute w-6 h-0.5 bg-indigo-600 rounded-full transition-all duration-300 origin-center"
                      style={{
                        top: isMenuOpen ? '50%' : '25%',
                        transform: isMenuOpen 
                          ? 'rotate(45deg) translateY(-50%)' 
                          : 'rotate(0) translateY(-50%)',
                        width: isMenuOpen ? '24px' : '20px',
                        left: isMenuOpen ? '0' : '2px'
                      }}
                    />
                    <motion.span 
                      className="block absolute w-6 h-0.5 bg-indigo-600 rounded-full transition-all duration-200 origin-center"
                      style={{
                        top: '50%',
                        opacity: isMenuOpen ? 0 : 1,
                        transform: 'translateY(-50%)',
                        width: isMenuOpen ? '0' : '20px',
                        left: isMenuOpen ? '12px' : '2px'
                      }}
                    />
                    <motion.span 
                      className="block absolute w-6 h-0.5 bg-indigo-600 rounded-full transition-all duration-300 origin-center"
                      style={{
                        bottom: isMenuOpen ? '50%' : '25%',
                        transform: isMenuOpen 
                          ? 'rotate(-45deg) translateY(50%)' 
                          : 'rotate(0) translateY(50%)',
                        width: isMenuOpen ? '24px' : '16px',
                        left: isMenuOpen ? '0' : '4px',
                      }}
                    />
                    <motion.div 
                      className="absolute inset-0 rounded-full bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: isMenuOpen ? 1.5 : 1.2,
                        opacity: isMenuOpen ? 0.1 : 0,
                      }}
                    />
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <div onClick={(e) => e.stopPropagation()}>
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setServicesDropdown(false);
                toggleMenu();
              }}
            />
            <motion.div
              key="menu"
              className="fixed inset-y-0 right-0 w-80 max-w-full bg-gradient-to-br from-white via-indigo-50 to-purple-50 shadow-2xl z-50 overflow-y-auto"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100 bg-gradient-to-r from-white to-indigo-50">
                  <Link to="/" className="flex-shrink-0" onClick={toggleMenu}>
                    <img
                      className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
                      src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/a-logo-design-featuring-the-text-quicksi_CifZevJ7Sammm7AHdhV0Sw_SyfaagIaQPK5czYYfc-VCQ_iwzml0.jpg"
                      alt="Cybrida"
                    />
                  </Link>
                  <button
                    onClick={toggleMenu}
                    className="p-3 rounded-full text-indigo-500 hover:text-white hover:bg-indigo-500 transition-all duration-200 shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <FiX className="h-7 w-7" />
                  </button>
                </div>

                <div className="px-6 py-6 space-y-2">
                  <Link
                    to="/"
                    className="flex items-center px-4 py-3 text-base font-semibold text-gray-800 hover:text-indigo-600 hover:bg-indigo-100 rounded-xl transition-all duration-200 group"
                    onClick={toggleMenu}
                  >
                    <span className="mr-3"><FiHome className="h-5 w-5" /></span> Home
                  </Link>
                  <div className="relative">
                    <div className="w-full">
                      <button
                        onClick={handleServicesMobileClick}
                        onTouchStart={(e: React.TouchEvent) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-indigo-700 bg-indigo-50 rounded-xl transition-all duration-200 group shadow ${servicesDropdown ? 'ring-2 ring-indigo-300' : ''}`}
                      >
                        <span className="flex items-center">
                          <FiLayers className="mr-3 h-5 w-5" /> Services
                        </span>
                        <FiChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${servicesDropdown ? 'transform rotate-180' : ''}`}
                        />
                      </button>
                    </div>
                    <AnimatePresence>
                      {servicesDropdown && (
                        <motion.div
                          className="mt-2 bg-white rounded-2xl shadow-xl border border-indigo-100 p-2 space-y-1 overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        >
                          <Link
                            to="/services/web-development"
                            className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                            onClick={() => { setServicesDropdown(false); toggleMenu(); }}
                          >
                            <FiCode className="h-5 w-5 text-blue-600 mt-1" />
                            <div>
                              <div className="font-medium text-gray-800 flex items-center">Web Development <span className="ml-2 text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">Popular</span></div>
                              <div className="text-xs text-gray-500">Custom websites and web applications</div>
                            </div>
                          </Link>
                          <Link
                            to="/services/mobile-apps"
                            className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                            onClick={() => { setServicesDropdown(false); toggleMenu(); }}
                          >
                            <FiSmartphone className="h-5 w-5 text-purple-600 mt-1" />
                            <div>
                              <div className="font-medium text-gray-800">Mobile Apps</div>
                              <div className="text-xs text-gray-500">iOS and Android applications</div>
                            </div>
                          </Link>
                          <Link
                            to="/services/ui-ux-design"
                            className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                            onClick={() => { setServicesDropdown(false); toggleMenu(); }}
                          >
                            <FiMonitor className="h-5 w-5 text-pink-600 mt-1" />
                            <div>
                              <div className="font-medium text-gray-800 flex items-center">UI/UX Design <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">Trending</span></div>
                              <div className="text-xs text-gray-500">Beautiful and intuitive interfaces</div>
                            </div>
                          </Link>
                          <Link
                            to="/services/digital-marketing"
                            className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                            onClick={() => { setServicesDropdown(false); toggleMenu(); }}
                          >
                            <FiTrendingUp className="h-5 w-5 text-green-600 mt-1" />
                            <div>
                              <div className="font-medium text-gray-800">Digital Marketing</div>
                              <div className="text-xs text-gray-500">Grow your online presence</div>
                            </div>
                          </Link>
                          <Link
                            to="/services/seo"
                            className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                            onClick={() => { setServicesDropdown(false); toggleMenu(); }}
                          >
                            <FiGlobe className="h-5 w-5 text-indigo-600 mt-1" />
                            <div>
                              <div className="font-medium text-gray-800">SEO Services</div>
                              <div className="text-xs text-gray-500">Improve your search rankings</div>
                            </div>
                          </Link>
                          <Link
                            to="/services/cloud-solutions"
                            className="flex items-start gap-3 px-4 py-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200"
                            onClick={() => { setServicesDropdown(false); toggleMenu(); }}
                          >
                            <FiCloud className="h-5 w-5 text-yellow-500 mt-1" />
                            <div>
                              <div className="font-medium text-gray-800 flex items-center">Cloud Solutions <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">New</span></div>
                              <div className="text-xs text-gray-500">Scalable cloud infrastructure</div>
                            </div>
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="border-t border-indigo-100 my-4"></div>
                  <Link
                    to="/about"
                    className="flex items-center px-4 py-3 text-base font-semibold text-gray-800 hover:text-indigo-600 hover:bg-indigo-100 rounded-xl transition-all duration-200 group"
                    onClick={toggleMenu}
                  >
                    <span className="mr-3"><FiBarChart2 className="h-5 w-5" /></span> About
                  </Link>
                  <Link
                    to="/portfolio"
                    className="flex items-center px-4 py-3 text-base font-semibold text-gray-800 hover:text-indigo-600 hover:bg-indigo-100 rounded-xl transition-all duration-200 group"
                    onClick={toggleMenu}
                  >
                    <span className="mr-3"><FiLayers className="h-5 w-5" /></span> Portfolio
                  </Link>
                  <Link
                    to="/source-code"
                    className="flex items-center px-4 py-3 text-base font-semibold text-gray-800 hover:text-indigo-600 hover:bg-indigo-100 rounded-xl transition-all duration-200 group"
                    onClick={toggleMenu}
                  >
                    <span className="mr-3"><FiCode className="h-5 w-5" /></span> Source Code
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

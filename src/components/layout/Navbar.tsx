import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiUser, FiUserPlus, FiShoppingBag, FiLogOut, FiSettings, FiCode, FiLayers, FiMonitor, FiSmartphone, FiSearch, FiTrendingUp, FiGlobe, FiDatabase, FiCloud, FiBarChart2, FiAward, FiZap, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';

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
  const { user, loading, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [mobileAccountDropdown, setMobileAccountDropdown] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [localLoading, setLocalLoading] = useState(true);
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const history = useHistory();
  const accountDropdownRef = useRef<HTMLDivElement>(null);
  
  // Set a timeout to prevent getting stuck on loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLocalLoading(false);
    }, 2000); // 2 seconds timeout
    
    return () => clearTimeout(timer);
  }, []);
  
  // Update local loading state when auth loading changes
  useEffect(() => {
    if (!loading) {
      setLocalLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const offset = window.scrollY;
      
      // Determine if scrolled down enough for style change
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine scroll direction for visibility
      const isScrollingDown = prevScrollPos < currentScrollPos;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      // Show navbar when at top, scrolling up, or menu is open
      if (currentScrollPos < 10 || isScrollingUp || isMenuOpen) {
        setVisible(true);
      } else if (isScrollingDown && currentScrollPos > 100) {
        // Hide navbar when scrolling down and not at the top
        setVisible(false);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isMenuOpen]);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close account dropdown when clicking outside
      if (accountDropdown) {
        const target = event.target as HTMLElement;
        if (accountDropdownRef.current && !accountDropdownRef.current.contains(target)) {
          setAccountDropdown(false);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [accountDropdown]);
  
  // Handle sign out
  const handleSignOut = async () => {
    try {
      await signOut();
      setAccountDropdown(false);
      history.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isServicesHovering, setIsServicesHovering] = useState(false);
  const [isAccountHovering, setIsAccountHovering] = useState(false);
  const [servicesCloseTimeout, setServicesCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const [accountCloseTimeout, setAccountCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const openServicesDropdown = () => {
    if (servicesCloseTimeout) {
      clearTimeout(servicesCloseTimeout);
      setServicesCloseTimeout(null);
    }
    setServicesDropdown(true);
  };

  const closeServicesDropdown = () => {
    const timeout = setTimeout(() => {
      if (!isServicesHovering) {
        setServicesDropdown(false);
      }
    }, 200);
    setServicesCloseTimeout(timeout);
  };

  // Handle click on mobile
  const handleServicesMobileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setServicesDropdown(prev => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeServicesDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (servicesCloseTimeout) clearTimeout(servicesCloseTimeout);
    };
  }, [isServicesHovering]);

  // Account Dropdown Handlers
  const openAccountDropdown = () => {
    if (accountCloseTimeout) {
      clearTimeout(accountCloseTimeout);
      setAccountCloseTimeout(null);
    }
    setAccountDropdown(true);
  };

  const closeAccountDropdown = () => {
    const timeout = setTimeout(() => {
      if (!isAccountHovering) {
        setAccountDropdown(false);
      }
    }, 200);
    setAccountCloseTimeout(timeout);
  };

  const handleAccountMobileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setAccountDropdown(prev => !prev);
  };

  // Close account dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target as Node)) {
        closeAccountDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (accountCloseTimeout) clearTimeout(accountCloseTimeout);
    };
  }, [isAccountHovering]);

  return (
    <>
      {/* Floating Navbar */}
      <div className={`fixed w-full z-50 top-3 px-4 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-32'}`}>
        <nav className={`transition-all duration-500 max-w-4xl mx-auto rounded-full ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-white/90 backdrop-blur-sm py-2 shadow-lg'}`}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center hover:opacity-90 transition-opacity duration-200">
                  <img
                    className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
                    src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/a-logo-design-featuring-the-text-quicksi_CifZevJ7Sammm7AHdhV0Sw_SyfaagIaQPK5czYYfc-VCQ_iwzml0.jpg"
                    alt="Quick Site Lab Logo"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://via.placeholder.com/48/7e22ce/ffffff?text=QSL';
                    }}
                  />
                </Link>
              </div>
              
              {/* Desktop menu */}
              <div className="hidden md:flex md:items-center md:space-x-1">
                <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-all duration-200">
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
                    className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-800 hover:text-primary transition-all duration-300 group relative overflow-hidden"
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
                        className={`absolute left-0 mt-2 w-72 bg-white backdrop-blur-xl rounded-xl shadow-2xl py-3 z-50 border border-gray-100/50 overflow-hidden`}
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
                          <p className="text-xs text-gray-500 mt-1">Transform your ideas into reality</p>
                        </div>
                        
                        <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                          <ServiceItem 
                            to="/services/web-development" 
                            icon={<FiGlobe className="h-5 w-5" />}
                            title="Web Development"
                            description="Custom websites & web applications"
                            color="purple"
                            badge="Popular"
                            onClose={closeServicesDropdown}
                          />
                          
                          <ServiceItem 
                            to="/services/mobile-apps" 
                            icon={<FiSmartphone className="h-5 w-5" />}
                            title="Mobile Apps"
                            description="iOS & Android development"
                            color="blue"
                            badge="Trending"
                            onClose={closeServicesDropdown}
                          />
                          
                          <ServiceItem 
                            to="/services/ui-ux-design" 
                            icon={<FiLayers className="h-5 w-5" />}
                            title="UI/UX Design"
                            description="Beautiful, intuitive interfaces"
                            color="pink"
                            onClose={closeServicesDropdown}
                          />
                          
                          <ServiceItem 
                            to="/services/digital-marketing" 
                            icon={<FiTrendingUp className="h-5 w-5" />}
                            title="Digital Marketing"
                            description="Grow your online presence"
                            color="green"
                            onClose={closeServicesDropdown}
                          />
                          
                          <ServiceItem 
                            to="/services/cloud-solutions" 
                            icon={<FiCloud className="h-5 w-5" />}
                            title="Cloud Solutions"
                            description="Scalable cloud infrastructure"
                            color="indigo"
                            badge="New"
                            onClose={closeServicesDropdown}
                          />
                          
                          <ServiceItem 
                            to="/services/analytics" 
                            icon={<FiBarChart2 className="h-5 w-5" />}
                            title="Analytics"
                            description="Data-driven insights"
                            color="yellow"
                            onClose={closeServicesDropdown}
                          />
                        </div>
                        
                        <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50/50">
                          <Link 
                            to="/services" 
                            className="w-full flex items-center justify-between px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-white hover:bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg transition-all duration-300 group/view-all"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeServicesDropdown();
                            }}
                          >
                            <span>View all services</span>
                            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white text-purple-600 group-hover/view-all:bg-white/20 group-hover/view-all:text-white transition-colors">
                              <FiChevronDown className="h-3.5 w-3.5 transform group-hover/view-all:translate-x-0.5 transition-transform" />
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Service Item Component */}
                <style>{`
                  .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                    height: 6px;
                  }
                  .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                  }
                  .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #c7d2fe;
                    border-radius: 10px;
                  }
                  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #a5b4fc;
                  }
                `}</style>
                
                {/* Service Item Component */}
                <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-all duration-200">
                  About
                </Link>
                <Link to="/portfolio" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-all duration-200">
                  Portfolio
                </Link>
              </div>
              
              {/* Account Dropdown */}
              <div 
                className="relative ml-4 account-dropdown"
                onMouseEnter={openAccountDropdown}
                onMouseLeave={closeAccountDropdown}
                ref={accountDropdownRef}
              >
                {!localLoading && user ? (
                  <button
                    onClick={handleAccountMobileClick}
                    className="flex items-center space-x-2 focus:outline-none"
                    aria-expanded={accountDropdown}
                    aria-haspopup="true"
                  >
                    <div className="h-9 w-9 rounded-full overflow-hidden bg-purple-100 border-2 border-purple-200 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200">
                      {user.user_metadata?.avatar_url ? (
                        <img 
                          src={user.user_metadata.avatar_url} 
                          alt="Profile" 
                          className={`h-full w-full object-cover transition-opacity duration-300 ${avatarLoaded ? 'opacity-100' : 'opacity-0'}`}
                          onLoad={() => setAvatarLoaded(true)}
                        />
                      ) : (
                        <span className="text-purple-600 font-bold text-lg">
                          {user.email?.charAt(0).toUpperCase() || 'U'}
                        </span>
                      )}
                    </div>
                    <span className="hidden md:block text-gray-700 font-medium hover:text-purple-600 transition-colors duration-200">
                      {user.user_metadata?.full_name || user.email?.split('@')[0] || 'Profile'}
                    </span>
                    <FiChevronDown className={`transition-transform duration-300 text-gray-500 group-hover/account:text-purple-600 ${accountDropdown ? 'transform rotate-180 text-purple-600' : ''}`} />
                  </button>
                ) : (
                  <button
                    onClick={handleAccountMobileClick}
                    className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 group/account relative"
                    aria-expanded={accountDropdown}
                    aria-haspopup="true"
                  >
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover/account:w-full"></span>
                    <span className="mr-1">Account</span>
                    <FiChevronDown className={`transition-transform duration-300 ${accountDropdown ? 'transform rotate-180 text-purple-600' : ''}`} />
                  </button>
                )}
                
                {/* Account Dropdown Menu */}
                {(accountDropdown || isAccountHovering) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute right-0 mt-2 w-64 bg-white backdrop-blur-xl rounded-xl shadow-2xl py-3 z-50 border border-gray-100/50 overflow-hidden"
                    onMouseEnter={() => setIsAccountHovering(true)}
                    onMouseLeave={() => {
                      setIsAccountHovering(false);
                      closeAccountDropdown();
                    }}
                  >
                    {user ? (
                      <>
                        <div className="px-4 py-3 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-100">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-3">
                              {user.user_metadata?.avatar_url ? (
                                <img 
                                  src={user.user_metadata.avatar_url} 
                                  alt="Profile" 
                                  className="h-full w-full rounded-full object-cover"
                                />
                              ) : (
                                <span className="font-bold">
                                  {user.email?.charAt(0).toUpperCase() || 'U'}
                                </span>
                              )}
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-900">{user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'}</p>
                              <p className="text-xs text-gray-600">View Profile</p>
                            </div>
                          </div>
                        </div>
                        <Link
                          to="/account"
                          className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-600 transition-all duration-200 group/item"
                          onClick={closeAccountDropdown}
                        >
                          <div className="p-1.5 mr-3 rounded-md bg-purple-50 text-purple-600 group-hover/item:bg-purple-100 transition-colors">
                            <FiUser className="h-4 w-4" />
                          </div>
                          <span>Your Profile</span>
                        </Link>
                        <Link
                          to="/account/orders"
                          className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-600 transition-all duration-200 group/item"
                          onClick={closeAccountDropdown}
                        >
                          <div className="p-1.5 mr-3 rounded-md bg-blue-50 text-blue-600 group-hover/item:bg-blue-100 transition-colors">
                            <FiShoppingBag className="h-4 w-4" />
                          </div>
                          <span>Your Orders</span>
                        </Link>
                        <Link
                          to="/account/settings"
                          className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-600 transition-all duration-200 group/item"
                          onClick={closeAccountDropdown}
                        >
                          <div className="p-1.5 mr-3 rounded-md bg-green-50 text-green-600 group-hover/item:bg-green-100 transition-colors">
                            <FiSettings className="h-4 w-4" />
                          </div>
                          <span>Settings</span>
                        </Link>
                        <div className="border-t border-gray-100 pt-1 pb-1.5">
                          <button
                            onClick={handleSignOut}
                            className="w-full text-left flex items-center px-4 py-2.5 text-sm text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 hover:text-red-700 rounded-lg transition-all duration-200 group/item"
                          >
                            <div className="p-1.5 mr-3 rounded-md bg-red-50 text-red-600 group-hover/item:bg-red-100 transition-colors">
                              <FiLogOut className="h-4 w-4" />
                            </div>
                            <span>Sign out</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="px-2 py-1.5 border-b border-gray-100/20">
                          <Link
                            to="/login"
                            className="group relative w-full flex items-center px-4 py-3.5 text-sm font-medium text-gray-700 hover:text-purple-700 rounded-xl transition-all duration-400 hover:shadow-sm hover:-translate-y-0.5 overflow-hidden"
                            onClick={() => {
                              closeAccountDropdown();
                              setAccountDropdown(false);
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-indigo-50/30 to-white/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400/0 via-purple-400/80 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="p-1.5 mr-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100/80 group-hover:shadow-md group-hover:border-purple-200/80 group-hover:scale-105 transition-all duration-300">
                              <FiUser className="h-4 w-4 text-purple-600 group-hover:text-purple-700 group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <span className="font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-800 group-hover:from-purple-700 group-hover:to-indigo-700 transition-all duration-300">
                              Login
                            </span>
                            <div className="ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                              <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </Link>
                        </div>
                        <div className="px-2 py-1.5">
                          <Link
                            to="/signup"
                            className="group relative w-full flex items-center px-4 py-3.5 text-sm font-medium text-white rounded-xl transition-all duration-400 hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
                            onClick={() => setAccountDropdown(false)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 group-hover:from-purple-600/90 group-hover:via-indigo-600/90 group-hover:to-indigo-700/90 transition-all duration-500 -z-10" />
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-opacity duration-700" />
                            <div className="p-1.5 mr-3 bg-white/20 backdrop-blur-sm rounded-lg shadow-inner border border-white/20 group-hover:bg-white/30 group-hover:scale-105 transition-all duration-300">
                              <FiUserPlus className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-semibold tracking-wide text-white/95 group-hover:text-white transition-all duration-300">
                              Create Account
                            </span>
                            <div className="ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                              <svg className="w-4 h-4 text-white/90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </div>
                          </Link>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </div>
              
              <div className="hidden md:flex items-center space-x-4">
                <Link 
                  to="/get-started" 
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full shadow-lg text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-500/30 font-['Rubik']"
                >
                  Get Started 
                </Link>
              </div>
            
              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <motion.button
                  onClick={toggleMenu}
                  className="relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 border-2 border-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0.9 }}
                  animate={{ 
                    opacity: 1,
                    rotate: isMenuOpen ? 180 : 0
                  }}
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle menu"
                >
                  <motion.span 
                    className="block absolute w-6 h-0.5 bg-indigo-600 rounded-full transition-all duration-300"
                    style={{
                      transform: isMenuOpen 
                        ? 'rotate(45deg) translate(0, 0)' 
                        : 'rotate(0) translate(-6px, -4px)'
                    }}
                  />
                  <motion.span 
                    className="block absolute w-6 h-0.5 bg-indigo-600 rounded-full transition-all duration-300"
                    style={{
                      opacity: isMenuOpen ? 0 : 1,
                      transform: isMenuOpen ? 'scale(0)' : 'scale(1)'
                    }}
                  />
                  <motion.span 
                    className="block absolute w-6 h-0.5 bg-indigo-600 rounded-full transition-all duration-300"
                    style={{
                      transform: isMenuOpen 
                        ? 'rotate(-45deg) translate(0, 0)' 
                        : 'rotate(0) translate(-6px, 4px)'
                    }}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay and content */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
            
            {/* Menu content */}
            <motion.div 
              className="fixed top-0 right-0 h-full w-4/5 max-w-md z-50"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            >
              <motion.div 
                className="h-full bg-white/95 backdrop-blur-md shadow-2xl flex flex-col overflow-y-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.1 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" onClick={toggleMenu}>
                    Launchory
                  </Link>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <FiX className="w-6 h-6 text-gray-600" />
                  </button>
                </div>
                <div className="flex-1 px-6 py-4 space-y-1 overflow-y-auto">
                  <Link
                    to="/"
                    className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200 group"
                    onClick={toggleMenu}
                  >
                    <span className="relative before:absolute before:-left-1 before:top-1/2 before:w-1 before:h-6 before:bg-indigo-600 before:rounded-r before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 group-hover:before:-left-2">
                      Home
                    </span>
                  </Link>
                  <div className="space-y-1">
                    <button
                      onClick={handleServicesMobileClick}
                      className="flex justify-between items-center w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200 group"
                      aria-expanded={servicesDropdown}
                      aria-controls="mobile-services-menu"
                    >
                      <span className="relative before:absolute before:-left-1 before:top-1/2 before:w-1 before:h-6 before:bg-indigo-600 before:rounded-r before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 group-hover:before:-left-2">
                        Services
                      </span>
                      <FiChevronDown 
                        className={`transition-transform duration-300 ${servicesDropdown ? 'transform rotate-180 text-indigo-600' : 'text-gray-400'}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {servicesDropdown && (
                        <motion.div 
                          id="mobile-services-menu"
                          className="pl-6 space-y-1 overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Link
                            to="/services/web-development"
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                            onClick={toggleMenu}
                          >
                            Web Development
                          </Link>
                          <Link
                            to="/services/mobile-apps"
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                            onClick={toggleMenu}
                          >
                            Mobile Apps
                          </Link>
                          <Link
                            to="/services/ui-ux-design"
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                            onClick={toggleMenu}
                          >
                            UI/UX Design
                          </Link>
                          <Link
                            to="/services/digital-marketing"
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors duration-200"
                            onClick={toggleMenu}
                          >
                            Digital Marketing
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <Link
                  to="/about"
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200 group"
                  onClick={toggleMenu}
                >
                  <span className="relative before:absolute before:-left-1 before:top-1/2 before:w-1 before:h-6 before:bg-indigo-600 before:rounded-r before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 group-hover:before:-left-2">
                    About
                  </span>
                </Link>
                <Link
                  to="/portfolio"
                  className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200 group"
                  onClick={toggleMenu}
                >
                  <span className="relative before:absolute before:-left-1 before:top-1/2 before:w-1 before:h-6 before:bg-indigo-600 before:rounded-r before:opacity-0 before:transition-all before:duration-200 group-hover:before:opacity-100 group-hover:before:-left-2">
                    Portfolio
                  </span>
                </Link>
                
                {/* Account Dropdown in Mobile */}
                <div className="pt-4 mt-4 border-t border-gray-100">
                  <button
                    onClick={() => setMobileAccountDropdown(!mobileAccountDropdown)}
                    className="flex justify-between items-center w-full px-4 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200 group"
                    aria-expanded={mobileAccountDropdown}
                    aria-controls="mobile-account-menu"
                  >
                    {!localLoading && user ? (
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full overflow-hidden bg-purple-100 border-2 border-purple-200 flex items-center justify-center mr-3">
                          {user.user_metadata?.avatar_url ? (
                            <img 
                              src={user.user_metadata.avatar_url} 
                              alt="Profile" 
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <span className="text-purple-600 font-bold text-sm">
                              {user.email?.charAt(0).toUpperCase() || 'U'}
                            </span>
                          )}
                        </div>
                        <span>{user.user_metadata?.full_name || user.email?.split('@')[0] || 'Profile'}</span>
                      </div>
                    ) : (
                      <span>Account</span>
                    )}
                    <FiChevronDown className={`transition-transform duration-300 ${mobileAccountDropdown ? 'transform rotate-180 text-indigo-600' : 'text-gray-400'}`} />
                  </button>
                  <AnimatePresence>
                    {mobileAccountDropdown && (
                      <motion.div 
                        id="mobile-account-menu"
                        className="pl-6 space-y-1 overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="pl-5 space-y-1 mt-2 mb-2 bg-gray-50/50 rounded-xl py-2">
                          {user ? (
                            <>
                              <Link
                                to="/profile"
                                className="flex items-center px-5 py-2.5 text-sm text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                                onClick={toggleMenu}
                              >
                                <FiUser className="h-4 w-4 mr-2 text-gray-500" />
                                My Profile
                              </Link>
                              <Link
                                to="/purchases"
                                className="flex items-center px-5 py-2.5 text-sm text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                                onClick={toggleMenu}
                              >
                                <FiShoppingBag className="h-4 w-4 mr-2 text-gray-500" />
                                My Purchases
                              </Link>
                              <Link
                                to="/settings"
                                className="flex items-center px-5 py-2.5 text-sm text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
                                onClick={toggleMenu}
                              >
                                <FiSettings className="h-4 w-4 mr-2 text-gray-500" />
                                Account Settings
                              </Link>
                              <div className="border-t border-gray-100 my-1"></div>
                              <button
                                onClick={() => {
                                  handleSignOut();
                                  toggleMenu();
                                }}
                                className="flex items-center w-full text-left px-5 py-2.5 text-sm text-gray-600 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                              >
                                <FiLogOut className="h-4 w-4 mr-2 text-gray-500" />
                                Sign Out
                              </button>
                            </>
                          ) : (
                            <>
                              <div className="px-2 py-1.5 border-b border-gray-100/20">
                                <Link
                                  to="/login"
                                  className="group relative w-full flex items-center px-4 py-3.5 text-sm font-medium text-gray-700 hover:text-purple-700 rounded-xl transition-all duration-400 hover:shadow-sm hover:-translate-y-0.5 overflow-hidden"
                                  onClick={toggleMenu}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-purple-50/30 via-indigo-50/30 to-white/30 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400/0 via-purple-400/80 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                  <div className="p-1.5 mr-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100/80 group-hover:shadow-md group-hover:border-purple-200/80 group-hover:scale-105 transition-all duration-300">
                                    <div className="relative p-1.5 rounded-lg bg-white/90 group-hover:bg-purple-600 transition-all duration-300">
                                      <FiUser className="h-4 w-4 text-purple-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                  </div>
                                  <span className="font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-800 group-hover:from-purple-700 group-hover:to-indigo-700 transition-all duration-300">
                                    Login
                                  </span>
                                  <div className="ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    <FiArrowRight className="w-4 h-4 text-purple-500 group-hover:text-purple-700 transition-colors duration-300" />
                                  </div>
                                </Link>
                              </div>
                              <div className="px-2 py-1.5">
                                <Link
                                  to="/signup"
                                  className="group relative w-full flex items-center px-4 py-3.5 text-sm font-medium text-white rounded-xl transition-all duration-400 hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
                                  onClick={toggleMenu}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 group-hover:from-purple-600/90 group-hover:via-indigo-600/90 group-hover:to-indigo-700/90 transition-all duration-500 -z-10" />
                                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                  <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 transition-opacity duration-700" />
                                  <div className="p-1.5 mr-3 bg-white/20 backdrop-blur-sm rounded-lg shadow-inner border border-white/20 group-hover:bg-white/30 group-hover:scale-105 transition-all duration-300">
                                    <div className="p-1.5 rounded-lg bg-white/20 group-hover:bg-white/30 transition-all duration-300">
                                      <FiUserPlus className="h-4 w-4 text-white group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                  </div>
                                  <span className="font-semibold tracking-wide text-white/95 group-hover:text-white transition-all duration-300">
                                    Create Account
                                  </span>
                                  <div className="ml-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    <FiArrowUpRight className="w-4 h-4 text-white/90 group-hover:text-white transition-colors duration-300" />
                                  </div>
                                </Link>
                              </div>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>
                
                {/* CTA Section */}
                <div className="px-6 py-4 mt-auto border-t border-gray-100">
                  <Link
                    to="/get-started"
                    className="block w-full px-6 py-3 text-center text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-md hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-0.5"
                    onClick={toggleMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

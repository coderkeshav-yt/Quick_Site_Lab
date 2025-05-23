import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdown(!servicesDropdown);
  };

  return (
    <>
      {/* Floating Navbar */}
      <div className={`fixed w-full z-50 top-3 px-4 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-32'}`}>
        <nav className={`transition-all duration-500 max-w-4xl mx-auto rounded-full ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-white/90 backdrop-blur-sm py-2 shadow-lg'}`}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0">
                  <div className="p-1 transition-all duration-300">
                    <img 
                      src="https://res.cloudinary.com/dlvxjnycr/image/upload/v1747402280/a-logo-design-featuring-the-text-quicksi_CifZevJ7Sammm7AHdhV0Sw_SyfaagIaQPK5czYYfc-VCQ_iwzml0.jpg" 
                      alt="Quick Site Lab Logo" 
                      className="h-10 w-auto rounded-full" 
                    />
                  </div>
                </Link>
              </div>
              
              {/* Desktop menu */}
              <div className="hidden md:flex md:items-center md:space-x-1">
                <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-all duration-200">
                  Home
                </Link>
                <div className="relative group">
                  <button 
                    onClick={toggleServicesDropdown}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-all duration-200"
                  >
                    Services <FiChevronDown className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div className={`${servicesDropdown ? 'block' : 'hidden'} group-hover:block absolute left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl py-2 z-10 transition-all duration-200 border border-gray-100`}>
                    <Link to="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg mx-1">
                      Web Development
                    </Link>
                    <Link to="/services/ui-ux-design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg mx-1">
                      UI/UX Design
                    </Link>
                    <Link to="/services/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg mx-1">
                      Digital Marketing
                    </Link>
                  </div>
                </div>
                <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-all duration-200">
                  About
                </Link>
                <Link to="/portfolio" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-all duration-200">
                  Portfolio
                </Link>
                <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary transition-all duration-200">
                  Contact
                </Link>
              </div>
              
              <div className="hidden md:flex items-center">
                <Link 
                  to="/get-started" 
                  className="ml-4 inline-flex items-center justify-center px-6 py-2.5 rounded-full shadow-lg text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-indigo-500/30 font-['Rubik']"
                >
                  Get Started <span className="ml-1">→</span>
                </Link>
              </div>
            
              {/* Mobile menu button */}
              <div className="flex items-center md:hidden">
                <button
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-full text-gray-800 hover:bg-white/20 focus:outline-none transition-all duration-300"
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <span className="block h-6 w-6 text-primary">
                      <FiX className="stroke-2" aria-hidden="true" />
                    </span>
                  ) : (
                    <span className="block h-6 w-6">
                      <FiMenu className="stroke-2" aria-hidden="true" />
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-24 inset-x-4 z-50">
          <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-2xl overflow-hidden transition-all duration-300 border border-gray-100">
            <div className="pt-4 pb-5 space-y-2 px-6">
              <Link
                to="/"
                className="block px-5 py-3 text-base font-medium text-gray-700 hover:text-primary rounded-xl hover:bg-gray-50 transition-all duration-200"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <div>
                <button
                  onClick={toggleServicesDropdown}
                  className="flex justify-between items-center w-full px-5 py-3 text-base font-medium text-gray-700 hover:text-primary rounded-xl hover:bg-gray-50 transition-all duration-200"
                >
                  <span>Services</span>
                  <FiChevronDown className={`transition-transform duration-300 ${servicesDropdown ? 'transform rotate-180 text-primary' : ''}`} />
                </button>
                {servicesDropdown && (
                  <div className="pl-5 space-y-1 mt-2 mb-2 bg-gray-50/50 rounded-xl py-2">
                    <Link
                      to="/services/web-development"
                      className="block px-5 py-2.5 text-sm text-gray-600 hover:text-primary rounded-lg hover:bg-white"
                      onClick={toggleMenu}
                    >
                      Web Development
                    </Link>
                    <Link
                      to="/services/ui-ux-design"
                      className="block px-5 py-2.5 text-sm text-gray-600 hover:text-primary rounded-lg hover:bg-white"
                      onClick={toggleMenu}
                    >
                      UI/UX Design
                    </Link>
                    <Link
                      to="/services/digital-marketing"
                      className="block px-5 py-2.5 text-sm text-gray-600 hover:text-primary rounded-lg hover:bg-white"
                      onClick={toggleMenu}
                    >
                      Digital Marketing
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/about"
                className="block px-5 py-3 text-base font-medium text-gray-700 hover:text-primary rounded-xl hover:bg-gray-50 transition-all duration-200"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="block px-5 py-3 text-base font-medium text-gray-700 hover:text-primary rounded-xl hover:bg-gray-50 transition-all duration-200"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block px-5 py-3 text-base font-medium text-gray-700 hover:text-primary rounded-xl hover:bg-gray-50 transition-all duration-200"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <Link
                  to="/get-started"
                  className="block px-5 py-3.5 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-md text-center"
                  onClick={toggleMenu}
                >
                  Get Started <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

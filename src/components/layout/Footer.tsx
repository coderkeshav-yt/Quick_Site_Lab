import React from 'react';
import { Link } from 'react-router-dom';
import { FiTwitter, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Cybrida</h3>
            <p className="text-gray-300 mb-4">
              We build beautiful, functional websites and web applications that help businesses grow.
            </p>
            <div className="flex space-x-4">
              <a href="https://x.com/cybrida_" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="h-6 w-6"><FiTwitter /></span>
              </a>
              <a href="https://www.facebook.com/cybridatech" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="h-6 w-6"><FiFacebook /></span>
              </a>
              <a href="https://www.instagram.com/cybrida_/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="h-6 w-6"><FiInstagram /></span>
              </a>
              <a href="https://www.linkedin.com/in/keshav-singh-4757b9369/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="h-6 w-6"><FiLinkedin /></span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web-development" className="text-gray-300 hover:text-white">Web Development</Link>
              </li>
              <li>
                <Link to="/services/app-development" className="text-gray-300 hover:text-white">App Development</Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="text-gray-300 hover:text-white">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-300 hover:text-white">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services/seo" className="text-gray-300 hover:text-white">SEO Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">New Delhi</p>
              <p className="mb-2">India, 110005</p>
              <p className="mb-2">Email: cybridaagency@gmail.com</p>
              <p>Phone: +91 8579956949</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Cybrida. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

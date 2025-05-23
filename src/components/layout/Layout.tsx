import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BackToTop from '../ui/BackToTop';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden max-w-[100vw]">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;

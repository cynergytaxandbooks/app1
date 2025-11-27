import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  navigateTo: (page: Page) => void;
  children: React.ReactNode;
  isMobile?: boolean;
}> = ({ page, currentPage, navigateTo, children, isMobile = false }) => {
  const baseClasses = isMobile 
    ? "block py-2 px-3 text-lg" 
    : "py-2 px-3 transition-colors duration-300";
  const activeClasses = isMobile 
    ? "text-white bg-cynergy-teal rounded"
    : "text-cynergy-teal border-b-2 border-cynergy-teal";
  const inactiveClasses = isMobile 
    ? "text-gray-300 hover:bg-gray-700 hover:text-white rounded"
    : "text-cynergy-blue hover:text-cynergy-teal";

  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        navigateTo(page);
      }}
      className={`${baseClasses} ${currentPage === page ? activeClasses : inactiveClasses}`}
    >
      {children}
    </a>
  );
};


const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About Us' },
    { page: 'services', label: 'Our Services' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-cynergy-gray border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2 text-sm text-gray-600">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-cynergy-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Mon-Fri 09:00-18:00</span>
          </div>
          <div className="flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-cynergy-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <a href="tel:+16122172427" className="hover:text-cynergy-teal">+1-612-217-2427</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
             <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="text-2xl font-bold text-cynergy-blue">
              Cynergy <span className="text-cynergy-teal">Tax &amp; Books</span>
            </a>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4 font-medium">
              {navItems.map(item => (
                <NavLink key={item.page} page={item.page} currentPage={currentPage} navigateTo={(page) => { setIsMenuOpen(false); navigateTo(page); }}>
                  {item.label}
                </NavLink>
              ))}
               <NavLink page={'contact'} currentPage={currentPage} navigateTo={(page) => { setIsMenuOpen(false); navigateTo(page); }}>
                  Contact Us
                </NavLink>
            </div>
             <button
              onClick={() => navigateTo('contact')}
              className="ml-6 px-5 py-2 bg-cynergy-teal text-white font-semibold rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow"
            >
              Contact Us
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-cynergy-blue hover:bg-cynergy-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cynergy-blue">
            {/* FIX: Cast 'contact' to Page type to avoid type inference widening to 'string'. */}
            {[...navItems, { page: 'contact' as Page, label: 'Contact Us' }].map(item => (
                <NavLink key={item.page} page={item.page} currentPage={currentPage} navigateTo={(page) => { setIsMenuOpen(false); navigateTo(page); }} isMobile={true}>
                  {item.label}
                </NavLink>
              ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
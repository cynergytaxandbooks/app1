import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import ServicesPage from './components/TaxServicesPage';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'about':
        return <AboutUsPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactUsPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col font-sans text-cynergy-dark-gray">
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo}/>
    </div>
  );
};

export default App;
import React from 'react';
import { Page } from '../types';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string, ctaText: string, onClick: () => void }> = ({ icon, title, description, ctaText, onClick }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col" onClick={onClick}>
      <div className="inline-block text-cynergy-teal bg-cynergy-gray p-4 rounded-full mx-auto">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold text-cynergy-blue">{title}</h3>
      <p className="mt-2 text-gray-600 flex-grow">{description}</p>
      <div className="mt-4 font-semibold text-cynergy-teal hover:text-cynergy-blue">{ctaText} &rarr;</div>
    </div>
  );
};

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="bg-cover bg-center text-white" 
        style={{backgroundImage: "url('https://source.unsplash.com/random/1600x900?city,business')"}}
      >
        <div className="bg-cynergy-blue bg-opacity-80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              We are ready to help you
            </h1>
            <h2 className="mt-4 text-3xl md:text-6xl font-extrabold leading-tight">
              Tax Preparation & Filing Services
            </h2>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
              Ensure accurate and timely tax filings with our expert offshore tax preparation services, tailored to individuals, businesses, trusts, and non-profits.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => navigateTo('contact')}
                className="px-8 py-3 bg-cynergy-teal text-white font-bold rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Contact Us
              </button>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigateTo('services'); }}
                className="font-semibold text-white hover:text-cynergy-teal transition-colors duration-300"
              >
                Our Services &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-cynergy-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              }
              title="Tax Preparation & Filing Services"
              description="We provide our clients with the taxation expertise and knowledge that they deserve year-round."
              ctaText="Contact Us"
              onClick={() => navigateTo('contact')}
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              }
              title="Bookkeeping & Accounting Services"
              description="We offer a full range of accounting services to keep your finances in order."
              ctaText="Our Services"
              onClick={() => navigateTo('services')}
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              }
              title="CPA Support Services"
              description="We’re here to help you with the many accounting and tax issues that you may encounter."
              ctaText="Learn More"
              onClick={() => navigateTo('services')}
            />
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-cynergy-blue">Our solutions for your business growth</h2>
            <p className="mt-4 text-lg text-gray-600">
              At Cynergy Tax and Books, we deliver tailored taxation and bookkeeping solutions that streamline operations and reduce costs. Our offshore team uses modern tools to ensure fast, accurate reporting and regulatory compliance so you can focus on growing your business.
            </p>
             <p className="mt-4 text-gray-600">
              We build strategies, systems, and structures to help our clients maintain compliance and achieve growth, providing a full range of professional services at a fair price and the individual attention you deserve.
            </p>
            <button
              onClick={() => navigateTo('about')}
              className="mt-8 px-6 py-3 border-2 border-cynergy-teal text-cynergy-teal font-bold rounded-full hover:bg-cynergy-teal hover:text-white transition-all duration-300"
            >
              More About Us
            </button>
          </div>
          <div className="text-center">
            <img src="https://source.unsplash.com/random/500x350?office,team,growth" alt="Professional team focused on business growth" className="rounded-lg shadow-xl mx-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
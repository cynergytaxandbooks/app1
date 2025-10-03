import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Calculator, BookOpen, FileText, Users } from 'lucide-react';

const HomePage = () => {
  const services = [
    {
      icon: <Calculator className="h-12 w-12 text-blue-600" />,
      title: "Tax Preparation & Filing Services",
      description: "Ensure accurate and timely tax filings with our expert tax preparation services, tailored to individuals, businesses, trusts, and non-profits.",
      tagline: "we are ready to help you",
      link: "/services",
      linkText: "contact us"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: "Bookkeeping & Accounting Services",  
      description: "Streamline your financial management with our reliable bookkeeping services, ensuring accurate record-keeping and timely financial reports for your business.",
      tagline: "we are here to support you",
      link: "/services", 
      linkText: "our services"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "CPA Support Services",
      description: "Enhance your CPA practice with our expert support, streamlining tax preparation, data management, and audit assistance to boost efficiency and client satisfaction.",
      tagline: "we have a solid background",
      link: "/about",
      linkText: "learn more"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-blue-600 font-semibold text-lg">Fueling growth, streamlining success.</p>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
                  Our solutions for your <span className="italic text-blue-600">business growth</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Cynergy Tax and Books, we provide tailored Taxation and BookKeeping solutions that support your business growth by streamlining operations and reducing costs. Our expertise in tax preparation, bookkeeping, and accounting allows you to focus on core business activities while we handle the intricacies of your financial needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/services">
                    Our Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHx0YXglMjBwcmVwYXJhdGlvbnxlbnwwfHx8fDE3NTk1MDQwNTZ8MA&ixlib=rb-4.1.0&q=85"
                alt="Professional tax services"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm text-blue-600 font-medium uppercase tracking-wide">
                      {service.tagline}
                    </p>
                    <h3 className="text-xl font-bold text-slate-800">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Button asChild variant="link" className="text-blue-600 hover:text-blue-700 p-0">
                    <Link to={service.link}>
                      {service.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-blue-600 font-semibold">Who we are</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                  Get to know about <span className="italic text-blue-600">our company</span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cynergy Tax and Books is a forward-thinking financial services firm focused on delivering high-quality, affordable, and timely support in taxation, bookkeeping, and accounting to US clients. We cater to the unique needs of individuals, small businesses, corporations, trusts, and non-profit organizations.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/about">
                  About us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxib29ra2VlcGluZ3xlbnwwfHx8fDE3NTk1MDQwNjJ8MA&ixlib=rb-4.1.0&q=85"
                alt="About our company"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
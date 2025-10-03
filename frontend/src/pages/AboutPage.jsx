import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { founder, whyChooseUs } from '../mock/mockData';
import { Shield, Clock, Users, Target, Award, Zap } from 'lucide-react';

const AboutPage = () => {
  const iconMap = {
    0: <Users className="h-8 w-8 text-blue-600" />,
    1: <Target className="h-8 w-8 text-blue-600" />,
    2: <Zap className="h-8 w-8 text-blue-600" />,
    3: <Shield className="h-8 w-8 text-blue-600" />,
    4: <Clock className="h-8 w-8 text-blue-600" />,
    5: <Award className="h-8 w-8 text-blue-600" />
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Success Is Our Mission
          </p>
          <div className="mt-8">
            <p className="text-lg text-blue-600 font-semibold">our solid background in finance</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Get to know about <span className="italic text-blue-600">our company</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At Cynergy Tax and Books, we are driven by a passion for excellence and a commitment to empowering our valued clients with world-class financial and accounting solutions. Founded with the vision to bridge the gap between efficiency and cost-effectiveness, we offer comprehensive support in taxation, bookkeeping, and accounting services to US clients.
                </p>
                <p>
                  We leverage our strategic location to deliver high-quality, affordable, and timely services tailored to meet the unique needs of:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Individuals</li>
                  <li>Small Businesses</li>
                  <li>Corporations</li>
                  <li>CPA Firms</li>
                  <li>Trusts</li>
                  <li>Non-Profit Organizations</li>
                </ul>
                <p>
                  Our team of seasoned professionals brings a wealth of expertise, ensuring that every client receives customized solutions aligned with their goals. At Cynergy Tax and Books, we don't just handle numbers—we build relationships and foster growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxhY2NvdW50aW5nfGVufDB8fHx8MTc1OTUwNDA2N3ww&ixlib=rb-4.1.0&q=85"
                alt="About our company"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Meet our <span className="italic text-blue-600">Founder</span>
            </h2>
            <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
              "A dedicated team of experts empowering your success with precision and care."
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img 
                src={founder.image}
                alt={founder.name}
                className="w-64 h-64 rounded-full mx-auto lg:mx-0 mb-6 object-cover shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{founder.name}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">{founder.title}</p>
                <p className="text-gray-600 font-medium mb-2">{founder.credentials}</p>
                <p className="text-gray-600">{founder.experience}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Areas of Expertise:</h4>
                <ul className="space-y-1">
                  {founder.expertise.map((item, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {founder.bio}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Why Choose <span className="italic text-blue-600">Cynergy</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When you choose Cynergy, you are choosing more than a service provider—you are gaining a partner that you can trust who is dedicated to your success. Here is why we stand out:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    {iconMap[index]}
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Partner with Cynergy Tax and Books</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When you choose Cynergy, you gain more than a service provider—you gain a dedicated partner invested in your success. Let us handle the details so you can focus on what truly matters: achieving your goals and growing your business with confidence.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
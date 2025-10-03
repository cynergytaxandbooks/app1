import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { services, deliveryModel } from '../mock/mockData';
import { CheckCircle, ArrowRight, Clock, Users, Shield, Target, Zap, Award } from 'lucide-react';

const ServicesPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  const benefitIcons = {
    "Cost Efficiency": <Target className="h-6 w-6 text-blue-600" />,
    "Skilled Professionals": <Users className="h-6 w-6 text-blue-600" />,
    "Time Zone Advantage": <Clock className="h-6 w-6 text-blue-600" />,
    "Focus on Core Operations": <Zap className="h-6 w-6 text-blue-600" />,
    "Data Security": <Shield className="h-6 w-6 text-blue-600" />
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At Cynergy Tax and Books, we specialize in providing seamless support for US taxation, bookkeeping, and accounting services. Our goal is to help our clients to streamline their financial operations while reducing costs and ensuring compliance. By leveraging our model, you gain access to skilled professionals, faster turnaround times, and cost-effective solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="tax" className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full mb-12 h-auto">
              <TabsTrigger value="tax" className="text-sm md:text-base py-3">Tax Preparation and Filing Services</TabsTrigger>
              <TabsTrigger value="bookkeeping" className="text-sm md:text-base py-3">BookKeeping</TabsTrigger>
              <TabsTrigger value="accounting" className="text-sm md:text-base py-3">Accounting Service</TabsTrigger>
              <TabsTrigger value="cpa" className="text-sm md:text-base py-3">CPA Support Services</TabsTrigger>
            </TabsList>

            <TabsContent value="tax">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <img 
                    src={services.taxPreparation.image}
                    alt="Tax Preparation Services"
                    className="rounded-2xl shadow-lg w-full h-80 object-cover mb-6"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-800">{services.taxPreparation.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{services.taxPreparation.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Our Services Include:</h4>
                    <ul className="space-y-3">
                      {services.taxPreparation.offerings.map((offering, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Tools We Use:</h4>
                    <ul className="space-y-2">
                      {services.taxPreparation.tools.map((tool, index) => (
                        <li key={index} className="text-gray-600 text-sm leading-relaxed">
                          <strong>{tool.split(':')[0]}:</strong> {tool.split(':')[1]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bookkeeping">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <img 
                    src={services.bookkeeping.image}
                    alt="Bookkeeping Services"
                    className="rounded-2xl shadow-lg w-full h-80 object-cover mb-6"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-800">{services.bookkeeping.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{services.bookkeeping.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">What We Offer:</h4>
                    <ul className="space-y-3">
                      {services.bookkeeping.offerings.map((offering, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 leading-relaxed">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Tools we use:</h4>
                    <p className="text-gray-600 leading-relaxed">{services.bookkeeping.tools[0]}</p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Partner with us to simplify your bookkeeping, streamline operations, and focus on growing your business.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="accounting">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <img 
                    src={services.accounting.image}
                    alt="Accounting Services"
                    className="rounded-2xl shadow-lg w-full h-80 object-cover mb-6"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-800">{services.accounting.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{services.accounting.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">We offer:</h4>
                    <ul className="space-y-3">
                      {services.accounting.offerings.map((offering, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Tools We Use:</h4>
                    <p className="text-gray-600">{services.accounting.tools[0]}</p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Outsourcing accounting tasks to our skilled team helps you save time and resources while maintaining financial accuracy.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cpa">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <img 
                    src={services.cpaServices.image}
                    alt="CPA Services"
                    className="rounded-2xl shadow-lg w-full h-80 object-cover mb-6"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-800">{services.cpaServices.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{services.cpaServices.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-4">Our Services Include:</h4>
                    <ul className="space-y-3">
                      {services.cpaServices.offerings.map((offering, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm leading-relaxed">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Partner with Cynergy Tax and Books to expand your service offerings, reduce costs, and enhance your firm's efficiency.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Delivery Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Delivery Model for <span className="italic text-blue-600">Cynergy Tax and Books</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This delivery model ensures that our clients experience seamless operations, timely results, and the flexibility to scale services as needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {deliveryModel.phases.map((phase, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">{phase.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              Benefits of Our <span className="italic text-blue-600">Delivery Model</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {deliveryModel.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  {benefitIcons[benefit.split(':')[0]]}
                  <div>
                    <h4 className="font-semibold text-slate-800">{benefit.split(':')[0]}</h4>
                    <p className="text-sm text-gray-600">{benefit.split(':')[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Request a <span className="italic text-blue-600">call back</span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-8">
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
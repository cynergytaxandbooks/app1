import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo } from '../mock/mockData';
import { Mail, Phone, MapPin, Clock, ArrowRight, ExternalLink } from 'lucide-react';

const ContactPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    setContactForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            feel free to send us a message now!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Email</h3>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-blue-600 hover:text-blue-700 transition-colors block"
                >
                  {companyInfo.email}
                </a>
              </CardContent>
            </Card>

            {/* US Office */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">US Office</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {companyInfo.offices.us.address}
                  </p>
                  <a 
                    href={`tel:${companyInfo.offices.us.phone}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors block"
                  >
                    Phone: {companyInfo.offices.us.phone}
                  </a>
                  <a 
                    href="#"
                    className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center text-sm"
                  >
                    View on Google Maps <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Indian Office */}
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">Indian Office</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {companyInfo.offices.indian.address}
                  </p>
                  <a 
                    href={`tel:${companyInfo.offices.indian.phone}`}
                    className="text-blue-600 hover:text-blue-700 transition-colors block"
                  >
                    Phone: {companyInfo.offices.indian.phone}
                  </a>
                  <a 
                    href="https://maps.app.goo.gl/s8qEd8mtnTF5sfir9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center text-sm"
                  >
                    View on Google Maps <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours */}
          <div className="text-center mb-16">
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Business Hours</h3>
                <p className="text-gray-600">{companyInfo.hours}</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Send us a <span className="italic text-blue-600">message</span>
              </h2>
              <p className="text-gray-600">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>
            
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input 
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input 
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input 
                        type="tel"
                        name="phone"
                        value={contactForm.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input 
                        type="text"
                        name="subject"
                        value={contactForm.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea 
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us about your needs, questions, or how we can assist you..."
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
                    >
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Visit Our Offices</h2>
            <p className="text-gray-600">We have offices in both the US and India to serve you better.</p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Interactive map will be loaded here</p>
              <p className="text-sm text-gray-500 mt-2">Showing office locations in US and India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
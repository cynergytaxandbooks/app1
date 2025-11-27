import React, { useState } from 'react';

const ContactCard: React.FC<{ icon: React.ReactNode, title: string, children: React.ReactNode }> = ({ icon, title, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center h-full flex flex-col items-center">
      <div className="text-cynergy-teal mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-cynergy-blue mb-2">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  );
};


const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '', subject: 'Tax', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission to a backend
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="bg-cynergy-gray py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-cynergy-blue">Get In Touch</h1>
          <p className="mt-2 text-lg text-gray-600">We're here to help. Reach out to us for a consultation.</p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ContactCard 
            icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
            title="Email"
          >
            <a href="mailto:taxteam@cynergytaxandbooks.com" className="text-cynergy-teal hover:underline">taxteam@cynergytaxandbooks.com</a>
          </ContactCard>

          <ContactCard 
            icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}
            title="Indian office"
          >
            <p>Office 305, Atharva Feryez Plaza, Satara Rd, opp. Shankar Maharaj Math, Sambhagi Nagar, Dhankawadi, Pune, Maharashtra 411043</p>
            <p className="font-semibold mt-2">Phone: +91-942-007-1114</p>
            <a href="#" className="text-cynergy-teal hover:underline mt-1 block">View on Google Maps</a>
          </ContactCard>

          <ContactCard 
            icon={<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}
            title="US office"
          >
            <p>1120 Rosedale lane, Hoffman Estates, IL 60169</p>
            <p className="font-semibold mt-2">Phone: +1-612-217-2427</p>
            <a href="#" className="text-cynergy-teal hover:underline mt-1 block">View on Google Maps</a>
          </ContactCard>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-cynergy-blue mb-6">Send us a Message</h2>
            {submitted ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold text-cynergy-blue">Thank You!</h2>
                <p className="mt-2 text-gray-600">Your message has been sent. We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cynergy-teal focus:border-cynergy-teal" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cynergy-teal focus:border-cynergy-teal" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                    <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cynergy-teal focus:border-cynergy-teal" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cynergy-teal focus:border-cynergy-teal" />
                  </div>
                </div>
                 <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-cynergy-teal focus:border-cynergy-teal">
                    <option>Tax</option>
                    <option>Bookkeeping</option>
                    <option>CPA Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cynergy-teal focus:border-cynergy-teal"></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cynergy-teal hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cynergy-teal transition-colors duration-300">
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
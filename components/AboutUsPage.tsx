import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <section className="bg-cynergy-gray py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-cynergy-blue">Who we are — Get to know about our company</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <p className="mt-4 text-gray-700 text-lg">
                Cynergy Tax and Books is a forward-thinking financial services firm delivering timely, affordable offshore support in taxation, bookkeeping, and accounting for U.S. clients.
              </p>
              <p className="mt-4 text-gray-700">
                Our team of experienced professionals provides a full range of accounting, tax, and consulting services. We are dedicated to providing our clients with professional, personalized services and guidance in a wide range of financial and business needs.
              </p>
            </div>
            <div>
              <img src="https://source.unsplash.com/random/500x400?modern,office" alt="Modern office environment" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section className="py-16 bg-cynergy-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-cynergy-blue">Meet Our Founder</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 items-center max-w-5xl mx-auto">
            <div className="md:col-span-1 text-center">
              <img src="https://source.unsplash.com/random/400x400?portrait,man,professional" alt="A.J. Ayanwale, CPA" className="rounded-full shadow-xl mx-auto w-64 h-64 object-cover" />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-cynergy-blue">A.J. Ayanwale, CPA, Founder & CEO</h3>
              <p className="mt-4 text-gray-700">
                As the founder and CEO of Cynergy Consultancy, A.J. is responsible for running all facets of the business. A.J. has a proven executive management track record and over 20 years of experience driving business growth in the financial services industry.
              </p>
              <p className="mt-4 text-gray-700">
                Prior to starting Cynergy, A.J. was the Vice President of a leading financial services firm. At his prior firm, A.J. played a key role in the company’s business development and growth.
              </p>
              <p className="mt-4 text-gray-700">
                A.J. earned a Bachelor of Science degree in Accounting from the State University of New York at Old Westbury. A.J. holds active CPA licenses in New York and Florida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
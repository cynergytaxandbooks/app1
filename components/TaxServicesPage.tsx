import React from 'react';

const ServiceDetailCard: React.FC<{title: string, items: string[]}> = ({title, items}) => (
  <div className="bg-white p-6 rounded-lg shadow h-full">
      <h3 className="text-xl font-semibold text-cynergy-blue mb-3">{title}</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
  </div>
);


const ServicesPage: React.FC = () => {
  return (
    <div className="bg-cynergy-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-cynergy-blue mb-4">Our Services</h1>
          <p className="text-xl text-center text-gray-600 mb-12">Providing expert solutions to navigate your financial landscape.</p>
          
          <div className="space-y-12">

            {/* Tax Preparation & Filing Services */}
            <div>
              <h2 className="text-3xl font-bold text-cynergy-blue mb-6 border-l-4 border-cynergy-teal pl-4">Tax Preparation & Filing Services</h2>
              <p className="text-gray-700 mb-6">
                We provide our clients with the taxation expertise and knowledge that they deserve year-round. Our tax services are designed to help you navigate the complexities of tax laws while minimizing your tax liability and maximizing your future opportunities.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ServiceDetailCard title="For Individuals" items={[
                  "Personal tax return preparation (1040)",
                  "Tax planning for life events",
                  "Estate and trust tax services",
                  "IRS and state audit representation",
                ]} />
                <ServiceDetailCard title="For Businesses" items={[
                  "Corporate and partnership tax returns",
                  "Sales tax and payroll tax compliance",
                  "International tax services",
                  "Tax strategies for business owners",
                ]} />
              </div>
            </div>

            {/* Bookkeeping & Accounting Services */}
            <div>
              <h2 className="text-3xl font-bold text-cynergy-blue mb-6 border-l-4 border-cynergy-teal pl-4">Bookkeeping & Accounting Services</h2>
              <p className="text-gray-700 mb-6">
                We offer a full range of accounting services to keep your finances in order. Accurate and timely financial information is crucial for any business, and we are here to provide you with the comprehensive support you need to make informed decisions.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                 <ServiceDetailCard title="Core Accounting" items={[
                  "Full-service bookkeeping",
                  "Financial statement preparation",
                  "Accounts payable & receivable management",
                  "Bank and credit card reconciliation",
                ]} />
                <ServiceDetailCard title="Financial Oversight" items={[
                  "Budgeting and forecasting",
                  "Cash flow management",
                  "Controller/CFO services",
                  "Financial analysis and reporting",
                ]} />
              </div>
            </div>

            {/* CPA Support Services */}
            <div>
              <h2 className="text-3xl font-bold text-cynergy-blue mb-6 border-l-4 border-cynergy-teal pl-4">CPA Support Services</h2>
              <p className="text-gray-700 mb-6">
                We’re here to help you with the many accounting and tax issues that you may encounter. We provide support to other CPA firms and legal professionals, leveraging our specialized expertise to assist with complex financial matters.
              </p>
              <div className="grid md:grid-cols-1 gap-6">
                 <ServiceDetailCard title="Professional Support" items={[
                  "Peer review and quality control consulting",
                  "Litigation support and forensic accounting",
                  "Business valuations",
                  "Specialized industry expertise for complex engagements",
                ]} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
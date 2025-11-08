
import React from 'react';

const BookkeepingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-cynergy-blue mb-4">Bookkeeping & Payroll</h1>
          <p className="text-xl text-center text-gray-600 mb-12">The foundation of your financial success is accurate records.</p>
          
          <div className="bg-cynergy-gray p-8 rounded-lg shadow-lg">
            <img src="https://picsum.photos/800/400?random=2" alt="Ledgers and charts" className="rounded-lg mb-8 w-full object-cover h-64" />
            
            <h2 className="text-2xl font-bold text-cynergy-blue mb-4">Streamline Your Financial Operations</h2>
            <p className="text-gray-700 mb-6">
              Accurate bookkeeping is critical for making informed business decisions, maintaining cash flow, and ensuring compliance. Our services take the burden of day-to-day financial management off your shoulders, allowing you to focus on what you do best: running your business.
            </p>

            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-cynergy-blue">Full-Service Bookkeeping</h3>
                <p className="mt-2 text-gray-600">We manage your accounts payable and receivable, perform bank reconciliations, and maintain a pristine general ledger. Get a clear picture of your financial health at any time.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-cynergy-blue">Reliable Payroll Management</h3>
                <p className="mt-2 text-gray-600">Ensure your employees are paid accurately and on time, every time. We handle payroll processing, tax withholdings, and all related filings, mitigating risk and saving you valuable time.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold text-cynergy-blue">Insightful Financial Reports</h3>
                <p className="mt-2 text-gray-600">We don't just give you data; we provide context. Our regular financial reports—including profit and loss statements, balance sheets, and cash flow analysis—help you understand your performance and plan for the future.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookkeepingPage;

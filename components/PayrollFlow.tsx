import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  Calculator, 
  Landmark, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  ChevronRight,
  Info,
  DollarSign,
  CalendarClock
} from 'lucide-react';

const PayrollFlow = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      title: "Registration & Setup",
      subtitle: "Establish Legal Identity",
      icon: <Building2 className="w-6 h-6" />,
      color: "bg-cynergy-blue", // Cynergy Brand Color
      content: [
        {
          heading: "1. Federal EIN",
          details: "Obtain your 9-digit Employer Identification Number (00-0000000) from the IRS.",
          subtext: "Apply online for immediate issuance. Must be your own EIN (not a predecessor's).",
          actionItem: "Apply via IRS Website or Form SS-4"
        },
        {
          heading: "2. State & Local Registration",
          details: "Register in every state where employees reside.",
          points: [
            "State Income Tax (SIT): For withholding state taxes.",
            "State Unemployment (SUI): Register with labor dept (e.g., TWC, EDD). Strict timelines apply.",
            "Local Taxes: City/County specific registrations."
          ]
        },
        {
          heading: "3. Choose Payroll System",
          details: "Select how you will process payments.",
          points: [
            "PSP (Payroll Service Provider): Processes payments, you retain liability.",
            "PEO (Professional Employer Org): Co-employer, shares liability.",
            "Software: Automates calculations/filings, integrates with internal systems."
          ]
        }
      ]
    },
    {
      id: 1,
      title: "Employee Onboarding",
      subtitle: "Data Collection",
      icon: <Users className="w-6 h-6" />,
      color: "bg-cynergy-blue", // Cynergy Brand Color
      content: [
        {
          heading: "1. Verify Eligibility (I-9)",
          details: "Confirm legal right to work in the U.S.",
          subtext: "Review acceptable docs (Passport, Driver's License + SS Card, etc.).",
          actionItem: "Complete USCIS Form I-9"
        },
        {
          heading: "2. Tax Withholding (W-4)",
          details: "Determine tax withholding amounts.",
          points: [
            "Federal: IRS Form W-4. Default to 'Single' if not furnished.",
            "State: Specific forms (e.g., G-4 for GA, HW-4 for HI)."
          ]
        },
        {
          heading: "3. Essential Data",
          details: "Record exact Name and SSN.",
          subtext: "Warning: Do NOT accept ITINs (starting with '9') for employment.",
          critical: true
        }
      ]
    },
    {
      id: 2,
      title: "Running Payroll",
      subtitle: "Calculation Order",
      icon: <Calculator className="w-6 h-6" />,
      color: "bg-cynergy-orange", // Cynergy Brand Color
      content: [
        {
          heading: "Step 1: Gross Pay",
          details: "Hourly Rate × Hours OR Salary ÷ Pay Periods",
          type: "calculation"
        },
        {
          heading: "Step 2: Pre-Tax Deductions",
          details: "Subtract 401(k), Health Insurance, etc.",
          subtext: "Lowers taxable wage base.",
          type: "calculation"
        },
        {
          heading: "Step 3: Calculate Taxes",
          details: "Apply rates to taxable wages:",
          points: [
            "Fed Income Tax: Based on W-4 & Tables",
            "Social Security: 6.2% (Limit: $176,100 for 2025)",
            "Medicare: 1.45% (No limit)",
            "Addtl. Medicare: 0.9% (Over $200k)",
            "State/Local: Varies (e.g., CA SDI 1.2%)"
          ],
          type: "calculation"
        },
        {
          heading: "Step 4: Post-Tax Deductions",
          details: "Subtract Garnishments (Child Support, etc.)",
          subtext: "Limits apply (e.g., 25% of disposable earnings).",
          type: "calculation"
        },
        {
          heading: "Step 5: Net Pay",
          details: "Issue Final Payment via Check or Direct Deposit",
          type: "result"
        }
      ]
    },
    {
      id: 3,
      title: "Depositing Taxes",
      subtitle: "Federal Remittance",
      icon: <Landmark className="w-6 h-6" />,
      color: "bg-cynergy-blue", // Cynergy Brand Color
      content: [
        {
          heading: "Determine Schedule",
          details: "Based on 'Lookback Period' (Previous 4 quarters ending June 30).",
          points: [
            "Monthly Depositor: Liability ≤ $50k. Due 15th of next month.",
            "Semiweekly Depositor: Liability > $50k. Due Wed or Fri based on payday."
          ]
        },
        {
          heading: "The $100k Rule",
          details: "Accumulate $100k+ in a single day?",
          subtext: "Must deposit by the NEXT business day.",
          critical: true
        },
        {
          heading: "FUTA Deposits",
          details: "Employer-only tax (6% on first $7k).",
          subtext: "Deposit quarterly if liability > $500."
        }
      ]
    },
    {
      id: 4,
      title: "Filing Returns",
      subtitle: "Quarterly & Annual",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-cynergy-orange", // Cynergy Brand Color
      content: [
        {
          heading: "Quarterly Filings",
          points: [
            "Form 941: Wages & Federal Taxes. Due end of month after quarter.",
            "State Returns: Wage reports & Unemployment tax (e.g., DE 9)."
          ]
        },
        {
          heading: "Annual Filings",
          points: [
            "Form 940: Annual FUTA liability. Due Jan 31.",
            "W-2 / W-3: Employee wage statements & SSA transmittal. Due Jan 31."
          ]
        }
      ]
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-cynergy-gray font-sans text-cynergy-dark-gray">
      {/* Header */}
      <header className="bg-white border-b border-cynergy-gray p-6 flex items-center justify-between shadow-sm flex-shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-cynergy-blue flex items-center gap-2">
            <DollarSign className="text-cynergy-orange" /> Payroll Process Guide
          </h1>
          <p className="text-gray-600 text-sm mt-1">A step-by-step workflow for compliance and execution</p>
        </div>
        <div className="hidden md:flex text-xs font-medium text-gray-400 bg-cynergy-gray px-3 py-1 rounded-full">
          Reference: 2025 Guidelines
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Sidebar Navigation */}
        <nav className="w-80 bg-white border-r border-cynergy-gray overflow-y-auto hidden md:block">
          <div className="p-4 space-y-2">
            {phases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-3 border ${
                  activePhase === index 
                    ? `border-${phase.color.replace('bg-', '')} ring-1 ring-${phase.color.replace('bg-', '')}/50 bg-cynergy-gray` 
                    : 'border-transparent hover:bg-cynergy-gray'
                }`}
              >
                <div className={`p-2 rounded-lg text-white shadow-sm ${phase.color}`}>
                  {phase.icon}
                </div>
                <div>
                  <div className={`font-bold text-sm ${activePhase === index ? 'text-cynergy-blue' : 'text-gray-600'}`}>
                    Phase {index + 1}
                  </div>
                  <div className="text-xs text-gray-600">{phase.title}</div>
                </div>
                {activePhase === index && (
                  <ChevronRight className="ml-auto w-4 h-4 text-gray-400" />
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* Mobile Nav Header (visible only on small screens) */}
        <div className="md:hidden flex overflow-x-auto p-2 bg-white border-b space-x-2 flex-shrink-0">
           {phases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(index)}
                className={`flex-shrink-0 p-2 rounded-lg ${activePhase === index ? 'bg-cynergy-gray font-bold text-cynergy-blue' : 'text-gray-600'}`}
              >
                Phase {index + 1}
              </button>
            ))}
        </div>

        {/* Content Panel */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-cynergy-gray">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Header Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-cynergy-gray">
              <div className="flex items-center gap-4 mb-2">
                <div className={`p-3 rounded-xl text-white shadow-md ${phases[activePhase].color}`}>
                  {phases[activePhase].icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-cynergy-blue">{phases[activePhase].title}</h2>
                  <p className="text-gray-600">{phases[activePhase].subtitle}</p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {phases[activePhase].content.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white rounded-xl p-6 shadow-sm border border-cynergy-gray transition-all duration-300 hover:shadow-md ${
                    item.type === 'result' ? 'bg-cynergy-orange/10 border-cynergy-orange/20 ring-1 ring-cynergy-orange/30' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {item.critical ? (
                         <Info className="w-5 h-5 text-cynergy-orange" />
                      ) : (
                         <div className="w-5 h-5 rounded-full bg-cynergy-gray text-gray-600 flex items-center justify-center text-xs font-bold">
                           {idx + 1}
                         </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-cynergy-blue text-lg mb-1">{item.heading}</h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">{item.details}</p>
                      
                      {item.points && (
                        <ul className="space-y-2 mb-3">
                          {item.points.map((pt, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-sm text-gray-600 bg-cynergy-gray p-2 rounded-lg">
                              <CheckCircle2 className="w-4 h-4 text-cynergy-orange flex-shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.subtext && (
                        <div className={`text-sm mt-3 p-3 rounded-lg flex gap-2 ${
                          item.critical ? 'bg-cynergy-orange/10 text-cynergy-blue' : 'bg-cynergy-blue/10 text-cynergy-blue'
                        }`}>
                          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          {item.subtext}
                        </div>
                      )}

                      {item.actionItem && (
                        <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 border border-cynergy-gray px-3 py-1 rounded-full">
                          <CalendarClock className="w-3 h-3" />
                          Action: {item.actionItem}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Footer */}
            <div className="flex justify-between pt-8 pb-12">
              <button 
                onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                disabled={activePhase === 0}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  activePhase === 0 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'text-gray-600 hover:bg-white hover:shadow-sm'
                }`}
              >
                Previous Phase
              </button>
              <button 
                onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))}
                disabled={activePhase === phases.length - 1}
                className={`px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                  activePhase === phases.length - 1 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'bg-cynergy-blue text-white hover:bg-opacity-90 shadow-md'
                }`}
              >
                Next Phase <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default PayrollFlow;
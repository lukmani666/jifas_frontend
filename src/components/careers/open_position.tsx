'use client';
import { useState } from "react";

interface Jobposition {
    id: string;
    title: string;
    description: string;
}

export default function OpenPositions() {
  const [expandedPosition, setExpandedPosition] = useState<string>('business-dev');

  const jobPositions: Jobposition[] = [
    {
        id: 'business-dev',
        title: 'Business Development Executive',
        description: 'Square has solutions for businesses of all sizes. Our connected tools are built to scale with future-focused, connected tools. Enhanced, customer-friendly experiences help build deeper data and better customer relationships. And our open platform means you can connect to prebuilt integrations or build out your own with our APIs.'
    },
    {
        id: 'hr-manager',
        title: 'Human Resource Manager',
        description: 'Join our HR team to lead talent acquisition, employee development, and organizational culture initiatives. You\'ll be responsible for implementing HR policies, managing employee relations, and driving strategic HR initiatives that support our company\'s growth and mission.'
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing Manager',
        description: 'Lead our digital marketing efforts across multiple channels including social media, email marketing, content creation, and paid advertising. You\'ll develop and execute comprehensive digital marketing strategies to drive brand awareness, lead generation, and customer engagement.'
    }
  ];

  const togglePosition = (positionId: string) => {
    setExpandedPosition(expandedPosition === positionId ? '' : positionId);
  }

  return (
    <section className="bg-white py-8 px-4 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B4B38] mb-4">
            Open Positions
          </h2>
          <div className="w-full h-px bg-gray-300"></div>
        </div>

        {/* Job Positions */}
        <div className="space-y-0">
          {jobPositions.map((position) => (
            <div key={position.id} className="border-b border-gray-300 last:border-b-0">
              {/* Position Header */}
              <div 
                className="flex items-center justify-between py-6 sm:py-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                onClick={() => togglePosition(position.id)}
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 pr-4">
                  {position.title}
                </h3>
                <button className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  {expandedPosition === position.id ? (
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg 
                      className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Expanded Content */}
              {expandedPosition === position.id && (
                <div className="pb-6 sm:pb-8 pr-8 sm:pr-12">
                  <div className="mb-6 sm:mb-8">
                    <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                      {position.description}
                    </p>
                  </div>
                  
                  {/* Apply Button */}
                  <button className="bg-[#2B4B38] cursor-pointer hover:bg-green-800 text-white font-medium px-6 py-3 sm:px-8 sm:py-4 rounded-md transition-colors duration-200 text-sm sm:text-base">
                    Apply for this position
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
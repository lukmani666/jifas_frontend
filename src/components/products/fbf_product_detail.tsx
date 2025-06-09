import React, { useState } from 'react';
import Image from 'next/image';

export default function FBFProductDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const productImages = [
    {
      id: 1,
      alt: "Granulated Soya Protein Package Front"
    },
    {
      id: 2,
      alt: "Granulated Soya Protein Package Back"
    }
  ];

  const uses = [
    "School feeding programmes",
    "Humanitarian food aid", 
    "Nutraceutical applications"
  ];

  const benefits = [
    "Custom nutrition profiles",
    "Ideal for humanitarian aid ",
    "Supports malnutrition intervention"
  ];

  return (
    <section className="bg-white py-8 px-4 md:px-16 lg:px-20 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 items-start lg:items-start">
          
          {/* Left Column - Product Information */}
          <div className="">
            {/* Product Title */}
            <h1 className="text-2xl sm:text-2xl lg:text-2xl xl:text-4xl font-bold text-[#2E2E2E] mb-4 sm:mb-6">
              Fortified Blended Foods (FBF)
            </h1>
            
            {/* Product Description */}
            <p className="text-[#2C2C2C] text-sm sm:text-base lg:text-base leading-relaxed mb-8 sm:mb-10 lg:mb-12">
                Wide range of specialised and custom formulated food products enriched with 
                essential vitamins and minerals for food security, targeted nutrition, 
                and combat malnutrition, aid food security.
            </p>

            {/* Uses and Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 lg:mb-12">
              
              {/* Uses Section */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2C2C2C] mb-4 sm:mb-6">
                  Uses
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {uses.map((use, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#2C2C2C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-[#2C2C2C] text-sm sm:text-base leading-relaxed">
                        {use}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits Section */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2C2C2C] mb-4 sm:mb-6">
                  Benefits
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#2C2C2C] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-[#2C2C2C] text-sm sm:text-base leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Make Enquiries Button */}
            <button className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-[#2B4B38] text-[#2B4B38] font-medium rounded-md hover:bg-gray-50 hover:border-gray-500 transition-colors duration-200 text-sm sm:text-base cursor-pointer">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Make Enquiries
            </button>
          </div>

          {/* Right Column - Product Images */}
          <div className="">
            <div className="relative">
              {/* Main Product Image Container */}
              <Image
                src="/fortified_food.png"
                alt="GRANULATED SOYA PROTEIN"
                width={1600}
                height={1600}
                className="object-contain rounded-lg"
              />
                              
              

              {/* Image Indicators */}
              <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                      index === currentImageIndex ? 'bg-gray-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
                {/* Additional indicator dots to match the original */}
                {[2,3,4,5,6].map((index) => (
                  <div key={index} className="w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import ProductCards from '../product/ProductCard';

export default function OurProducts() {
  const benefits = [
    "Our Soya Processing Plant Is Built To Meet The Add/Nitric Demands While Providing The Nutritional Integrity Of Soy Foods. We Deliver The Value, And More Nutritious Soy Products.",
    "A HACCP certified and approved plant",
    "Environmentally safe and eco-friendly",
    "Can generate or commercial be isolated, safe and products",
    "Committed to quality products for our clients",
    "A high-efficiency, organic processing method"
  ];

  return (
    <section className="bg-white py-8 px-4 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252C32]">
            Our Products
          </h2>
        </div>

        <ProductCards />

        {/* Benefits Section */}
        <div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#252C32] mb-4 sm:mb-6">
            Benefits Of Our Soya Processing
          </h3>
          
          <div className="space-y-3 sm:space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                {index === 0 ? (
                  // First item without bullet point (main description)
                  <p className="text-sm sm:text-base text-[#000000] leading-relaxed">
                    {benefit}
                  </p>
                ) : (
                  // Bullet points for other items
                  <>
                    <div className="w-2 h-2 bg-[#252C32] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-sm sm:text-base text-[#000000] leading-relaxed">
                      {benefit}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
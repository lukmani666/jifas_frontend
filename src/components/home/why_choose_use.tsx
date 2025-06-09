import Image from 'next/image';
import { FaIndustry, FaHome, FaShoppingCart, FaUsers, FaChartLine } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: <FaIndustry className="w-5 h-5 text-[#2B4B38]" />,
      title: "Capacity Building",
      description: "Installed soya beans processing capacity of 20,000 tonnes per year with room for expansion and sustained quality"
    },
    {
      id: 2,
      icon: <FaHome className="w-5 h-5 text-[#2B4B38]" />,
      title: "Produce Availability",
      description: "Organic, non carcinogenic products always available, and processed to international standards"
    },
    {
      id: 3,
      icon: <FaShoppingCart className="w-5 h-5 text-[#2B4B38]" />,
      title: "Indigenous Market",
      description: "Saving our country’s scarce foreign exchange by encouraging local production with local materials"
    },
    {
      id: 4,
      icon: <FaUsers className="w-5 h-5 text-[#2B4B38]" />,
      title: "Customer Relationship",
      description: "Responsive to our clients needs at all times, efficiently meeting set standards and specifications of clients"
    },
    {
      id: 5,
      icon: <FaChartLine className="w-5 h-5 text-[#2B4B38]" />,
      title: "High Yield",
      description: "Our range of products provide good returns on investment with on time full order deliveries"
    }
  ];

  return (
    <section className="py-16 px-4 md:px-16 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Why Choose Us?
          </h2>
          <div className="w-20 h-0.5 bg-[#2B4B38] mx-auto"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/farm.jpg"
                alt="Agricultural field with planted crops in rows"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-[13.71px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
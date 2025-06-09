import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export default function PartnersTestimonial() {
  return (
    <section className="bg-[#EAEDEB] py-12 px-4 sm:py-16 lg:py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] mb-12 mb:mb-16 lg:mb-20">
          What our Partners Say
        </h2>
        
        {/* Testimonial Card */}
        <div className="p-6 sm:p-8 lg:p-12 relative max-w-3xl mx-auto">
          {/* Opening Quote */}
          <div className="absolute -top-4 left-6 sm:left-8 lg:left-12">
            <FaQuoteLeft className="text-1xl md:text-3xl lg:text-3xl text-[#2B4B38] font-serif leading-none" />
          </div>
          
          {/* Closing Quote */}
          <div className="absolute -top-4 right-6 sm:right-8 lg:right-12">
            <FaQuoteRight className="text-1xl md:text-3xl lg:text-3xl text-[#2B4B38] font-serif leading-none" />
          </div>
          
          {/* Testimonial Text */}
          <div className="pt-1 pb-12 sm:pt-1 sm:pb-16 lg:pt-1 lg:pb-20">
            <p className="text-[#2B4B38] text-base leading-relaxed px-4 sm:px-8 lg:px-12">
              Office ipsum you must be muted. Only strategies manager every make. 
              Effects can message that&apos;s cross-pollination activities big. 
              Resources boys businesses closest downloaded businesses win let build. 
              Parking knowledge goto for globalize stronger. Pain scraps price they 
              believe ballpark loss job overflow.
            </p>
          </div>
          
          {/* Company Logo and Name */}
          <div className="flex items-center justify-center space-x-3 sm:space-x-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#2B4B38] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm lg:text-base">chi</span>
              </div>
              <div className="ml-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Company Name */}
            <div className="text-left">
              <div className="text-[#2B4B38] font-bold text-sm sm:text-base lg:text-lg">
                FARMS LTD
              </div>
              <div className="text-[#2B4B38] text-xs sm:text-sm lg:text-base">
                Chi Farms Ltd
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
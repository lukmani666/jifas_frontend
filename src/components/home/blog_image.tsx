import Image from 'next/image';
import { MdEmail } from 'react-icons/md';

const BlogSuggestion = () => {
  const blogImages = [
    {
      id: 1,
      src: '/computer.jpg',
      alt: 'Laptop with coffee cup on desk workspace'
    },
    {
      id: 2,
      src: '/carrot.jpg',
      alt: 'Fresh carrots and vegetables from farm'
    },
    {
      id: 3,
      src: '/woman_farmer.jpg',
      alt: 'Farmer working in agricultural field'
    },
    {
      id: 4,
      src: '/plant.jpg',
      alt: 'Wheat stalks in golden field landscape'
    }
  ];

  return (
    <section className="py-16 px-4 md:px-16 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#000000] mb-6 leading-tight">
            Help us tailor our blog to serve<br className="hidden sm:block" />
            you better
          </h2>
          <p className="text-[#2B4B38] max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
            It is a long established fact that a reader will be distracted by the readable 
            content of a page when looking at its layout.
          </p>
          
          {/* Drop a Suggestion Button */}
          <a href="mailto:info@jifasltd.com" className="inline-flex cursor-pointer items-center gap-3 bg-[#2B4B38] hover:bg-[#2d4d3a] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
            <MdEmail className="w-5 h-5" />
            Drop a Suggestion
          </a >
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogImages.map((image) => (
            <div 
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSuggestion;
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { BiArrowToRight } from 'react-icons/bi';

const Gallery = () => {

  const images = [
    {
      id: 1,
      image: '/farmer.jpg',
      alt: 'Farmer working in rice field with traditional hat',
    },
    {
      id: 2,
      image: '/grain_plant.jpg',
      alt: 'Close-up of golden rice grains ready for harvest',
    },
    {
      id: 3,
      image: '/tractor.jpg',
      alt: 'Red harvesting machine working in agricultural field',
    },
    {
      id: 4,
      image: '/grain.jpg',
      alt: 'Wheat grains and stalks on white background',
    }
  ];


  return (
    <section className="py-16 px-4 md:px-16 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">
            Gallery
          </h2>
          <div className="w-20 h-0.5 bg-[#2B4B38] mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-[300px] bg-gray-100">
                
                <Image
                  src={image.image}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              
              </div>
            </div>
          ))}
        </div>

        {/* See All Images Button */}
        <div className="text-center">
          <Link href="/gallary">
            <button
              className="bg-transparent text-[#2B4B38] cursor-pointer py-3 px-8 rounded-lg transition-shadow duration-200 flex items-center gap-2 mx-auto font-medium"
              aria-label="View all gallery images"
            >
              SEE ALL IMAGES
              <BiArrowToRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

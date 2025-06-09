import Image from 'next/image';
export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: "/farmer.jpg",
      alt: "Farmer working in rice field with traditional hat"
    },
    {
      id: 2,
      src: "/grain_plant.jpg",
      alt: "Rice grains close-up"
    },
    {
      id: 3,
      src: "/carrot.jpg",
      alt: "Fresh carrots and vegetables from farm"
    },
    {
      id: 4,
      src: "/woman_farmer.jpg",
      alt: "Farmer working in agricultural field"
    },
    {
      id: 5,
      src: "/grain.jpg",
      alt: "Wheat grains texture"
    },
    {
      id: 6,
      src: "/tractor.jpg",
      alt: "Agricultural machinery in action"
    }
  ];

  return (
    <section className="bg-white py-8 px-4 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Gallery
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl">
            Office ipsum you must be muted. Only strategies manager every make. Effects can message that's cross-pollination 
            activities big. Resources boys businesses closest downloaded businesses win let build.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform"
            >
              <div className="aspect-[4/3] relative">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                
                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div> */}
                
                {/* Optional: Add a subtle gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
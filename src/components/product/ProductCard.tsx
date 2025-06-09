import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCards() {
    
  function toSlug(text: string): string {
    return text
      .toLowerCase()
      .replace(/\([^)]*\)/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }
  const products = [
    {
      id: 1,
      name: "Granulated Soya Protein",
      category: "Soya Product",
      image: "/soya_protein.png", // added extension for consistency
    },
    {
      id: 2,
      name: "Soya Flour",
      category: "Soya Product",
      image: "/soya_flour.png",
    },
    {
      id: 3,
      name: "Soya Oil",
      category: "Soya Product",
      image: "/keg_oil.png",
    },
    {
      id: 4,
      name: "Fortified Blended Foods",
      category: "Soya Product",
      image: "/fortified_food.png",
    },
    {
      id: 5,
      name: "Full Fat Soya",
      category: "Soya Product",
      image: "/full_fat_soya.png",
    }
  ];

  return (
    <section className="bg-white py-8 px-4 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          
        </div> */}
        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center border border-[#2E2E2E] rounded-lg p-4">
                {/* Image */}
                <div className="relative mb-6">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain rounded-lg"
                    priority={product.id <= 2}
                />
                </div>

                {/* Text Content */}
                <div className="bg-transparent p-4 w-full text-start">
                    <h3 className="text-md font-bold text-[#252C32] mb-2">{product.name}</h3>
                    <Link href={`/product/${toSlug(product.name)}`} className='underline text-[#2B4B38]'>View product</Link>
                </div>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}

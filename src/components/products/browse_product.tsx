import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  image: string;
  slug: string;
}

const BrowseProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Fortified Blended Foods",
      image: "/fortified_food.png",
      slug: "fortified-blended-foods-fbf"
    },
    {
      id: 2,
      name: "Full Fat Soya",
      image: "/full_fat_soya.png",
      slug: "full-fat-soya"
    },
    {
      id: 3,
      name: "Full Fat Soya",
      image: "/full_fat_soya2.png",
      slug: "full-fat-soya"
    }
  ];

  return (
    <section className="py-12 px-4 md:px-16 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-start mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-[#2E2E2E] mb-2">
            Browse Through Our Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-transparent border border-[#2E2E2E] rounded-lg transition-shadow duration-300 p-6 sm:p-8 text-center group"
            >
              {/* Product Image */}
              <div className="mb-6 sm:mb-8 flex justify-center items-center h-48 sm:h-56 lg:h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Name */}
              <h3 className="text-lg sm:text-lg font-semibold text-[#2E2E2E] mb-2 sm:mb-2 text-start">
                {product.name}
              </h3>

              {/* View Product Link */}
              <div className='text-start'>

                <Link 
                    href={`/product/${product.slug}`}
                    className="inline-block text-sm sm:text-base hover:text-[#213a2b] font-medium border-b border-[#2B4B38] hover:border-[#213a2b] text-[#2B4B38] transition-colors duration-200"
                >
                    View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseProducts;
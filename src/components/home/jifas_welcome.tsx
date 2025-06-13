import { BiArrowToRight } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

export default function JifasWelcome() {

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
      name: "FULL FAT SOYA",
      description: "Nutritious, protein-rich soya meal retaining natural oils",
      image: "/fortified_food.png",
    },
    {
      id: 2,
      name: "GRANULATED SOYA PROTEIN",
      description: "High-protein, meat-like texture made from defatted soya",
      image: "/soya_protein.png",
    },
    {
      id: 3,
      name: "SOYA OIL",
      description: "High-quality crude organic soya bean oil with no chemicals",
      image: "/keg_oil.png",
    },
    {
      id: 4,
      name: "SOYA FLOUR",
      description: "Defatted and finely milled soya beans, rich in protein and low in fat",
      image: "/soya_flour.png",
    },
  ];

  return (
    <section className="min-h-screen bg-[#EAEDEB] py-12 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Welcome Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#000000] mb-6">
            Welcome to JIFAS
          </h1>
          <p className="text-[#393939] max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Just Integrated Farms and Allied Services (JIFAS) Limited was incorporated in 2010, 
            located in Ibadan, Oyo State. We have effectively served and supported an array of 
            customers across the agriculture value chain, providing organic, healthy, and high quality products.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center text-center h-full">
              {/* Image */}
              <div className="relative mb-6">
                <Image
                    src={product.image}
                    alt={product.name}
                    width={1600}
                    height={1600}
                    className="object-contain rounded-lg"
                    priority={product.id <= 2}
                />
              </div>

              {/* Text Content */}
              <div className="bg-transparent p-4 w-full flex-grow">
                <h3 className="text-md font-bold text-[#2B4B38] mb-2">{product.name}</h3>
                <p className="text-[#2B4B38] text-sm mb-4 leading-relaxed">
                  {product.description}
                </p>
                <Link href={`/product/${toSlug(product.name)}`}>
                  <button className="w-full bg-transparent border border-[#2B4B38] text-[#2B4B38] 
                      py-2 px-4 rounded-lg hover:bg-[#2B4B38] hover:text-white transition duration-200 
                      flex items-center justify-center gap-2 text-sm font-medium cursor-pointer"
                  >
                    
                      LEARN
                    <BiArrowToRight className="w-4 h-4" />
                  </button>
                </Link>
                
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link href="/product">
          
            <button className="bg-transparent text-[#2B4B38] cursor-pointer py-3 px-8 
              rounded-lg transition-shadow duration-200 flex items-center gap-2 mx-auto font-medium">
              SEE ALL PRODUCTS
              <BiArrowToRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

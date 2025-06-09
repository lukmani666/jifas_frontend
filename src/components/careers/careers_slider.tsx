'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    {
    title: 'BUILD YOUR CAREER WITH US',
    description:
      "Office ipsum you must be muted. Only strategies manager every make. Effects can message that's cross-pollination activities big. Resources boys businesses closest downloaded businesses win let build. Parking knowledge goto for globalize stronger. Pain scraps price they believe ballpark loss job overflow.",
    image: '/farm_tractor.jpg',
    },
    {
        title: 'BUILD YOUR CAREER WITH US',
        description:
            "Office ipsum you must be muted. Only strategies manager every make. Effects can message that's cross-pollination activities big. Resources boys businesses closest downloaded businesses win let build. Parking knowledge goto for globalize stronger. Pain scraps price they believe ballpark loss job overflow.",
        image: '/slide2.jpg',
    },
    {
        title: 'BUILD YOUR CAREER WITH US',
        description:
            "Office ipsum you must be muted. Only strategies manager every make. Effects can message that's cross-pollination activities big. Resources boys businesses closest downloaded businesses win let build. Parking knowledge goto for globalize stronger. Pain scraps price they believe ballpark loss job overflow.",
        image: '/slide2 (4).jpg',
    },
    {
        title: 'BUILD YOUR CAREER WITH US',
        description:
            "Office ipsum you must be muted. Only strategies manager every make. Effects can message that's cross-pollination activities big. Resources boys businesses closest downloaded businesses win let build. Parking knowledge goto for globalize stronger. Pain scraps price they believe ballpark loss job overflow.",
        image: '/slide2 (3).jpg',
    },
    {
        title: 'BUILD YOUR CAREER WITH US',
        description:
            "Office ipsum you must be muted. Only strategies manager every make. Effects can message that's cross-pollination activities big. Resources boys businesses closest downloaded businesses win let build. Parking knowledge goto for globalize stronger. Pain scraps price they believe ballpark loss job overflow.",
        image: '/slide2 (1).png',
    },
    {
        title: 'BUILD YOUR CAREER WITH US',
        description:
            "Office ipsum you must be muted. Only strategies manager every make. Effects can message that's cross-pollination activities big. Resources boys businesses closest downloaded businesses win let build. Parking knowledge goto for globalize stronger. Pain scraps price they believe ballpark loss job overflow.",
        image: '/slide2 (2).jpg',
    },
]
export default function CareerSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval)
    }, []);

    const { title, description, image } = slides[currentSlide];

    return (
        <section className="relative w-full h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-opacity duration-1000"
                priority
            />
            <div className="absolute inset-0 sm:bg-transparen bg-black/40" />

            {/* Text Content */}
            <div className="absolute inset-0 md:bg-[#2B4B38]/80 lg:bg-[#2B4B38]/80 rounded-2xl flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 text-white text-center md:m-10 lg:m-20">
                <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl p-4 sm:p-6 rounded-lg overflow-y-auto md:overflow-y-visible max-h-[fit-content] space-y-4 sm:space-y-6">
                    <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
                    {title}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-gray-100">
                    {description}
                    </p>
                    <div className="flex justify-center">
                    <button className="bg-white cursor-pointer text-[#2B4B38] font-semibold px-6 py-2 sm:py-3 rounded shadow-md hover:bg-gray-200 transition-all text-sm sm:text-base sm:w-auto">
                        APPLY NOW
                    </button>
                    </div>
                </div>
            </div>


            {/* Dots Navigation */}
            <div className="absolute md:mt-0 bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <span
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                    />
                ))}
            </div>
        </section>
    );
}
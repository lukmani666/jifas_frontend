'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    {
    title: 'Just Integrated Farms & Allied Services',
    description:
      'Agro allied processors who specialise in procurement, and processing of grains such as sorghum, soya beans, and maize',
    image: '/slide1.jpg',
    },
    {
        title: 'Soya Beans Processors',
        description:
        'Utilising innovative technology to organically process soya beans into Full Fat Soya, Granulated Soya Protein (GSP), Soya Oil, Soya Flour, and more',
        image: '/slide2.jpg',
    },
    {
        title: 'Acclaimed Quality Products',
        description:
        'High standards and strict internal compliance provide the best quality products locally and internationally',
        image: '/slide2 (4).jpg',
    },
    {
        title: 'Increased Yield, Lower Costs',
        description:
        'Improve your yield, and returns on investment using organic soya products such as Granulated Soya Protein (GSP), and Soya Flour',
        image: '/slide2 (3).jpg',
    },
    {
        title: 'Customer Oriented',
        description:
        'We are committed to building and maintaining healthy long term relationships through sustained expertise, integrity, and innovation',
        image: '/slide2 (1).png',
    },
    {
        title: 'Healthy Work Culture',
        description:
        'A close knit work culture that is friendly, helpful, and respectful. Creating an open environment for learning and development',
        image: '/slide2 (2).jpg',
    },
]
export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval)
    }, []);

    const { title, description, image } = slides[currentSlide];

    return (
        <section className="relative w-full h-[600px] sm:h-[600px] md:h-[430px] lg:h-[530px] overflow-hidden">
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-opacity duration-1000"
                priority
            />

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-[#2B4B38]/80 flex items-center justify-center m-20 px-4 sm:px-6 md:px-8 text-white text-center">
                <div className="max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">{title}</h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl">{description}</p>
                </div>
            </div> */}
            <div className="absolute inset-0 bg-black/40 sm:bg-transparent" />
            <div className="absolute inset-0 md:bg-[#2B4B38]/80 lg:bg-[#2B4B38]/80 flex items-center justify-center px-4 sm:px-6 md:px-8 text-white text-center md:m-10 lg:m-20">
                <div className="max-w-4xl">
                    <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 leading-snug">
                    {title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    {description}
                    </p>
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
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
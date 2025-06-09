// import Image from "next/image";

import BlogSuggestion from "@/components/home/blog_image";
import Gallery from "@/components/home/gallary";
import HeroSlider from "@/components/home/hero_slider";
import JifasWelcome from "@/components/home/jifas_welcome";
import PartnersTestimonial from "@/components/home/partners_testimonial";
import WhyChooseUs from "@/components/home/why_choose_use";

export default function HomePage() {

    return (
        <>
            <HeroSlider />
            <JifasWelcome />
            <WhyChooseUs />
            <Gallery />
            <BlogSuggestion />
            <PartnersTestimonial />
        </>
    )
}

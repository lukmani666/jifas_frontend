'use client';
import { usePathname } from 'next/navigation';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import CareerFooter from '../careers/career_footer';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/careers") {
    return <CareerFooter />;
  }
  return (
    <footer className="bg-[#f3f5f3] text-[#1d3b29] px-4 md:px-20 lg:px-45 pt-16 pb-8">
      {/* Newsletter */}
      <div className="bg-[#2b4c3b] text-white rounded-md p-8 md:px-20 py-12 mb-30 relative overflow-hidden">
        <h2 className="text-2xl text-center md:text-4xl font-semibold mb-10">Subscribe to our Newsletter</h2>
        <form className="flex flex-col md:flex-col lg:flex-row gap-4">
          <input
            type="text"
            placeholder="First name"
            className="p-3 rounded-md border border-white 
                focus:outline-none focus:ring-1 focus:ring-[#2B4B38] text-white flex-1"
          />
          <input
            type="email"
            placeholder="Email address"
            className="p-3 rounded-md border border-white 
                focus:outline-none focus:ring-1 focus:ring-[#2B4B38] text-white flex-1"
          />
          <button
            type="submit"
            className="bg-white text-[#2b4c3b] px-6 py-3 rounded-md font-semibold hover:bg-gray-200 cursor-pointer"
          >
            Subscribe Now
          </button>
        </form>
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full border-4 border-white opacity-20 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full border-4 border-white opacity-20 translate-x-1/2 translate-y-1/2" />
      </div>

      {/* Links & Social */}
      <div className="flex flex-col items-center md:flex-row md:justify-between mb-8">
        {/* Social icons */}
        <div className="flex gap-4 mb-6 md:mb-0">
          <FaTwitter className="w-5 h-5 cursor-pointer hover:text-[#2b4c3b]" />
          <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-[#2b4c3b]" />
          <FaInstagram className="w-5 h-5 cursor-pointer hover:text-[#2b4c3b]" />
          {/* <FaGithub className="w-5 h-5 cursor-pointer hover:text-[#2b4c3b]" /> */}
        </div>

        {/* Navigation */}
        <div className="flex gap-12 font-medium text-sm">
          <a href="#" className="hover:underline">BLOG</a>
          <a href="#" className="hover:underline">CAREERS</a>
          <a href="#" className="hover:underline">ABOUT US</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-600 border-t pt-4">
        © Copyright {new Date().getFullYear()}, All Rights Reserved by JIFAS
      </div>
    </footer>
  );
}

'use client'
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

export default function Navbar() {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const dropdownRef = useRef<HTMLLIElement>(null);
    const pathname = usePathname();

    const products = [
        "Granulated Soya Protein (GSP)",
        "Soya Oil",
        "Soya Flour",
        "Fortified Blended Foods (FBF)",
        "Full Fat Soya"
    ];

    // Check if link is active
    const isActiveLink = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    function toSlug(text: string): string {
        return text
            .toLowerCase()
            .replace(/\([^)]*\)/g, '')
            .trim()
            .replace(/\s+/g, '-');
    }

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsMobileDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`w-full z-50 top-0 transition-all duration-300 ${isSticky ? "fixed bg-white shadow-md" : "sticky bg-white"}`}>
            <nav className="px-4 md:px-10 lg:px-10 py-2 flex items-center justify-between">
                {/* CHANGE 1: Mobile/Tablet Layout - Hamburger Menu (left side on mobile/tablet only) */}
                <div className="flex items-center lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mr-3">
                        {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>

                {/* CHANGE 2: Logo - centered on mobile/tablet, left-aligned on desktop */}
                <Link href="/" className="flex items-center space-x-2 lg:flex-initial flex-1 justify-start">
                    <Image src="/jifas_logo.png" alt="Jifas Logo" width={50} height={50} />
                    <span className="text-[#2B4B38] font-medium text-sm leading-tight hidden sm:block lg:block">
                        Just Integrated Farms <br /> & Allied Services Ltd.
                    </span>
                </Link>

                {/* Desktop Menu - with active states */}
                <ul className="hidden lg:flex space-x-6 text-[#2B4B38] font-medium items-center">
                    <li>
                        <Link 
                            href="/" 
                            className={`relative pb-1 transition-colors duration-200 ${
                                isActiveLink('/') 
                                    ? 'text-[#2B4B38] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2B4B38]' 
                                    : 'hover:text-[#2B4B38]/80'
                            }`}
                        >
                            Home
                        </Link>
                    </li>

                    <li className="relative group" ref={dropdownRef} onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}>
                        <button className={`flex items-center gap-1 cursor-pointer relative pb-1 transition-colors duration-200 ${
                            isActiveLink('/product') 
                                ? 'text-[#2B4B38] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2B4B38]' 
                                : 'hover:text-[#2B4B38]/80'
                        }`}>
                            Products
                            <FiChevronDown className={`transition-transform duration-300 ${isMobileDropdownOpen ? "rotate-180" : "group-hover:rotate-180"}`} />
                        </button>
                        <ul className={`absolute top-6 left-0 bg-white text-[#2B4B38] border rounded shadow-md py-2 w-80 z-50 ${isMobileDropdownOpen ? "block" : "hidden"} group-hover:block`}>
                            <li className="px-4 py-2 hover:bg-gray-100"><Link href="/product">Our products</Link></li>
                            {products.map((product) => (
                                <li key={product} className="px-4 py-2 hover:bg-gray-100">
                                    <Link href={`/product/${toSlug(product)}`}>
                                        {product}
                                    </Link>
                                </li>
                            ))}
                            
                        </ul>
                    </li>

                    <li>
                        <Link 
                            href="/careers" 
                            className={`relative pb-1 transition-colors duration-200 ${
                                isActiveLink('/careers') 
                                    ? 'text-[#2B4B38] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2B4B38]' 
                                    : 'hover:text-[#2B4B38]/80'
                            }`}
                        >
                            Careers
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/gallary" 
                            className={`relative pb-1 transition-colors duration-200 ${
                                isActiveLink('/gallary') 
                                    ? 'text-[#2B4B38] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2B4B38]' 
                                    : 'hover:text-[#2B4B38]/80'
                            }`}
                        >
                            Gallary
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/contact" 
                            className={`relative pb-1 transition-colors duration-200 ${
                                isActiveLink('/contact') 
                                    ? 'text-[#2B4B38] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#2B4B38]' 
                                    : 'hover:text-[#2B4B38]/80'
                            }`}
                        >
                            Contact
                        </Link>
                    </li>

                    {/* Search and Profile on desktop */}
                    <li className="relative hidden lg:block">
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#2B4B38] text-[#2B4B38]"
                        />
                        <FaSearch className="absolute left-3 top-2.5 text-gray-500 text-sm" />
                    </li>
                    <li className="hidden lg:block">
                        <Image src="/user_icon.png" alt="Profile" width={36} height={36} className="rounded-full cursor-pointer" />
                    </li>
                </ul>

                {/* CHANGE 3: User Profile Icon - right side on mobile/tablet only */}
                <div className="lg:hidden">
                    <Image
                        src="/user_icon.png"
                        alt="Profile"
                        width={36}
                        height={36}
                        className="rounded-full cursor-pointer"
                    />
                </div>
            </nav>

            {/* CHANGE 4: Mobile Menu - moved search to top, removed duplicate profile icon, added active states */}
            {isMenuOpen && (
                <div className="bg-white w-full border-t shadow-md lg:hidden">
                    <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
                        {/* Search moved to top */}
                        <li className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="pl-10 pr-3 py-1 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#2B4B38] text-[#2B4B38]"
                            />
                            <FaSearch className="absolute left-3 top-2.5 text-gray-500 text-sm" />
                        </li>
                        
                        <li>
                            <Link 
                                href="/" 
                                onClick={() => setIsMenuOpen(false)}
                                className={`block py-1 border-b-2 transition-colors duration-200 ${
                                    isActiveLink('/') 
                                        ? 'border-[#2B4B38] text-[#2B4B38] font-semibold' 
                                        : 'border-transparent hover:text-[#2B4B38]'
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <button 
                                className={`w-full text-left py-1 border-b-2 transition-colors duration-200 ${
                                    isActiveLink('/product') 
                                        ? 'border-[#2B4B38] text-[#2B4B38] font-semibold' 
                                        : 'border-transparent hover:text-[#2B4B38]'
                                }`}
                                onClick={() => setIsProductsOpen(!isProductsOpen)}
                            >
                                Products
                            </button>
                            {isProductsOpen && (
                                <ul className="pl-4 mt-1 space-y-1 text-sm">
                                    <li><Link href="/product" onClick={() => setIsMenuOpen(false)}>Our product</Link></li>
                                    {products.map((product) => (
                                        <li key={product}>
                                            <Link href={`/product/${toSlug(product)}`} onClick={() => setIsMenuOpen(false)}>
                                                {product}
                                            </Link>
                                        </li>
                                    ))}
                                    
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link 
                                href="/careers" 
                                onClick={() => setIsMenuOpen(false)}
                                className={`block py-1 border-b-2 transition-colors duration-200 ${
                                    isActiveLink('/careers') 
                                        ? 'border-[#2B4B38] text-[#2B4B38] font-semibold' 
                                        : 'border-transparent hover:text-[#2B4B38]'
                                }`}
                            >
                                Careers
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/gallary" 
                                onClick={() => setIsMenuOpen(false)}
                                className={`block py-1 border-b-2 transition-colors duration-200 ${
                                    isActiveLink('/gallary') 
                                        ? 'border-[#2B4B38] text-[#2B4B38] font-semibold' 
                                        : 'border-transparent hover:text-[#2B4B38]'
                                }`}
                            >
                                Gallary
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/contact" 
                                onClick={() => setIsMenuOpen(false)}
                                className={`block py-1 border-b-2 transition-colors duration-200 ${
                                    isActiveLink('/contact') 
                                        ? 'border-[#2B4B38] text-[#2B4B38] font-semibold' 
                                        : 'border-transparent hover:text-[#2B4B38]'
                                }`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
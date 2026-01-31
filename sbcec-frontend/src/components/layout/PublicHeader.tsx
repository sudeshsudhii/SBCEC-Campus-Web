"use client";

import Link from "next/link";
import { Search, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function PublicHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMessageDropdownOpen, setIsMessageDropdownOpen] = useState(false);
    const [isDepartmentDropdownOpen, setIsDepartmentDropdownOpen] = useState(false);

    return (
        <header className="w-full border-b bg-white z-50">
            {/* Top Bar - Socials & Search */}
            <div className="bg-[#b30202] border-b text-xs py-1 px-4 hidden md:flex justify-between items-center text-white">
                <div className="flex gap-4">
                    <Link href="/nirf" className="hover:text-yellow-300">NIRF</Link>
                    <span>|</span>
                    <Link href="/careers" className="hover:text-yellow-300">Careers</Link>
                    <span>|</span>
                    <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex gap-2 items-center">
                        <Phone className="h-3 w-3" /> <span>04173 - 244444</span>
                    </div>
                    <div className="flex gap-2">
                        <Facebook className="h-3 w-3 cursor-pointer hover:text-blue-600" />
                        <Twitter className="h-3 w-3 cursor-pointer hover:text-blue-400" />
                        <Instagram className="h-3 w-3 cursor-pointer hover:text-pink-600" />
                        <Linkedin className="h-3 w-3 cursor-pointer hover:text-blue-700" />
                    </div>
                    {/* Compact Search Bar */}
                    <div className="flex items-center bg-white rounded-full px-3 py-1 border border-white w-40">
                        <input type="text" placeholder="Search..." className="bg-transparent border-none text-xs focus:outline-none w-full text-gray-700 placeholder:text-gray-400" />
                        <Search className="h-3 w-3 text-gray-500" />
                    </div>
                </div>
            </div>

            {/* Main Header - Logo & Title */}
            <div className="container mx-auto py-2 px-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-white">
                <Link href="/" className="flex flex-col md:flex-row items-center gap-3 md:gap-6 w-full md:w-auto hover:opacity-90 transition-opacity">
                    {/* Logo */}
                    <div className="h-16 md:h-28 relative flex-shrink-0 flex items-center">
                        <Image
                            src="/assets/live/logo_high_res.png"
                            alt="SBCEC Logo"
                            width={635}
                            height={100}
                            className="h-full w-auto object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col text-center md:text-left justify-center">
                        <h1 className="text-lg md:text-3xl lg:text-4xl font-extrabold text-[#002147] font-serif uppercase tracking-wide leading-tight">
                            Sri Balaji Chockalingam <br className="hidden md:inline" /> Engineering College
                        </h1>
                        <p className="text-[10px] md:text-sm font-bold text-red-700 mt-1 uppercase tracking-wider leading-tight">
                            Approved by AICTE | Affiliated to Anna University
                        </p>
                        <p className="text-[10px] md:text-sm text-green-700 font-bold leading-tight">
                            Irumbedu, Arni - 632 317, Thiruvannamalai Dist.
                        </p>
                    </div>
                </Link>

                {/* Excellence Badge */}
                <div className="hidden md:block relative w-44 h-36 flex-shrink-0">
                    <Image
                        src="/assets/live/excellence_badge_gold.jpg"
                        alt="29 Years Celebrating Excellence"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Admission Button */}
                <div className="hidden md:flex items-center">
                    <Link href="/admission" className="group relative bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-gray-900 px-8 py-3 rounded-full font-bold text-base hover:shadow-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap shadow-lg border-2 border-amber-600">
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="text-xl">🎓</span>
                            <span>Admission 2026</span>
                        </span>
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                </div>
            </div>

            {/* Navigation Bar - Maroon Strip */}
            <nav className="bg-[#b30202] text-white shadow-md relative z-50">
                <div className="container mx-auto relative">
                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex justify-between items-center p-3">
                        <span className="font-bold">MENU</span>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="border p-1 rounded">
                            <span className="block w-6 h-0.5 bg-white mb-1"></span>
                            <span className="block w-6 h-0.5 bg-white mb-1"></span>
                            <span className="block w-6 h-0.5 bg-white"></span>
                        </button>
                    </div>

                    {/* Desktop Menu Links */}
                    <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:justify-center text-xs md:text-[13px] font-medium uppercase tracking-wide divide-y md:divide-y-0 border-t md:border-t-0 border-white/10`}>
                        <li className="relative group">
                            <Link href="/" className="block py-3 px-3 md:px-4 hover:bg-yellow-500 hover:text-black transition-colors whitespace-nowrap">
                                Home
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link href="/about" className="block py-3 px-3 md:px-4 hover:bg-yellow-500 hover:text-black transition-colors whitespace-nowrap">
                                About Us
                            </Link>
                        </li>

                        {/* Message Dropdown */}
                        <li
                            className="relative group"
                            onMouseEnter={() => setIsMessageDropdownOpen(true)}
                            onMouseLeave={() => setIsMessageDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 py-3 px-3 md:px-4 hover:bg-yellow-500 hover:text-black transition-colors whitespace-nowrap w-full md:w-auto text-left">
                                Message
                                <ChevronDown className="h-3 w-3" />
                            </button>
                            {/* Dropdown Menu */}
                            <ul className={`${isMessageDropdownOpen ? 'block' : 'hidden'} md:absolute md:top-full md:left-0 md:bg-[#003d33] md:shadow-lg md:min-w-[200px] md:z-50`}>
                                <li>
                                    <Link href="/about/founder" className="block py-2 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        Founder
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about/president" className="block py-2 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        President
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about/secretary" className="block py-2 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        Secretary
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about/principal" className="block py-2 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        Principal
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="relative group">
                            <Link href="/academics" className="block py-3 px-3 md:px-4 hover:bg-yellow-500 hover:text-black transition-colors whitespace-nowrap">
                                Academics
                            </Link>
                        </li>

                        <li className="relative group">
                            <Link href="/admission" className="block py-3 px-3 md:px-4 hover:bg-yellow-500 hover:text-black transition-colors whitespace-nowrap">
                                Admission
                            </Link>
                        </li>

                        {/* Department Dropdown */}
                        <li
                            className="relative group"
                            onMouseEnter={() => setIsDepartmentDropdownOpen(true)}
                            onMouseLeave={() => setIsDepartmentDropdownOpen(false)}
                        >
                            <button className="flex items-center gap-1 py-3 px-3 md:px-4 hover:bg-yellow-500 hover:text-black transition-colors whitespace-nowrap w-full md:w-auto text-left">
                                Department
                                <ChevronDown className="h-3 w-3" />
                            </button>
                            {/* Dropdown Menu */}
                            <ul className={`${isDepartmentDropdownOpen ? 'block' : 'hidden'} md:absolute md:top-full md:left-0 md:bg-[#b30202] md:text-white md:shadow-lg md:min-w-[320px] md:z-50 divide-y divide-white/10`}>
                                <li>
                                    <Link href="/departments/ece" className="block py-3 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        B.E. Electronics and Communication Engineering
                                    </Link>
                                </li>
                                <li>
                                    <a href="https://sites.google.com/view/cseatsbcec/" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        B.E. Computer Science Engineering
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.sbcecinfotech.com/" target="_blank" rel="noopener noreferrer" className="block py-3 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        B.Tech. Information Technology
                                    </a>
                                </li>
                                <li>
                                    <Link href="/departments/csbs" className="block py-3 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        B.Tech. Computer Science and Business Systems
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/departments/ai-ds" className="block py-3 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        B.Tech. Artificial Intelligence and Data Science
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/departments/mba" className="block py-3 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        MBA
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/departments/mca" className="block py-3 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        MCA
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/departments/science-humanities" className="block py-3 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        Science and Humanities
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/placements" className="block py-3 px-4 hover:bg-yellow-500 hover:text-black transition-colors text-xs md:text-[13px]">
                                        Placement
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {[
                            { name: 'Library', path: '/library' },
                            { name: 'Gallery', path: '/gallery' },
                            { name: 'IQAC', path: '/iqac' },
                            { name: 'Enhancement', path: '/enhancement' },
                            { name: 'MOU', path: '/mou' },
                            { name: 'Grievance', path: '/grievance' },
                            { name: 'NIRF', path: '/nirf' },
                            { name: 'Club', path: '/club' }
                        ].map((link) => (
                            <li key={link.name} className="relative group">
                                <Link
                                    href={link.path}
                                    className="block py-3 px-3 md:px-4 hover:bg-yellow-500 hover:text-black transition-colors whitespace-nowrap"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

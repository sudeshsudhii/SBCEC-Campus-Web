"use client";

import Link from "next/link";
import { Search, Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function PublicHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="w-full flex flex-col font-sans">
            {/* Top Bar - Socials & Search */}
            <div className="bg-slate-100 border-b text-xs py-1 px-4 hidden md:flex justify-between items-center text-slate-600">
                <div className="flex gap-4">
                    <Link href="/nirf" className="hover:text-primary">NIRF</Link>
                    <span>|</span>
                    <Link href="/careers" className="hover:text-primary">Careers</Link>
                    <span>|</span>
                    <Link href="/contact" className="hover:text-primary">Contact</Link>
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
                </div>
            </div>

            {/* Main Header - Logo & Title */}
            <div className="container mx-auto py-2 px-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-white">
                <div className="flex items-center gap-6 w-full md:w-auto">
                    {/* Logo */}
                    <div className="h-28 w-auto md:h-32 relative flex-shrink-0 flex items-center">
                        <Image
                            src="/assets/live/logo_high_res.png"
                            alt="SBCEC Logo"
                            width={635}
                            height={100}
                            className="h-full w-auto object-contain"
                        />
                    </div>
                    <div className="flex flex-col text-center md:text-left justify-center">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#002147] font-serif uppercase tracking-wide leading-tight">
                            Sri Balaji Chockalingam <br className="hidden md:inline" /> Engineering College
                        </h1>
                        <p className="text-xs md:text-sm font-bold text-red-700 mt-1 uppercase tracking-wider">
                            Approved by AICTE | Affiliated to Anna University
                        </p>
                        <p className="text-xs md:text-sm text-green-700 font-bold">
                            Irumbedu, Arni - 632 317, Thiruvannamalai Dist.
                        </p>
                    </div>
                </div>

                {/* Excellence Badge */}
                <div className="hidden md:block relative w-44 h-36 flex-shrink-0">
                    <Image
                        src="/assets/live/excellence_badge_gold.jpg"
                        alt="29 Years Celebrating Excellence"
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Search Bar - Hidden on small mobile */}
                <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-1.5 border w-64">
                    <input type="text" placeholder="Search..." className="bg-transparent border-none text-sm focus:outline-none w-full" />
                    <Search className="h-4 w-4 text-slate-400" />
                </div>
            </div>

            {/* Navigation Bar - Green/Teal Strip */}
            <nav className="bg-[#004d40] text-white shadow-md relative z-50">
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
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About Us', path: '/about' },
                            { name: 'Message', path: '/message' },
                            { name: 'Academics', path: '/academics' },
                            { name: 'Admission', path: '/admission' },
                            { name: 'Department', path: '/departments' },
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

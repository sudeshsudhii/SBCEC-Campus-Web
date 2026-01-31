import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full">
            {/* Golden Banner Section */}
            <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Leading Together <span className="italic">for</span> Brighter Future
                    </h2>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="bg-white border-t">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Quick Navigation */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-800">
                                Quick Navigation
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/about" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about/founder" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        Message
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/facilities" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        Facilities
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/activities" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        Activities
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/campus-life" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        Campus Life
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/placements" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        Placement Cell
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sports" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        SPORTS
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Research */}
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-800">
                                Research
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="https://orchid.org" target="_blank" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        Orchid
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://scholar.google.com" target="_blank" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        Google Scholar
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.researchgate.net" target="_blank" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        Research Gate
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.annauniv.edu" target="_blank" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        Anna University
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://patents.google.com" target="_blank" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        Google Patents
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://nptel.ac.in" target="_blank" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        NPTEL
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://delnet.in" target="_blank" className="text-gray-600 hover:text-[#b30202] transition-colors">
                                        DELNET
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact With Us */}
                        <div>
                            <h3 className="text-lg font-bold text-white bg-[#b30202] px-4 py-2 mb-6">
                                Contact With Us
                            </h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2">Sri Balaji Chockalingam Engineering College</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        Approved by AICTE | Affiliated to Anna University<br />
                                        A.C.S. Nagar, Irumbedu – 632317<br />
                                        Arni, Tiruvannamalai District, Tamil Nadu, India
                                    </p>
                                </div>

                                {/* Social Media Icons */}
                                <div className="flex space-x-3">
                                    <Link href="#" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-[#b30202] flex items-center justify-center transition-colors">
                                        <Facebook className="h-5 w-5 text-white" />
                                    </Link>
                                    <Link href="#" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-[#b30202] flex items-center justify-center transition-colors">
                                        <Twitter className="h-5 w-5 text-white" />
                                    </Link>
                                    <Link href="#" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-[#b30202] flex items-center justify-center transition-colors">
                                        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                                        </svg>
                                    </Link>
                                    <Link href="#" className="w-10 h-10 rounded-full bg-gray-600 hover:bg-[#b30202] flex items-center justify-center transition-colors">
                                        <Linkedin className="h-5 w-5 text-white" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="bg-gray-100 border-t">
                <div className="container mx-auto px-4 py-4">
                    <p className="text-center text-sm text-gray-600">
                        © {new Date().getFullYear()} Sri Balaji Chockalingam Engineering College. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

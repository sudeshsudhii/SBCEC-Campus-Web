"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            SBCEC
                        </span>
                        <span className="hidden md:inline-block text-sm font-medium text-muted-foreground">
                            Sri Balaji Chockalingam Engineering College
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link href="/departments" className="text-sm font-medium hover:text-primary transition-colors">
                            Departments
                        </Link>
                        <Link href="/courses" className="text-sm font-medium hover:text-primary transition-colors">
                            Courses
                        </Link>
                        <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                            Contact
                        </Link>
                        <div className="flex items-center space-x-2 border-l pl-6">
                            <Link href="/login">
                                <Button variant="ghost" size="sm">Login</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-b bg-background">
                    <div className="container py-4 flex flex-col space-y-4 px-4">
                        <Link href="/" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/about" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                        <Link href="/departments" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            Departments
                        </Link>
                        <Link href="/courses" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            Courses
                        </Link>
                        <Link href="/contact" className="text-sm font-medium hover:text-primary" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                        <Link href="/login" onClick={() => setIsOpen(false)}>
                            <Button className="w-full">Login</Button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

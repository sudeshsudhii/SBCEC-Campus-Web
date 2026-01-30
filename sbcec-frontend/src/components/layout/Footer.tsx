import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full border-t bg-slate-50 dark:bg-slate-950">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">SBCEC</h3>
                        <p className="text-sm text-muted-foreground">
                            Empowering students with quality technical education since 1999.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                            <li><Link href="/departments" className="text-muted-foreground hover:text-primary">Departments</Link></li>
                            <li><Link href="/admissions" className="text-muted-foreground hover:text-primary">Admissions</Link></li>
                            <li><Link href="/placements" className="text-muted-foreground hover:text-primary">Placements</Link></li>
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Departments</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/departments/cse" className="text-muted-foreground hover:text-primary">Computer Science</Link></li>
                            <li><Link href="/departments/ece" className="text-muted-foreground hover:text-primary">Electronics & Comm.</Link></li>
                            <li><Link href="/departments/mech" className="text-muted-foreground hover:text-primary">Mechanical Eng.</Link></li>
                            <li><Link href="/departments/eee" className="text-muted-foreground hover:text-primary">Electrical & Elec.</Link></li>
                            <li><Link href="/departments/it" className="text-muted-foreground hover:text-primary">Information Tech.</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                                <span className="text-muted-foreground">
                                    A.C.S. Nagar, Irumbedu, Arni - 632 317,
                                    Tiruvannamalai District, Tamil Nadu.
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                                <span className="text-muted-foreground">04173 - 227393 / 227429</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                                <span className="text-muted-foreground">principal@sbcecarni.edu.in</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Sri Balaji Chockalingam Engineering College. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

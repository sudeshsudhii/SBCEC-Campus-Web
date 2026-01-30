import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Textarea } from "@/components/ui/Textarea";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-4xl font-bold tracking-tighter">Contact Us</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    We'd love to hear from you. Reach out to us for any queries regarding admissions, academics, or campus life.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Get in Touch</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Address</h3>
                                    <p className="text-muted-foreground">
                                        A.C.S. Nagar, Irumbedu,<br />
                                        Arni - 632 317,<br />
                                        Tiruvannamalai District, Tamil Nadu.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <p className="text-muted-foreground">04173 - 227393</p>
                                    <p className="text-muted-foreground">04173 - 227429</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p className="text-muted-foreground">principal@sbcecarni.edu.in</p>
                                    <p className="text-muted-foreground">admin@sbcecarni.edu.in</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold">Office Hours</h3>
                                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 5:00 PM</p>
                                    <p className="text-muted-foreground">Sunday: Closed</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="h-[300px] bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                        Map Placeholder (Google Maps Embed)
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Send us a Message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                                        <Input id="name" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                                        <Input id="email" type="email" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                    <Input id="subject" placeholder="Inquiry regarding..." />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="Type your message here..." className="min-h-[150px]" />
                                </div>

                                <Button type="submit" className="w-full md:w-auto">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

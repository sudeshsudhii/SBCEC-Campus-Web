"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function FounderMessage() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    {/* Image Section */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="relative w-64 h-72 md:w-80 md:h-96 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                            <Image
                                src="/assets/live/founder_custom.png"
                                alt="Founder Chairman A.C. Shanmugam"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                        <div className="space-y-2">
                            <p className="text-red-700 font-bold uppercase tracking-wider text-sm">Founder's Message</p>
                            <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
                                Greetings from our Founder / Chairman <br />
                                <span className="text-red-700">A.C.Shanmugam</span>
                            </h2>
                        </div>

                        <div className="space-y-4 text-slate-600 leading-relaxed text-justify">
                            <p>
                                I am immensely gratified in extending a warm welcome to you, to this prestigious - Sri Balaji Chockalingam Engineering College which caters to the demands of tens of thousands of students for quality higher education in Technology for the past two decades.
                            </p>
                            <p>
                                The Educational system is undergoing a paradigm shift in the recent past. Currently Education has become no longer an option but a mandate for survival.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link href="/founder-message">
                                <Button className="bg-[#800000] hover:bg-[#600000] text-white px-8 rounded-none">
                                    READ MORE
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

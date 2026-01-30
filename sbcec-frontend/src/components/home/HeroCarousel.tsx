"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function HeroCarousel() {
    const slides = [
        {
            id: 1,
            image: "/assets/live/hero_main.jpg",
            title: "Empowering Future Engineers",
            subtitle: "Excellence in Education since 1999"
        },
        {
            id: 2,
            image: "/assets/live/hero_main.jpg",
            title: "State-of-the-Art Infrastructure",
            subtitle: "World Class Laboratories & Library"
        },
        {
            id: 3,
            image: "/assets/live/hero_main.jpg",
            title: "Placement Achievers 2025",
            subtitle: "95% Placement Record"
        }
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-slate-200 group">
            {/* Persistent Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/assets/live/hero_main.jpg"
                >
                    <source src="/assets/live/hero_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
                        } flex items-center justify-center z-10 pointer-events-none`}
                >
                    <div className="text-center text-white p-4 max-w-4xl mx-auto mt-10 md:mt-0">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                            {slide.title}
                        </h2>
                        <p className="text-lg md:text-2xl font-light mb-8 drop-shadow-md">
                            {slide.subtitle}
                        </p>
                        <div className="pointer-events-auto inline-block">
                            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full text-lg shadow-lg">
                                DOWNLOAD
                            </Button>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-3 rounded-full transition-all duration-300 ${idx === current ? "bg-yellow-500 w-8" : "bg-white/50 hover:bg-white w-3"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

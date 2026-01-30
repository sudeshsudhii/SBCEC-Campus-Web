"use client";

import Link from "next/link";

const links = [
    { title: "OUR CAMPUS", desc: "Study Hard, Play Hard", bg: "bg-[#800000]", link: "/campus" },
    { title: "VALUABLE COURSES", desc: "We prepare you to wild world", bg: "bg-[#900000]", link: "/courses" }, // Slightly different shades for visual depth if needed, or same
    { title: "COLLEGE FACILITIES", desc: "Features & Specialities", bg: "bg-[#800000]", link: "/facilities" },
    { title: "CAREER DEVELOPMENT", desc: "Career & Toppers", bg: "bg-[#900000]", link: "/career" },
    { title: "EVENTS", desc: "Schedule of our activity", bg: "bg-[#800000]", link: "/events" },
];

export function QuickLinksStrip() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 text-white">
                {links.map((item, idx) => (
                    <Link href={item.link} key={idx} className={`${item.bg} hover:brightness-110 transition-all p-6 md:py-10 text-center flex flex-col justify-center items-center group border-r border-white/10 last:border-r-0`}>
                        <h3 className="text-sm md:text-base font-bold uppercase mb-1 tracking-wider group-hover:underline decoration-yellow-400 underline-offset-4">{item.title}</h3>
                        <p className="text-[10px] md:text-xs text-white/80 font-light">{item.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

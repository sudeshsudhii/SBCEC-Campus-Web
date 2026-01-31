"use client";

import { useEffect, useState } from "react";

export function NewsTicker() {
    return (
        <div className="bg-white border-b flex h-10 md:h-12 overflow-hidden shadow-sm relative z-40">
            <div className="bg-yellow-500 text-black px-4 md:px-8 font-bold flex items-center shrink-0 text-xs md:text-sm uppercase tracking-wider relative z-10 w-32 md:w-auto justify-center">
                Latest News
                {/* Triangle arrow effect */}
                <div className="absolute -right-3 top-0 bottom-0 w-0 h-0 border-t-[20px] md:border-t-[24px] border-t-transparent border-l-[12px] border-l-yellow-500 border-b-[20px] md:border-b-[24px] border-b-transparent"></div>
            </div>
            <div className="flex-1 flex items-center overflow-hidden bg-[#a00000] relative">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-12 px-4 text-xs md:text-sm font-medium text-white">
                    {/* Original Items */}
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        Admissions open for 2026-2027 Academic Year. Apply Now!
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                        First Year Induction Program scheduled for August 25th.
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        Congratulations to Final Year students for 100% placement record.
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                        Exam Schedule for April/May released. Check the Exam Cell for details.
                    </span>

                    {/* Copied Items for Seamless Loop */}
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        Admissions open for 2026-2027 Academic Year. Apply Now!
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                        First Year Induction Program scheduled for August 25th.
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-400"></span>
                        Congratulations to Final Year students for 100% placement record.
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white"></span>
                        Exam Schedule for April/May released. Check the Exam Cell for details.
                    </span>
                </div>
            </div>
        </div>
    );
}

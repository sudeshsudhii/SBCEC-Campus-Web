import Link from "next/link";
import { Construction } from "lucide-react";

export function UnderMaintenance() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-slate-50">
            <div className="bg-yellow-100 p-6 rounded-full border-4 border-yellow-500 mb-6 animate-pulse">
                <Construction className="h-16 w-16 text-yellow-600" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#b30202] mb-4">
                Under Maintenance
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg mb-8">
                We are currently updating this page to serve you better.
                Please check back soon!
            </p>
            <Link
                href="/"
                className="px-8 py-3 bg-[#b30202] text-white font-bold rounded-lg hover:bg-red-800 transition-colors shadow-lg"
            >
                Return Home
            </Link>
        </div>
    );
}

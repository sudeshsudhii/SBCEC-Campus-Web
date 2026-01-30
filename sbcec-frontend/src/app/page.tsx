import { PublicHeader } from "@/components/layout/PublicHeader";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { NewsTicker } from "@/components/home/NewsTicker";
import { QuickLinksStrip } from "@/components/home/QuickLinksStrip";
import { FounderMessage } from "@/components/home/FounderMessage";
import { DepartmentGrid } from "@/components/home/DepartmentGrid";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <PublicHeader />

      <main className="flex-1 w-full bg-slate-50">
        {/* Hero Section with Carousel */}
        <HeroCarousel />

        {/* News Ticker Bar */}
        <NewsTicker />

        {/* Red Strip Quick Links */}
        <QuickLinksStrip />

        {/* Founder's Message Section */}
        <FounderMessage />

        {/* Department/Academics Grid */}
        <DepartmentGrid />
      </main>

      <Footer />
    </div>
  );
}

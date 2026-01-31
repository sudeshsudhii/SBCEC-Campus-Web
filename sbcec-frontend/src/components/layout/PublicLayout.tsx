import { ReactNode } from "react";
import { PublicHeader } from "./PublicHeader";
import { Footer } from "./Footer";

interface PublicLayoutProps {
    children: ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col font-sans">
            <PublicHeader />
            <main className="flex-1 w-full bg-slate-50">
                {children}
            </main>
            <Footer />
        </div>
    );
}

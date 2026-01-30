"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Building2,
    Users,
    GraduationCap,
    Calendar,
    Bell,
    Image as ImageIcon,
    FileText,
    Settings,
    LogOut,
    Files
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Building2, label: "Departments", href: "/dashboard/departments" },
    { icon: Users, label: "Faculty", href: "/dashboard/faculty" },
    { icon: GraduationCap, label: "Courses", href: "/dashboard/courses" },
    { icon: Calendar, label: "Events", href: "/dashboard/events" },
    { icon: Bell, label: "Notices", href: "/dashboard/notices" },
    { icon: ImageIcon, label: "Gallery", href: "/dashboard/gallery" },
    { icon: Files, label: "Pages", href: "/dashboard/pages" },
    { icon: FileText, label: "Documents", href: "/dashboard/documents" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-full border-r bg-slate-900 text-slate-100 w-64">
            <div className="p-6 border-b border-slate-800">
                <h1 className="text-xl font-bold tracking-wider">SBCEC ADMIN</h1>
            </div>

            <div className="flex-1 py-6 overflow-y-auto">
                <nav className="space-y-1 px-3">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-blue-600 text-white"
                                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                                )}
                            >
                                <item.icon className="h-5 w-5" />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="p-4 border-t border-slate-800">
                <Button
                    variant="ghost"
                    className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/30 gap-3"
                    onClick={() => console.log('Logout clicked')} // Placeholder for auth logic
                >
                    <LogOut className="h-5 w-5" />
                    Logout
                </Button>
            </div>
        </div>
    );
}

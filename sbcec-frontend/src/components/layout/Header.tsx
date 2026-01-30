"use client";

import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
    return (
        <header className="h-16 border-b bg-background px-6 flex items-center justify-between">
            <div className="font-semibold text-lg">
                {/* Breadcrumb placeholder or dynamic title */}
                Dashboard
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-600" />
                </Button>
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        A
                    </div>
                    <span className="text-sm font-medium">Admin User</span>
                </div>
            </div>
        </header>
    );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    Clapperboard,
    Film,
    BarChart3,
    CreditCard,
    Settings,
    LogOut,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const SIDEBAR_ITEMS = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Clapperboard, label: "Creative", href: "/dashboard/creative" },
    { icon: Film, label: "Video Ads", href: "/dashboard/video-ads" },
    { icon: BarChart3, label: "Analytics", href: "/dashboard/analytics" },
    { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden md:flex flex-col w-64 border-r border-border-0 bg-bg-1 h-screen sticky top-0">
            <div className="p-6">
                <Link href="/dashboard" className="text-[19px] font-bold tracking-tight text-text-0">
                    VixenOS<span className="text-accent">.</span>
                </Link>
            </div>

            <nav className="flex-1 px-3 space-y-1">
                {SIDEBAR_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium transition-colors",
                                isActive
                                    ? "bg-accent/10 text-accent"
                                    : "text-text-2 hover:text-text-0 hover:bg-bg-2"
                            )}
                        >
                            <item.icon size={18} />
                            {item.label}
                        </Link>
                    )
                })}
            </nav>

            <div className="pt-4 border-t border-border-0">
                <button
                    className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-medium text-text-2 hover:text-red-500 hover:bg-red-50 transition-colors"
                    onClick={() => toast.success("Logged out successfully")}
                >
                    <LogOut size={20} />
                    Log out
                </button>
            </div>
        </div>
    );
}

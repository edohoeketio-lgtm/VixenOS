"use client";

import { Bell, HelpCircle, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
    return (
        <header className="h-16 border-b border-border-0 bg-bg-0/80 backdrop-blur-sm px-6 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-4 flex-1">
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-3" size={16} />
                    <input
                        type="text"
                        placeholder="Search campaigns, assets, or actors..."
                        className="w-full h-9 pl-10 pr-4 bg-bg-1 border border-border-0 rounded-lg text-[13px] focus:outline-none focus:border-accent/30 transition-colors"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="text-text-2 hover:text-text-0 transition-colors">
                    <HelpCircle size={20} />
                </button>
                <button className="text-text-2 hover:text-text-0 transition-colors relative">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-bg-0" />
                </button>
                <div className="h-6 w-px bg-border-0 mx-2" />
                <Button variant="primary" size="sm" className="gap-2">
                    <Plus size={16} />
                    <span>New Campaign</span>
                </Button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple-600 ml-2" />
            </div>
        </header>
    );
}

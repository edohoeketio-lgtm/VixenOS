"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
    LayoutDashboard,
    Clapperboard,
    Film,
    BarChart3,
    CreditCard,
    Settings,
    Play,
    Plus,
    Bell,
    HelpCircle,
    TrendingUp,
} from "lucide-react";

const SIDEBAR_ITEMS = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Clapperboard, label: "Creative" },
    { icon: Film, label: "Video Ads", active: true },
    { icon: BarChart3, label: "Analytics" },
    { icon: CreditCard, label: "Billing" },
    { icon: Settings, label: "Settings" },
];

const VIDEO_CARDS = [
    {
        name: "Sophia",
        image: "/images/actors/sophia.png",
        ctr: "3.2%",
        roas: "5.1x",
        status: "Active",
        trend: "+12%",
    },
    {
        name: "Yuki",
        image: "/images/actors/yuki.png",
        ctr: "2.8%",
        roas: "4.5x",
        status: "Active",
        trend: "+8%",
    },
    {
        name: "Marcus",
        image: "/images/actors/marcus.png",
        ctr: "4.1%",
        roas: "6.2x",
        status: "Active",
        trend: "+24%",
    },
];

export function HeroDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20 md:mt-28 relative max-w-5xl mx-auto"
        >
            {/* Browser chrome frame */}
            <div className="rounded-2xl border border-black/[0.08] shadow-2xl overflow-hidden bg-white">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-[#FAFAFA] border-b border-black/[0.06]">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="px-16 py-1 bg-white rounded-md border border-black/[0.06] text-[11px] text-black/40 font-medium">
                            app.vixenos.ai
                        </div>
                    </div>
                    <div className="w-[54px]" /> {/* Balance spacer */}
                </div>

                {/* App layout */}
                <div className="flex min-h-[340px] md:min-h-[420px]">
                    {/* Sidebar */}
                    <div className="hidden md:flex flex-col w-48 border-r border-black/[0.06] bg-[#FAFAFA] p-3 pt-5">
                        <div className="text-[15px] font-bold tracking-tight text-black mb-6 px-2">
                            VixenOS<span className="text-[#6C5CE7]">.</span>
                        </div>
                        <nav className="flex flex-col gap-0.5">
                            {SIDEBAR_ITEMS.map((item) => (
                                <div
                                    key={item.label}
                                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-[13px] font-medium transition-colors ${item.active
                                        ? "bg-[#6C5CE7]/10 text-[#6C5CE7]"
                                        : "text-black/40 hover:text-black/60"
                                        }`}
                                >
                                    <item.icon size={16} strokeWidth={item.active ? 2.2 : 1.8} />
                                    {item.label}
                                </div>
                            ))}
                        </nav>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 p-5 md:p-8">
                        {/* Header row */}
                        <div className="flex items-center justify-between mb-6 md:mb-8">
                            <div>
                                <h2 className="text-lg md:text-xl font-bold text-black tracking-tight">
                                    Video Ads
                                </h2>
                                <p className="text-[12px] text-black/40 mt-0.5">
                                    3 active campaigns
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="hidden sm:flex items-center gap-2">
                                    <HelpCircle size={16} className="text-black/30" />
                                    <Bell size={16} className="text-black/30" />
                                </div>
                                <button className="flex items-center gap-1.5 h-8 px-3.5 bg-[#6C5CE7] text-white text-[12px] font-semibold rounded-lg hover:bg-[#5B4ED6] transition-colors">
                                    <Plus size={14} />
                                    <span className="hidden sm:inline">Create New Ad</span>
                                </button>
                            </div>
                        </div>

                        {/* Video cards grid */}
                        <div className="grid grid-cols-3 gap-3 md:gap-5">
                            {VIDEO_CARDS.map((card, i) => (
                                <motion.div
                                    key={card.name}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.6 + i * 0.12,
                                        duration: 0.5,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                >
                                    <div className="group rounded-xl border border-black/[0.06] bg-white overflow-hidden hover:shadow-md transition-shadow">
                                        {/* Image with play button */}
                                        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                                            <Image
                                                src={card.image}
                                                alt={`AI Actor ${card.name}`}
                                                fill
                                                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                                                sizes="(max-width: 768px) 33vw, 20vw"
                                            />
                                            {/* Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                                            {/* Play button */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <Play
                                                        size={16}
                                                        className="text-[#6C5CE7] ml-0.5"
                                                        fill="#6C5CE7"
                                                    />
                                                </div>
                                            </div>

                                            {/* Status pill */}
                                            <div className="absolute top-2.5 left-2.5">
                                                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                    {card.status}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Metrics */}
                                        <div className="p-3 md:p-4 space-y-1.5">
                                            <div className="flex items-center justify-between">
                                                <span className="text-[12px] font-semibold text-black">
                                                    {card.name}
                                                </span>
                                                <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600">
                                                    <TrendingUp size={10} />
                                                    {card.trend}
                                                </span>
                                            </div>
                                            <div className="flex gap-3">
                                                <div>
                                                    <p className="text-[10px] text-black/40 font-medium">
                                                        CTR
                                                    </p>
                                                    <p className="text-[13px] font-bold text-black">
                                                        {card.ctr}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-black/40 font-medium">
                                                        ROAS
                                                    </p>
                                                    <p className="text-[13px] font-bold text-black">
                                                        {card.roas}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Glow beneath */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#6C5CE7]/5 blur-3xl rounded-full" />
        </motion.div>
    );
}

"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Plus, Search, MoreHorizontal, Play, Download } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";

const CAMPAIGNS = [
    {
        id: 1,
        name: "Summer Sale - 30% Off",
        thumbnail: "/images/actors/sophia.png",
        status: "Active",
        actor: "Sophia",
        format: "9:16",
        created: "Oct 24, 2025",
        metrics: { views: "12.5k", ctr: "3.2%" }
    },
    {
        id: 2,
        name: "Product Demo V2",
        thumbnail: "/images/actors/marcus.png",
        status: "Processing",
        actor: "Marcus",
        format: "16:9",
        created: "Today, 10:23 AM",
        metrics: { views: "-", ctr: "-" }
    },
    {
        id: 3,
        name: "Black Friday Teaser",
        thumbnail: "/images/actors/elena.png",
        status: "Draft",
        actor: "Elena",
        format: "9:16",
        created: "Yesterday",
        metrics: { views: "-", ctr: "-" }
    },
    {
        id: 4,
        name: "UGC Testimonial compilation",
        thumbnail: "/images/actors/yuki.png",
        status: "Active",
        actor: "Yuki",
        format: "4:5",
        created: "Oct 20, 2025",
        metrics: { views: "45.2k", ctr: "4.1%" }
    },
    {
        id: 5,
        name: "Feature Highlight - AI",
        thumbnail: "/images/actors/james.png",
        status: "Paused",
        actor: "James",
        format: "1:1",
        created: "Oct 15, 2025",
        metrics: { views: "8.1k", ctr: "1.9%" }
    }
];

const STATUS_Styles = {
    Active: "bg-emerald-50 text-emerald-700 border-emerald-100",
    Processing: "bg-blue-50 text-blue-700 border-blue-100 animate-pulse",
    Draft: "bg-gray-100 text-gray-600 border-gray-200",
    Paused: "bg-amber-50 text-amber-700 border-amber-100"
} as const;

export default function VideoAdsPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <Typography variant="h2" className="mb-1">Video Ads</Typography>
                    <Typography variant="body" className="text-text-2">
                        Manage your generated video campaigns and track performance.
                    </Typography>
                </div>
                <Link href="/dashboard/create">
                    <Button variant="primary" className="gap-2">
                        <Plus size={16} />
                        Create New Ad
                    </Button>
                </Link>
            </div>

            {/* Filters / Search */}
            <div className="flex items-center gap-4 mb-6 bg-white p-2 rounded-xl border border-border-0 shadow-sm">
                <Search size={18} className="text-text-3 ml-2" />
                <input
                    type="text"
                    placeholder="Search campaigns..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-[14px] h-9"
                />
                <div className="h-6 w-px bg-border-0" />
                <button className="px-3 text-[13px] font-medium text-text-2 hover:text-text-0">All Status</button>
            </div>

            {/* Campaign List */}
            <div className="bg-white border border-border-0 rounded-xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-border-0 bg-bg-1/50 text-[12px] font-medium text-text-3">
                    <div className="col-span-12 md:col-span-5 pl-2">CAMPAIGN</div>
                    <div className="col-span-6 md:col-span-2">STATUS</div>
                    <div className="col-span-6 md:col-span-2">METRICS</div>
                    <div className="col-span-6 md:col-span-2">DATE</div>
                    <div className="col-span-6 md:col-span-1 text-right">ACTIONS</div>
                </div>

                <div className="divide-y divide-border-0">
                    {CAMPAIGNS.map((campaign, i) => (
                        <motion.div
                            key={campaign.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-bg-1/30 transition-colors group"
                        >
                            {/* Campaign Info */}
                            <div className="col-span-12 md:col-span-5 flex items-center gap-4">
                                <div className="relative w-16 h-20 md:w-20 md:h-24 bg-bg-2 rounded-lg overflow-hidden flex-shrink-0 border border-border-0">
                                    <Image
                                        src={campaign.thumbnail}
                                        alt={campaign.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                                            <Play size={14} className="text-text-0 ml-0.5" fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-1 right-1 bg-black/60 px-1.5 py-0.5 rounded text-[9px] text-white font-medium">
                                        {campaign.format}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold text-text-0 text-[14px] mb-1">{campaign.name}</p>
                                    <div className="flex items-center gap-2 text-[12px] text-text-2">
                                        <span className="flex items-center gap-1">
                                            Actor: <span className="text-text-1">{campaign.actor}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Status */}
                            <div className="col-span-6 md:col-span-2">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${STATUS_Styles[campaign.status as keyof typeof STATUS_Styles]}`}>
                                    {campaign.status}
                                </span>
                            </div>

                            {/* Metrics */}
                            <div className="col-span-6 md:col-span-2">
                                <div className="flex flex-col gap-1">
                                    <div className="text-[13px] font-semibold text-text-0">{campaign.metrics.views} <span className="text-[11px] font-normal text-text-3">views</span></div>
                                    <div className="text-[11px] text-text-2">CTR: <span className="text-text-1 font-medium">{campaign.metrics.ctr}</span></div>
                                </div>
                            </div>

                            {/* Date */}
                            <div className="col-span-6 md:col-span-2 text-[13px] text-text-2">
                                {campaign.created}
                            </div>

                            {/* Actions */}
                            <div className="col-span-6 md:col-span-1 flex items-center justify-end gap-2">
                                <button
                                    className="p-2 text-text-2 hover:text-text-0 hover:bg-bg-2 rounded-lg transition-colors"
                                    title="Download"
                                    onClick={() => toast.success("Downloading video assets...")}
                                >
                                    <Download size={16} />
                                </button>
                                <button
                                    className="p-2 text-text-2 hover:text-text-0 hover:bg-bg-2 rounded-lg transition-colors"
                                    onClick={() => toast.info("Campaign options menu")}
                                >
                                    <MoreHorizontal size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

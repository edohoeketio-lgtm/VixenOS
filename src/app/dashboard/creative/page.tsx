"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Upload, Image as ImageIcon, Film, Filter, MoreHorizontal } from "lucide-react";
import Image from "next/image";

const ASSETS = [
    { id: 1, type: "image", src: "/images/actors/sophia.png", name: "Product Shot - Serum", date: "2 mins ago" },
    { id: 2, type: "video", src: "/images/actors/yuki.png", name: "Testimonial Cut 1", date: "1 hour ago" },
    { id: 3, type: "image", src: "/images/actors/marcus.png", name: "Lifestyle - Gym", date: "3 hours ago" },
    { id: 4, type: "video", src: "/images/actors/elena.png", name: "Fashion Haul Intro", date: "1 day ago" },
    { id: 5, type: "image", src: "/images/actors/james.png", name: "Tech Review Set", date: "2 days ago" },
    { id: 6, type: "image", src: "/images/actors/priya.png", name: "Vlog Thumbnail", date: "3 days ago" },
];

export default function CreativePage() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <Typography variant="h2" className="mb-1">Creative Library</Typography>
                    <Typography variant="body" className="text-text-2">
                        Manage your uploaded assets and AI-generated content.
                    </Typography>
                </div>
                <div className="flex gap-3">
                    <Button variant="secondary" className="gap-2">
                        <Filter size={16} />
                        Filter
                    </Button>
                    <Button variant="primary" className="gap-2">
                        <Upload size={16} />
                        Upload New
                    </Button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-8 border-b border-border-0 mb-8 overflow-x-auto">
                {["All Assets", "Images", "Videos", "AI Avatars"].map((tab, i) => (
                    <button
                        key={tab}
                        className={`pb-3 text-[14px] font-medium transition-colors relative ${i === 0 ? "text-text-0" : "text-text-2 hover:text-text-0"
                            }`}
                    >
                        {tab}
                        {i === 0 && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Asset Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Upload Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="aspect-square border-2 border-dashed border-border-0 rounded-xl flex flex-col items-center justify-center bg-bg-1/30 cursor-pointer hover:bg-bg-1 hover:border-accent/50 transition-colors group"
                >
                    <div className="w-12 h-12 rounded-full bg-bg-2 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <Upload size={20} className="text-text-2 group-hover:text-accent" />
                    </div>
                    <span className="text-[13px] font-medium text-text-2 group-hover:text-text-1">Upload Asset</span>
                </motion.div>

                {ASSETS.map((asset, i) => (
                    <motion.div
                        key={asset.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="group relative aspect-square rounded-xl overflow-hidden bg-bg-2 border border-border-0"
                    >
                        <Image
                            src={asset.src}
                            alt={asset.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

                        {/* Type Badge */}
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md">
                            {asset.type === "video" ? (
                                <Film size={12} className="text-white" />
                            ) : (
                                <ImageIcon size={12} className="text-white" />
                            )}
                        </div>

                        {/* Actions */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="p-1.5 bg-white rounded-lg shadow-sm hover:bg-gray-50">
                                <MoreHorizontal size={14} className="text-text-0" />
                            </button>
                        </div>

                        {/* Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent pt-10">
                            <p className="text-white text-[13px] font-medium truncate">{asset.name}</p>
                            <p className="text-white/70 text-[11px]">{asset.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

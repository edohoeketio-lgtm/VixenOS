"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { ArrowUp, ArrowDown, Download, Calendar } from "lucide-react";

const METRICS = [
    { label: "Total Views", value: "1.2M", change: "+12.5%", trend: "up" },
    { label: "Avg. CTR", value: "3.8%", change: "+4.1%", trend: "up" },
    { label: "Est. CPC", value: "$0.42", change: "-8.3%", trend: "down" },
    { label: "Total Spend", value: "$4,250", change: "+2.4%", trend: "up" },
];

export default function AnalyticsPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <Typography variant="h2" className="mb-1">Analytics</Typography>
                    <Typography variant="body" className="text-text-2">
                        Track the performance of your AI-generated campaigns.
                    </Typography>
                </div>
                <div className="flex gap-3">
                    <Button variant="secondary" className="gap-2">
                        <Calendar size={16} />
                        Last 30 Days
                    </Button>
                    <Button variant="secondary" className="gap-2">
                        <Download size={16} />
                        Export
                    </Button>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {METRICS.map((metric, i) => (
                    <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white p-5 rounded-xl border border-border-0 shadow-sm"
                    >
                        <p className="text-[13px] font-medium text-text-2 mb-2">{metric.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-2xl font-bold text-text-0">{metric.value}</h3>
                            <div className={`flex items-center text-[12px] font-medium ${metric.trend === "up" ? "text-emerald-600 bg-emerald-50" : "text-emerald-600 bg-emerald-50" // Simplified for demo
                                } px-2 py-0.5 rounded-full`}>
                                {metric.trend === "up" ? <ArrowUp size={12} className="mr-1" /> : <ArrowDown size={12} className="mr-1" />}
                                {metric.change}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Chart Area (Visual Mock) */}
            <div className="bg-white p-6 rounded-xl border border-border-0 shadow-sm mb-8">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="font-semibold text-text-0">Performance Overview</h3>
                    <div className="flex gap-4 text-[13px]">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-accent" />
                            <span className="text-text-2">Views</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-purple-400" />
                            <span className="text-text-2">Clicks</span>
                        </div>
                    </div>
                </div>

                <div className="h-64 flex items-end justify-between gap-2 md:gap-4">
                    {[35, 55, 40, 60, 75, 50, 65, 80, 70, 90, 85, 95, 60, 70, 75].map((h, i) => (
                        <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.8, delay: i * 0.03, ease: "circOut" }}
                            className="w-full bg-bg-2 rounded-t-sm relative group"
                        >
                            <div className="absolute bottom-0 left-0 right-0 bg-accent/20 h-full rounded-t-sm group-hover:bg-accent/30 transition-colors" style={{ height: `${h}%` }} />
                            <div className="absolute bottom-0 left-0 right-0 bg-accent h-1/3 rounded-t-sm opacity-60" />
                        </motion.div>
                    ))}
                </div>
                <div className="flex justify-between mt-4 text-[12px] text-text-3 font-medium px-1">
                    <span>Nov 1</span>
                    <span>Nov 5</span>
                    <span>Nov 10</span>
                    <span>Nov 15</span>
                    <span>Nov 20</span>
                    <span>Nov 25</span>
                    <span>Now</span>
                </div>
            </div>
        </div>
    );
}

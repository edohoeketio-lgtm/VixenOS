"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { MetricTile } from "./MetricTile";
import Image from "next/image";

interface AdCardProps {
    title: string;
    metrics: { label: string; value: string; delta: number }[];
    actorImage?: string;
    status?: string;
    className?: string;
}

export function AdCard({ title, metrics, actorImage, status = "Active", className }: AdCardProps) {
    return (
        <Card hoverable className={cn("relative aspect-[4/5] bg-bg-1 overflow-hidden", className)}>
            {/* Status */}
            <div className="absolute top-4 left-4 z-10">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-success bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-r-full shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    {status}
                </span>
            </div>

            {/* Title badge */}
            <div className="absolute top-4 right-4 z-10">
                <span className="text-[10px] font-bold text-white/80 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-r-full uppercase tracking-wider">
                    {title}
                </span>
            </div>

            {/* Actor Image or Placeholder */}
            {actorImage ? (
                <Image
                    src={actorImage}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-bg-2 to-bg-1 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent-soft flex items-center justify-center text-accent text-xl font-bold">
                        AI
                    </div>
                </div>
            )}

            {/* Bottom gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Metrics */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex gap-2">
                {metrics.map((m, i) => (
                    <MetricTile key={i} {...m} className="flex-1 bg-white/90 backdrop-blur-sm shadow-sm border-0" />
                ))}
            </div>
        </Card>
    );
}

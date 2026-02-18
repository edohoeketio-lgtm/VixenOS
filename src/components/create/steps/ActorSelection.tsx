"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Check } from "lucide-react";

interface Actor {
    id: string; // Changed to string to match state type
    name: string;
    style: string;
    tone: string;
    image: string;
}

const FILTERS = ["All", "Young", "Modern", "Classic", "Professional"];
const ACTORS = [
    { id: "1", name: "Sophia", style: "Modern", tone: "Conversational", image: "/images/actors/sophia.png" },
    { id: "2", name: "Marcus", style: "Classic", tone: "Authoritative", image: "/images/actors/marcus.png" },
    { id: "3", name: "Aiden", style: "Modern", tone: "Energetic", image: "/images/actors/aiden.png" },
    { id: "4", name: "Priya", style: "Professional", tone: "Warm", image: "/images/actors/priya.png" },
    { id: "5", name: "Elena", style: "Classic", tone: "Confident", image: "/images/actors/elena.png" },
    { id: "6", name: "James", style: "Professional", tone: "Friendly", image: "/images/actors/james.png" },
    { id: "7", name: "Yuki", style: "Young", tone: "Playful", image: "/images/actors/yuki.png" },
    { id: "8", name: "David", style: "Young", tone: "Casual", image: "/images/actors/david.png" },
];

interface ActorSelectionProps {
    selectedActor: string | null;
    onSelect: (actor: Actor) => void;
}

export function ActorSelection({ selectedActor, onSelect }: ActorSelectionProps) {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredActors =
        activeFilter === "All"
            ? ACTORS
            : ACTORS.filter((a) => a.style === activeFilter);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <Typography variant="h3" className="mb-1">Select an AI Actor</Typography>
                    <Typography variant="body" className="text-text-2">Choose the perfect face and voice for your brand.</Typography>
                </div>

                <div className="flex gap-1 p-1 bg-bg-2 rounded-lg overflow-x-auto max-w-full">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={cn(
                                "px-3 py-1.5 text-[13px] font-medium rounded-md transition-all whitespace-nowrap",
                                activeFilter === filter
                                    ? "bg-bg-0 text-text-0 shadow-sm"
                                    : "text-text-2 hover:text-text-1"
                            )}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <AnimatePresence mode="popLayout">
                    {filteredActors.map((actor) => (
                        <motion.div
                            key={actor.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={() => onSelect(actor)}
                            className={cn(
                                "group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300",
                                selectedActor === actor.id
                                    ? "border-accent ring-2 ring-accent/20"
                                    : "border-transparent hover:border-border-1"
                            )}
                        >
                            <Image
                                src={actor.image}
                                alt={actor.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                            {/* Selection Indicator */}
                            {selectedActor === actor.id && (
                                <div className="absolute top-3 right-3 w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow-lg">
                                    <Check size={14} className="text-white" strokeWidth={3} />
                                </div>
                            )}

                            {/* Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="text-white font-bold text-[15px]">{actor.name}</p>
                                <div className="flex gap-2 text-[12px] text-white/80 mt-0.5">
                                    <span>{actor.style}</span>
                                    <span>•</span>
                                    <span>{actor.tone}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}

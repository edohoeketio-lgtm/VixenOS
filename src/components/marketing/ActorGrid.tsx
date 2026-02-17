"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import Image from "next/image";

const FILTERS = ["All", "Young", "Modern", "Classic", "Professional"];
const ACTORS = [
    { id: 1, name: "Sophia", style: "Modern", tone: "Conversational", image: "/images/actors/sophia.png" },
    { id: 2, name: "Marcus", style: "Classic", tone: "Authoritative", image: "/images/actors/marcus.png" },
    { id: 3, name: "Aiden", style: "Modern", tone: "Energetic", image: "/images/actors/aiden.png" },
    { id: 4, name: "Priya", style: "Professional", tone: "Warm", image: "/images/actors/priya.png" },
    { id: 5, name: "Elena", style: "Classic", tone: "Confident", image: "/images/actors/elena.png" },
    { id: 6, name: "James", style: "Professional", tone: "Friendly", image: "/images/actors/james.png" },
    { id: 7, name: "Yuki", style: "Young", tone: "Playful", image: "/images/actors/yuki.png" },
    { id: 8, name: "David", style: "Young", tone: "Casual", image: "/images/actors/david.png" },
];

export function ActorGrid() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredActors =
        activeFilter === "All"
            ? ACTORS
            : ACTORS.filter((a) => a.style === activeFilter);

    return (
        <section className="section-padding bg-bg-1">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16">
                    <div className="max-w-lg">
                        <Typography variant="h2" className="mb-4">
                            1,000+ AI Actors
                        </Typography>
                        <Typography variant="body">
                            The most diverse talent library in synthetic media. Find the perfect voice, face, and energy for every campaign.
                        </Typography>
                    </div>

                    <div className="flex gap-1 p-1 bg-bg-2 rounded-r-lg">
                        {FILTERS.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={cn(
                                    "px-3.5 py-1.5 text-[13px] font-medium rounded-r-md transition-all cursor-pointer",
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
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="group relative aspect-[3/4] rounded-r-xl overflow-hidden cursor-pointer border border-border-0 hover:border-border-1 hover:shadow-lg transition-all duration-300">
                                    {/* Actor Photo */}
                                    <Image
                                        src={actor.image}
                                        alt={`AI Actor ${actor.name}`}
                                        fill
                                        className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                    {/* Info overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <p className="text-sm font-semibold text-white">{actor.name}</p>
                                        <p className="text-[12px] text-white/70 mt-0.5">{actor.tone}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </Container>
        </section>
    );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import Image from "next/image";

const EMOTIONS = [
    { name: "Calm", emoji: "😌", description: "Soothing, trustworthy energy", color: "bg-blue-50 text-blue-600" },
    { name: "Excited", emoji: "🔥", description: "High-energy, attention-grabbing", color: "bg-orange-50 text-orange-600" },
    { name: "Confident", emoji: "💪", description: "Bold, authoritative presence", color: "bg-purple-50 text-purple-600" },
    { name: "Empathetic", emoji: "💜", description: "Warm, relatable connection", color: "bg-pink-50 text-pink-600" },
    { name: "Urgent", emoji: "⚡", description: "FOMO-driven, time-sensitive", color: "bg-amber-50 text-amber-600" },
];

export function EmotionControl() {
    const [active, setActive] = useState("Excited");
    const activeEmotion = EMOTIONS.find(e => e.name === active)!;

    return (
        <section className="section-padding">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <Typography variant="h2" className="mb-5">
                            One click. Total emotion control.
                        </Typography>
                        <Typography variant="body" className="mb-10 max-w-md">
                            Direct the energy of every performance. Match the emotion to your offer, your audience, and your hook strategy.
                        </Typography>

                        <div className="flex flex-wrap gap-2">
                            {EMOTIONS.map((emotion) => (
                                <button
                                    key={emotion.name}
                                    onClick={() => setActive(emotion.name)}
                                    className={cn(
                                        "h-9 px-4 rounded-full text-[13px] font-medium transition-all border cursor-pointer",
                                        active === emotion.name
                                            ? "bg-text-0 text-white border-text-0 shadow-md"
                                            : "bg-bg-0 text-text-2 border-border-0 hover:border-border-1 hover:text-text-1"
                                    )}
                                >
                                    {emotion.emoji} {emotion.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Preview Card with Actor Image */}
                    <Card className="aspect-square md:aspect-[4/3] bg-bg-1 overflow-hidden relative">
                        {/* Actor image background */}
                        <div className="absolute inset-0">
                            <Image
                                src="/images/actors/priya.png"
                                alt="AI Actor demonstrating emotion"
                                fill
                                className="object-cover object-top"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>

                        {/* Overlay Content */}
                        <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-semibold text-white/70 uppercase tracking-wider">Preview</span>
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            </div>

                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-3"
                            >
                                <div className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium", activeEmotion.color)}>
                                    <span className="text-base">{activeEmotion.emoji}</span>
                                    {activeEmotion.name}
                                </div>
                                <p className="text-white/80 text-sm">{activeEmotion.description}</p>

                                <div className="flex items-center gap-3 pt-1">
                                    <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                                        <motion.div
                                            key={active}
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 2, ease: "easeOut" }}
                                            className="h-full bg-white rounded-full"
                                        />
                                    </div>
                                    <span className="text-[11px] font-medium text-white/60">Rendering…</span>
                                </div>
                            </motion.div>
                        </div>
                    </Card>
                </div>
            </Container>
        </section>
    );
}

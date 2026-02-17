"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const FEATURES = [
    {
        title: "AI UGC at Scale",
        description: "Generate thousands of unique, high-converting video ads from a single script. No actors, no studios.",
        image: "/images/features/ai-scale.png",
        span: "md:col-span-2",
        objectPosition: "center",
    },
    {
        title: "Emotion Direction",
        description: "Direct every actor performance with precision. Calm, excited, confident — you set the energy.",
        image: "/images/actors/priya.png",
        span: "md:col-span-1",
        objectPosition: "top",
    },
    {
        title: "30+ Languages",
        description: "Perfect lip-sync and native voice cloning in every major language. Go global instantly.",
        image: "/Globe illustration.jpg",
        span: "md:col-span-1",
        objectPosition: "center",
    },
    {
        title: "AI Marketing Agent",
        description: "An intelligent agent that learns your brand voice and automates the entire creative workflow.",
        image: "/Thumbnail.png",
        span: "md:col-span-2",
        objectPosition: "bottom",
    },
];

export function FeatureGrid() {
    return (
        <section className="section-padding">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                    <Typography variant="h2" className="mb-5">
                        Everything you need to scale creative
                    </Typography>
                    <Typography variant="body" className="text-text-2">
                        Built for performance marketers who need velocity without sacrificing quality.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {FEATURES.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className={feature.span}
                        >
                            <Card hoverable className="group h-full overflow-hidden">
                                {/* Image area */}
                                <div className={`relative overflow-hidden ${feature.span === "md:col-span-2" ? "h-56 md:h-72" : "h-48 md:h-56"} bg-white`}>
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        fill
                                        className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                                        style={{ objectPosition: feature.objectPosition }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                                </div>
                                {/* Content */}
                                <div className="p-6 md:p-8">
                                    <div className="flex items-start justify-between mb-3">
                                        <Typography variant="h3">{feature.title}</Typography>
                                        <ArrowUpRight
                                            size={16}
                                            className="text-text-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                                        />
                                    </div>
                                    <Typography variant="body">{feature.description}</Typography>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

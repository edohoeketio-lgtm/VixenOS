"use client";

import { Navbar } from "@/components/marketing/Navbar";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { WorkflowBlock } from "@/components/marketing/WorkflowBlock";
import { AdCard } from "@/components/marketing/AdCard";
import { FAQ } from "@/components/marketing/FAQ";
import { CTAStrip } from "@/components/marketing/CTAStrip";
import { Footer } from "@/components/marketing/Footer";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ACTORS = [
    { name: "Sophia", image: "/images/actors/sophia.png", role: "Brand Ambassador" },
    { name: "Yuki", image: "/images/actors/yuki.png", role: "Product Reviewer" },
    { name: "Marcus", image: "/images/actors/marcus.png", role: "Tech Expert" },
    { name: "Priya", image: "/images/actors/priya.png", role: "Lifestyle Creator" },
    { name: "Elena", image: "/images/actors/elena.png", role: "Fashion Influencer" },
    { name: "James", image: "/images/actors/james.png", role: "Fitness Coach" },
];

function ActorSlideshow() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % ACTORS.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const actor = ACTORS[current];

    return (
        <div className="relative flex flex-col items-center">
            {/* Main portrait */}
            <div className="relative w-72 h-96 md:w-80 md:h-[440px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={actor.name}
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src={actor.image}
                            alt={actor.name}
                            fill
                            className="object-cover object-top"
                            sizes="320px"
                            priority
                        />
                        {/* Bottom gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        {/* Name + role badge */}
                        <div className="absolute bottom-5 left-5 right-5">
                            <p className="text-white text-lg font-bold">{actor.name}</p>
                            <p className="text-white/70 text-sm">{actor.role}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-6">
                {ACTORS.map((a, i) => (
                    <button
                        key={a.name}
                        onClick={() => setCurrent(i)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current
                                ? "bg-accent w-6"
                                : "bg-black/15 hover:bg-black/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function FeaturePage() {
    return (
        <main className="min-h-screen bg-bg-0">
            <Navbar />

            <section className="pt-32 pb-20 md:pt-44 md:pb-28">
                <Container>
                    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">
                        {/* Left: Text */}
                        <div className="flex-1 max-w-xl">
                            <Typography variant="micro" className="text-accent mb-5">Core Feature</Typography>
                            <Typography variant="h1" className="mb-6">
                                AI UGC Generator
                            </Typography>
                            <Typography variant="body-lg" className="mb-10 text-text-2">
                                Generate studio-quality UGC video ads in minutes. Choose your actor, write your script, and launch winning creative at scale.
                            </Typography>
                            <Button size="lg">
                                Start generating <ArrowRight size={16} />
                            </Button>
                        </div>

                        {/* Right: Actor slideshow */}
                        <div className="flex-shrink-0">
                            <ActorSlideshow />
                        </div>
                    </div>
                </Container>
            </section>

            <WorkflowBlock />

            <section className="section-padding bg-bg-1">
                <Container>
                    <Typography variant="h2" className="text-center mb-16">Real campaign results</Typography>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <AdCard title="SKINCARE" actorImage="/images/actors/sophia.png" metrics={[{ label: "CTR", value: "3.2%", delta: 45 }]} />
                        <AdCard title="MOBILE APP" actorImage="/images/actors/marcus.png" metrics={[{ label: "ROAS", value: "5.1x", delta: 22 }]} />
                        <AdCard title="FASHION" actorImage="/images/actors/elena.png" metrics={[{ label: "CPA", value: "$8.20", delta: -18 }]} />
                    </div>
                </Container>
            </section>

            <FAQ />
            <CTAStrip />
            <Footer />
        </main>
    );
}

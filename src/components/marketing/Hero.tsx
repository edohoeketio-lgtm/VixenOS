"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { ArrowRight } from "lucide-react";
import { HeroDashboard } from "./HeroDashboard";

export function Hero() {
    return (
        <section className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden">
            {/* Subtle radial gradient for warmth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,92,231,0.06),transparent_50%)] pointer-events-none" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <Chip variant="accent" className="mb-8">
                            ✦ Trusted by 500+ brands
                        </Chip>
                    </motion.div>

                    <Typography variant="display" className="mb-8">
                        Create winning ads{" "}
                        <span className="text-accent">with AI</span>
                    </Typography>

                    <Typography variant="body-lg" className="max-w-2xl mb-12 text-text-2">
                        The all-in-one AI UGC platform for performance marketers.
                        Generate high-converting video ads at scale — no actors, no studios, no delays.
                    </Typography>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Button size="lg">
                            Start free trial
                            <ArrowRight size={16} />
                        </Button>
                        <Button variant="secondary" size="lg">
                            Watch demo
                        </Button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-6 text-[13px] text-text-3"
                    >
                        No credit card required · Setup in 2 minutes
                    </motion.p>
                </motion.div>

                {/* Built-out Product Dashboard */}
                <HeroDashboard />
            </Container>
        </section>
    );
}

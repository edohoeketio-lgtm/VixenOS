"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChildren, cardHover, glowPulse } from "@/lib/motion/variants";
import { Container } from "@/components/ui/Container";

export default function MotionPlayground() {
    return (
        <div className="min-h-screen bg-bg-0 py-20">
            <Container>
                <motion.div
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                    className="space-y-20"
                >
                    {/* Header */}
                    <motion.div variants={fadeUp} className="text-center">
                        <h1 className="text-4xl md:text-6xl mb-4">Motion <span className="grad-text">Playground</span></h1>
                        <p className="text-text-1 max-w-2xl mx-auto">
                            Validating our premium motion recipes. transform-only, no bounce, pure performance.
                        </p>
                    </motion.div>

                    {/* Recipes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* FadeUp */}
                        <motion.div variants={fadeUp} className="glass p-8 rounded-r-lg">
                            <h3 className="text-xl mb-4">FadeUp</h3>
                            <p className="text-text-2">Triggers on load with reveal-y: 14px.</p>
                        </motion.div>

                        {/* HoverLiftCard */}
                        <motion.div
                            variants={fadeUp}
                            whileHover="hover"
                            className="glass p-8 rounded-r-lg cursor-pointer"
                        >
                            <motion.div variants={cardHover}>
                                <h3 className="text-xl mb-4">HoverLiftCard</h3>
                                <p className="text-text-2">Lifts -4px and scales 1.02 on hover.</p>
                            </motion.div>
                        </motion.div>

                        {/* GlowPulse */}
                        <motion.div variants={fadeUp} className="relative glass p-8 rounded-r-lg overflow-hidden h-40">
                            <motion.div
                                variants={glowPulse}
                                animate="animate"
                                className="absolute inset-0 bg-grad-glow opacity-50 pointer-events-none"
                            />
                            <div className="relative z-10">
                                <h3 className="text-xl mb-2">GlowPulse</h3>
                                <p className="text-text-2">Slow opacity oscillation for background atmosphere.</p>
                            </div>
                        </motion.div>

                        {/* Marquee Placeholder */}
                        <motion.div variants={fadeUp} className="glass p-8 rounded-r-lg overflow-hidden">
                            <h3 className="text-xl mb-4">Marquee</h3>
                            <div className="flex gap-4 whitespace-nowrap animate-[marquee_20s_linear_infinite] hover:[animation-play-state:paused]">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <div key={i} className="px-6 py-2 bg-surface-1 rounded-r-sm border border-border-0">
                                        Logo {i + 1}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}

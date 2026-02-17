"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";

const STEPS = [
    { num: "01", title: "Select", description: "Choose from 1,000+ diverse AI actors or clone your own." },
    { num: "02", title: "Script", description: "Write your script or let our AI generate one from your brief." },
    { num: "03", title: "Direct", description: "Set the emotion, energy, and tone for the perfect delivery." },
    { num: "04", title: "Launch", description: "Export optimized creatives for every platform in seconds." },
];

export function WorkflowBlock() {
    return (
        <section className="section-padding border-y border-border-0">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
                    <Typography variant="h2" className="mb-5">
                        Script to winning ad in 5 minutes
                    </Typography>
                    <Typography variant="body">
                        A streamlined workflow designed for speed without sacrificing creative quality.
                    </Typography>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Connector line */}
                            {i < STEPS.length - 1 && (
                                <div className="hidden md:block absolute top-5 left-full w-full h-px bg-border-0 z-0" />
                            )}

                            <div className="relative z-10">
                                <div className="w-10 h-10 rounded-full bg-accent-soft text-accent text-[13px] font-bold flex items-center justify-center mb-5">
                                    {step.num}
                                </div>
                                <Typography variant="h3" className="mb-2">{step.title}</Typography>
                                <Typography variant="small">{step.description}</Typography>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

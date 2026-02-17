"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
    {
        q: "How many AI actors do I get access to?",
        a: "All plans include full access to our library of 1,000+ AI actors. New actors are added weekly across all demographics and styles."
    },
    {
        q: "Can I use my own voice or custom actor?",
        a: "Yes. Pro and Enterprise plans support voice cloning and custom avatar creation for maximum brand consistency."
    },
    {
        q: "What platforms are these ads optimized for?",
        a: "We generate content optimized for TikTok, Instagram Reels, Facebook, YouTube Shorts, and Snapchat. Aspect ratios and specs are handled automatically."
    },
    {
        q: "How long does it take to generate an ad?",
        a: "Script to final render typically takes under 5 minutes. You can generate hundreds of variations simultaneously."
    },
    {
        q: "Is there a free trial?",
        a: "Yes — every account starts with a full-featured 7-day trial. No credit card required to get started."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="section-padding">
            <Container className="max-w-3xl">
                <Typography variant="h2" className="text-center mb-12 md:mb-16">
                    Frequently asked questions
                </Typography>

                <div className="divide-y divide-border-0">
                    {FAQS.map((faq, i) => (
                        <div key={i}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className={cn(
                                    "text-[15px] md:text-base font-medium transition-colors pr-8",
                                    openIndex === i ? "text-text-0" : "text-text-1 group-hover:text-text-0"
                                )}>
                                    {faq.q}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-text-3 shrink-0"
                                >
                                    <Plus size={18} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-[15px] text-text-2 leading-relaxed max-w-xl">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}

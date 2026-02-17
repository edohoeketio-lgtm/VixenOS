"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";

const LANGUAGES = [
    { code: "EN", name: "English" },
    { code: "FR", name: "French" },
    { code: "ES", name: "Spanish" },
    { code: "DE", name: "German" },
    { code: "PT", name: "Portuguese" },
    { code: "JP", name: "Japanese" },
    { code: "KR", name: "Korean" },
    { code: "AR", name: "Arabic" },
];

export function Localization() {
    return (
        <section className="section-padding bg-bg-1">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div>
                        <Typography variant="h2" className="mb-5">
                            Go global in minutes
                        </Typography>
                        <Typography variant="body" className="max-w-md">
                            Perfect lip-sync and native voice cloning in 30+ languages. Scale your best-performing ads across every market without re-shooting.
                        </Typography>
                    </div>

                    <div className="grid grid-cols-4 gap-3">
                        {LANGUAGES.map((lang, i) => (
                            <motion.div
                                key={lang.code}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.04, duration: 0.3 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="aspect-square bg-bg-0 border border-border-0 rounded-r-xl flex flex-col items-center justify-center gap-1.5 shadow-sm hover:shadow-md hover:border-accent/20 transition-all cursor-default">
                                    <span className="text-xl font-bold text-text-0 group-hover:text-accent transition-colors">
                                        {lang.code}
                                    </span>
                                    <span className="text-[10px] font-medium text-text-3">{lang.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}

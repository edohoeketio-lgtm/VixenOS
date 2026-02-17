"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
    { label: "Features", href: "/features/ai-ugc-generator" },
    { label: "Industries", href: "/industries/e-commerce" },
    { label: "Pricing", href: "#" },
    { label: "Tools", href: "/tools/hook-generator" },
];

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 h-16 bg-bg-0/80 backdrop-blur-xl border-b border-border-0"
        >
            <Container className="h-full flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <a href="/" className="text-[17px] font-bold tracking-tight text-text-0 cursor-pointer">
                        VixenOS<span className="text-accent">.</span>
                    </a>

                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-[13px] font-medium text-text-2 hover:text-text-0 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="sm">Log in</Button>
                    <Button variant="primary" size="sm">Get started</Button>
                </div>
            </Container>
        </motion.nav>
    );
}

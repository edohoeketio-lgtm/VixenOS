"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
    { label: "Features", href: "/features/ai-ugc-generator" },
    { label: "Industries", href: "/industries/e-commerce" },
    { label: "Pricing", href: "#" },
    { label: "Tools", href: "/tools/hook-generator" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 h-16 bg-bg-0/80 backdrop-blur-xl border-b border-border-0"
        >
            <Container className="h-full flex items-center justify-between">
                <div className="flex items-center gap-10">
                    <Link href="/" className="text-[17px] font-bold tracking-tight text-text-0 cursor-pointer">
                        VixenOS<span className="text-accent">.</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map(link => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-[13px] font-medium text-text-2 hover:text-text-0 transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-3">
                        <Button variant="ghost" size="sm">Log in</Button>
                        <Button variant="primary" size="sm">Get started</Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 md:hidden text-text-1 hover:bg-bg-1 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="absolute top-16 left-0 right-0 bg-white border-b border-border-0 md:hidden overflow-hidden shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {NAV_LINKS.map(link => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-[15px] font-medium text-text-1 hover:text-accent transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-3 border-t border-border-0">
                                <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                                    <Button variant="ghost" className="w-full justify-center">Log in</Button>
                                </Link>
                                <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                                    <Button variant="primary" className="w-full justify-center">Get started</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

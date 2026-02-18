"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AdCard } from "@/components/marketing/AdCard";
import { Typography } from "@/components/ui/Typography";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-bg-0">
            {/* Left Side: Visual Value Prop */}
            <div className="hidden lg:flex relative overflow-hidden bg-[#0A0A0A] items-center justify-center p-20">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#4B0082] blur-[120px] rounded-full" />
                </div>

                <div className="relative z-10 w-full max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Typography variant="h2" className="text-white mb-6 leading-tight">
                            Create ads that <span className="text-accent">convert</span> without the studio.
                        </Typography>
                        <Typography variant="body-lg" className="text-white/60 mb-12">
                            Join 5,000+ marketers scaling their creative production with VixenOS AI.
                        </Typography>
                    </motion.div>

                    {/* Floating Ad Cards for Visual Depth */}
                    <div className="relative h-[400px]">
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                rotate: [0, 1, 0]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute top-0 left-0 w-72"
                        >
                            <AdCard
                                title="FASHION"
                                actorImage="/images/actors/sophia.png"
                                metrics={[{ label: "CTR", value: "3.2%", delta: 45 }]}
                            />
                        </motion.div>

                        <motion.div
                            animate={{
                                y: [0, 15, 0],
                                rotate: [0, -1, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                            className="absolute top-20 right-0 w-72"
                        >
                            <AdCard
                                title="SKINCARE"
                                actorImage="/images/actors/elena.png"
                                metrics={[{ label: "ROAS", value: "5.1x", delta: 22 }]}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Right Side: Auth Forms */}
            <div className="flex items-center justify-center p-8 lg:p-20">
                <div className="w-full max-w-md">
                    <div className="mb-10 lg:hidden text-center">
                        <Link href="/" className="text-xl font-bold tracking-tight text-text-0">
                            VixenOS<span className="text-accent">.</span>
                        </Link>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

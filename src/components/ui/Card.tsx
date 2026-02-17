"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}

export function Card({ children, className, hoverable = false }: CardProps) {
    if (hoverable) {
        return (
            <motion.div
                whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(0,0,0,0.08)" }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "relative bg-surface-0 rounded-r-xl border border-border-0 shadow-sm overflow-hidden",
                    className
                )}
            >
                {children}
            </motion.div>
        );
    }

    return (
        <div
            className={cn(
                "relative bg-surface-0 rounded-r-xl border border-border-0 shadow-sm overflow-hidden",
                className
            )}
        >
            {children}
        </div>
    );
}

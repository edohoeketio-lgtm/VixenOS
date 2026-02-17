import * as React from "react";
import { cn } from "@/lib/utils";

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
    variant?: "display" | "h1" | "h2" | "h3" | "body" | "body-lg" | "small" | "micro";
    as?: React.ElementType;
}

export function Typography({ children, className, variant = "body", as }: TypographyProps) {
    const variants = {
        display: "text-6xl sm:text-7xl md:text-[80px] lg:text-[96px] font-semibold leading-[0.95] tracking-[-0.04em] text-text-0",
        h1: "text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.03em] text-text-0",
        h2: "text-3xl md:text-4xl font-semibold leading-[1.15] tracking-[-0.02em] text-text-0",
        h3: "text-lg md:text-xl font-semibold text-text-0",
        "body-lg": "text-lg md:text-xl leading-[1.6] text-text-1",
        body: "text-[15px] md:text-base leading-[1.6] text-text-2",
        small: "text-sm text-text-2 leading-relaxed",
        micro: "text-[11px] font-semibold text-text-2 uppercase tracking-[0.08em]",
    };

    const defaultTags: Record<string, string> = {
        display: "h1", h1: "h1", h2: "h2", h3: "h3",
        "body-lg": "p", body: "p", small: "p", micro: "span",
    };

    const Component = (as || defaultTags[variant] || "p") as React.ElementType;

    return (
        <Component className={cn(variants[variant as keyof typeof variants], className)}>
            {children}
        </Component>
    );
}

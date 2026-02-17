"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "variant"> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary:
                "bg-text-0 text-white shadow-md hover:shadow-lg hover:bg-text-0/90 active:shadow-sm",
            secondary:
                "bg-bg-0 text-text-0 border border-border-1 shadow-sm hover:shadow-md hover:border-border-1 active:bg-bg-1",
            ghost:
                "bg-transparent text-text-1 hover:text-text-0 hover:bg-bg-1",
        };

        const sizes = {
            sm: "h-8 px-3 text-[13px] rounded-r-sm gap-1.5",
            md: "h-10 px-5 text-[14px] rounded-r-md gap-2",
            lg: "h-12 px-7 text-[15px] rounded-r-md gap-2.5",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className={cn(
                    "inline-flex items-center justify-center font-medium transition-all duration-200 outline-none cursor-pointer select-none disabled:opacity-40 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

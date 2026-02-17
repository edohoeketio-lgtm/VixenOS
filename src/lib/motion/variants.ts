import { Variants } from "framer-motion";
import { motionTokens } from "./tokens";

export const fadeUp: Variants = {
    initial: { opacity: 0, y: motionTokens.reveal.y },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: motionTokens.duration.base,
            ease: motionTokens.easing.base as any,
        }
    },
};

export const staggerChildren: Variants = {
    animate: {
        transition: {
            staggerChildren: motionTokens.stagger.base,
        },
    },
};

export const cardHover: Variants = {
    initial: { y: 0, scale: 1, borderColor: "var(--border-0)" },
    hover: {
        y: motionTokens.hover.lift,
        scale: motionTokens.hover.scale,
        borderColor: "var(--border-1)",
        transition: {
            duration: motionTokens.duration.micro,
            ease: "easeOut",
        }
    },
};

export const glowPulse: Variants = {
    animate: {
        opacity: [0.4, 0.8, 0.4],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
        }
    }
};

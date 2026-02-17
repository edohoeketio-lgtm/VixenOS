import { cn } from "@/lib/utils";

interface ChipProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "accent" | "success" | "danger";
}

export function Chip({ children, className, variant = "default" }: ChipProps) {
    const variants = {
        default: "bg-bg-2 text-text-1",
        accent: "bg-accent-soft text-accent",
        success: "bg-success/8 text-success",
        danger: "bg-danger/8 text-danger",
    };

    return (
        <span className={cn(
            "inline-flex items-center h-6 px-2.5 rounded-r-full text-[11px] font-semibold tracking-wide",
            variants[variant],
            className
        )}>
            {children}
        </span>
    );
}

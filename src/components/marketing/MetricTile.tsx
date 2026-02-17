import { cn } from "@/lib/utils";

interface MetricTileProps {
    label: string;
    value: string;
    delta?: number;
    className?: string;
}

export function MetricTile({ label, value, delta, className }: MetricTileProps) {
    return (
        <div className={cn("px-3 py-2.5 rounded-r-lg bg-bg-0 border border-border-0", className)}>
            <p className="text-[10px] font-semibold text-text-3 uppercase tracking-wide mb-0.5">{label}</p>
            <div className="flex items-baseline gap-1.5">
                <span className="text-base font-bold text-text-0">{value}</span>
                {delta !== undefined && (
                    <span className={cn(
                        "text-[10px] font-semibold",
                        delta > 0 ? "text-success" : "text-danger"
                    )}>
                        {delta > 0 ? "+" : ""}{delta}%
                    </span>
                )}
            </div>
        </div>
    );
}

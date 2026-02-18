"use client";

import { Typography } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

interface CustomizationProps {
    ratio: "9:16" | "16:9" | "1:1";
    onRatioChange: (r: "9:16" | "16:9" | "1:1") => void;
}

export function Customization({ ratio, onRatioChange }: CustomizationProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Aspect Ratio */}
            <div className="space-y-6">
                <div>
                    <Typography variant="h3" className="mb-1">Format</Typography>
                    <Typography variant="body" className="text-text-2">Choose the aspect ratio for your video.</Typography>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div
                        onClick={() => onRatioChange("9:16")}
                        className={cn(
                            "cursor-pointer flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all",
                            ratio === "9:16"
                                ? "border-accent bg-accent/5"
                                : "border-border-0 bg-bg-1 hover:border-border-1"
                        )}
                    >
                        <div className="w-8 h-12 border-2 border-current rounded-sm opacity-50" />
                        <span className="text-[13px] font-medium">9:16 (Story)</span>
                    </div>

                    <div
                        onClick={() => onRatioChange("16:9")}
                        className={cn(
                            "cursor-pointer flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all",
                            ratio === "16:9"
                                ? "border-accent bg-accent/5"
                                : "border-border-0 bg-bg-1 hover:border-border-1"
                        )}
                    >
                        <div className="w-12 h-8 border-2 border-current rounded-sm opacity-50" />
                        <span className="text-[13px] font-medium">16:9 (Landscape)</span>
                    </div>

                    <div
                        onClick={() => onRatioChange("1:1")}
                        className={cn(
                            "cursor-pointer flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all",
                            ratio === "1:1"
                                ? "border-accent bg-accent/5"
                                : "border-border-0 bg-bg-1 hover:border-border-1"
                        )}
                    >
                        <div className="w-10 h-10 border-2 border-current rounded-sm opacity-50" />
                        <span className="text-[13px] font-medium">1:1 (Square)</span>
                    </div>
                </div>
            </div>

            {/* Background */}
            <div className="space-y-6">
                <div>
                    <Typography variant="h3" className="mb-1">Background</Typography>
                    <Typography variant="body" className="text-text-2">Select a background for your actor.</Typography>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {/* Upload */}
                    <div className="aspect-video border-2 border-dashed border-border-0 rounded-lg flex flex-col items-center justify-center text-text-3 hover:text-text-1 hover:bg-bg-1 hover:border-accent/40 cursor-pointer transition-colors">
                        <Upload size={20} className="mb-2" />
                        <span className="text-[12px] font-medium">Upload Custom</span>
                    </div>

                    {/* Stock 1 */}
                    <div className="relative aspect-video bg-neutral-800 rounded-lg overflow-hidden cursor-pointer group border-2 border-transparent hover:border-accent">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900" />
                        <span className="absolute bottom-2 left-2 text-[10px] text-white font-medium bg-black/40 px-1.5 rounded">Gradient</span>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>

                    {/* Stock 2 */}
                    <div className="relative aspect-video bg-neutral-100 rounded-lg overflow-hidden cursor-pointer group border-2 border-transparent hover:border-accent">
                        <div className="absolute inset-0 bg-white" />
                        <div className="absolute inset-0 flex items-center justify-center text-black/20 font-bold text-4xl">OFFICE</div>
                        <span className="absolute bottom-2 left-2 text-[10px] text-black/60 font-medium bg-white/80 px-1.5 rounded">Office Blur</span>
                    </div>

                    {/* Stock 3 */}
                    <div className="relative aspect-video bg-neutral-800 rounded-lg overflow-hidden cursor-pointer group border-2 border-transparent hover:border-accent">
                        <div className="absolute inset-0 bg-[#F5F5F7]" />
                        <span className="absolute bottom-2 left-2 text-[10px] text-black/60 font-medium bg-white/80 px-1.5 rounded">Studio White</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

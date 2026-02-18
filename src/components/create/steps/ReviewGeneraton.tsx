"use client";

import { Typography } from "@/components/ui/Typography";
import { CampaignState } from "@/app/dashboard/create/page";
import { Check, Clock, Coins } from "lucide-react";
import Image from "next/image";

interface ReviewProps {
    campaign: CampaignState;
}

export function ReviewGeneraton({ campaign }: ReviewProps) {
    return (
        <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center mb-8">
                <Typography variant="h3" className="mb-2">Ready to Generate?</Typography>
                <Typography variant="body" className="text-text-2">
                    Review your campaign details below. This will deduct 1 credit from your balance.
                </Typography>
            </div>

            <div className="bg-bg-1 border border-border-0 rounded-2xl p-6 md:p-8">
                <div className="flex gap-6 items-start">
                    {/* Preview Thumbnail */}
                    <div className="relative w-24 h-32 md:w-32 md:h-44 rounded-lg overflow-hidden shrink-0 shadow-sm border border-border-1 bg-gray-100">
                        {campaign.actorImage && (
                            <Image
                                src={campaign.actorImage}
                                alt="Actor Preview"
                                fill
                                className="object-cover"
                            />
                        )}
                        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 text-white text-[10px] font-bold rounded">
                            {campaign.ratio}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-[12px] text-text-3 font-medium uppercase tracking-wider mb-1">Actor</p>
                                <p className="font-semibold text-text-0">{campaign.actorName || "Selected Actor"}</p>
                            </div>
                            <div>
                                <p className="text-[12px] text-text-3 font-medium uppercase tracking-wider mb-1">Duration (Est.)</p>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={14} className="text-text-2" />
                                    <p className="font-semibold text-text-0">~0:30s</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-[12px] text-text-3 font-medium uppercase tracking-wider mb-1">Script</p>
                            <div className="bg-bg-2 p-3 rounded-lg text-[13px] leading-relaxed text-text-1 italic line-clamp-3">
                                &quot;{campaign.script}&quot;
                            </div>
                        </div>

                        <div className="flex items-center gap-2 p-3 bg-accent/5 border border-accent/20 rounded-lg">
                            <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center shrink-0">
                                <Check size={12} className="text-white" strokeWidth={3} />
                            </div>
                            <p className="text-[13px] text-text-1">
                                <span className="font-semibold text-accent">Optimization Active:</span> Eye contact correction & lip-sync enabled.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 text-[#B8860B] rounded-full text-[13px] font-bold">
                    <Coins size={16} fill="currentColor" />
                    Total Cost: 1 Credit
                </div>
            </div>
        </div>
    );
}

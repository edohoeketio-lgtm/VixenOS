"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WizardStepper } from "@/components/create/WizardStepper";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Steps
import { ActorSelection } from "@/components/create/steps/ActorSelection";
import { ScriptInput } from "@/components/create/steps/ScriptInput";
import { Customization } from "@/components/create/steps/Customization";
import { ReviewGeneraton } from "@/components/create/steps/ReviewGeneraton";

// Define strict types for step props if needed, but here we just ensure the callbacks are typed
interface Actor {
    id: string;
    name: string;
    image: string;
}

const STEPS = ["Select Actor", "Write Script", "Customize", "Review"];

export type CampaignState = {
    actorId: string | null;
    script: string;
    ratio: "9:16" | "16:9" | "1:1";
    backgroundId: string | null;
    voiceId: string | null;
    actorName?: string; // For review display
    actorImage?: string; // For review display
};

export default function CreateCampaignPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(1);
    const [campaign, setCampaign] = useState<CampaignState>({
        actorId: null,
        script: "",
        ratio: "9:16",
        backgroundId: null,
        voiceId: null
    });

    const nextStep = () => {
        if (currentStep < STEPS.length) {
            setCurrentStep(c => c + 1);
        } else {
            // Submit
            toast.success("Campaign generation started!");
            router.push("/dashboard/video-ads");
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(c => c - 1);
        } else {
            router.back();
        }
    };

    // Validation for Next button
    const canProceed = () => {
        if (currentStep === 1) return !!campaign.actorId;
        if (currentStep === 2) return campaign.script.length > 10;
        return true;
    };

    return (
        <div className="container max-w-5xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="mb-8">
                <WizardStepper currentStep={currentStep} steps={STEPS} />
            </div>

            {/* Content Area */}
            <div className="min-h-[500px] mb-8 relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="h-full"
                    >
                        {currentStep === 1 && (
                            <ActorSelection
                                selectedActor={campaign.actorId}
                                onSelect={(actor: Actor) => setCampaign(prev => ({ ...prev, actorId: actor.id, actorName: actor.name, actorImage: actor.image }))}
                            />
                        )}
                        {currentStep === 2 && (
                            <ScriptInput
                                script={campaign.script}
                                onChange={(val: string) => setCampaign(prev => ({ ...prev, script: val }))}
                                voiceId={campaign.voiceId}
                                onVoiceSelect={(id: string) => setCampaign(prev => ({ ...prev, voiceId: id }))}
                            />
                        )}
                        {currentStep === 3 && (
                            <Customization
                                ratio={campaign.ratio}
                                onRatioChange={(r: "9:16" | "16:9" | "1:1") => setCampaign(prev => ({ ...prev, ratio: r }))}
                            />
                        )}
                        {currentStep === 4 && (
                            <ReviewGeneraton campaign={campaign} />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            <div className="flex items-center justify-between border-t border-border-0 pt-6">
                <Button variant="ghost" onClick={prevStep} className="gap-2">
                    <ChevronLeft size={16} />
                    Back
                </Button>

                <Button
                    variant="primary"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="gap-2 min-w-[140px]"
                >
                    {currentStep === STEPS.length ? "Generate Video" : "Next Step"}
                    {currentStep !== STEPS.length && <ChevronRight size={16} />}
                </Button>
            </div>
        </div>
    );
}

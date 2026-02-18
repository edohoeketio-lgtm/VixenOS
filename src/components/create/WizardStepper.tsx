"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface WizardStepperProps {
    currentStep: number;
    steps: string[];
}

export function WizardStepper({ currentStep, steps }: WizardStepperProps) {
    return (
        <div className="w-full mb-8">
            <div className="flex items-center justify-between relative">
                {/* Background Line */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-border-1 -z-10" />

                {/* Active Line */}
                <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-accent -z-10"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />

                {steps.map((step, index) => {
                    const stepNum = index + 1;
                    const isActive = stepNum === currentStep;
                    const isCompleted = stepNum < currentStep;

                    return (
                        <div key={step} className="flex flex-col items-center gap-2 bg-bg-0 px-2 cursor-default">
                            <motion.div
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.1 : 1,
                                    borderColor: isActive || isCompleted ? "var(--accent)" : "var(--border-1)",
                                    backgroundColor: isActive || isCompleted ? "var(--bg-0)" : "var(--bg-1)",
                                }}
                                className={cn(
                                    "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300",
                                    (isActive || isCompleted) ? "border-accent text-accent" : "border-border-1 text-text-3"
                                )}
                            >
                                {isCompleted ? (
                                    <Check size={14} strokeWidth={3} />
                                ) : (
                                    <span className="text-[12px] font-bold">{stepNum}</span>
                                )}
                            </motion.div>
                            <p className={cn(
                                "text-[12px] font-medium transition-colors duration-300 absolute -bottom-6 w-32 text-center",
                                isActive ? "text-text-0" : "text-text-3"
                            )}>
                                {step}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { Navbar } from "@/components/marketing/Navbar";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Footer } from "@/components/marketing/Footer";
import { Copy, Sparkles, Check } from "lucide-react";

const EXAMPLE_HOOKS = [
    "This one simple change doubled our ROAS in 24 hours…",
    "Stop scrolling if you are still using traditional UGC sets.",
    "I found the ultimate hack for [Your Industry] that nobody is talking about.",
    "The secret to scaling your brand is not more spend — it is this.",
];

export default function ToolPage() {
    const [input, setInput] = useState("");
    const [hooks, setHooks] = useState<string[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const generateHooks = () => {
        if (!input) return;
        setHooks(EXAMPLE_HOOKS.map((h) => h.replace("[Your Industry]", input)));
    };

    const copyHook = (hook: string, index: number) => {
        navigator.clipboard.writeText(hook);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <main className="min-h-screen bg-bg-0">
            <Navbar />

            <section className="pt-32 pb-20 md:pt-44 md:pb-28">
                <Container className="max-w-3xl text-center">
                    <Typography variant="micro" className="text-accent mb-5">Free Tool</Typography>
                    <Typography variant="h1" className="mb-6">AI Hook Generator</Typography>
                    <Typography variant="body-lg" className="text-text-2 max-w-xl mx-auto">
                        Stuck on your first 3 seconds? Generate scroll-stopping hooks tailored to your brand.
                    </Typography>
                </Container>
            </section>

            <section className="pb-32">
                <Container className="max-w-2xl">
                    <Card className="p-6 md:p-8 shadow-md">
                        <div className="space-y-4">
                            <div>
                                <label className="text-[13px] font-semibold text-text-0 mb-1.5 block">
                                    Your brand or product
                                </label>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="e.g. Organic Skincare, SaaS for Founders"
                                    className="w-full h-11 bg-bg-1 border border-border-0 rounded-r-lg px-4 text-[14px] text-text-0 placeholder:text-text-3 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all"
                                />
                            </div>
                            <Button onClick={generateHooks} disabled={!input} className="w-full">
                                <Sparkles size={16} />
                                Generate hooks
                            </Button>
                        </div>
                    </Card>

                    {hooks.length > 0 && (
                        <div className="mt-8 space-y-3">
                            {hooks.map((hook, i) => (
                                <Card key={i} className="p-5 flex items-start justify-between gap-4 hover:shadow-md transition-shadow">
                                    <p className="text-[15px] text-text-1 leading-relaxed">{hook}</p>
                                    <button
                                        onClick={() => copyHook(hook, i)}
                                        className="shrink-0 p-1.5 text-text-3 hover:text-text-0 transition-colors rounded-r-md hover:bg-bg-1"
                                    >
                                        {copiedIndex === i ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                                    </button>
                                </Card>
                            ))}
                        </div>
                    )}
                </Container>
            </section>

            <Footer />
        </main>
    );
}

import { Navbar } from "@/components/marketing/Navbar";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { CTAStrip } from "@/components/marketing/CTAStrip";
import { Footer } from "@/components/marketing/Footer";
import { Check, X } from "lucide-react";

export default function IndustryPage() {
    return (
        <main className="min-h-screen bg-bg-0">
            <Navbar />

            <section className="pt-32 pb-20 md:pt-44 md:pb-28">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <Typography variant="micro" className="text-accent mb-5">Industries</Typography>
                        <Typography variant="h1" className="mb-6">
                            Built for E-commerce
                        </Typography>
                        <Typography variant="body-lg" className="text-text-2">
                            Scale your winning creative across TikTok and Meta. The only AI UGC solution purpose-built for direct-response e-commerce brands.
                        </Typography>
                    </div>
                </Container>
            </section>

            <section className="section-padding bg-bg-1">
                <Container>
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <Typography variant="h2" className="mb-4">
                            Stop wasting time on the old playbook
                        </Typography>
                        <Typography variant="body" className="text-text-2">
                            Traditional UGC production is slow, expensive, and unpredictable. VixenOS changes everything.
                        </Typography>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Old Way — dark, muted, struck-through */}
                        <div className="relative rounded-2xl bg-[#1A1A1A] p-8 md:p-10 overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full" />
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-2 h-2 rounded-full bg-red-400" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-red-400">The old way</span>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    { text: "Expensive talent procurement", sub: "$2,000–$10,000 per creator" },
                                    { text: "Weeks of production lead time", sub: "Briefing → filming → editing → revisions" },
                                    { text: "High creative fatigue", sub: "Same faces, same hooks, declining ROAS" },
                                    { text: "Limited localization", sub: "Re-shoot for every new market" },
                                    { text: "No performance data", sub: "Guessing what resonates" },
                                ].map(item => (
                                    <li key={item.text} className="flex gap-3.5 items-start">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center shrink-0">
                                            <X size={11} strokeWidth={3} className="text-red-400" />
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-white/60 line-through decoration-white/20">{item.text}</span>
                                            <p className="text-[12px] text-white/30 mt-0.5">{item.sub}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* With Syntra — bright, confident */}
                        <div className="relative rounded-2xl bg-white border-2 border-accent/20 p-8 md:p-10 overflow-hidden shadow-lg shadow-accent/5">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full" />
                            <div className="flex items-center gap-2 mb-8">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-accent">With VixenOS</span>
                            </div>
                            <ul className="space-y-6">
                                {[
                                    { text: "Unlimited AI actors on demand", sub: "1,000+ diverse, photorealistic creators" },
                                    { text: "Ads ready in under 5 minutes", sub: "Script → AI actor → final ad, instantly" },
                                    { text: "Daily creative testing at scale", sub: "Launch 50+ variants per week" },
                                    { text: "30+ languages, one click", sub: "Perfect lip-sync in every market" },
                                    { text: "Built-in performance analytics", sub: "Know exactly what converts" },
                                ].map(item => (
                                    <li key={item.text} className="flex gap-3.5 items-start">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                            <Check size={11} strokeWidth={3} className="text-emerald-500" />
                                        </div>
                                        <div>
                                            <span className="text-[15px] text-text-0 font-medium">{item.text}</span>
                                            <p className="text-[12px] text-text-3 mt-0.5">{item.sub}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="section-padding">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {[
                            { value: "+45%", label: "Average CTR increase" },
                            { value: "−30%", label: "Reduction in CPA" },
                            { value: "< 5min", label: "Script to ad delivery" },
                        ].map((stat) => (
                            <Card key={stat.value} className="p-10 md:p-12">
                                <p className="text-4xl md:text-5xl font-bold text-accent tracking-tight mb-3">{stat.value}</p>
                                <p className="text-[14px] text-text-2">{stat.label}</p>
                            </Card>
                        ))}
                    </div>
                </Container>
            </section>

            <CTAStrip />
            <Footer />
        </main>
    );
}

"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Check, CreditCard, Download, Zap } from "lucide-react";
import { toast } from "sonner";

export default function BillingPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <Typography variant="h2" className="mb-1">Billing & usage</Typography>
            <Typography variant="body" className="text-text-2 mb-8">
                Manage your subscription, payment methods, and billing usage.
            </Typography>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Current Plan */}
                <div className="md:col-span-2 space-y-6">
                    <section className="bg-white rounded-xl border border-border-0 shadow-sm p-6">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-lg font-bold text-text-0 mb-1">Professional Plan</h3>
                                <p className="text-[14px] text-text-2">Billed monthly • Next invoice Dec 24, 2026</p>
                            </div>
                            <span className="bg-accent/10 text-accent text-[12px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Active</span>
                        </div>

                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-3xl font-bold text-text-0">$49</span>
                            <span className="text-text-2">/month</span>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-[13px] font-medium mb-2">
                                <span>Video Credits</span>
                                <span>850 / 1,000 used</span>
                            </div>
                            <div className="h-2 w-full bg-bg-2 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "85%" }}
                                    transition={{ duration: 1, ease: "circOut" }}
                                    className="h-full bg-gradient-to-r from-accent to-purple-500"
                                />
                            </div>
                            <p className="text-[12px] text-text-3">Credits reset in 14 days.</p>
                        </div>

                        <div className="flex gap-4">
                            <Button variant="outline" onClick={() => toast.info("Refreshing usage metrics...")}>Update Metrics</Button>
                            <Button variant="secondary" onClick={() => toast.error("Please contact support to cancel")}>Cancel Subscription</Button>
                        </div>
                    </section>

                    {/* Payment Method */}
                    <section className="bg-white rounded-xl border border-border-0 shadow-sm p-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-white/90">
                                <CreditCard size={16} />
                            </div>
                            <div>
                                <p className="text-[14px] font-medium text-text-0">Visa ending in 4242</p>
                                <p className="text-[12px] text-text-3">Expiry 12/28</p>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" onClick={() => toast.info("Payment method modal")}>Edit</Button>
                    </section>
                </div>

                {/* Upgrade Card */}
                <div>
                    <div className="bg-[#050505] rounded-xl p-6 text-white h-full flex flex-col">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4 text-[#FFD700]">
                            <Zap size={20} fill="currentColor" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Upgrade to Enterprise</h3>
                        <p className="text-white/70 text-[13px] mb-6 leading-relaxed">
                            Get unlimited credits, custom AI actors, and dedicated support for your agency.
                        </p>
                        <ul className="space-y-3 mb-8 flex-1">
                            {["Unlimited generation", "Custom Voice Clones", "API Access", "SSO & Priority Support"].map((feat) => (
                                <li key={feat} className="flex items-center gap-3 text-[13px]">
                                    <Check size={14} className="text-[#FFD700]" />
                                    {feat}
                                </li>
                            ))}
                        </ul>
                        <Button className="w-full bg-white text-black hover:bg-white/90" onClick={() => toast.success("Sales team notified!")}>Contact Sales</Button>
                    </div>
                </div>
            </div>

            {/* Invoices */}
            <section className="bg-white rounded-xl border border-border-0 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-border-0">
                    <h3 className="font-semibold text-text-0">Invoice History</h3>
                </div>
                <div className="divide-y divide-border-0">
                    {[
                        { date: "Nov 24, 2026", amount: "$49.00", status: "Paid" },
                        { date: "Oct 24, 2026", amount: "$49.00", status: "Paid" },
                        { date: "Sep 24, 2026", amount: "$49.00", status: "Paid" },
                    ].map((inv, i) => (
                        <div key={i} className="flex items-center justify-between px-6 py-4 hover:bg-bg-1/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-bg-2 rounded-lg text-text-2">
                                    <Download size={16} />
                                </div>
                                <div>
                                    <p className="text-[14px] font-medium text-text-0">Invoice #{1024 - i}</p>
                                    <p className="text-[12px] text-text-3">{inv.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className="text-[14px] font-medium text-text-0">{inv.amount}</span>
                                <span className="text-[12px] font-medium bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full">{inv.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { User, Bell, Key, Image as ImageIcon, Mail, Shield, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

const TABS = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "api", label: "API Keys", icon: Key },
];

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="max-w-4xl mx-auto">
            <Typography variant="h2" className="mb-1">Settings</Typography>
            <Typography variant="body" className="text-text-2 mb-8">
                Manage your profile, preferences, and API access.
            </Typography>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Nav */}
                <div className="w-full md:w-64 flex-shrink-0">
                    <nav className="flex flex-col gap-1">
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[14px] font-medium transition-all ${activeTab === tab.id
                                    ? "bg-white text-text-0 shadow-sm border border-border-0"
                                    : "text-text-2 hover:text-text-0 hover:bg-bg-2"
                                    }`}
                            >
                                <tab.icon size={18} />
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Content Area */}
                <div className="flex-1">
                    <AnimatePresence mode="wait">
                        {activeTab === "profile" && <ProfileSettings key="profile" />}
                        {activeTab === "notifications" && <NotificationSettings key="notification" />}
                        {activeTab === "api" && <ApiSettings key="api" />}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

function ProfileSettings() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            {/* Avatar */}
            <section className="bg-white rounded-xl border border-border-0 p-6 shadow-sm">
                <h3 className="font-semibold text-text-0 mb-4">Public Profile</h3>
                <div className="flex items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-bg-2 flex items-center justify-center border border-border-0 relative overflow-hidden group cursor-pointer">
                        <User size={32} className="text-text-3" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ImageIcon size={20} className="text-white" />
                        </div>
                    </div>
                    <div>
                        <div className="flex gap-3 mb-2">
                            <Button variant="secondary" size="sm" onClick={() => toast.info("Opening file picker...")}>Change Avatar</Button>
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50" onClick={() => toast.success("Avatar removed")}>Remove</Button>
                        </div>
                        <p className="text-[12px] text-text-3">JPG, GIF or PNG. 1MB max.</p>
                    </div>
                </div>
            </section>

            {/* Personal Info */}
            <section className="bg-white rounded-xl border border-border-0 p-6 shadow-sm space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[13px] font-medium text-text-1 mb-1.5">First Name</label>
                        <input type="text" defaultValue="John" className="w-full h-10 px-3 bg-bg-1 border border-border-0 rounded-lg text-[14px] focus:outline-none focus:border-accent/30" />
                    </div>
                    <div>
                        <label className="block text-[13px] font-medium text-text-1 mb-1.5">Last Name</label>
                        <input type="text" defaultValue="Doe" className="w-full h-10 px-3 bg-bg-1 border border-border-0 rounded-lg text-[14px] focus:outline-none focus:border-accent/30" />
                    </div>
                </div>
                <div>
                    <label className="block text-[13px] font-medium text-text-1 mb-1.5">Email Address</label>
                    <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-3" />
                        <input type="email" defaultValue="john@company.com" className="w-full h-10 pl-10 pr-3 bg-bg-1 border border-border-0 rounded-lg text-[14px] focus:outline-none focus:border-accent/30" />
                    </div>
                </div>
                <div className="pt-2 flex justify-end">
                    <Button variant="primary" onClick={() => toast.success("Profile settings saved")}>Save Changes</Button>
                </div>
            </section>
        </motion.div>
    );
}

function NotificationSettings() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
        >
            <section className="bg-white rounded-xl border border-border-0 p-6 shadow-sm divide-y divide-border-0">
                {[
                    { title: "Campaign Completed", desc: "Get notified when your video generation finishes.", default: true },
                    { title: "New Features", desc: "Weekly digest of new AI actors and tools.", default: true },
                    { title: "Marketing Emails", desc: "Receive tips and tricks for better ads.", default: false },
                    { title: "Plan Usage", desc: "Alert when you hit 80% of your credit limit.", default: true },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                        <div>
                            <h4 className="text-[14px] font-medium text-text-0">{item.title}</h4>
                            <p className="text-[12px] text-text-2">{item.desc}</p>
                        </div>
                        <Toggle defaultChecked={item.default} />
                    </div>
                ))}
            </section>
        </motion.div>
    );
}

function ApiSettings() {
    const [visible, setVisible] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-xl border border-border-0 p-6 shadow-sm"
        >
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    <Shield size={20} />
                </div>
                <div>
                    <h3 className="font-semibold text-text-0">API Access</h3>
                    <p className="text-[13px] text-text-2">Manage your secret keys for external integration.</p>
                </div>
            </div>

            <div className="bg-bg-1 border border-border-0 rounded-lg p-4 mb-6">
                <label className="block text-[12px] font-bold uppercase tracking-wider text-text-3 mb-2">Secret Key</label>
                <div className="flex items-center gap-2">
                    <code className="flex-1 font-mono text-[13px] text-text-1">
                        {visible ? "sk_live_************************" : "••••••••••••••••••••••••••••••••"}
                    </code>
                    <button onClick={() => setVisible(!visible)} className="text-text-3 hover:text-text-0">
                        {visible ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <Button variant="secondary" size="sm" onClick={() => toast.success("Copied to clipboard")}>Copy</Button>
                </div>
            </div>

            <Button variant="outline" className="text-red-500 border-red-200 hover:bg-red-50 hover:border-red-300" onClick={() => toast.error("Key rolled. Integration may be interrupted.")}>
                Roll Key
            </Button>
        </motion.div>
    );
}

function Toggle({ defaultChecked }: { defaultChecked: boolean }) {
    const [checked, setChecked] = useState(defaultChecked);
    return (
        <button
            onClick={() => setChecked(!checked)}
            className={`w-11 h-6 rounded-full transition-colors relative ${checked ? "bg-accent" : "bg-border-0"}`}
        >
            <div className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${checked ? "translate-x-5" : "translate-x-0"}`} />
        </button>
    );
}

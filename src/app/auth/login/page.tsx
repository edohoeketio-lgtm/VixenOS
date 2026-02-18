"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="mb-8">
                <Typography variant="h3" className="mb-2">Welcome back</Typography>
                <Typography variant="body" className="text-text-2">
                    Enter your credentials to access your dashboard.
                </Typography>
            </div>

            {/* Social Auth Mocks */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <Button variant="ghost" className="border border-border-0 flex items-center justify-center gap-2 font-medium">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Google
                </Button>
                <Button variant="ghost" className="border border-border-0 flex items-center justify-center gap-2 font-medium">
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17.05 20.28c-.96.95-2.04 1.44-3.12 1.44-1.2 0-2.26-.5-3.18-.5-.92 0-2.08.52-3.23.52-1.2 0-2.39-.62-3.41-1.63C2.07 18.06 1 15.35 1 12.67c0-2.68 1.07-5.32 3.12-7.38 1.01-1.01 2.22-1.64 3.44-1.64 1.16 0 2.33.52 3.24.52.91 0 2.06-.52 3.25-.52 1.25 0 2.49.65 3.51 1.66.97.96 1.47 2.03 1.47 3.12 0 1.09-.5 2.15-.5 3.1 0 .95.53 1.99.53 3.08 0 1.22-.66 2.45-1.61 3.39z" />
                        <path fill="currentColor" d="M13.43 1.26a3.5 3.5 0 01-1.55 1.76 3.52 3.52 0 01-1.76 1.55c.34-.69.76-1.32 1.26-1.89a3.52 3.52 0 011.89-1.26z" />
                    </svg>
                    Apple
                </Button>
            </div>

            <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border-0" />
                </div>
                <div className="relative flex justify-center text-[11px] uppercase tracking-wider font-bold">
                    <span className="bg-bg-0 px-4 text-text-3">Or continue with email</span>
                </div>
            </div>

            {/* Email Form */}
            <form className="space-y-4 mb-8" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-[13px] font-medium text-text-1 mb-2">Email address</label>
                    <input
                        type="email"
                        placeholder="name@company.com"
                        className="w-full h-11 px-4 bg-bg-1 border border-border-0 rounded-lg text-[14px] focus:outline-none focus:border-accent/30 transition-colors"
                    />
                </div>
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="block text-[13px] font-medium text-text-1">Password</label>
                        <a href="#" className="text-[13px] text-accent hover:underline">Forgot?</a>
                    </div>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full h-11 px-4 bg-bg-1 border border-border-0 rounded-lg text-[14px] focus:outline-none focus:border-accent/30 transition-colors"
                    />
                </div>
                <Button variant="primary" className="w-full h-11 justify-center mt-6">
                    Sign in <ArrowRight size={16} className="ml-2" />
                </Button>
            </form>

            <p className="text-center text-[14px] text-text-2">
                Don&apos;t have an account?{" "}
                <Link href="/auth/signup" className="text-accent font-semibold hover:underline">Start free trial</Link>
            </p>
        </motion.div>
    );
}

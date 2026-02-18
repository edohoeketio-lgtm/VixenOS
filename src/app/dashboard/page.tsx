"use client";

import { motion } from "framer-motion";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                <Typography variant="h2" className="mb-2">Welcome back, User</Typography>
                <Typography variant="body" className="text-text-2">
                    Here&apos;s what&apos;s happening with your campaigns today.
                </Typography>
            </motion.div>

            {/* Empty State / Dashboard Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="border border-border-0 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center bg-bg-1/50 min-h-[400px]"
            >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <Plus size={32} className="text-accent" />
                </div>
                <Typography variant="h3" className="mb-3">Create your first ad</Typography>
                <Typography variant="body" className="text-text-2 max-w-md mb-8">
                    You haven&apos;t generated any video ads yet. Select an actor, write a script, and get your first video in minutes.
                </Typography>
                <Button variant="primary" size="lg">
                    Create New Campaign
                </Button>
            </motion.div>
        </div>
    );
}

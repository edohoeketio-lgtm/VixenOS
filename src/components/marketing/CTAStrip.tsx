"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function CTAStrip() {
    return (
        <section className="section-padding bg-text-0 text-white">
            <Container className="text-center">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Typography variant="h1" className="text-white">
                        Ready to scale your creative?
                    </Typography>
                    <Typography variant="body-lg" as="p" className="text-white/60 max-w-xl mx-auto">
                        Join 500+ performance marketing teams creating winning ads with AI. Start your free trial today.
                    </Typography>
                    <div className="flex flex-wrap justify-center gap-4 pt-2">
                        <Link href="/auth/signup">
                            <Button
                                size="lg"
                                className="bg-white text-text-0 hover:bg-white/90 shadow-lg hover:shadow-xl"
                            >
                                Start free trial
                                <ArrowRight size={16} />
                            </Button>
                        </Link>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="text-white/70 hover:text-white hover:bg-white/10"
                        >
                            Talk to sales
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}

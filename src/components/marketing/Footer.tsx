import { Container } from "@/components/ui/Container";

const FOOTER_LINKS = [
    {
        title: "Product",
        links: ["AI UGC Generator", "Actor Library", "Emotion Control", "Localization", "AI Agent"],
    },
    {
        title: "Solutions",
        links: ["E-commerce", "SaaS", "Agencies", "Direct Response"],
    },
    {
        title: "Resources",
        links: ["Hook Generator", "Blog", "Case Studies", "Documentation"],
    },
    {
        title: "Company",
        links: ["About", "Careers", "Security", "Privacy", "Terms"],
    },
];

export function Footer() {
    return (
        <footer className="py-16 md:py-20 border-t border-border-0">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-16">
                    <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
                        <a href="/" className="text-[17px] font-bold tracking-tight text-text-0">
                            VixenOS<span className="text-accent">.</span>
                        </a>
                        <p className="mt-3 text-[13px] text-text-3 leading-relaxed max-w-[180px]">
                            AI-powered creative production for performance marketers.
                        </p>
                    </div>

                    {FOOTER_LINKS.map((group) => (
                        <div key={group.title}>
                            <p className="text-[13px] font-semibold text-text-0 mb-4">{group.title}</p>
                            <ul className="space-y-2.5">
                                {group.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-[13px] text-text-2 hover:text-text-0 transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border-0">
                    <p className="text-[12px] text-text-3">
                        © 2026 VixenOS. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {["Twitter", "LinkedIn", "TikTok"].map((s) => (
                            <a
                                key={s}
                                href="#"
                                className="text-[12px] text-text-3 hover:text-text-0 transition-colors"
                            >
                                {s}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}

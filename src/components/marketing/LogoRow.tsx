"use client";

import { Container } from "@/components/ui/Container";

const LOGOS = ["Meta", "TikTok", "Snapchat", "Shopify", "Klaviyo", "HubSpot", "Vayner", "Growth"];

export function LogoRow() {
  return (
    <section className="py-12 border-y border-border-0">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16">
          {LOGOS.map((logo) => (
            <span
              key={logo}
              className="text-[13px] font-semibold text-text-3 hover:text-text-1 transition-colors select-none"
            >
              {logo}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Navbar } from "@/components/marketing/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { LogoRow } from "@/components/marketing/LogoRow";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { ActorGrid } from "@/components/marketing/ActorGrid";
import { EmotionControl } from "@/components/marketing/EmotionControl";
import { Localization } from "@/components/marketing/Localization";
import { WorkflowBlock } from "@/components/marketing/WorkflowBlock";
import { CTAStrip } from "@/components/marketing/CTAStrip";
import { FAQ } from "@/components/marketing/FAQ";
import { Footer } from "@/components/marketing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-bg-0">
      <Navbar />
      <Hero />
      <LogoRow />
      <FeatureGrid />
      <ActorGrid />
      <EmotionControl />
      <Localization />
      <WorkflowBlock />
      <FAQ />
      <CTAStrip />
      <Footer />
    </main>
  );
}

import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { useRoute } from "../hooks/useRoute";
import Navbar from "../components/layout/Navbar";
import ThemeToggle from "../components/ui/ThemeToggle";
import HeroSection from "../components/sections/HeroSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import FaqSection from "../components/sections/FaqSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ClosingCtaSection from "../components/sections/ClosingCtaSection";
import Footer from "../components/layout/Footer";
import LegalPage from "../pages/LegalPage";
import PolicyPage from "../pages/PolicyPage";
import CampaignsPage from "../pages/CampaignsPage";
import CampaignDetailPage from "../pages/CampaignDetailPage";
import ContactPage from "../pages/ContactPage";
import GuidePage from "../pages/GuidePage";

function FloatingThemeToggle() {
  return (
    <div
      className="fixed z-[60]"
      style={{
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        right: "max(1.25rem, env(safe-area-inset-right))",
      }}
    >
      <ThemeToggle className="h-11 w-11 shadow-lg shadow-black/10 dark:shadow-black/40" />
    </div>
  );
}

function AppShell({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <FloatingThemeToggle />
      <Analytics />
    </>
  );
}

export default function App() {
  const path = useRoute();

  if (path === "/terms")
    return (
      <AppShell>
        <LegalPage kind="terms" />
      </AppShell>
    );
  if (path === "/privacy")
    return (
      <AppShell>
        <LegalPage kind="privacy" />
      </AppShell>
    );
  if (path === "/policies")
    return (
      <AppShell>
        <PolicyPage />
      </AppShell>
    );
  if (path.startsWith("/policies/")) {
    return (
      <AppShell>
        <PolicyPage slug={path.slice("/policies/".length)} />
      </AppShell>
    );
  }
  if (path === "/guides")
    return (
      <AppShell>
        <GuidePage />
      </AppShell>
    );
  if (path.startsWith("/guides/")) {
    return (
      <AppShell>
        <GuidePage slug={path.slice("/guides/".length)} />
      </AppShell>
    );
  }
  if (path === "/campaigns")
    return (
      <AppShell>
        <CampaignsPage />
      </AppShell>
    );
  if (path.startsWith("/campaigns/")) {
    return (
      <AppShell>
        <CampaignDetailPage slug={path.slice("/campaigns/".length)} />
      </AppShell>
    );
  }
  if (path === "/contact" || path === "/contact/partnership")
    return (
      <AppShell>
        <ContactPage />
      </AppShell>
    );

  return (
    <AppShell>
      <main
        id="top"
        className="bg-white transition-colors dark:bg-dark-bg"
        style={{ overflowX: "clip" }}
      >
        <Navbar />
        <HeroSection />
        <HowItWorksSection />
        {/* <SocialProofSection /> */}
        <FaqSection />
        <TestimonialsSection />
        <ClosingCtaSection />
        <Footer />
      </main>
    </AppShell>
  );
}

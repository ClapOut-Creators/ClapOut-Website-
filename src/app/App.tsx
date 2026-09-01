import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { useHashRoute } from "../hooks/useHashRoute";
import Navbar from "../components/layout/Navbar";
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

export default function App() {
  const hash = useHashRoute();

  // Section anchors (#faq, #how-it-works, …) clicked from a subpage land here
  // after the home page mounts, so the target only exists post-render. Images
  // loading above the target keep shifting layout for a moment, so re-align
  // a few times instead of scrolling once.
  useEffect(() => {
    if (hash.length <= 1 || hash.startsWith("#/")) return;
    const id = hash.slice(1);
    // 'instant' beats the html { scroll-behavior: smooth } rule, which would
    // otherwise leave a smooth animation aimed at a stale layout position.
    const align = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "instant", block: "start" });
    align();
    const timers = [150, 400, 800].map((ms) => setTimeout(align, ms));
    return () => timers.forEach(clearTimeout);
  }, [hash]);

  if (hash === "#/terms")
    return (
      <>
        <LegalPage kind="terms" />
        <Analytics />
      </>
    );
  if (hash === "#/privacy")
    return (
      <>
        <LegalPage kind="privacy" />
        <Analytics />
      </>
    );
  if (hash === "#/policies")
    return (
      <>
        <PolicyPage />
        <Analytics />
      </>
    );
  if (hash.startsWith("#/policies/")) {
    return (
      <>
        <PolicyPage slug={hash.slice("#/policies/".length)} />
        <Analytics />
      </>
    );
  }
  if (hash === "#/guides")
    return (
      <>
        <GuidePage />
        <Analytics />
      </>
    );
  if (hash.startsWith("#/guides/")) {
    return (
      <>
        <GuidePage slug={hash.slice("#/guides/".length)} />
        <Analytics />
      </>
    );
  }
  if (hash === "#/campaigns")
    return (
      <>
        <CampaignsPage />
        <Analytics />
      </>
    );
  if (hash.startsWith("#/campaigns/")) {
    return (
      <>
        <CampaignDetailPage slug={hash.slice("#/campaigns/".length)} />
        <Analytics />
      </>
    );
  }
  if (hash === "#/contact" || hash === "#/contact/partnership")
    return (
      <>
        <ContactPage />
        <Analytics />
      </>
    );

  return (
    <>
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
      <Analytics />
    </>
  );
}

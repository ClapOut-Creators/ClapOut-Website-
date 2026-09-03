import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { useRoute } from "../hooks/useRoute";
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
  const path = useRoute();

  if (path === "/terms")
    return (
      <>
        <LegalPage kind="terms" />
        <Analytics />
      </>
    );
  if (path === "/privacy")
    return (
      <>
        <LegalPage kind="privacy" />
        <Analytics />
      </>
    );
  if (path === "/policies")
    return (
      <>
        <PolicyPage />
        <Analytics />
      </>
    );
  if (path.startsWith("/policies/")) {
    return (
      <>
        <PolicyPage slug={path.slice("/policies/".length)} />
        <Analytics />
      </>
    );
  }
  if (path === "/campaigns")
    return (
      <>
        <CampaignsPage />
        <Analytics />
      </>
    );
  if (path.startsWith("/campaigns/")) {
    return (
      <>
        <CampaignDetailPage slug={path.slice("/campaigns/".length)} />
        <Analytics />
      </>
    );
  }
  if (path === "/contact" || path === "/contact/partnership")
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

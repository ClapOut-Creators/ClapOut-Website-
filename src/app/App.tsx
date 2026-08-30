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

export default function App() {
  const hash = useHashRoute();

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

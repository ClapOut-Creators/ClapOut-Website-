import { useHashRoute } from "../hooks/useHashRoute";
import Navbar from "../components/layout/Navbar";
import HeroSection from "../components/sections/HeroSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import SocialProofSection from "../components/sections/SocialProofSection";
import FaqSection from "../components/sections/FaqSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ClosingCtaSection from "../components/sections/ClosingCtaSection";
import Footer from "../components/layout/Footer";
import LegalPage from "../pages/LegalPage";
import CampaignsPage from "../pages/CampaignsPage";
import CampaignDetailPage from "../pages/CampaignDetailPage";
import ContactPage from "../pages/ContactPage";

export default function App() {
  const hash = useHashRoute();

  if (hash === "#/terms") return <LegalPage kind="terms" />;
  if (hash === "#/privacy") return <LegalPage kind="privacy" />;
  if (hash === "#/campaigns") return <CampaignsPage />;
  if (hash.startsWith("#/campaigns/")) {
    return <CampaignDetailPage slug={hash.slice("#/campaigns/".length)} />;
  }
  if (hash === "#/contact") return <ContactPage />;

  return (
    <main id="top" className="bg-white transition-colors dark:bg-dark-bg" style={{ overflowX: "hidden" }}>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <SocialProofSection />
      <FaqSection />
      <TestimonialsSection />
      <ClosingCtaSection />
      <Footer />
    </main>
  );
}

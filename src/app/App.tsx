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

export default function App() {
  const hash = useHashRoute();

  if (hash === "#/terms") return <LegalPage kind="terms" />;
  if (hash === "#/privacy") return <LegalPage kind="privacy" />;

  return (
    <main id="top" className="bg-white" style={{ overflowX: "hidden" }}>
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

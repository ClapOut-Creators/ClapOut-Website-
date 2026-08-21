import { useHashRoute } from '../hooks/useHashRoute';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/HeroSection';
import TextMarquee from '../components/TextMarquee';
import MarqueeSection from '../components/MarqueeSection';
import AboutSection from '../components/AboutSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CampaignsSection from '../components/CampaignsSection';
import FaqSection from '../components/FaqSection';
import FeedbackSection from '../components/FeedbackSection';
import FinalCtaSection from '../components/FinalCtaSection';
import Footer from '../components/Footer';
import LegalPage from '../pages/LegalPage';

export default function App() {
  const hash = useHashRoute();

  if (hash === '#/terms') return <LegalPage kind="terms" />;
  if (hash === '#/privacy') return <LegalPage kind="privacy" />;

  return (
    <main id="top" className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <Navbar />
      <HeroSection />
      <TextMarquee />
      <MarqueeSection />
      <AboutSection />
      <HowItWorksSection />
      <CampaignsSection />
      <FaqSection />
      <FeedbackSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}

import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import TextMarquee from './components/TextMarquee';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import CampaignsSection from './components/CampaignsSection';
import FaqSection from './components/FaqSection';
import FeedbackSection from './components/FeedbackSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import LegalPage from './components/LegalPage';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => {
      const next = window.location.hash;
      setHash(next);
      if (next.startsWith('#/')) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (hash === '#/terms') return <LegalPage kind="terms" />;
  if (hash === '#/privacy') return <LegalPage kind="privacy" />;

  return (
    <main id="top" className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
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

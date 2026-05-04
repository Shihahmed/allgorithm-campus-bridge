import Navigation from "../components/landing/Navigation";
import HeroSection from "../components/landing/HeroSection";
import PainSection from "../components/landing/PainSection";
import AudienceSection from "../components/landing/AudienceSection";
import AuthoritySection from "../components/landing/AuthoritySection";
import AgendaSection from "../components/landing/AgendaSection";
import OutcomesSection from "../components/landing/OutcomesSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import Vision2040Section from "../components/landing/Vision2040Section";
import FAQSection from "../components/landing/FAQSection";
import ReserveSection from "../components/landing/ReserveSection";
import Footer from "../components/landing/Footer";

const HERO_IMAGE = "/images/hero-main.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-offwhite pb-16 md:pb-0">
      <Navigation />
      <HeroSection heroImage={HERO_IMAGE} />
      <PainSection />
      <AudienceSection />
      <AuthoritySection />
      <AgendaSection />
      <OutcomesSection />
      <HowItWorksSection />
      <Vision2040Section />
      <FAQSection />
      <ReserveSection />
      <Footer />
    </div>
  );
}
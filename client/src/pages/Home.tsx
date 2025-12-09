import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyJoinSection from "@/components/WhyJoinSection";
import TracksSection from "@/components/TracksSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesSection from "@/components/PrizesSection";
import RulesSection from "@/components/RulesSection";
import JudgingSection from "@/components/JudgingSection";
import MentorsSection from "@/components/MentorsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WhyJoinSection />
        <TracksSection />
        <TimelineSection />
        <PrizesSection />
        <RulesSection />
        <JudgingSection />
        <MentorsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

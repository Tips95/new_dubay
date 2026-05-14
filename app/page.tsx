import BonusSection from "@/components/BonusSection";
import Destinations from "@/components/Destinations";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FounderSpotlight from "@/components/FounderSpotlight";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PricingCard from "@/components/PricingCard";
import ProgramGrid from "@/components/ProgramGrid";
import SocialProofBar from "@/components/SocialProofBar";

export default function Home() {
  return (
    <main className="bg-background text-text overflow-x-hidden">
      <Navbar />
      <Hero />
      <FounderSpotlight />
      <SocialProofBar />
      <ProgramGrid />
      <BonusSection />
      <PricingCard />
      <Destinations />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import DigniPack from "@/components/DigniPack";
import Pricing from "@/components/Pricing";
import Collection from "@/components/Collection";
import Why from "@/components/Why";
import Estate from "@/components/Estate";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <DigniPack />
        <Pricing />
        <Collection />
        <Why />
        <Estate />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
import FAQ from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import Pricing from "@/components/pricing";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}

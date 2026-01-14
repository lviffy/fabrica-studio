import { Hero } from "@/components/home/Hero";
import { ClientsSection } from "@/components/home/ClientsSection";
import { Projects } from "@/components/home/Projects";
import { Advantages } from "@/components/home/Advantages";
import { Services } from "@/components/home/Services";
import { Experiences } from "@/components/home/Experiences";
import { Pricing } from "@/components/home/Pricing";
import { FAQ } from "@/components/home/FAQ";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <ClientsSection />
      <Projects />
      {/* Wrapper for sticky scroll effect - Advantages sticks until Services ends */}
      <div className="relative">
        <Advantages />
        <Services />
      </div>
      <Experiences />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

import { Hero } from "@/components/home/Hero";
import { Projects } from "@/components/home/Projects";
import { Advantages } from "@/components/home/Advantages";
import { Services } from "@/components/home/Services";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />
      <Projects />
      <Advantages />
      <Services />
    </main>
  );
}

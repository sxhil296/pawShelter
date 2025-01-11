import Contact from "@/components/contact";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Impact from "@/components/impact";
import NeedSection from "@/components/needSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <NeedSection />
      <Impact />
      <Gallery />
      <Contact />
   
    </main>
  );
}

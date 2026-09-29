import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/features/hero";
import { About } from "@/features/about";
import { Experience } from "@/features/experience";
import { Education } from "@/features/education";
import { Work } from "@/features/work";
import { Contact } from "@/features/contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

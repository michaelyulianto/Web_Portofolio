import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OffScreen from "@/components/OffScreen";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <OffScreen />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}

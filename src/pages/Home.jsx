import useHashScroll from "../hooks/useHashScroll.jsx";
import Hero from "../sections/Hero";
import Experience from "../sections/Experience";
import CaseStudies from "../sections/CaseStudies";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

export default function Home() {
  useHashScroll();  

  return (
    <main className="mx-auto max-w-5xl px-6">
      <Hero />
      <section id="experience"><Experience /></section>
      <section id="case-studies"><CaseStudies /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
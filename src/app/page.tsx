import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ClientBar from "@/components/ClientBar";
import CaseStudy from "@/components/CaseStudy";
import Skills from "@/components/Skills";
import Philosophy from "@/components/Philosophy";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <Nav />
      <main className="relative page-enter">
        <Hero />
        <ClientBar />
        <CaseStudy />
        <Skills />
        <Philosophy />
        <Experience />
        <Contact />
      </main>
    </>
  );
}


import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <Projects />
    <About />
    <Skills />
    <Certifications />
    <Contact />
  </div>
);

export default Index;

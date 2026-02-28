import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/layouts//Hero";
import About from "@/components/layouts/About";
import Certifications from "@/components/layouts/Certifications";
import Skills from "@/components/layouts/Skills";
import Experiences from "@/components/layouts/Experiences";
import Portfolio from "@/components/layouts/Portfolio";
import Contact from "@/components/layouts/Contact";

export default function Home() {
  return (
    <main className="bg-black ">
      <div className="max-w-md mx-auto text-white flex flex-col items-center   ">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        {/* <Certifications />  */}
        <Experiences />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}
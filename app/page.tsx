import Hero from "@/components/(main)/Hero";
import Navbar from "@/components/navbar";
import Services from "@/components/(main)/Services";
import About from "@/components/(main)/About";
import Process from "@/components/(main)/Process";
import Marquee from "@/components/(main)/Marquee";
import Portfolio from "@/components/(main)/Portfolio";
import Achievements from "@/components/(main)/Achievements";
import Contact from "@/components/(main)/Contact";
import Testimonials from "@/components/(main)/Testimonials";
import Blog from "@/components/(main)/Blog";
import FAQ from "@/components/(main)/FAQ";
import Footer from "@/components/(main)/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <Marquee />
      <Portfolio />
      <Marquee />
      <Achievements />
      <Contact />
      <Testimonials />
      <Marquee />
      <Blog />
      <FAQ />
      <Marquee />
      <Footer />
    </main>
  );
}
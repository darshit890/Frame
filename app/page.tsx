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
import { client } from "@/sanity/lib/client";
import { recentPostsQuery } from "@/sanity/lib/queries";
import PortfolioDownload from "@/components/PortfolioTemorary";

export const revalidate = 60;

export default async function Home() {
  const posts = await client.fetch(recentPostsQuery);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Process />
      <Marquee />
      <PortfolioDownload />
      <Marquee />
      <Achievements />
      <Contact />
      <Testimonials />
      <Marquee />
      <Blog posts={posts} />
      <FAQ />
      <Marquee />
      <Footer />
    </main>
  );
}

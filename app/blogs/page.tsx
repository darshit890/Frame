import { client } from '@/sanity/lib/client';
import { postsQuery, categoriesQuery } from '@/sanity/lib/queries';
import BlogsClient from '@/components/(main)/BlogsClient';
import Navbar from '@/components/navbar';
import Footer from '@/components/(main)/Footer';
import Marquee from '@/components/(main)/Marquee';
import FadeIn from '@/components/ui/FadeIn';
import Link from 'next/link';

export const revalidate = 60; // Revalidate every 60 seconds

// Header Component
const BlogsHeader = () => {
  return (
    <section className="bg-[#111] pt-32 lg:pt-40 pb-20 text-center font-sans">
      <FadeIn>
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Blogs</h1>
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Link href="/" className="text-white hover:text-[#04d9ff] transition-colors">Home</Link>
          <span className="text-white/40">/</span>
          <span className="text-[#04d9ff]">Blogs</span>
        </div>
      </FadeIn>
    </section>
  );
};

export default async function BlogsPage() {
  const posts = await client.fetch(postsQuery);
  const categories = await client.fetch(categoriesQuery);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BlogsHeader />
      <Marquee />
      <BlogsClient posts={posts} categories={categories} />
      <Footer />
    </main>
  );
}
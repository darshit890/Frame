import { client } from '@/sanity/lib/client';
import { postsQuery, categoriesQuery } from '@/sanity/lib/queries';
import BlogsClient from '@/components/(main)/BlogsClient';
import Navbar from '@/components/navbar';
import Footer from '@/components/(main)/Footer';
import Marquee from '@/components/(main)/Marquee';
import FadeIn from '@/components/ui/FadeIn';
import Link from 'next/link';
import BackgroundEffect from '@/components/ui/BackgroundEffect';

export const revalidate = 60; // Revalidate every 60 seconds

// Header Component
const BlogsHeader = () => {
  return (
    <section className="bg-background pt-32 lg:pt-40 pb-20 text-center font-sans relative overflow-hidden">
      <BackgroundEffect />
      <FadeIn>
        <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">Blogs</h1>
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-primary">Blogs</span>
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
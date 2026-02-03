import { client } from '@/sanity/lib/client';
import { postQuery, postsQuery } from '@/sanity/lib/queries';
import Navbar from '@/components/navbar';
import Footer from '@/components/(main)/Footer';
import Marquee from '@/components/(main)/Marquee';
import FadeIn from '@/components/ui/FadeIn';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText, PortableTextComponents } from 'next-sanity';
import BlogSidebar from '@/components/(main)/BlogSidebar';
import BackgroundEffect from '@/components/ui/BackgroundEffect';

export const revalidate = 60;

// Portable Text Components
const ptComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold text-black mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-black mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-black mt-6 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold text-black mt-6 mb-3">{children}</h4>,
    normal: ({ children }) => <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic text-gray-700 my-6">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 mb-4 text-gray-600 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 mb-4 text-gray-600 space-y-2">{children}</ol>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="text-primary hover:underline font-medium">
          {children}
        </a>
      );
    },
  },
};

// Header Component
const BlogHeader = ({ title }: { title: string }) => {
  return (
    <section className="bg-background pt-24 lg:pt-40 pb-12 lg:pb-20 text-center font-sans relative overflow-hidden">
      <BackgroundEffect />
      <FadeIn>
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">{title}</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-medium flex-wrap">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/blogs" className="text-foreground hover:text-primary transition-colors">Blogs</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary truncate max-w-[200px]">{title}</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
  categories?: { title: string }[];
  body?: any; // Keeping any for Portable Text content as it's complex
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });
  
  if (!post) {
    return notFound();
  }

  // Fetch recent posts for sidebar
  const allPosts = await client.fetch(postsQuery);
  const recentPosts = allPosts
    .filter((p: BlogPost) => p._id !== post._id) // Exclude current post
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white font-sans">
      <BlogHeader title={post.title} />
      <Marquee />
      
      <section className="py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-20">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="relative h-[250px] lg:h-[500px] w-full rounded-2xl overflow-hidden mb-10 bg-gray-200">
                {post.mainImage?.asset?.url ? (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              {/* Meta Data */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <span className="bg-primary text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {post.categories?.[0]?.title || 'Blog'}
                </span>
                <span className="text-gray-500 text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>

              {/* Body Content */}
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary">
                {post.body ? (
                  <PortableText value={post.body} components={ptComponents} />
                ) : (
                  <p className="text-gray-500 italic">No content available for this post.</p>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <BlogSidebar 
                categories={[]} // Hide categories
                recentPosts={recentPosts}
                showSearch={false}
                showCategories={false}
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
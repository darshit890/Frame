'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../ui/Stagger';
import BackgroundEffect from '@/components/ui/BackgroundEffect';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: {
    asset?: {
      url?: string;
    };
    alt?: string;
  };
  categories?: Array<{ title: string }>;
  publishedAt: string;
  description?: string;
}

interface BlogProps {
  posts?: Post[];
}

export default function Blog({ posts = [] }: BlogProps) {
  return (
    <section className="bg-black text-white py-24 font-sans relative overflow-hidden">
      <BackgroundEffect />
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-primary"></div>
              <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">News & Blogs</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Our Latest <br />
              <span className="text-primary">News & Blogs</span>
            </h2>
          </div>

          <Link href="/blogs" className="flex items-center group">
            <span className="bg-primary text-black px-6 py-3 font-medium text-base rounded-full hover:bg-primary/90 transition-colors relative z-10" style={{ fontFamily: 'cursive' }}>
              View All Blogs
            </span>
            <span className="bg-white py-1 pl-8 pr-1 flex items-center justify-center rounded-r-full -ml-5 relative z-0">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </span>
          </Link>
        </FadeIn>

        {/* Blog Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <StaggerItem key={post._id} className="group cursor-pointer">
              <Link href={`/blog/${post.slug.current}`}>
                {/* Image Container */}
                <div className="relative h-64 w-full mb-6 rounded-3xl overflow-hidden bg-card border border-border">
                  {post.mainImage?.asset?.url ? (
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt || post.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : (
                     <div className="w-full h-full flex items-center justify-center text-muted-foreground">No Image</div>
                  )}
                  {/* Hover Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                     </div>
                  </div>
                </div>

                {/* Tags & Date */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-medium text-muted-foreground">
                  {post.categories && post.categories.length > 0 && (
                     <span className="px-3 py-1 border border-white/20 rounded-full">{post.categories[0].title}</span>
                  )}
                  {post.categories && post.categories.length > 0 && (
                     <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  )}
                  <span className="px-3 py-1 border border-white/20 rounded-full">
                    {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.description}
                  </p>
                )}
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';

import BlogSidebar from './BlogSidebar';

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
  categories?: Category[];
  publishedAt: string;
  description?: string;
  body?: any;
}

interface BlogsClientProps {
  posts: Post[];
  categories: Category[];
}

export default function BlogsClient({ posts, categories }: BlogsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (post.description && post.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory ? post.categories?.some(cat => cat.title === selectedCategory) : true;
    
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Recent posts (take first 3 from all posts)
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="w-8 h-[2px] bg-[#04d9ff]"></div>
             <span className="text-black/60 text-sm font-bold uppercase tracking-wider">News & Blogs</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Our Latest News & Blogs
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Main Content (2 cols) */}
          <div className="lg:col-span-2 space-y-12">
            {paginatedPosts.length > 0 ? (
              paginatedPosts.map((post) => (
                <FadeIn key={post._id} className="group">
                  {/* Image */}
                  <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden mb-8 bg-gray-200">
                    {post.mainImage?.asset?.url ? (
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt || post.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {post.categories?.map((cat) => (
                      <span key={cat._id} className="px-4 py-1 rounded-full text-xs font-bold text-black bg-[#04d9ff]">
                        {cat.title}
                      </span>
                    ))}
                    <span className="px-4 py-1 rounded-full text-xs font-bold text-black bg-[#04d9ff]">
                      {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4 leading-tight group-hover:text-[#04d9ff] transition-colors">
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className="text-gray-500 mb-4 leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  )}
                  <Link href={`/blog/${post.slug.current}`} className="inline-block text-[#04d9ff] font-bold border-b border-[#04d9ff] hover:text-[#00b8e6] hover:border-[#00b8e6] transition-colors">
                    Read More
                  </Link>
                </FadeIn>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg">No posts found matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
                  className="mt-4 text-[#04d9ff] font-bold hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center gap-4 pt-8">
                <button 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePageChange(i + 1)}
                    className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-colors ${
                      currentPage === i + 1
                        ? 'bg-[#04d9ff] text-black'
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            )}
          </div>
          
          {/* Sidebar (1 col) */}
          <div className="lg:col-span-1">
            <BlogSidebar 
              categories={categories}
              recentPosts={recentPosts}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
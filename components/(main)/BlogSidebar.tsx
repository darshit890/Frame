'use client';

import Image from 'next/image';
import Link from 'next/link';

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
  publishedAt: string;
}

interface BlogSidebarProps {
  categories: Category[];
  recentPosts: Post[];
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  selectedCategory?: string | null;
  setSelectedCategory?: (category: string | null) => void;
  showSearch?: boolean;
  showCategories?: boolean;
}

export default function BlogSidebar({
  categories,
  recentPosts,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  showSearch = true,
  showCategories = true
}: BlogSidebarProps) {
  return (
    <aside className="space-y-12">
      {/* Search */}
      {showSearch && setSearchQuery && (
        <div>
          <div className="flex items-center gap-3 mb-6">
             <div className="w-1 h-6 bg-[#04d9ff]"></div>
             <h3 className="text-xl font-bold text-black">Search</h3>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 rounded-lg py-4 pl-6 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-[#04d9ff] text-black placeholder-gray-400"
            />
            <button className="absolute right-4 top-4 text-gray-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Categories */}
      {showCategories && setSelectedCategory && (
        <div>
          <div className="flex items-center gap-3 mb-6">
             <div className="w-1 h-6 bg-[#04d9ff]"></div>
             <h3 className="text-xl font-bold text-black">Popular Categories</h3>
          </div>
          <div className="space-y-3">
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`block w-full text-left px-6 py-3 rounded-lg text-sm transition-colors ${
                selectedCategory === null 
                  ? 'bg-[#04d9ff] text-black' 
                  : 'bg-gray-50 text-gray-600 hover:bg-[#04d9ff] hover:text-black'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button 
                key={cat._id}
                onClick={() => setSelectedCategory(cat.title)}
                className={`block w-full text-left px-6 py-3 rounded-lg text-sm transition-colors ${
                  selectedCategory === cat.title 
                    ? 'bg-[#04d9ff] text-black' 
                    : 'bg-gray-50 text-gray-600 hover:bg-[#04d9ff] hover:text-black'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Recent Post */}
      <div>
        <div className="flex items-center gap-3 mb-6">
           <div className="w-1 h-6 bg-[#04d9ff]"></div>
           <h3 className="text-xl font-bold text-black">Recent Posts</h3>
        </div>
        <div className="space-y-6">
          {recentPosts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} className="flex gap-4 group">
              <div className="w-20 h-20 rounded-lg bg-gray-200 shrink-0 overflow-hidden relative">
                 {post.mainImage?.asset?.url ? (
                   <Image 
                      src={post.mainImage.asset.url} 
                      alt={post.mainImage.alt || post.title} 
                      fill 
                      className="object-cover grayscale group-hover:grayscale-0 transition-all" 
                   />
                 ) : (
                   <div className="w-full h-full bg-gray-300" />
                 )}
              </div>
              <div>
                <h4 className="font-bold text-black text-sm mb-2 leading-snug group-hover:text-[#04d9ff] transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-400">
                  {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Widget */}
      <div className="relative rounded-2xl overflow-hidden h-[400px] flex flex-col justify-end p-8 text-center">
        <Image src="/hero.png" alt="Team" fill className="object-cover grayscale" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 space-y-4">
          <p className="text-white text-sm font-medium">Get A Quote</p>
          <h3 className="text-2xl font-bold text-white">
            Looking For <span className="text-[#04d9ff]">Trusted Digital Agency?</span>
          </h3>
          <Link href="/contact" className="bg-[#04d9ff] text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-[#00b8e6] transition-colors inline-block mt-4">
            Hire Us Now
          </Link>
        </div>
      </div>
    </aside>
  );
}
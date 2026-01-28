'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/(main)/Footer';
import Marquee from '@/components/(main)/Marquee';
import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';
import Link from 'next/link';

// Header Component
const BlogsHeader = () => {
  return (
    <section className="bg-[#111] pt-40 pb-20 text-center font-sans">
      <FadeIn>
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Blogs</h1>
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Link href="/" className="text-white hover:text-[#c4ff00] transition-colors">Home</Link>
          <span className="text-white/40">/</span>
          <span className="text-[#c4ff00]">Blogs</span>
        </div>
      </FadeIn>
    </section>
  );
};

// Main Blog Content
const blogs = [
  {
    id: 1,
    title: 'Unveiling the Secrets of Successful Mobile App Development',
    category: 'Mobile App Development',
    date: '21 April 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
    image: '/hero.png', // Placeholder
  },
  {
    id: 2,
    title: 'From Pixels to Perfection: The Website Development Process Unveiled',
    category: 'Website Development',
    date: '20 April 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
    image: '/hero.png', // Placeholder
  },
  {
    id: 3,
    title: 'The Evolution of UX/UI: Trends Shaping the Future of Design',
    category: 'UX/UI Design',
    date: '19 April 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
    image: '/hero.png', // Placeholder
  },
  {
    id: 4,
    title: 'Color Theory in Logo Design: Choosing the Right Palette',
    category: 'Graphics Design',
    date: '18 April 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
    image: '/hero.png', // Placeholder
  },
  {
    id: 5,
    title: 'Keyword Research 101: Finding the Right Keywords for Your SEO Strategy',
    category: 'Digital Marketing',
    date: '17 April 2024',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...',
    image: '/hero.png', // Placeholder
  }
];

const BlogList = () => {
  return (
    <div className="space-y-12">
      {blogs.map((blog) => (
        <FadeIn key={blog.id} className="group">
          {/* Image */}
          <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden mb-8 bg-gray-200">
             <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0"
             />
          </div>

          {/* Tags */}
          <div className="flex gap-4 mb-4">
            <span className="px-4 py-1 rounded-full text-xs font-bold text-black bg-[#c4ff00]">
              {blog.category}
            </span>
            <span className="px-4 py-1 rounded-full text-xs font-bold text-black bg-[#c4ff00]">
              {blog.date}
            </span>
          </div>

          {/* Content */}
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4 leading-tight group-hover:text-[#c4ff00] transition-colors">
            {blog.title}
          </h3>
          <p className="text-gray-500 mb-4 leading-relaxed">
            {blog.excerpt}
          </p>
          <Link href="#" className="inline-block text-[#c4ff00] font-bold border-b border-[#c4ff00] hover:text-[#b3e600] hover:border-[#b3e600] transition-colors">
            Read More
          </Link>
        </FadeIn>
      ))}

      {/* Pagination */}
      <div className="flex items-center gap-4 pt-8">
        <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="w-10 h-10 rounded-full bg-[#c4ff00] text-black font-bold flex items-center justify-center">1</button>
        <button className="w-10 h-10 rounded-full text-gray-500 font-bold flex items-center justify-center hover:bg-gray-100">2</button>
        <button className="w-10 h-10 rounded-full text-gray-500 font-bold flex items-center justify-center hover:bg-gray-100">3</button>
        <span className="text-gray-400">...</span>
        <button className="w-10 h-10 rounded-full text-gray-500 font-bold flex items-center justify-center hover:bg-gray-100">10</button>
        <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-black">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

const BlogSidebar = () => {
  return (
    <aside className="space-y-12">
      {/* Search */}
      <div>
        <div className="flex items-center gap-3 mb-6">
           <div className="w-1 h-6 bg-[#c4ff00]"></div>
           <h3 className="text-xl font-bold text-black">Search</h3>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full bg-gray-50 rounded-lg py-4 pl-6 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-[#c4ff00] text-black placeholder-gray-400"
          />
          <button className="absolute right-4 top-4">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Categories */}
      <div>
        <div className="flex items-center gap-3 mb-6">
           <div className="w-1 h-6 bg-[#c4ff00]"></div>
           <h3 className="text-xl font-bold text-black">Poplar Category</h3>
        </div>
        <div className="space-y-3">
          {['Mobile Application Development', 'Website Development', 'UX/UI Design', 'Graphics Design', 'Digital Marketing'].map((cat) => (
            <Link 
              key={cat} 
              href="#" 
              className="block bg-gray-50 px-6 py-3 rounded-lg text-gray-600 text-sm hover:bg-[#c4ff00] hover:text-black transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Post */}
      <div>
        <div className="flex items-center gap-3 mb-6">
           <div className="w-1 h-6 bg-[#c4ff00]"></div>
           <h3 className="text-xl font-bold text-black">Recent Post</h3>
        </div>
        <div className="space-y-6">
          {[
            { title: 'Empathy in Design: Putting Users First in UX/UI', date: '15 April 2024' },
            { title: 'Beyond Functionality: The Importance of Design in M...', date: '14 April 2024' },
            { title: 'Responsive Design: The Key to Modern Website Develo...', date: '15 April 2024' }
          ].map((post, i) => (
            <Link key={i} href="#" className="flex gap-4 group">
              <div className="w-20 h-20 rounded-lg bg-gray-200 shrink-0 overflow-hidden relative">
                 <Image src="/hero.png" alt="" fill className="object-cover grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <div>
                <h4 className="font-bold text-black text-sm mb-2 leading-snug group-hover:text-[#c4ff00] transition-colors">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-400">{post.date}</span>
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
            Looking For <span className="text-[#c4ff00]">Trusted Digital Agency?</span>
          </h3>
          <button className="bg-[#c4ff00] text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-[#b3e600] transition-colors inline-block mt-4">
            Hire Us Now
          </button>
        </div>
      </div>
    </aside>
  );
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <BlogsHeader />
      <Marquee />
      
      <section className="py-24 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Title */}
          <FadeIn className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
               <div className="w-8 h-[2px] bg-[#c4ff00]"></div>
               <span className="text-black/60 text-sm font-bold uppercase tracking-wider">News & Blogs</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black">
              Our Latest News & Blogs
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Main Content (2 cols) */}
            <div className="lg:col-span-2">
              <BlogList />
            </div>
            
            {/* Sidebar (1 col) */}
            <div className="lg:col-span-1">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

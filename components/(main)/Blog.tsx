'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '../ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../ui/Stagger';

export default function Blog() {
  const blogs = [
    {
      id: 1,
      category: 'Mobile App Development',
      date: '21 April 2024',
      title: 'Unveiling the Secrets of Successful Mobile App Dev...',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'Website Development',
      date: '20 April 2024',
      title: 'From Pixels to Perfection: The Website Development Proc...',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'UX/UI Design',
      date: '19 April 2024',
      title: 'The Evolution of UX/UI: Trends Shaping the Future o...',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  return (
    <section className="bg-[#111] text-white py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#04d9ff]"></div>
              <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">News & Blogs</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Our Latest <br />
              <span className="text-[#04d9ff]">News & Blogs</span>
            </h2>
          </div>

          <Link href="/blogs" className="flex items-center group">
            <span className="bg-[#04d9ff] text-black px-6 py-3 font-medium text-base rounded-full hover:bg-[#00b8e6] transition-colors relative z-10" style={{ fontFamily: 'cursive' }}>
              View All Blogs
            </span>
            <span className="bg-white py-1 pl-8 pr-1 flex items-center justify-center rounded-r-full -ml-5 relative z-0">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <svg className="w-4 h-4 text-[#04d9ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </span>
          </Link>
        </FadeIn>

        {/* Blog Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <StaggerItem key={blog.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-64 w-full mb-6 rounded-3xl overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <div className="w-16 h-16 bg-[#04d9ff] rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                   </div>
                </div>
              </div>

              {/* Tags & Date */}
              <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-medium text-gray-400">
                <span className="px-3 py-1 border border-white/20 rounded-full">{blog.category}</span>
                <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                <span className="px-3 py-1 border border-white/20 rounded-full">{blog.date}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#04d9ff] transition-colors line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {blog.description}
              </p>
              
              <div className="flex items-center gap-2 text-[#04d9ff] text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

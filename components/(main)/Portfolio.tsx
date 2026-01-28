'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/ui/Stagger';

const projects = [
  {
    id: 1,
    title: 'Podcast - Podcast Mobile App Solution',
    tags: ['UI/UX Design', 'App Design', 'Wireframe'],
    image: '/hero.png', // Placeholder
    active: true
  },
  {
    id: 2,
    title: 'Podcast - Podcast Mobile Application Landing Page',
    tags: ['Web Design', 'Landing Page', 'Wireframe'],
    image: '/hero.png', // Placeholder
    active: false
  }
];

export default function Portfolio() {
  return (
    <section id="projects" className="bg-[#111] text-white py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <FadeIn className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="w-6 h-[2px] bg-[#04d9ff]"></div>
               <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">Our Projects</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Our Recent <br />
              <span className="text-[#04d9ff]">Work Portfolio</span>
            </h2>
          </div>

          <Link href="/projects" className="flex items-center group h-12">
            <span className="bg-[#04d9ff] text-black px-6 h-full flex items-center font-medium text-base rounded-full hover:bg-[#00b8e6] transition-colors relative z-10 whitespace-nowrap" style={{ fontFamily: 'cursive' }}>
              View All Projects
            </span>
            <span className="bg-white h-full pl-8 pr-1 flex items-center justify-center rounded-r-full -ml-4 relative z-0">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                 <svg className="w-4 h-4 text-[#04d9ff]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
              </div>
            </span>
          </Link>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.id} className="group bg-[#121212] rounded-4xl p-6 hover:bg-[#1a1a1a] transition-colors border border-white/5">
              {/* Image Container */}
              <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden mb-8 bg-[#222]">
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1.5 rounded-full text-xs font-medium text-gray-400 border border-white/10 bg-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Action */}
              <div className="flex justify-between items-end gap-4">
                <h3 className="text-2xl font-bold leading-snug max-w-sm">
                  {project.title}
                </h3>
                
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  project.active 
                    ? 'bg-[#04d9ff] text-black rotate-45' 
                    : 'bg-[#222] text-white group-hover:bg-[#04d9ff] group-hover:text-black group-hover:rotate-45'
                }`}>
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5m0 0v14m0-14H5" />
                   </svg>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}

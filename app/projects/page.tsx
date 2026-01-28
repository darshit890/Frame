'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/(main)/Footer';
import Marquee from '@/components/(main)/Marquee';
import FadeIn from '@/components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/ui/Stagger';
import Image from 'next/image';
import Link from 'next/link';

// New Projects Header Component
const ProjectsHeader = () => {
  return (
    <section className="bg-[#111] pt-32 lg:pt-40 pb-20 text-center font-sans">
      <FadeIn>
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Projects</h1>
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Link href="/" className="text-white hover:text-[#04d9ff] transition-colors">Home</Link>
          <span className="text-white/40">/</span>
          <span className="text-[#04d9ff]">Our Latest Projects</span>
        </div>
      </FadeIn>
    </section>
  );
};

// New Projects Grid Component
const projects = [
  {
    id: 1,
    title: 'Podcast - Podcast Mobile App Solution',
    category: 'App Design',
    tags: ['UI/UX Design', 'App Design', 'Wireframe'],
    image: '/1.png', // Using existing assets as placeholders
    active: true
  },
  {
    id: 2,
    title: 'Podcast - Podcast Mobile Application Landing Page',
    category: 'Web Design',
    tags: ['Web Design', 'Landing Page', 'Wireframe'],
    image: '/2.png',
    active: false
  },
  {
    id: 3,
    title: 'Dating App - Find Your Soulmate',
    category: 'App Design',
    tags: ['UI/UX Design', 'App Design', 'Wireframe'],
    image: '/3.png',
    active: false
  },
  {
    id: 4,
    title: 'Dating App - Landing Page Design',
    category: 'Web Design',
    tags: ['Web Design', 'Landing Page', 'Wireframe'],
    image: '/1.png', // reusing 1 for demo
    active: false
  }
];

const ProjectsGrid = () => {
  return (
    <section className="bg-white py-24 font-sans text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="w-8 h-[2px] bg-[#04d9ff]"></div>
             <span className="text-black/60 text-sm font-bold uppercase tracking-wider">Our Projects</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Our Recent Work Portfolio
          </h2>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.id} className="group bg-[#f8f9fa] rounded-4xl p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Image Container */}
              <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden mb-8 bg-gray-200">
                 <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                 />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1.5 rounded-full text-xs font-bold text-black bg-[#04d9ff]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Action */}
              <div className="flex justify-between items-end gap-4">
                <h3 className="text-2xl font-bold leading-snug max-w-sm text-black">
                  {project.title}
                </h3>
                
                <button className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  project.active
                    ? 'bg-[#04d9ff] text-black rotate-45'
                    : 'bg-black text-white hover:bg-[#04d9ff] hover:text-black hover:rotate-45'
                }`}>
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5m0 0v14m0-14H5" />
                   </svg>
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProjectsHeader />
      <Marquee />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}

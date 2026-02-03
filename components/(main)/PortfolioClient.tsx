'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/ui/Stagger';
import BackgroundEffect from '@/components/ui/BackgroundEffect';

interface Project {
  title?: string;
  slug?: { current: string };
  tags?: string[];
  imageUrl?: string;
  imageAlt?: string;
  description?: string;
}

interface PortfolioClientProps {
  subheading?: string;
  headingLine1?: string;
  headingLine2?: string;
  viewAllLink?: string;
  projects?: Project[];
}

export default function PortfolioClient({
  subheading,
  headingLine1,
  headingLine2,
  viewAllLink,
  projects
}: PortfolioClientProps) {
  
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="bg-background text-foreground py-24 font-sans relative overflow-hidden">
      <BackgroundEffect />
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header */}
        <FadeIn className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
               <div className="w-6 h-[2px] bg-primary"></div>
               <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
                 {subheading}
               </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              {headingLine1} <br />
              <span className="text-primary">{headingLine2}</span>
            </h2>
          </div>

          <Link href={viewAllLink || '/projects'} className="flex items-center group h-12">
            <span className="bg-primary text-black px-6 h-full flex items-center font-medium text-base rounded-full hover:bg-primary transition-colors relative z-10 whitespace-nowrap" style={{ fontFamily: 'cursive' }}>
              View All Projects
            </span>
            <span className="bg-white h-full pl-8 pr-1 flex items-center justify-center rounded-r-full -ml-4 relative z-0">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                 <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
              </div>
            </span>
          </Link>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={index} className="group bg-[#121212] rounded-4xl p-6 hover:bg-[#1a1a1a] transition-colors border border-white/5">
              <Link href={project.slug?.current ? `/projects/${project.slug.current}` : '#'} className="block h-full">
              {/* Image Container */}
              <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden mb-8 bg-[#222]">
                 {project.imageUrl ? (
                   <Image
                      src={project.imageUrl}
                      alt={project.imageAlt || project.title || 'Project image'}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                 ) : (
                   <div className="w-full h-full bg-[#333]" />
                 )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags && project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1.5 rounded-full text-xs font-medium text-muted-foreground border border-border bg-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              {project.description && (
                <p className="mb-6 text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>
              )}

              {/* Title & Action */}
              <div className="flex justify-between items-end gap-4">
                <h3 className="text-2xl font-bold leading-snug max-w-sm text-foreground">
                  {project.title}
                </h3>
                
                {/* Link Button */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all bg-secondary text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5m0 0v14m0-14H5" />
                   </svg>
                </div>
              </div>
            </Link>
          </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}

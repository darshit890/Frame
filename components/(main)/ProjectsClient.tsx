'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/(main)/Footer';
import Marquee from '@/components/(main)/Marquee';
import FadeIn from '@/components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/ui/Stagger';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import BackgroundEffect from '@/components/ui/BackgroundEffect';

interface Project {
  _id: string;
  title: string;
  slug?: { current: string };
  imageUrl?: string;
  imageAlt?: string;
  tags?: string[];
  description?: string;
}

interface ProjectsClientProps {
  projects: Project[];
}

// Projects Header Component
const ProjectsHeader = () => {
  return (
    <section className="bg-background pt-32 lg:pt-40 pb-20 text-center font-sans relative overflow-hidden">
      <BackgroundEffect />
      <FadeIn>
        <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6">Projects</h1>
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-primary">Our Latest Projects</span>
        </div>
      </FadeIn>
    </section>
  );
};

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <section className="bg-white py-24 font-sans text-black relative overflow-hidden">
      <BackgroundEffect />
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
             <div className="w-8 h-[2px] bg-primary"></div>
             <span className="text-black/60 text-sm font-bold uppercase tracking-wider">Our Projects</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">
            Our Recent Work Portfolio
          </h2>
        </FadeIn>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project._id} className="group bg-card rounded-4xl p-6 hover:bg-card/90 transition-colors border border-border hover:border-primary/50">
              <Link href={project.slug?.current ? `/projects/${project.slug.current}` : '#'} className="block">
                {/* Image Container */}
                <div className="relative h-[300px] lg:h-[400px] w-full rounded-2xl overflow-hidden mb-8 bg-muted">
                   {project.imageUrl ? (
                     <Image
                        src={project.imageUrl || ''}
                        alt={project.imageAlt || project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                   ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">No Image</div>
                   )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags?.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 rounded-full text-xs font-bold text-foreground bg-secondary border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Action */}
                <div className="flex justify-between items-end gap-4">
                  <h3 className="text-2xl font-bold leading-snug max-w-sm text-foreground">
                    {project.title}
                  </h3>
                  
                  <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 bg-secondary text-foreground group-hover:bg-primary group-hover:text-black group-hover:rotate-45">
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
};

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  return (
    <main className="min-h-screen bg-background">
      <ProjectsHeader />
      <Marquee />
      <ProjectsGrid projects={projects} />
      <Footer />
    </main>
  );
}

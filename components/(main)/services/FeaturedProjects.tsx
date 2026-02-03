'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';

export interface FeaturedProject {
  title?: string;
  category?: string;
  imageUrl?: string;
  backgroundColor?: string;
}

interface FeaturedProjectsProps {
  projects?: FeaturedProject[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <FadeIn className="mb-12">
        <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">Our Best Works</p>
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight uppercase text-foreground">
            Explore a collection of our selected projects where creativity meets purpose
          </h2>
          <div className="flex gap-2">
             <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
               <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
             </button>
             <button className="w-10 h-10 rounded-full bg-primary text-black flex items-center justify-center hover:bg-primary/90 transition-colors">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
             </button>
          </div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects?.map((project, index) => (
           <FadeIn key={index} delay={0.1 * (index + 1)} className="group">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-4 p-8 flex flex-col justify-between" style={{ backgroundColor: project.backgroundColor || '#eecfa1' }}>
              {project.imageUrl && (
                  <Image 
                      src={project.imageUrl} 
                      alt={project.title || 'Project'} 
                      fill
                      className={`object-cover transition-transform duration-700 group-hover:scale-105 ${index === 0 ? 'mix-blend-overlay opacity-50' : ''}`}
                  />
              )}
              {/* Special styling for first item to match original design if needed, or just standard */}
              {index === 0 && <h3 className="relative z-10 text-4xl font-bold text-black uppercase">Explore</h3>}
              
              <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
              </div>
              <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-foreground">{project.title}</span>
              <span className="text-muted-foreground">{project.category}</span>
              </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
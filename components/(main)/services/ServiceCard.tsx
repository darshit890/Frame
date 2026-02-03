'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';

export interface ServiceCardData {
  _type: 'serviceCard';
  title?: string;
  description?: string;
  icon?: string;
}

export interface ImageCardData {
  _type: 'imageCard';
  imageUrl?: string;
  backgroundColor?: string;
}

export type ServiceItem = ServiceCardData | ImageCardData;

export const iconMap: Record<string, React.ReactNode> = {
  'bulb': (
    <svg className="w-5 h-5 text-foreground group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  'puzzle': (
    <svg className="w-5 h-5 text-foreground group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
    </svg>
  ),
  'document': (
    <svg className="w-5 h-5 text-foreground group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  'code': (
    <svg className="w-5 h-5 text-foreground group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  'pen': (
    <svg className="w-5 h-5 text-foreground group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    </svg>
  ),
  'chart': (
     <svg className="w-5 h-5 text-foreground group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  ),
  // Default/Fallback
  'default': (
    <svg className="w-5 h-5 text-foreground group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
};

export default function ServiceCard({ item, delay }: { item: ServiceItem, delay: number }) {
  if (item._type === 'imageCard') {
    return (
      <FadeIn delay={delay} className="relative h-[300px] rounded-2xl overflow-hidden" style={{ backgroundColor: item.backgroundColor || '#0a0a0a' }}>
         {item.imageUrl && (
           <Image 
            src={item.imageUrl} 
            alt="Service Image" 
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
         )}
      </FadeIn>
    );
  }

  // Service Card
  return (
    <FadeIn delay={delay} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors group min-h-[200px] flex flex-col justify-between">
      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary transition-colors">
        {item.icon && iconMap[item.icon] ? iconMap[item.icon] : iconMap['default']}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 uppercase text-foreground">{item.title}</h3>
        <p className="text-muted-foreground text-sm">{item.description}</p>
      </div>
    </FadeIn>
  );
}
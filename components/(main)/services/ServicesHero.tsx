'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';

interface ServicesHeroProps {
  subheading?: string;
  heading?: string;
}

export default function ServicesHero({ subheading, heading }: ServicesHeroProps) {
  return (
    <div className="text-center mb-16 space-y-4">
      <FadeIn>
        <p className="text-sm md:text-base tracking-widest uppercase text-muted-foreground font-medium">
          {subheading || 'Created to make you stand out with'}
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-foreground">
          {heading || 'Our Services'}
        </h1>
      </FadeIn>
    </div>
  );
}
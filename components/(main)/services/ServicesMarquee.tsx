'use client';

import React from 'react';
import Marquee from '@/components/(main)/Marquee';

interface ServicesMarqueeProps {
  items?: string[];
}

export default function ServicesMarquee({ items }: ServicesMarqueeProps) {
  return (
    <Marquee 
      items={items || ['CREATIVE', 'STUDIO', 'CREATIVE', 'STUDIO', 'CREATIVE', 'STUDIO']} 
      className="bg-primary text-black border-none" 
    />
  );
}
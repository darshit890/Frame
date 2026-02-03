'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';

export interface WorkProcessStep {
  title?: string;
  description?: string;
  icon?: string;
  imageUrl?: string;
}

interface WorkProcessProps {
  subheading?: string;
  heading?: string;
  steps?: WorkProcessStep[];
}

export default function WorkProcess({ subheading, heading, steps }: WorkProcessProps) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-border">
      <FadeIn className="flex justify-between items-start mb-16">
        <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight uppercase text-foreground">
          {heading || 'The best work happens when we build it together'}
        </h2>
        <span className="hidden md:block text-sm font-bold uppercase tracking-wider text-muted-foreground">
          {subheading || 'Our Work Process'}
        </span>
      </FadeIn>

      <div className="space-y-4">
        {steps?.map((step, index) => {
          // First step is expanded view
          if (index === 0) {
               return (
                  <FadeIn key={index} className="bg-primary rounded-3xl p-8 md:p-12 overflow-hidden relative">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                          <div className="relative w-full md:w-1/3 h-64 rounded-2xl overflow-hidden bg-black/10">
                              {step.imageUrl ? (
                                <Image 
                                    src={step.imageUrl} 
                                    alt={step.title || 'Step Image'} 
                                    fill
                                    className="object-cover"
                                />
                              ) : (
                                // Fallback or debug info if image is missing but expected
                                <div className="absolute inset-0 flex items-center justify-center text-black/20 font-bold">
                                   
                                </div>
                              )}
                          </div>
                          <div className="flex-1 text-center md:text-left">
                              <h3 className="text-4xl md:text-6xl font-black text-black/20 uppercase mb-4">0{index + 1}</h3>
                              <h4 className="text-3xl md:text-5xl font-bold text-black uppercase mb-6">{step.title}</h4>
                              <p className="text-black/80 leading-relaxed max-w-md">
                                  {step.description}
                              </p>
                          </div>
                      </div>
                  </FadeIn>
               )
          }

          // Other steps
          return (
              <FadeIn key={index} delay={0.1 * index} className="group bg-card rounded-3xl p-8 md:p-12 hover:bg-muted transition-colors cursor-pointer border border-border">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex items-center gap-8 w-full md:w-1/3">
                      <span className="text-xl font-bold text-muted-foreground">0{index + 1}</span>
                      <h4 className="text-3xl font-bold text-foreground uppercase">{step.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg md:text-right">
                      {step.description}
                  </p>
                  </div>
              </FadeIn>
          )
        })}
      </div>
    </section>
  );
}
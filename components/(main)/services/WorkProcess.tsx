'use client';

import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        <LayoutGroup>
          {steps?.map((step, index) => {
            const isExpanded = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                layout
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`rounded-3xl p-8 md:p-12 overflow-hidden cursor-pointer border ${
                  isExpanded 
                    ? 'bg-primary border-primary relative' 
                    : 'bg-card border-border hover:bg-muted'
                }`}
              >
                {isExpanded ? (
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative w-full md:w-1/3 h-64 rounded-2xl overflow-hidden bg-black/10"
                      >
                          {step.imageUrl ? (
                            <Image 
                                src={step.imageUrl} 
                                alt={step.title || 'Step Image'} 
                                fill
                                className="object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-black/20 font-bold">
                               
                            </div>
                          )}
                      </motion.div>
                      <div className="flex-1 text-center md:text-left">
                          <motion.h3 
                            layoutId={`step-number-${index}`}
                            className="text-4xl md:text-6xl font-black text-black/20 uppercase mb-4"
                          >
                            0{index + 1}
                          </motion.h3>
                          <motion.h4 
                            layoutId={`step-title-${index}`}
                            className="text-3xl md:text-5xl font-bold text-black uppercase mb-6"
                          >
                            {step.title}
                          </motion.h4>
                          <motion.p 
                            layoutId={`step-desc-${index}`}
                            className="text-black/80 leading-relaxed max-w-md"
                          >
                              {step.description}
                          </motion.p>
                      </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                      <div className="flex items-center gap-8 w-full md:w-1/3">
                          <motion.span 
                            layoutId={`step-number-${index}`}
                            className="text-xl font-bold text-muted-foreground"
                          >
                            0{index + 1}
                          </motion.span>
                          <motion.h4 
                            layoutId={`step-title-${index}`}
                            className="text-3xl font-bold text-foreground uppercase"
                          >
                            {step.title}
                          </motion.h4>
                      </div>
                      <motion.p 
                        layoutId={`step-desc-${index}`}
                        className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg md:text-right"
                      >
                          {step.description}
                      </motion.p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </LayoutGroup>
      </div>
    </section>
  );
}
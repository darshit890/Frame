'use client';

import Image from 'next/image';
import { StaggerContainer, StaggerItem } from '@/components/ui/Stagger';
import ScaleIn from '@/components/ui/ScaleIn';

interface AboutClientProps {
  heading?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  experienceCount?: string;
  experienceLabel?: string;
  checklist?: string[];
  author?: string;
}

export default function AboutClient({
  heading,
  description,
  imageUrl,
  imageAlt,
  experienceCount,
  experienceLabel,
  checklist,
  author
}: AboutClientProps) {
  // Use Sanity data or safe fallbacks only for structure, 
  // though the user wants to use data from Sanity. 
  // We'll trust the parent to pass valid data or empty strings if not present.
  
  // Parse experienceLabel for <br/> if needed, or just display as is. 
  // The design has a line break. Let's see if we can split it.
  // If it comes from Sanity as a string, we might want to allow newlines.
  
  return (
    <section className="bg-[#111] text-white py-24 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Section */}
          <ScaleIn className="relative order-2 lg:order-0">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={imageAlt || "About Image"}
                  fill
                  className="object-cover grayscale"
                />
              ) : (
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>

            {/* Experience Badge */}
            {(experienceCount || experienceLabel) && (
              <div className="absolute bottom-0 left-0 bg-primary text-black p-6 rounded-2xl flex items-center gap-4 shadow-lg max-w-[240px]">
                {experienceCount && <span className="text-6xl font-bold leading-none">{experienceCount}</span>}
                {experienceLabel && (
                  <span className="text-sm font-bold leading-tight">
                    {experienceLabel.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < experienceLabel.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                    {/* Fallback split by space if no newlines but logic requires wrap? 
                        The original code used <br/>. We can just render the string.
                        Or we can dangerouslySetInnerHTML if we trust the source.
                        For now, simple split by newline if user enters it in text area (though it's string type).
                        Actually, existing code was hardcoded. Let's just render the label.
                    */}
                  </span>
                )}
              </div>
            )}
          </ScaleIn>

          {/* Right: Content Section */}
          <StaggerContainer className="lg:pl-10 mt-12 lg:mt-0">
            {/* Header Label */}
            <StaggerItem className="flex items-center gap-3 mb-6">
               <div className="w-6 h-[2px] bg-primary"></div>
               <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">About Us</span>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {heading}
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {description}
              </p>
            </StaggerItem>

            {/* Checklist */}
            {checklist && checklist.length > 0 && (
              <StaggerItem className="space-y-4 mb-10">
                {checklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-gray-200">{item}</span>
                  </div>
                ))}
              </StaggerItem>
            )}

            {/* Bottom Actions */}
            {author && (
              <StaggerItem className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <div className="text-primary font-cursive text-3xl opacity-90" style={{ fontFamily: 'cursive' }}>
                  {author}
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}

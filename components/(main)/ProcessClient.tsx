'use client';

import FadeIn from '@/components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/ui/Stagger';
import { Lightbulb, Puzzle, FileText } from 'lucide-react';

interface ProcessStep {
  title?: string;
  description?: string;
  icon?: string;
}

interface ProcessClientProps {
  subheading?: string;
  heading?: string;
  steps?: ProcessStep[];
}

const iconMap: Record<string, React.ReactNode> = {
  'bulb': (
    <svg 
      className="w-14 h-14 text-black" 
      viewBox="0 0 64 64" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    > 
       <path d="M32 2 C20 2 12 12 12 22 C12 30 18 34 20 38 L20 44 H44 V38 C46 34 52 30 52 22 C52 12 44 2 32 2Z"/> 
       <path d="M26 30 Q32 26 38 30"/> 
       <line x1="22" y1="48" x2="42" y2="48"/> 
       <line x1="24" y1="52" x2="40" y2="52"/> 
       <line x1="26" y1="56" x2="38" y2="56"/> 
    </svg> 
  ),
  'puzzle': (
    <svg className="w-14 h-14 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"> 
       <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /> 
    </svg> 
  ),
  'document': (
    <svg className="w-14 h-14 text-black" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"> 
       <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /> 
    </svg> 
  )
};

export default function ProcessClient({
  subheading,
  heading,
  steps
}: ProcessClientProps) {
  
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <section className="bg-white py-24 font-sans text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <FadeIn className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-primary"></div>
            <span className="text-gray-500 text-sm font-medium tracking-wide uppercase">
              {subheading}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            {heading}
          </h2>
        </FadeIn>

        {/* Steps Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-[60px] left-0 w-full h-[2px] border-t-2 border-dashed border-gray-200 -z-10"></div>

          {steps.map((step, index) => {
            // Select the icon from the map based on Sanity string value
            // Fallback to 'bulb' if icon is missing or not found
            const iconNode = (step.icon && iconMap[step.icon]) ? iconMap[step.icon] : iconMap['bulb'];

            return (
              <StaggerItem key={index} className="flex flex-col items-center text-center group">
                
                {/* Icon Circle */}
                <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                   <div className="absolute inset-0 bg-primary rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                   <div className="relative z-10">
                      {iconNode}
                   </div>
                   
                   {/* Step Badge */}
                   <div className="absolute -bottom-3 bg-background text-foreground px-4 py-1 rounded-full text-xs font-bold shadow-md">
                      Step {index + 1}
                   </div>
                </div>

                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}

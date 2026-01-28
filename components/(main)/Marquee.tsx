'use client';

import FadeIn from '../ui/FadeIn';

export default function Marquee({ 
  items = [
    'Website Design',
    'UX/UI Design',
    'Graphics Design',
    'Digital Marketing',
    'Website Design',
    'UX/UI Design',
    'Graphics Design',
    'Digital Marketing'
  ],
  className = "bg-[#04d9ff] text-black"
}: { 
  items?: string[], 
  className?: string 
}) {
  return (
    <FadeIn fullWidth className={`${className} py-6 overflow-hidden border-y border-black/10`}>
      <div className="flex whitespace-nowrap animate-scroll">
        <div className="flex gap-8 items-center px-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-2xl font-bold uppercase tracking-wide">{item}</span>
              <div className="w-8 h-8 flex items-center justify-center">
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.4 9.6H22L15.6 14.4L18 22L12 17.6L6 22L8.4 14.4L2 9.6H9.6L12 2Z" />
                 </svg>
              </div>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-8 items-center px-4">
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-8">
              <span className="text-2xl font-bold uppercase tracking-wide">{item}</span>
              <div className="w-8 h-8 flex items-center justify-center">
                 <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.4 9.6H22L15.6 14.4L18 22L12 17.6L6 22L8.4 14.4L2 9.6H9.6L12 2Z" />
                 </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

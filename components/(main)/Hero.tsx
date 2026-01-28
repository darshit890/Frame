'use client';

import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';
import { StaggerContainer, StaggerItem } from '@/components/ui/Stagger';
import ScaleIn from '@/components/ui/ScaleIn';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#111] pt-32 pb-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section: Heading & Hire Us */}
        <div className="grid lg:grid-cols-12 gap-6 mb-12 items-center">
            <StaggerContainer className="lg:col-span-9 space-y-8 max-w-4xl">
                 {/* Award Badge */}
                <StaggerItem>
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-[2px] bg-[#c4ff00]"></div>
                      <span className="text-white/80 text-sm tracking-widest uppercase font-medium">
                          Award Wining Digital Agency
                      </span>
                  </div>
                </StaggerItem>
                {/* Heading */}
                <StaggerItem>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight">
                      Where Innovation Meets <br />
                      <span className="text-[#c4ff00]">Digital Excellence</span>
                  </h1>
                </StaggerItem>
            </StaggerContainer>

            {/* Hire Us Circle */}
            <FadeIn delay={0.4} className="hidden lg:flex lg:col-span-3 justify-end relative w-32 h-32 shrink-0 mt-4 ml-auto">
                <div className="relative w-32 h-32">
                     <svg className="w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                        <defs>
                            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                        </defs>
                        <text fill="#c4ff00" fontSize="11" fontWeight="bold" letterSpacing="3">
                            <textPath href="#circlePath" startOffset="0%">
                                HIRE US • HIRE US • HIRE US •
                            </textPath>
                        </text>
                    </svg>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-[#c4ff00] flex items-center justify-center transform -rotate-45 group hover:rotate-0 transition-transform duration-500 cursor-pointer shadow-[0_8px_24px_rgba(196,255,0,0.3)]">
                             <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7H7M17 7v10" />
                            </svg>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>

        {/* Middle Section: Tags & Description */}
        <div className="grid lg:grid-cols-12 gap-6 mb-16 items-center">
            {/* Tags */}
            <StaggerContainer className="lg:col-span-7 flex flex-wrap gap-3">
                {['Mobile Application Development', 'Website Development', 'UX/UI Design', 'Graphic Design', 'Digital Marketing'].map((tag) => (
                     <StaggerItem key={tag}>
                       <span className="block px-6 py-3 border-y-[0.2px] border-x-3 border-white/50 text-white text-sm rounded-full hover:border-[#c4ff00] hover:text-[#c4ff00] transition-all duration-300 cursor-default">
                          {tag}
                       </span>
                     </StaggerItem>
                ))}
            </StaggerContainer>
            
            {/* Divider & Text */}
            <FadeIn delay={0.6} direction="left" className="lg:col-span-5 flex items-center gap-8 relative">
                {/* Vertical Divider Line with Glow */}
                <div className="hidden lg:block h-16 w-[3px] shrink-0">
                   <svg className="w-full h-full overflow-visible" viewBox="0 0 3 64" preserveAspectRatio="none">
                      <path d="M1.5 0 L3 32 L1.5 64 L0 32 Z" fill="#c4ff00" className="drop-shadow-[0_0_5px_#c4ff00]" />
                   </svg>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </FadeIn>
        </div>

        {/* Bottom Section: Team Image & Stats */}
        <div className="grid lg:grid-cols-12 gap-6 mb-20">
            {/* Team Image - Spans 9 cols */}
            <ScaleIn delay={0.2} className="lg:col-span-9 relative h-[350px] lg:h-[400px] rounded-[32px] overflow-visible group  p-3">
                 <div className="absolute inset-3 rounded-[24px] overflow-hidden border border-white/10">
                     <Image
                        src="/hero.png"
                        alt="Team working together"
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover grayscale transition-all duration-700"
                        priority
                     />
                 </div>
                 <div className="absolute inset-3 rounded-[24px] bg-black/20 pointer-events-none"></div>
                 
                 {/* Review Badge */}
                 <FadeIn delay={0.8} direction="up" className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
                    <div className="flex items-center rounded-xl bg-[#c4ff00] pl-2 pr-6 py-3">
                       <div className="flex items-center text-white rounded-full px-3 py-2 mr-4">
                          <div className="flex -space-x-5 items-center">
                             {[1, 2, 3].map(i => (
                               <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                                  <Image
                                    src="/profile.png"
                                    alt={`Profile ${i}`}
                                    fill
                                    className="object-cover grayscale"
                                  />
                               </div>
                             ))}
                             <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative flex items-center justify-center bg-black z-10">
                                <span className="text-[#c4ff00] text-xl font-bold">+</span>
                             </div>
                          </div>
                       </div>
                       <div className="flex flex-col leading-tight">
                          <span className="text-black font-extrabold text-base">4.9 Star</span>
                          <span className="text-black/70 text-xs font-semibold uppercase tracking-wide">Reviews</span>
                       </div>
                    </div>
                 </FadeIn>
                 
                 {/* Decorative Stars */}
                 <div className="absolute top-1/2 -translate-y-1/2 -left-6 text-[#c4ff00]">
                     <svg className="w-14 h-14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                     <svg className="w-8 h-8 absolute top-12 left-12 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                    </svg>
                     <svg className="w-6 h-6 absolute top-20 left-2 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                     </svg>
                 </div>
            </ScaleIn>

            {/* Stats Card - Spans 3 cols */}
            <FadeIn direction="left" delay={0.4} className="lg:col-span-3 bg-[#c4ff00] rounded-4xl p-8 flex flex-col justify-between h-[350px] lg:h-[400px] hover:shadow-[0_0_30px_rgba(196,255,0,0.2)] transition-shadow duration-300">
                 <div className="space-y-8 mt-4">
                    <div className="border-b border-black/10 pb-6">
                        <h3 className="text-6xl font-bold text-black mb-1">850+</h3>
                        <p className="text-black/60 font-semibold text-sm uppercase tracking-wide">Projects Completed</p>
                    </div>
                     <div className="border-b border-black/10 pb-6">
                        <h3 className="text-6xl font-bold text-black mb-1">18+</h3>
                        <p className="text-black/60 font-semibold text-sm uppercase tracking-wide">Years of Experience</p>
                    </div>
                 </div>
                 <div>
                    <h3 className="text-6xl font-bold text-black mb-1">500+</h3>
                    <p className="text-black/60 font-semibold text-sm uppercase tracking-wide">Happy Customers</p>
                 </div>
            </FadeIn>
        </div>
      </div>

      {/* Scrolling Text Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#c4ff00] py-4 overflow-hidden z-20">
        <div className="flex animate-scroll whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
              <span key={i} className="inline-flex items-center gap-8 text-black font-bold text-xl px-8 uppercase tracking-wider">
                <span>Design</span>
                <span className="text-2xl">✱</span>
                <span>Website Design</span>
                <span className="text-2xl">✱</span>
                <span>UX/UI Design</span>
                <span className="text-2xl">✱</span>
                <span>Graphics Design</span>
                <span className="text-2xl">✱</span>
                <span>Digital Marketing</span>
                <span className="text-2xl">✱</span>
              </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

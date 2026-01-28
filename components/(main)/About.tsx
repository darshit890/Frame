'use client';

import Image from 'next/image';
import { StaggerContainer, StaggerItem } from '@/components/ui/Stagger';
import ScaleIn from '@/components/ui/ScaleIn';

export default function About() {
  return (
    <section className="bg-[#111] text-white py-24 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Section */}
          <ScaleIn className="relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/hero.png" // Placeholder
                alt="Team Meeting"
                fill
                className="object-cover grayscale"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                     <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                     </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-0 left-0 bg-[#c4ff00] text-black p-6 rounded-2xl flex items-center gap-4 shadow-lg max-w-[240px]">
              <span className="text-6xl font-bold leading-none">18</span>
              <span className="text-sm font-bold leading-tight">
                Years <br />
                of Experience
              </span>
            </div>
          </ScaleIn>

          {/* Right: Content Section */}
          <StaggerContainer className="lg:pl-10 mt-12 lg:mt-0">
            {/* Header Label */}
            <StaggerItem className="flex items-center gap-3 mb-6">
               <div className="w-6 h-[2px] bg-[#c4ff00]"></div>
               <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">About Us</span>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                We&apos;re <span className="text-[#c4ff00]">Awards Winning</span> <br />
                Digital Agency
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </StaggerItem>

            {/* Checklist */}
            <StaggerItem className="space-y-4 mb-10">
              {[
                'Awards Winning Digital Agency',
                'Experience Team Members',
                'High Quality Services'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#c4ff00] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-black" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </StaggerItem>

            {/* Bottom Actions */}
            <StaggerItem className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <button className="flex items-center group">
                <span className="bg-[#c4ff00] text-black px-10 py-5 font-medium text-xl rounded-full hover:bg-[#b3e600] transition-colors relative z-10" style={{ fontFamily: 'cursive' }}>
                  Learn More
                </span>
                <span className="bg-white py-1.5 pl-12 pr-2 flex items-center justify-center rounded-r-full -ml-8 relative z-0">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                     <svg className="w-6 h-6 text-[#c4ff00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                     </svg>
                  </div>
                </span>
              </button>

              <div className="text-[#c4ff00] font-cursive text-3xl opacity-90" style={{ fontFamily: 'cursive' }}>
                Jenny Alexander
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}

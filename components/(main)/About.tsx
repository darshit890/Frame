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
          <ScaleIn className="relative order-2 lg:order-none">
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
            <div className="absolute bottom-0 left-0 bg-[#04d9ff] text-black p-6 rounded-2xl flex items-center gap-4 shadow-lg max-w-[240px]">
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
               <div className="w-6 h-[2px] bg-[#04d9ff]"></div>
               <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">About Us</span>
            </StaggerItem>

            <StaggerItem>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                We&apos;re <span className="text-[#04d9ff]">Awards Winning</span> <br />
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
                  <div className="w-6 h-6 rounded-full bg-[#04d9ff] flex items-center justify-center shrink-0">
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
              <div className="text-[#04d9ff] font-cursive text-3xl opacity-90" style={{ fontFamily: 'cursive' }}>
                Jenny Alexander
              </div>
            </StaggerItem>
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}

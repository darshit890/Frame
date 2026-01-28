'use client';

import FadeIn from '../ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../ui/Stagger';
import ScaleIn from '../ui/ScaleIn';
import { Instagram, X } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#111] text-white py-24 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <FadeIn className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-6 h-[2px] bg-[#c4ff00]"></div>
               <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">Contact Us</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Join Us in Creating <br />
              <span className="text-[#c4ff00]">Something Great</span>
            </h2>
          </FadeIn>

          {/* Floating Badge (Top Right) */}
          <FadeIn delay={0.3} className="hidden lg:flex relative w-32 h-32 items-center justify-center">
            <div className="absolute inset-0 bg-[#c4ff00] rounded-full opacity-20 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-[#c4ff00] rounded-full flex items-center justify-center animate-spin-slow">
               <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                  <path id="curve-contact" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                  <text fontSize="14" fontWeight="bold" fill="black">
                     <textPath href="#curve-contact" startOffset="0%">
                        • HIRE US • HIRE US • HIRE US
                     </textPath>
                  </text>
               </svg>
               <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5m0 0v14m0-14H5" />
                  </svg>
               </div>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left: Contact Form (2 cols wide) */}
          <StaggerContainer className="lg:col-span-2 space-y-6">
            <StaggerItem className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="First Name *" 
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#c4ff00] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="text" 
                  placeholder="Last Name *" 
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#c4ff00] transition-colors"
                />
              </div>
            </StaggerItem>

            <StaggerItem className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Email *" 
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#c4ff00] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <input 
                  type="tel" 
                  placeholder="Phone Number *" 
                  className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#c4ff00] transition-colors"
                />
              </div>
            </StaggerItem>

            <StaggerItem className="space-y-2">
              <input 
                type="text" 
                placeholder="Subject *" 
                className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#c4ff00] transition-colors"
              />
            </StaggerItem>

            <StaggerItem className="space-y-2">
              <textarea 
                rows={6}
                placeholder="Message *" 
                className="w-full bg-[#1A1A1A] border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#c4ff00] transition-colors resize-none"
              ></textarea>
            </StaggerItem>

            <StaggerItem>
              <button className="flex items-center group mt-4">
                <span className="bg-[#c4ff00] text-black px-6 py-3 font-medium text-base rounded-full hover:bg-[#b3e600] transition-colors relative z-10" style={{ fontFamily: 'cursive' }}>
                  Send Message
                </span>
                <span className="bg-white py-1 pl-8 pr-1 flex items-center justify-center rounded-r-full -ml-5 relative z-0">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                     <svg className="w-4 h-4 text-[#c4ff00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                     </svg>
                  </div>
                </span>
              </button>
            </StaggerItem>
          </StaggerContainer>

          {/* Right: Info Card (1 col wide) */}
          <ScaleIn delay={0.2} className="h-full">
            <div className="bg-[#c4ff00] rounded-4xl p-6 lg:p-10 text-black flex flex-col justify-between h-full min-h-0 lg:min-h-[500px]">
              <div className="space-y-10">
                
                {/* Address */}
                <div>
                  <h3 className="font-bold text-xl mb-3">Address</h3>
                  <p className="text-black/70 leading-relaxed max-w-[200px]">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </p>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="font-bold text-xl mb-3">Contact</h3>
                  <div className="space-y-1 text-black/70">
                    <p>Phone : +0123-456-789</p>
                    <p>Email : example@gmail.com</p>
                  </div>
                </div>

                {/* Open Time */}
                <div>
                  <h3 className="font-bold text-xl mb-3">Open Time</h3>
                  <p className="text-black/70">
                    Monday - Friday : 10:00 - 20:00
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="mt-12">
                <h3 className="font-bold text-xl mb-6">Stay Connected</h3>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer group/icon">
                    <Instagram className="w-5 h-5 group-hover/icon:stroke-white transition-colors" />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer group/icon">
                    <svg className="w-5 h-5 fill-current transition-colors" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </ScaleIn>

        </div>
      </div>
    </section>
  );
}

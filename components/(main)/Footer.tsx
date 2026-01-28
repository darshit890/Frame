'use client';

import FadeIn from '../ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../ui/Stagger';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-8 font-sans border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Call to Action Section */}
        <FadeIn className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <h2 className="text-4xl lg:text-5xl font-bold flex items-center gap-3">
            Let&apos;s <span className="text-[#c4ff00]">Connect</span> there
          </h2>
          <button className="flex items-center group">
            <span className="bg-[#c4ff00] text-black px-6 py-3 font-medium text-base rounded-full hover:bg-[#b3e600] transition-colors relative z-10" style={{ fontFamily: 'cursive' }}>
              Contact Us Now
            </span>
            <span className="bg-white py-1 pl-8 pr-1 flex items-center justify-center rounded-r-full -ml-5 relative z-0">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <svg className="w-4 h-4 text-[#c4ff00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </span>
          </button>
        </FadeIn>

        <div className="w-full h-px bg-white/10 mb-16"></div>

        {/* Main Footer Content */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Column */}
          <StaggerItem className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#c4ff00] rounded-full flex items-center justify-center">
                 <span className="text-black font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold">Digital Agency.</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="w-8 h-8 bg-[#c4ff00] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform text-black">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.39z"/>
                  </svg>
                </div>
              ))}
            </div>
          </StaggerItem>

          {/* Navigation Column */}
          <StaggerItem>
            <h3 className="text-[#c4ff00] font-bold mb-6">Navigation</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="hover:text-[#c4ff00] cursor-pointer transition-colors">Home</li>
              <li className="hover:text-[#c4ff00] cursor-pointer transition-colors">Services</li>
              <li className="hover:text-[#c4ff00] cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-[#c4ff00] cursor-pointer transition-colors">Projects</li>
              <li className="hover:text-[#c4ff00] cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-[#c4ff00] cursor-pointer transition-colors">FAQs</li>
            </ul>
          </StaggerItem>

          {/* Contact Column */}
          <StaggerItem>
            <h3 className="text-[#c4ff00] font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>+0123-456-789</li>
              <li>www.example.com</li>
              <li>example@gmail.com</li>
              <li className="leading-relaxed">
                4517 Washington Ave.<br/>
                Manchester, Kentucky<br/>
                39495
              </li>
            </ul>
          </StaggerItem>

          {/* Newsletter Column */}
          <StaggerItem>
            <h3 className="text-[#c4ff00] font-bold mb-6">Get the latest information</h3>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-[#1a1a1a] rounded-full py-3 pl-6 pr-14 text-sm focus:outline-none focus:ring-1 focus:ring-[#c4ff00] text-white placeholder-gray-500"
              />
              <button className="absolute right-1 top-1 w-10 h-10 bg-[#c4ff00] rounded-full flex items-center justify-center hover:bg-[#b3e600] transition-colors">
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </StaggerItem>

        </StaggerContainer>

        {/* Copyright Bar */}
        <FadeIn delay={0.4} className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>Copyright © 2024 <span className="text-[#c4ff00]">Digital Agency</span>. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="cursor-pointer hover:text-white transition-colors">User Terms & Conditions</span>
            <span className="cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}

'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/(main)/Footer';
import Marquee from '@/components/(main)/Marquee';
import FadeIn from '@/components/ui/FadeIn';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

// Header Component
const ContactHeader = () => {
  return (
    <section className="bg-[#111] pt-32 lg:pt-40 pb-20 text-center font-sans">
      <FadeIn>
        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">Contact Us</h1>
        <div className="flex items-center justify-center gap-2 text-sm font-medium">
          <Link href="/" className="text-white hover:text-[#04d9ff] transition-colors">Home</Link>
          <span className="text-white/40">/</span>
          <span className="text-[#04d9ff]">Contact Us</span>
        </div>
      </FadeIn>
    </section>
  );
};

// Hire Us Badge
const HireUsBadge = () => {
  return (
    <div className="relative w-32 h-32 shrink-0">
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
            {/* SVG Rotation */}
             <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <circle cx="50" cy="50" r="37" fill="#111" />
                <text fill="white" fontSize="11" fontWeight="bold" letterSpacing="3">
                    <textPath href="#circlePath" startOffset="0%">
                        HIRE US • HIRE US • HIRE US •
                    </textPath>
                </text>
            </svg>
        </motion.div>
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-[#04d9ff] flex items-center justify-center">
                 <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7H7M17 7v10" />
                </svg>
            </div>
        </div>
    </div>
  );
};

// Main Contact Section
const ContactContent = () => {
  return (
    <section className="py-24 font-sans bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section with Badge */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
            <div className="max-w-2xl">
                <FadeIn>
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-8 h-[2px] bg-[#04d9ff]"></div>
                       <span className="text-black/60 text-sm font-bold uppercase tracking-wider">Contact Us</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                        Join Us in Creating<br />Something Great
                    </h2>
                </FadeIn>
            </div>
            
            {/* Floating Badge */}
            <div className="hidden md:block self-end lg:self-auto">
                <FadeIn delay={0.2}>
                    <HireUsBadge />
                </FadeIn>
            </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Form (7 cols) */}
            <div className="lg:col-span-7">
                <FadeIn delay={0.2}>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-xl px-6 py-4">
                                <label className="block text-gray-400 text-sm mb-1">First Name *</label>
                                <input type="text" className="w-full bg-transparent border-none focus:ring-0 text-black font-medium p-0" />
                            </div>
                            <div className="bg-gray-50 rounded-xl px-6 py-4">
                                <label className="block text-gray-400 text-sm mb-1">Last Name *</label>
                                <input type="text" className="w-full bg-transparent border-none focus:ring-0 text-black font-medium p-0" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-xl px-6 py-4">
                                <label className="block text-gray-400 text-sm mb-1">Email *</label>
                                <input type="email" className="w-full bg-transparent border-none focus:ring-0 text-black font-medium p-0" />
                            </div>
                            <div className="bg-gray-50 rounded-xl px-6 py-4">
                                <label className="block text-gray-400 text-sm mb-1">Phone Number *</label>
                                <input type="tel" className="w-full bg-transparent border-none focus:ring-0 text-black font-medium p-0" />
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl px-6 py-4">
                            <label className="block text-gray-400 text-sm mb-1">Subject *</label>
                            <input type="text" className="w-full bg-transparent border-none focus:ring-0 text-black font-medium p-0" />
                        </div>

                        <div className="bg-gray-50 rounded-xl px-6 py-4">
                            <label className="block text-gray-400 text-sm mb-1">Message *</label>
                            <textarea rows={6} className="w-full bg-transparent border-none focus:ring-0 text-black font-medium p-0 resize-none"></textarea>
                        </div>

                        <div className="flex items-center gap-4">
                            <button type="submit" className="bg-[#04d9ff] text-black px-8 py-4 rounded-full font-bold hover:bg-[#00b8e6] transition-colors">
                                Send Message
                            </button>
                            <button type="submit" className="w-14 h-14 rounded-full bg-[#111] flex items-center justify-center text-white hover:bg-[#04d9ff] hover:text-black transition-colors">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7H7M17 7v10" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </FadeIn>
            </div>

            {/* Right: Info Card (5 cols) */}
            <div className="lg:col-span-5">
                <FadeIn delay={0.4} className="bg-[#04d9ff] rounded-3xl p-8 lg:p-12 text-black space-y-10">
                    {/* Address */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Address</h3>
                        <p className="text-black/70 leading-relaxed font-medium">
                            4517 Washington Ave. Manchester,<br />
                            Kentucky 39495
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <div className="space-y-2">
                            <p className="text-black/70 font-medium">Phone : +0123-456-789</p>
                            <p className="text-black/70 font-medium">Email : example@gmail.com</p>
                        </div>
                    </div>

                    {/* Open Time */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Open Time</h3>
                        <p className="text-black/70 font-medium">
                            Monday - Friday : 10:00 - 20:00
                        </p>
                    </div>

                    {/* Stay Connected */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
                        <div className="flex gap-4">
                             <Link 
                                href="#" 
                                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-[#111] hover:text-[#04d9ff] transition-colors group"
                             >
                                <Instagram className="w-6 h-6 group-hover:stroke-[#04d9ff] transition-colors" />
                             </Link>
                             <Link 
                                href="#" 
                                className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center hover:bg-[#111] hover:text-[#04d9ff] transition-colors group"
                             >
                                <svg className="w-5 h-5 fill-current transition-colors" viewBox="0 0 24 24">
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                             </Link>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>

      </div>
    </section>
  );
};

// Map Section
const MapSection = () => {
    return (
        <section className="h-[400px] w-full bg-gray-100 relative overflow-hidden">
             {/* Placeholder for Map Image/Integration */}
             <div className="absolute inset-0 bg-[url('/map-pattern.png')] bg-cover bg-center opacity-50"></div>
             
             {/* Since we don't have the map image, I'll create a pattern background to simulate it */}
             <div className="absolute inset-0 opacity-10" style={{
                 backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                 backgroundSize: '20px 20px'
             }}></div>
             
             <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold text-gray-500 border border-gray-200 shadow-sm">
                     Map View Placeholder
                 </div>
             </div>
        </section>
    )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactHeader />
      <ContactContent />
      <MapSection />
      <Marquee />
      <Footer />
    </main>
  );
}

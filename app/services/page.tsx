'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/(main)/Footer';
import FadeIn from '@/components/ui/FadeIn';
import Marquee from '@/components/(main)/Marquee';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#111] text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <FadeIn>
            <p className="text-sm md:text-base tracking-widest uppercase text-white/60 font-medium">
              Created to make you stand out with
            </p>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white/90">
              Our Services
            </h1>
          </FadeIn>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {/* Brand Strategy */}
            <FadeIn delay={0.1} className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#c4ff00]/50 transition-colors group min-h-[200px] flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c4ff00] transition-colors">
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase">Brand Strategy & Identity</h3>
                <p className="text-white/40 text-sm">Build a strong and consistent brand</p>
              </div>
            </FadeIn>

            {/* Web Design */}
            <FadeIn delay={0.2} className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#c4ff00]/50 transition-colors group min-h-[200px] flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c4ff00] transition-colors">
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase">Web Design & Development</h3>
                <p className="text-white/40 text-sm">Design and develop modern websites</p>
              </div>
            </FadeIn>

            {/* Glass Image */}
            <FadeIn delay={0.3} className="relative h-[300px] rounded-2xl overflow-hidden bg-[#0a0a0a]">
               <Image 
                src="/glass.png" 
                alt="3D Glass Geometric Shape" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </FadeIn>
          </div>

          {/* Column 2 (Middle - Tall) */}
          <div className="flex flex-col gap-6">
             <FadeIn delay={0.4} className="relative h-full min-h-[500px] rounded-2xl overflow-hidden bg-[#eecfa1]">
               <Image 
                src="/orange.png" 
                alt="3D Abstract Orange Shape" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </FadeIn>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {/* Purple Image */}
            <FadeIn delay={0.5} className="relative h-[300px] rounded-2xl overflow-hidden bg-[#dcd6f7]">
               <Image 
                src="/purple.png" 
                alt="3D Abstract Purple Shape" 
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </FadeIn>

             {/* UI/UX */}
             <FadeIn delay={0.6} className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#c4ff00]/50 transition-colors group min-h-[200px] flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c4ff00] transition-colors">
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase">UI/UX & Graphic Design</h3>
                <p className="text-white/40 text-sm">Craft intuitive and visual experiences</p>
              </div>
            </FadeIn>

             {/* Content Creation */}
             <FadeIn delay={0.7} className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5 hover:border-[#c4ff00]/50 transition-colors group min-h-[200px] flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#c4ff00] transition-colors">
                <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase">Content Creation</h3>
                <p className="text-white/40 text-sm">Create impactful and engaging content</p>
              </div>
            </FadeIn>

          </div>

        </div>
      </section>

      {/* Marquee Section */}
      <Marquee 
        items={['CREATIVE', 'STUDIO', 'CREATIVE', 'STUDIO', 'CREATIVE', 'STUDIO']} 
        className="bg-[#c4ff00] text-black border-none" 
      />

      {/* Our Best Works Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn className="mb-12">
          <p className="text-sm font-bold uppercase tracking-wider text-white/60 mb-2">Our Best Works</p>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight uppercase">
              Explore a collection of our selected projects where creativity meets purpose
            </h2>
            <div className="flex gap-2">
               <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
               </button>
               <button className="w-10 h-10 rounded-full bg-[#c4ff00] text-black flex items-center justify-center hover:bg-[#b3e600] transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
               </button>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <FadeIn delay={0.1} className="group">
            <div className="relative h-[400px] w-full bg-[#5f9ea0] rounded-2xl overflow-hidden mb-4 p-8 flex flex-col justify-between">
               <Image 
                src="/1.png" 
                alt="Verra Studio" 
                fill
                className="object-cover mix-blend-overlay opacity-50 transition-transform duration-700 group-hover:scale-105"
               />
               <h3 className="relative z-10 text-4xl font-bold text-black uppercase">Explore</h3>
               <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </div>
            </div>
            <div className="flex justify-between items-center text-sm">
               <span className="font-bold text-white">Verra Studio</span>
               <span className="text-white/50">Web Design & Development</span>
            </div>
          </FadeIn>

          {/* Project 2 */}
          <FadeIn delay={0.2} className="group">
            <div className="relative h-[400px] w-full bg-[#1a1a1a] rounded-2xl overflow-hidden mb-4">
               <Image 
                src="/box.png" 
                alt="Lunora" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#c4ff00] group-hover:text-black transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </div>
            </div>
            <div className="flex justify-between items-center text-sm">
               <span className="font-bold text-white">Lunora</span>
               <span className="text-white/50">Brand Strategy & Identity</span>
            </div>
          </FadeIn>

          {/* Project 3 */}
          <FadeIn delay={0.3} className="group">
             <div className="relative h-[400px] w-full bg-[#1a1a1a] rounded-2xl overflow-hidden mb-4">
               <Image 
                src="/stack.png" 
                alt="Arkana" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#c4ff00] group-hover:text-black transition-colors">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </div>
            </div>
            <div className="flex justify-between items-center text-sm">
               <span className="font-bold text-white">Arkana</span>
               <span className="text-white/50">UI/UX Design</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Work Process Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/10">
        <FadeIn className="flex justify-between items-start mb-16">
          <h2 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight uppercase text-white/90">
            The best work happens when we build it together
          </h2>
          <span className="hidden md:block text-sm font-bold uppercase tracking-wider text-white/60">Our Work Process</span>
        </FadeIn>

        <div className="space-y-4">
          {/* Step 1 - Expanded */}
          <FadeIn className="bg-[#c4ff00] rounded-3xl p-8 md:p-12 overflow-hidden relative">
             <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="relative w-full md:w-1/3 h-64 rounded-2xl overflow-hidden">
                   <Image 
                    src="/hero.png" 
                    alt="Discover Phase" 
                    fill
                    className="object-cover"
                   />
                </div>
                <div className="flex-1 text-center md:text-left">
                   <h3 className="text-4xl md:text-6xl font-black text-black/20 uppercase mb-4">01</h3>
                   <h4 className="text-3xl md:text-5xl font-bold text-black uppercase mb-6">Discover</h4>
                   <p className="text-black/80 leading-relaxed max-w-md">
                     We begin by understanding your brand, goals, audience, and challenges through research, interviews, and workshops. This step lays the foundation for meaningful design.
                   </p>
                </div>
             </div>
          </FadeIn>

          {/* Step 2 */}
          <FadeIn delay={0.1} className="group bg-[#1a1a1a] rounded-3xl p-8 md:p-12 hover:bg-[#222] transition-colors cursor-pointer border border-white/5">
             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-8 w-full md:w-1/3">
                   <span className="text-xl font-bold text-white/50">02</span>
                   <h4 className="text-3xl font-bold text-white uppercase">Define</h4>
                </div>
                <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg md:text-right">
                   We identify clear objectives, craft a creative direction, and develop a strategic plan to align your vision with impactful solutions.
                </p>
             </div>
          </FadeIn>

          {/* Step 3 */}
          <FadeIn delay={0.2} className="group bg-[#1a1a1a] rounded-3xl p-8 md:p-12 hover:bg-[#222] transition-colors cursor-pointer border border-white/5">
             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-8 w-full md:w-1/3">
                   <span className="text-xl font-bold text-white/50">03</span>
                   <h4 className="text-3xl font-bold text-white uppercase">Design</h4>
                </div>
                <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg md:text-right">
                   We explore ideas, build wireframes, and develop visual concepts. Our focus is on creating intuitive and engaging designs that connect with users.
                </p>
             </div>
          </FadeIn>

           {/* Step 4 */}
           <FadeIn delay={0.3} className="group bg-[#1a1a1a] rounded-3xl p-8 md:p-12 hover:bg-[#222] transition-colors cursor-pointer border border-white/5">
             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-8 w-full md:w-1/3">
                   <span className="text-xl font-bold text-white/50">04</span>
                   <h4 className="text-3xl font-bold text-white uppercase">Deliver</h4>
                </div>
                <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-lg md:text-right">
                   We finalize the design, prepare all assets, and support handoff or implementation. Every detail is polished to ensure a smooth launch and long-term success.
                </p>
             </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </main>
  );
}

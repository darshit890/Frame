'use client';

import FadeIn from '../ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../ui/Stagger';
import { Instagram, X } from 'lucide-react';
import { toast } from 'sonner';
import { useState } from 'react';
import BackgroundEffect from '@/components/ui/BackgroundEffect';

export default function Contact() {
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      toast.success(result.message);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="contact" className="bg-background text-foreground py-24 font-sans relative overflow-hidden">
      <BackgroundEffect />
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Header */}
        <div className="flex justify-between items-start mb-16">
          <FadeIn className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-6 h-[2px] bg-primary"></div>
               <span className="text-muted-foreground text-sm font-medium tracking-wide uppercase">Contact Us</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Join Us in Creating <br />
              <span className="text-primary">Something Great</span>
            </h2>
          </FadeIn>

          {/* Floating Badge (Top Right) */}
          <FadeIn delay={0.3} className="hidden lg:flex relative w-32 h-32 items-center justify-center">
            <div className="absolute inset-0 bg-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-spin-slow">
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
            <form onSubmit={handleSubmit}>
              <StaggerItem className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <input 
                    name="firstName"
                    type="text" 
                    placeholder="First Name *" 
                    required
                    className="w-full bg-card border border-border rounded-2xl px-6 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <input 
                    name="lastName"
                    type="text" 
                    placeholder="Last Name *" 
                    required
                    className="w-full bg-card border border-border rounded-2xl px-6 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors" 
                  />
                </div>
              </StaggerItem>

              <StaggerItem className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <input 
                    name="email"
                    type="email" 
                    placeholder="Email *" 
                    required
                    className="w-full bg-card border border-border rounded-2xl px-6 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors" 
                  />
                </div>
                <div className="space-y-2">
                  <input 
                    name="phone"
                    type="tel" 
                    placeholder="Phone Number *" 
                    required
                    className="w-full bg-card border border-border rounded-2xl px-6 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors" 
                  />
                </div>
              </StaggerItem>

              <StaggerItem className="space-y-2 mb-6">
                <input 
                  name="subject"
                  type="text" 
                  placeholder="Subject *" 
                  required
                  className="w-full bg-card border border-border rounded-2xl px-6 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors" 
                />
              </StaggerItem>

              <StaggerItem className="space-y-2 mb-8">
                <textarea 
                  name="message"
                  rows={6} 
                  placeholder="Message *" 
                  required
                  className="w-full bg-card border border-border rounded-2xl px-6 py-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none" 
                ></textarea>
              </StaggerItem>

              <StaggerItem>
                <button 
                  type="submit"
                  disabled={isPending}
                  className="bg-primary text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isPending ? 'Sending...' : 'Send Message'}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </StaggerItem>
            </form>
          </StaggerContainer>

          {/* Right: Contact Info (1 col) */}
          <FadeIn delay={0.2} className="bg-card rounded-4xl p-8 border border-border h-fit">
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center shrink-0 text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email Us</p>
                  <a href="mailto:hello@framonics.com" className="text-lg font-bold hover:text-primary transition-colors">
                    hello@framonics.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shrink-0 text-primary">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Call Us</p>
                  <a href="tel:+1234567890" className="text-lg font-bold hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
               <h4 className="text-lg font-bold mb-6">Follow Us</h4>
               <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                     <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                     <X className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                     </svg>
                  </a>
               </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}

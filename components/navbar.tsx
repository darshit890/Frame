'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hide Navbar on Studio page
  if (pathname?.startsWith('/studio')) return null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav 
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        isScrolled && !isMobileMenuOpen 
          ? 'top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] lg:w-[75%] max-w-5xl rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]' 
          : 'top-0 left-1/2 -translate-x-1/2 w-full bg-transparent'
      }`}
    >
      <div className={`${isScrolled ? 'px-6' : 'max-w-7xl mx-auto px-6'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 z-50">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10">
                 <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
              </div>
              <span className="text-xl font-bold text-white">Digital Agency.</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-white">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Projects', href: '/projects' },
              { name: 'Blogs', href: '/blogs' },
              { name: 'Contact Us', href: '/contact' },
            ].map((item, index) => {
              const isActive = item.href === '/' 
                ? pathname === '/' 
                : item.href === '/blogs' 
                  ? pathname.startsWith('/blog') || pathname.startsWith('/blogs')
                  : pathname.startsWith(item.href);

              return (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className={`relative px-3 py-1.5 rounded-full transition-colors duration-300 block ${
                      isActive 
                        ? "text-primary font-bold" 
                        : "text-white hover:text-primary"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        className="absolute inset-0 bg-primary/20 rounded-full shadow-[0_0_20px_rgba(4,217,255,0.3)] -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/contact" 
              className="bg-primary text-black px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-hover transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <motion.button 
            className="md:hidden z-50 w-10 h-10 flex items-center justify-center text-white"
            onClick={toggleMobileMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-40 md:hidden flex flex-col"
          >
             {/* Background Effects */}
             <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
             <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col justify-center h-full px-8 relative z-10">
              <div className="space-y-6">
                {[
                  { name: 'Home', href: '/', number: '01' },
                  { name: 'Services', href: '/services', number: '02' },
                  { name: 'Projects', href: '/projects', number: '03' },
                  { name: 'Blogs', href: '/blogs', number: '04' },
                  { name: 'Contact Us', href: '/contact', number: '05' },
                ].map((item, index) => {
                  const isActive = item.href === '/' 
                    ? pathname === '/' 
                    : item.href === '/blogs' 
                      ? pathname.startsWith('/blog') || pathname.startsWith('/blogs')
                      : pathname.startsWith(item.href);
                  
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link 
                        href={item.href} 
                        onClick={toggleMobileMenu} 
                        className="group flex items-center gap-4"
                      >
                        <span className={`text-sm font-mono ${isActive ? "text-primary" : "text-white/40 group-hover:text-primary transition-colors"}`}>
                          {item.number}
                        </span>
                        <span className={`text-4xl sm:text-5xl font-bold uppercase tracking-tight transition-all duration-300 ${
                          isActive 
                            ? "text-white scale-105 origin-left" 
                            : "text-white/60 hover:text-white hover:pl-2"
                        }`}>
                          {item.name}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-8 border-t border-white/10"
              >
                <div className="flex flex-col gap-4">
                  <h4 className="text-white/40 text-sm font-mono uppercase">Get in touch</h4>
                  <a href="mailto:hello@digitalagency.com" className="text-xl text-white font-medium hover:text-primary transition-colors">
                    hello@digitalagency.com
                  </a>
                  <Link 
                    href="/contact" 
                    onClick={toggleMobileMenu}
                    className="inline-flex items-center gap-2 text-primary font-bold hover:translate-x-2 transition-transform"
                  >
                    Start a Project
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
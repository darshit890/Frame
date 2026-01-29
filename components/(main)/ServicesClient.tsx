'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import ScaleIn from '@/components/ui/ScaleIn';
import { useState } from 'react';

interface Service {
  _id: string;
  title: string;
  image: string;
  alt: string;
  href: string;
}

interface Header {
  headingLine1: string;
  headingLine2: string;
  description: string;
}

interface ServicesClientProps {
  services: Service[];
  header: Header;
}

export default function ServicesClient({ services = [], header }: ServicesClientProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const {
    headingLine1 = 'OurCompany',
    headingLine2 = 'Service!',
    description = 'We are a full-service digital agency that builds immersive user experience. Our team creates an exceptional visualization and thought-out functionality.'
  } = header || {};

  return (
    <section className="bg-white py-20 font-sans text-black">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <FadeIn direction="right">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[0.9]">
              {headingLine1} <br />
              {headingLine2}
            </h2>
          </FadeIn>
          
          <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full">
            <div className="w-2 h-2 bg-[#111] rounded-full"></div>
          </div>

          <FadeIn direction="left">
            <p className="max-w-md text-sm font-medium leading-relaxed text-right lg:text-left">
              {description}
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col">
          {services?.map((service, index) => (
            <ScaleIn 
              key={service._id || index}
              className="relative w-full"
            >
              <div
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`group w-full overflow-hidden bg-gray-100 transition-all duration-700 ease-in-out border-b border-white/20 last:border-none ${
                  hovered === null ? 'h-[200px] lg:h-[250px]' : hovered === index ? 'h-[400px] lg:h-[500px]' : 'h-[150px] lg:h-[200px]'
                }`}
              >
              {/* Background Image */}
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.alt || service.title}
                  fill
                  quality={100}
                  priority={true}
                  unoptimized={true}
                  className="object-cover"
                />
              )}
              
              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <div className="flex justify-between items-center">
                  <h3 className="text-5xl lg:text-8xl font-bold text-white tracking-tight uppercase drop-shadow-md leading-none">
                    {service.title}
                  </h3>

                  {/* Circular Badge / Arrow */}
                  <div className="flex items-center gap-4">
                     {index === 0 && (
                        <div className="hidden lg:flex w-24 h-24 rounded-full bg-black text-white items-center justify-center animate-spin-slow">
                           <svg viewBox="0 0 100 100" className="w-full h-full p-2 fill-white">
                              <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                              <text fontSize="13">
                                 <textPath href="#curve">
                                    Scroll Down for more details •
                                 </textPath>
                              </text>
                           </svg>
                           <div className="absolute inset-0 flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                           </div>
                        </div>
                     )}
                     
                     <Link href={service.href || '/services'} className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                     </Link>
                  </div>
                </div>
              </div>
              </div>
            </ScaleIn>
          ))}
        </div>

      </div>
    </section>
  );
}

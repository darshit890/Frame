'use client'; 
 
import { useState } from 'react'; 
import Image from 'next/image'; 
import FadeIn from '../ui/FadeIn'; 
import ScaleIn from '../ui/ScaleIn'; 
import BackgroundEffect from '@/components/ui/BackgroundEffect'; 

interface Testimonial {
  name?: string;
  role?: string;
  rating?: number;
  text?: string;
  imageUrl?: string;
  imageAlt?: string;
}

interface TestimonialsClientProps {
  subheading?: string;
  heading?: string;
  testimonials?: Testimonial[];
}

export default function TestimonialsClient({
  subheading = 'Clients Testimonials',
  heading = 'Testimonials that Speaks to My Results',
  testimonials = []
}: TestimonialsClientProps) { 
  const [activeIndex, setActiveIndex] = useState(0); 

  // Use passed testimonials or fallback to empty array/null check
  // The user's original code had static data.
  // We will assume `testimonials` prop is passed from Sanity.
  // If it's empty, we should probably handle it gracefully or return null.
  
  if (!testimonials || testimonials.length === 0) {
     return null;
  }

  const nextTestimonial = () => { 
    setActiveIndex((prev) => (prev + 1) % testimonials.length); 
  }; 

  const prevTestimonial = () => { 
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length); 
  }; 

  const current = testimonials[activeIndex]; 

  return ( 
    <section className="bg-white py-24 font-sans text-black relative overflow-hidden"> 
      <BackgroundEffect />
      <div className="max-w-7xl mx-auto px-6 relative"> 
        
        {/* Header */} 
        <FadeIn className="text-center mb-20"> 
          <div className="flex items-center justify-center gap-3 mb-4"> 
            <div className="w-6 h-[2px] bg-primary"></div> 
            <span className="text-gray-500 text-sm font-medium tracking-wide uppercase">
              {subheading}
            </span> 
          </div> 
          <h2 className="text-4xl lg:text-5xl font-bold max-w-2xl mx-auto leading-tight text-black"> 
            {heading === 'Testimonials that Speaks to My Results' ? (
               <>Testimonials that <br /> Speaks to My Results</>
            ) : (
               heading
            )}
          </h2> 
        </FadeIn> 
        
        {/* Carousel Container */} 
        <ScaleIn className="relative max-w-5xl mx-auto"> 
          
          {/* Main Card */} 
          <div className="bg-[#f8f8f8] rounded-3xl lg:rounded-[3rem] p-8 lg:p-16 relative mx-0 lg:mx-20"> 
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start"> 
              
              {/* Image Section */} 
              <div className="relative shrink-0"> 
                <div className="w-32 h-32 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-muted shadow-sm relative z-10"> 
                   {current.imageUrl ? (
                     <Image 
                        src={current.imageUrl} 
                        alt={current.imageAlt || current.name || 'Client photo'} 
                        fill 
                        className="object-cover grayscale" 
                     />
                   ) : (
                      <div className="w-full h-full bg-muted" />
                   )}
                </div> 
                {/* Quote Badge */} 
                <div className="absolute top-0 right-0 lg:top-4 lg:-right-2 bg-primary w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center z-20 border-4 border-[#f8f8f8]"> 
                   <svg className="w-4 h-4 lg:w-5 lg:h-5 text-black" fill="currentColor" viewBox="0 0 24 24"> 
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /> 
                   </svg> 
                </div> 
              </div> 

              {/* Content Section */} 
              <div className="flex-1 text-center lg:text-left space-y-6"> 
                 {/* Stars */} 
                 <div className="flex items-center justify-center lg:justify-start gap-2"> 
                    <div className="flex gap-1"> 
                       {[1, 2, 3, 4, 5].map((star) => ( 
                          <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24"> 
                             <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" /> 
                          </svg> 
                       ))} 
                    </div> 
                    <span className="font-bold text-lg ml-2 text-black">{current.rating}</span> 
                 </div> 

                 <p className="text-gray-600 text-base lg:text-lg leading-relaxed"> 
                    &quot;{current.text}&quot; 
                 </p> 

                 <div> 
                    <h3 className="font-bold text-xl text-black">{current.name}</h3> 
                    <p className="text-gray-500 text-sm mt-1">{current.role}</p> 
                 </div> 

                 {/* Mobile Navigation Buttons */} 
                 <div className="flex justify-center gap-4 pt-4 lg:hidden"> 
                    <button 
                      onClick={prevTestimonial} 
                      className="w-12 h-12 bg-[#f8f8f8] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform" 
                    > 
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"> 
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /> 
                       </svg> 
                    </button> 
                    <button 
                      onClick={nextTestimonial} 
                      className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform" 
                    > 
                       <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"> 
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /> 
                       </svg> 
                    </button> 
                 </div>
              </div> 
            </div> 
          </div> 
          
          {/* Desktop Navigation Buttons (Absolute Positioned) */}
          <button 
            onClick={prevTestimonial} 
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-14 h-14 bg-white border border-gray-100 rounded-full items-center justify-center text-black shadow-lg hover:scale-110 transition-transform z-30" 
          >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
             </svg>
          </button>
          
          <button 
            onClick={nextTestimonial} 
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-14 h-14 bg-primary rounded-full items-center justify-center text-black hover:scale-110 transition-transform z-30" 
          >
             <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
             </svg>
          </button>

        </ScaleIn> 
      </div> 
    </section> 
  ); 
}
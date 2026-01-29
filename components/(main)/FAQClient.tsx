'use client';

import { useState } from 'react';
import FadeIn from '../ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../ui/Stagger';

interface FAQItem {
  question?: string;
  answer?: string;
}

interface FAQClientProps {
  subheading?: string;
  heading?: string;
  faqs?: FAQItem[];
}

export default function FAQClient({
  subheading,
  heading,
  faqs
}: FAQClientProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-primary"></div>
            <span className="text-gray-500 text-sm font-medium tracking-wide uppercase">
              {subheading}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            {heading}
          </h2>
        </FadeIn>

        {/* Accordion */}
        <StaggerContainer className="space-y-4">
          {faqs.map((faq, index) => (
            <StaggerItem 
              key={index} 
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-primary shadow-lg' 
                  : 'bg-[#f5f5f5] hover:bg-gray-200'
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-8 py-6 text-left focus:outline-none"
              >
                <span className="font-bold text-lg pr-8">{faq.question}</span>
                <span className="shrink-0 text-2xl font-light">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className={`px-8 transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-black/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

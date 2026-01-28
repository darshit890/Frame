'use client';

import { useState } from 'react';
import FadeIn from '../ui/FadeIn';
import { StaggerContainer, StaggerItem } from '../ui/Stagger';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const faqs = [
    {
      question: 'What services does your digital agency offer?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      question: 'What is your process for working with clients?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      question: 'What platforms and technologies do you specialize in?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      question: 'How can your agency help my business grow online?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      question: 'How do you handle communication and feedback during a project?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <FadeIn className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[2px] bg-[#c4ff00]"></div>
            <span className="text-gray-500 text-sm font-medium tracking-wide uppercase">FAQs</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Questions? Look here.
          </h2>
        </FadeIn>

        {/* Accordion */}
        <StaggerContainer className="space-y-4">
          {faqs.map((faq, index) => (
            <StaggerItem 
              key={index} 
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                activeIndex === index 
                  ? 'bg-[#c4ff00] shadow-lg' 
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

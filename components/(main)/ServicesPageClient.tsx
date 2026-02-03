'use client';

import React from 'react';
import Footer from '@/components/(main)/Footer';
import ServicesHero from './services/ServicesHero';
import ServicesBentoGrid from './services/ServicesBentoGrid';
import ServicesMarquee from './services/ServicesMarquee';
import FeaturedProjects, { FeaturedProject } from './services/FeaturedProjects';
import WorkProcess, { WorkProcessStep } from './services/WorkProcess';
import { ServiceItem } from './services/ServiceCard';
import BackgroundEffect from '@/components/ui/BackgroundEffect';
import PortfolioDownload from '../PortfolioTemorary';

interface ServicesPageClientProps {
  pageData?: {
    subheading?: string;
    heading?: string;
    column1?: ServiceItem[];
    column2?: ServiceItem[];
    column3?: ServiceItem[];
    marqueeItems?: string[];
    featuredProjects?: FeaturedProject[];
  };
  workProcessData?: {
    subheading?: string;
    heading?: string;
    steps?: WorkProcessStep[];
  };
}

export default function ServicesPageClient({ pageData, workProcessData }: ServicesPageClientProps) {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundEffect />
      
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <ServicesHero 
          subheading={pageData?.subheading} 
          heading={pageData?.heading} 
        />
        <ServicesBentoGrid 
          column1={pageData?.column1}
          column2={pageData?.column2}
          column3={pageData?.column3}
        />
      </section>

      <ServicesMarquee items={pageData?.marqueeItems} />
      <PortfolioDownload />

      <WorkProcess 
        subheading={workProcessData?.subheading} 
        heading={workProcessData?.heading} 
        steps={workProcessData?.steps} 
      />

      <Footer />
    </main>
  );
}

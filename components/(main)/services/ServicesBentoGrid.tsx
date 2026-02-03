'use client';

import React from 'react';
import ServiceCard, { ServiceItem } from './ServiceCard';
import FadeIn from '@/components/ui/FadeIn';
import Image from 'next/image';

interface ServicesBentoGridProps {
  column1?: ServiceItem[];
  column2?: ServiceItem[];
  column3?: ServiceItem[];
}

export default function ServicesBentoGrid({ column1, column2, column3 }: ServicesBentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Column 1 */}
      <div className="flex flex-col gap-6">
        {column1?.map((item, index) => (
          <ServiceCard key={index} item={item} delay={0.1 + (index * 0.1)} />
        ))}
      </div>

      {/* Column 2 (Middle - Tall) */}
      <div className="flex flex-col gap-6">
        {column2?.map((item, index) => {
           // Special handling for tall middle image if needed
           if (item._type === 'imageCard') {
             return (
                <FadeIn key={index} delay={0.4} className="relative h-full min-h-[500px] rounded-2xl overflow-hidden" style={{ backgroundColor: item.backgroundColor || '#eecfa1' }}>
                    {item.imageUrl && (
                    <Image 
                        src={item.imageUrl} 
                        alt="Service Image" 
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                    )}
                </FadeIn>
             )
           }
           return <ServiceCard key={index} item={item} delay={0.4} />
        })}
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-6">
         {column3?.map((item, index) => (
          <ServiceCard key={index} item={item} delay={0.5 + (index * 0.1)} />
        ))}
      </div>

    </div>
  );
}
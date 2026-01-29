import { sanityFetch } from '@/sanity/lib/live';
import { testimonialsQuery } from '@/sanity/lib/queries';
import TestimonialsClient from './TestimonialsClient';

export default async function Testimonials() {
  const { data } = await sanityFetch({ query: testimonialsQuery });

  return (
    <TestimonialsClient 
      subheading={data?.subheading}
      heading={data?.heading}
      testimonials={data?.testimonials}
    />
  );
}

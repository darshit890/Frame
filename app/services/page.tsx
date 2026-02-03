import { sanityFetch } from '@/sanity/lib/live';
import { servicesPageQuery } from '@/sanity/lib/queries';
import ServicesPageClient from '@/components/(main)/ServicesPageClient';

export default async function ServicesPage() {
  const { data } = await sanityFetch({ query: servicesPageQuery });
  const { page, workProcess } = data || {};

  return (
    <ServicesPageClient 
      pageData={page} 
      workProcessData={workProcess} 
    />
  );
}

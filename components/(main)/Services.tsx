import { sanityFetch } from '@/sanity/lib/live';
import { servicesQuery } from '@/sanity/lib/queries';
import ServicesClient from './ServicesClient';

export default async function Services() {
  const { data } = await sanityFetch({ query: servicesQuery });

  const { items: services, header } = data || {};

  return (
    <ServicesClient 
      services={services || []} 
      header={header}
    />
  );
}

import { sanityFetch } from '@/sanity/lib/live';
import { workProcessQuery } from '@/sanity/lib/queries';
import ProcessClient from './ProcessClient';

export default async function Process() {
  const { data } = await sanityFetch({ query: workProcessQuery });

  return (
    <ProcessClient 
      subheading={data?.subheading}
      heading={data?.heading}
      steps={data?.steps}
    />
  );
}

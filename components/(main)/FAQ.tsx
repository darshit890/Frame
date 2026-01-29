import { sanityFetch } from '@/sanity/lib/live';
import { faqQuery } from '@/sanity/lib/queries';
import FAQClient from './FAQClient';

export default async function FAQ() {
  const { data } = await sanityFetch({ query: faqQuery });

  return (
    <FAQClient 
      subheading={data?.subheading}
      heading={data?.heading}
      faqs={data?.faqs}
    />
  );
}

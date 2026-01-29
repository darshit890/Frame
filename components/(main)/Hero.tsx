import { sanityFetch } from '@/sanity/lib/live';
import { heroQuery } from '@/sanity/lib/queries';
import HeroClient from './HeroClient';

export default async function Hero() {
  const { data } = await sanityFetch({ query: heroQuery });

  const {
    badgeText,
    headingLine1,
    headingLine2,
    tags,
    description,
    statsProjectCount,
    statsProjectLabel,
    statsExpCount,
    statsExpLabel,
    statsCustomerCount,
    statsCustomerLabel,
    scrollingText
  } = data || {};

  return (
    <HeroClient
      badgeText={badgeText}
      headingLine1={headingLine1}
      headingLine2={headingLine2}
      tags={tags}
      description={description}
      statsProjectCount={statsProjectCount}
      statsProjectLabel={statsProjectLabel}
      statsExpCount={statsExpCount}
      statsExpLabel={statsExpLabel}
      statsCustomerCount={statsCustomerCount}
      statsCustomerLabel={statsCustomerLabel}
      scrollingText={scrollingText}
    />
  );
}

import { sanityFetch } from '@/sanity/lib/live';
import { portfolioQuery } from '@/sanity/lib/queries';
import PortfolioClient from './PortfolioClient';

export default async function Portfolio() {
  const { data } = await sanityFetch({ query: portfolioQuery });

  return (
    <PortfolioClient 
      subheading={data?.subheading}
      headingLine1={data?.headingLine1}
      headingLine2={data?.headingLine2}
      viewAllLink={data?.viewAllLink}
      projects={data?.projects?.slice(0, 4)}
    />
  );
}

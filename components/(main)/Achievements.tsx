import { sanityFetch } from '@/sanity/lib/live';
import { achievementsQuery } from '@/sanity/lib/queries';
import AchievementsClient from './AchievementsClient';

export default async function Achievements() {
  const { data } = await sanityFetch({ query: achievementsQuery });

  return (
    <AchievementsClient 
      subheading={data?.subheading}
      heading={data?.heading}
      achievements={data?.achievements}
    />
  );
}

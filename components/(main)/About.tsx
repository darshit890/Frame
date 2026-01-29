import { sanityFetch } from '@/sanity/lib/live';
import { aboutQuery } from '@/sanity/lib/queries';
import AboutClient from './AboutClient';

export default async function About() {
  const { data } = await sanityFetch({ query: aboutQuery });

  const {
    heading,
    description,
    imageUrl,
    imageAlt,
    experienceCount,
    experienceLabel,
    checklist,
    author
  } = data || {};

  return (
    <AboutClient
      heading={heading}
      description={description}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      experienceCount={experienceCount}
      experienceLabel={experienceLabel}
      checklist={checklist}
      author={author}
    />
  );
}

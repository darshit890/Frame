import { defineQuery } from 'groq';
import { client } from './sanity/lib/client';

const query = defineQuery(`*[_type == "servicesPage"] {
  _id,
  _createdAt,
  heading,
  "featuredProjectsCount": count(featuredProjects),
  featuredProjects[] {
    title
  }
}`);

async function checkDocs() {
  const docs = await client.fetch(query);
  console.log('Services Page Documents:', JSON.stringify(docs, null, 2));
}

checkDocs();

import { client } from "@/sanity/lib/client";
import { portfolioQuery } from "@/sanity/lib/queries";
import ProjectsClient from "@/components/(main)/ProjectsClient";

export const revalidate = 60;

export default async function ProductPage() {
  const data = await client.fetch(portfolioQuery);
  return <ProjectsClient projects={data?.projects || []} />;
}

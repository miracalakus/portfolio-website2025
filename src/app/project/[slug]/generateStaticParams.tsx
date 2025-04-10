import { client } from "../../../sanity/lib/client";

export async function generateStaticParams() {
  const query = `*[_type == "project"]{ "slug": slug.current }`;
  const projects = await client.fetch(query);

  return projects.map((project: { slug: string }) => ({
    params: {
      slug: project.slug,
    },
  }));
}

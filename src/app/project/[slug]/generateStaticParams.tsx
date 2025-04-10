import { client } from "../../../sanity/lib/client";

interface ProjectSlug {
  slug: {
    current: string;
  };
}

export async function generateStaticParams() {
  const projects = await client.fetch<ProjectSlug[]>(`*[_type == "project"]{ slug }`);
  return projects.map((project) => ({
    slug: project.slug.current,
  }));
}

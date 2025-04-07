import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Project {
  title: string;
  category?: string;
  year?: number;
  projectUrl?: string;
  software_code?: string[];
  description?: string;
  slug: { current: string };
  mainImage: any;
  breakdown?: {
    title?: string;
    text?: string;
    images?: any[];
  }[];
  video?: {
    asset?: {
      url?: string;
      _ref?: string;
    };
  };
}

async function getProject(slug: string): Promise<Project | null> {
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title,
    description,
    slug,
    mainImage,
    category,
    software_code,
    year,
    projectUrl,
    breakdown[] {
      title,
      text,
      images
    },
    video
  }`;

  const project = await client.fetch(query, { slug });
  return project || null;
}

const CategoryTitles: Record<string, string> = {
  dev: "Development",
  ux_ui_design: "UX/UI Design",
  motion_design: "Motion Design",
};

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);
  if (!project) return notFound();

  const videoUrl = project.video?.asset?.url
    ? project.video.asset.url
    : project.video?.asset?._ref
    ? `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${project.video.asset._ref.split("-")[1]}.${project.video.asset._ref.split("-")[2]}`
    : null;

  return (
    <div className="container mx-auto px-4 py-10 space-y-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="space-y-4">
          <h1 className="font-title">
            {project.title}
          </h1>
            <div className="font-subtitle space-y-2">
              {project.category && (
                <p>
                  {CategoryTitles[project.category] || project.category.replace(/_/g, " ")}
                </p>
              )}
              {project.software_code && project.software_code.length > 0 && (
                <p>
                  {project.software_code.join(", ")}
                </p>
              )}
              {project.year && (
                <p>
                  {project.year}
                </p>
              )}
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                  >View Project</a>
                )}
        </div>
      </div>
                <div>
                  {project.description && (
                    <p className="font-body">{project.description}</p>
                    )}
                    </div>
                    </div>
                  <div className="w-full relative aspect-[16/9]">
                  {project.mainImage && (
                    <Image
                      src={urlFor(project.mainImage).url()}
                      alt={project.title}
                      fill
                      className="object-contain"
                      sizes="100vw"

                    />
                  )}
                  </div>
     <div className="space-y-5">
      {project.breakdown && project.breakdown.length > 0 && (
        <div>
          {project.breakdown.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {section.title && (
                  <h2 className="font-title">{section.title}</h2>
                )}
                {section.text && (
                  <p className="font-body">{section.text}</p>
                )}
              </div>

              {section.images && section.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mt-4">
                  {section.images.map((img, i) => (
                    <Image
                      key={i}
                      src={urlFor(img).url()}
                      alt={`Breakdown image ${i + 1}`}
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      </div>

      {/* === VIDEO SECTION === */}
      {videoUrl && (
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-3">Project Video</h2>
          <video controls className="w-full max-w-4xl rounded-lg shadow-md">
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}

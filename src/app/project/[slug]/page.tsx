import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

interface MediaAsset {
  asset: {
    _ref: string;
    url?: string;
  };
}

interface Media {
  file: MediaAsset;
}

interface SectionWithMedia {
  title?: string;
  text?: string;
  media?: Media;
}

interface SectionWithMediaArray {
  title?: string;
  text?: string;
  media?: Media[];
}

interface FlexibleMedia {
  mediaType?: "image" | "video";
  image?: MediaAsset;
  file?: MediaAsset;
}

interface Project {
  title: string;
  category?: string;
  year?: number;
  projectUrl?: string;
  software_code?: string[];
  description?: string;
  slug: { current: string };
  mainMedia?: Media;
  problem?: SectionWithMedia;
  concept?: SectionWithMediaArray;
  research?: SectionWithMedia;
  makingOf?: SectionWithMediaArray;
  video?: {
    asset?: {
      url?: string;
      _ref?: string;
    };
  };
  nextProjectSlug?: string;
}

const CategoryTitles: Record<string, string> = {
  dev: "Development",
  ux_ui_design: "UX/UI Design",
  motion_design: "Motion Design",
};

// Get Sanity file URL fallback
const getSanityFileUrl = (ref: string): string => {
  const [, id, ext] = ref.split("-");
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${ext}`;
};

// Render either image or video based on file type
const RenderMedia = ({ media }: { media: FlexibleMedia }) => {
  if (!media) return null;

  // ✅ If explicitly marked as image
  if (media.mediaType === "image" && media.image?.asset?._ref) {
    const url = urlFor(media.image).url();
    return (
      <Image
        src={url}
        alt="Image"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover rounded-lg"
      />
    );
  }

  // ✅ If explicitly marked as video
  if (media.mediaType === "video" && media.file?.asset?._ref) {
    const ref = media.file.asset._ref;
    const url = media.file.asset.url || getSanityFileUrl(ref);
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover rounded-lg"
      >
        <source src={url} type="video/mp4" />
      </video>
    );
  }

  // ⚠️ Fallback if mediaType not set (legacy content)
  if (media.file?.asset?._ref?.startsWith("image-")) {
    const url = urlFor({ asset: { _ref: media.file.asset._ref } }).url();
    return (
      <Image
        src={url}
        alt="Image"
        width={1600}
        height={900}
        className="w-full h-auto object-cover rounded-lg"
      />
    );
  }

  if (media.file?.asset?._ref?.startsWith("file-")) {
    const ref = media.file.asset._ref;
    const url = media.file.asset.url || getSanityFileUrl(ref);
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover rounded-lg"
      >
        <source src={url} type="video/mp4" />
      </video>
    );
  }

  return null;
};




export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const { params } = props;
  const { slug } = await params;

  const query = `*[_type == "project" && slug.current == $slug][0] {
    title,
    description,
    slug,
    mainMedia {
      mediaType,
      image { asset },
      file { asset }
    },
    category,
    software_code,
    year,
    projectUrl,
    problem {
      title,
      text,
      media {
        mediaType,
        image { asset },
        file { asset }
      }
    },
    concept {
      title,
      text,
      media[] {
        mediaType,
        image { asset },
        file { asset }
      }
    },
    research {
      title,
      text,
      media {
        mediaType,
        image { asset },
        file { asset }
      }
    },
    makingOf {
      title,
      text,
      media[] {
        mediaType,
        image { asset },
        file { asset }
      }
    },
    video,
    nextProjectSlug
  }`;
  
  const project: Project | null = await client.fetch(query, { slug });

  if (!project) return notFound();

  // Fetch title for next project
  let nextProjectTitle: string | undefined = undefined;
  if (project.nextProjectSlug) {
    nextProjectTitle = await client.fetch(
      `*[_type == "project" && slug.current == $slug][0].title`,
      { slug: project.nextProjectSlug }
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 space-y-24">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="space-y-4">
          <h1 className="font-title text-7xl">{project.title}</h1>
          <div className="font-subtitle space-y-2">
          {project.category && (
              <p>
                {CategoryTitles[project.category] ||
                  project.category.replace(/_/g, " ")}
              </p>
            )}
            {Array.isArray(project.software_code) && project.software_code.length > 0 && (
              <p>{project.software_code.join(", ")}</p>
            )}
            {project.year && <p>{project.year}</p>}
            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            )}
          </div>
        </div>
        {project.description && <p className="font-body whitespace-pre-line mt-5">{project.description}</p>}
      </div>

      {/* Main Media */}
      {project.mainMedia && (
        <div className="w-full aspect-[16/9] relative rounded-lg overflow-hidden">
          <RenderMedia media={project.mainMedia} />
        </div>
      )}

      {/* Problem Section */}
      {project.problem?.title && (
        <div className="space-y-6">
  <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6">
  <p className="font-body text-left whitespace-pre-line">{project.problem.text}</p>
    <h1 className="font-title text-5xl md:text-right">{project.problem.title}</h1>
    
  </div>
          {project.problem.media && (
            <div className="w-full aspect-[16/9] relative">
              <RenderMedia media={project.problem.media} />
            </div>
          )}
        </div>
      )}

      {/* Concept Section */}
      {project.concept?.title && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <h2 className="font-title text-5xl">{project.concept.title}</h2>
            <p className="font-body whitespace-pre-line">{project.concept.text}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.concept.media?.map((media, i) => (
              <RenderMedia key={i} media={media} />
            ))}
          </div>
        </div>
      )}

      {/* Research Section */}
      {project.research?.title && (
        <div className="space-y-6">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6">
          <p className="font-body text-left whitespace-pre-line">{project.research.text}</p>
            <h1 className="font-title text-5xl md:text-right">{project.research.title}</h1>
            
          </div>
          {project.research.media && (
            <div className="w-full aspect-[16/9] relative">
              <RenderMedia media={project.research.media} />
            </div>
          )}
        </div>
      )}

      {/* Making Of Section */}
      {project.makingOf?.title && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <h2 className="font-title text-5xl">{project.makingOf.title}</h2>
            <p className="font-body whitespace-pre-line">{project.makingOf.text}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.makingOf.media?.map((media, i) => (
              <RenderMedia key={i} media={media} />
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-24 border-t pt-10">
        <Link href="/#work" className="text-blue-500 hover:underline text-lg">
          ← Projects Overview
        </Link>
        {project.nextProjectSlug && (
          <Link
            href={`/projects/${project.nextProjectSlug}`}
            className="text-blue-500 hover:underline text-lg"
          >
            Next Project → {nextProjectTitle || "Untitled"}
          </Link>
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams(): Promise<{ params: { slug: string } }[]> {
  const projects = await client.fetch(`*[_type == "project"]{ "slug": slug.current }`);

  return projects.map((project: { slug: string }) => ({
    params: {
      slug: project.slug,
    },
  }));
}

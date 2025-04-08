"use client";

import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset: { url: string } };
  categories?: string[];
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await client.fetch(`*[_type == "project"]{
        _id,
        title,
        slug,
        mainImage{ asset->{ url } },
        categories
      }`);
      setProjects(data);
    }
    fetchProjects();
  }, []);

  return (
    <div id="work" className="grid grid-cols-2 gap-10 p-20">
      {projects.map((project) => (
        <Link key={project._id} href={`/project/${project.slug.current}`} passHref>
          <div className="relative group overflow-hidden shadow-lg">
            {/* Image with Overlay */}
            {project.mainImage?.asset?.url && (
              <div className="relative w-full h-[400px]">
  <Image
    src={project.mainImage.asset.url}
    alt={project.title}
    width={1920}
    height={1080}
    priority={true}
  />
                {/* Title Overlay */}
                <div className="absolute inset-0 flex items-end p-4">
                  <h2 className="font-subtitle text-white">{project.title}</h2>
                </div>
              </div>
            )}
            {/* Categories (Doesn't work yet!!!) */}
            {/* {project.categories && (
              <div className="flex gap-2 mt-2">
                {project.categories.map((category, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-600 bg-gray-200 px-3 py-1 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )} */}
          </div>
        </Link>
      ))}
    </div>
  );
}

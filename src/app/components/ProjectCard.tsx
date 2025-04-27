"use client";

import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  category?: string;
  mainMedia?: {
    mediaType?: "image" | "video";
    image?: {
      asset: { url: string };
    };
    file?: {
      asset: {
        url: string;
        _ref: string;
      };
    };
  };
}

const FILTERS = [
  { label: "All", value: "all" },
  { label: "UX/UI Design", value: "ux_ui_design" },
  { label: "Development", value: "dev" },
  { label: "Motion Design", value: "motion_design" },
];

const HOVER_COLORS = [
  "bg-[#F78E57]",
  "bg-[#FF6B6B]",
  "bg-[#F7C948]",
  "bg-[#A3CB38]",
  "bg-[#38ADA9]",
  "bg-[#A29BFE]",
  "bg-[#FF8CDA]",
  "bg-[#FFA552]",
  "bg-[#74B9FF]",
];

export default function ProjectCard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverColor, setHoverColor] = useState<string>("");

  useEffect(() => {
    async function fetchProjects() {
      const data = await client.fetch(`*[_type == "project"]{
        _id,
        title,
        slug,
        category,
        mainMedia {
          mediaType,
          image {
            asset -> { url }
          },
          file {
            asset -> { url, _ref }
          }
        }
      }`);
      setProjects(data);
    }

    fetchProjects();
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleMouseEnter = (index: number) => {
    const randomIndex = Math.floor(Math.random() * HOVER_COLORS.length);
    setHoverColor(HOVER_COLORS[randomIndex]);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="text-center py-10 px-4 sm:px-8 md:px-12">
      <h1
        id="work"
        className="font-title text-5xl sm:text-7xl lg:text-9xl mb-8"
      >
        My Work
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`
              font-subtitle leading-px text-lg sm:text-2xl md:text-3xl lg:text-4xl
              cursor-pointer uppercase tracking-wide transition-colors duration-150 py-4 sm:py-6
              ${
                activeFilter === filter.value
                  ? "text-[#D35400] underline dark:text-[#CDAA7D]"
                  : "text-[#222222] hover:text-[#D35400] hover:underline dark:text-white dark:hover:text-[#CDAA7D]"
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-12 cursor-pointer">
        {filteredProjects.map((project, index) => (
          <Link
            key={project._id}
            href={`/project/${project.slug.current}`}
            passHref
          >
            <div className="relative group overflow-hidden shadow-lg cursor-pointer">
              {project.mainMedia && (
                <div
                  className="relative w-full h-[300px] sm:h-[400px]"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Image rendering */}
                  {project.mainMedia.mediaType === "image" &&
                    project.mainMedia.image?.asset?.url && (
                      <Image
                        src={project.mainMedia.image.asset.url}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    )}

                  {/* Video rendering */}
                  {project.mainMedia.mediaType === "video" &&
                    project.mainMedia.file?.asset?.url && (
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full absolute top-0 left-0"
                      >
                        <source
                          src={project.mainMedia.file.asset.url}
                          type="video/mp4"
                        />
                      </video>
                    )}

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 flex p-4 transition-all duration-75 ${
                      hoveredIndex === index
                        ? `items-center justify-center ${hoverColor}`
                        : "items-end justify-start bg-transparent"
                    }`}
                  >
                    <h2
                      className={`font-subtitle font-[700] text-white text-base sm:text-lg ${
                        hoveredIndex === index && "scale-150"
                      }`}
                    >
                      {project.title}
                    </h2>
                  </div>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

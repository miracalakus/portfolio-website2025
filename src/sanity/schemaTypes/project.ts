import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: Rule => Rule.required().max(100),
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Development", value: "dev" },
          { title: "UX/UI Design", value: "ux_ui_design" },
          { title: "Motion Design", value: "motion_design" },
        ],
      },
    }),
    defineField({
      title: "Used Software or Code",
      name: "software_code",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      title: "Project Year",
      name: "year",
      type: "number",
      validation: Rule => Rule.min(1900).max(new Date().getFullYear()),
    }),
    defineField({
      name: "projectUrl",
      type: "url",
      title: "Project URL (Optional)",
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Short Description",
      validation: Rule => Rule.max(1000),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
      validation: Rule => Rule.required(),
    }),

    // 🖼️ Flexible Final Result Media
    defineField({
      name: "mainMedia",
      type: "media",
      title: "Final Result (Image or Video)",
    }),

    // 📌 PROBLEM SECTION
    defineField({
      name: "problem",
      type: "object",
      title: "Problem Section",
      fields: [
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "text", type: "text", title: "Text" }),
        defineField({ name: "media", type: "media", title: "Image or Video" }),
      ],
    }),

    // 📌 CONCEPT SECTION
    defineField({
      name: "concept",
      type: "object",
      title: "Concept Section",
      fields: [
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "text", type: "text", title: "Text" }),
        defineField({
          name: "media",
          type: "array",
          title: "Concept Media (Images or Videos)",
          of: [{ type: "media" }],
          options: { layout: "grid" },
        }),
      ],
    }),

    // 📌 RESEARCH SECTION
    defineField({
      name: "research",
      type: "object",
      title: "Research Section",
      fields: [
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "text", type: "text", title: "Text" }),
        defineField({ name: "media", type: "media", title: "Image or Video" }),
      ],
    }),

    // 📌 MAKING OF SECTION
    defineField({
      name: "makingOf",
      type: "object",
      title: "Making Of Section",
      fields: [
        defineField({ name: "title", type: "string", title: "Title" }),
        defineField({ name: "text", type: "text", title: "Text" }),
        defineField({
          name: "media",
          type: "array",
          title: "Process Media (Images or Videos)",
          of: [{ type: "media" }],
          options: { layout: "grid" },
        }),
      ],
    }),

    // Optional Legacy Video (if needed elsewhere)
    defineField({
      name: "video",
      type: "file",
      title: "Main Video (Optional)",
      options: {
        accept: "video/*",
      },
    }),

    // Navigation
    defineField({
      name: "nextProjectSlug",
      type: "string",
      title: "Slug of Next Project",
      description: "Used to navigate to the next project manually",
    }),
  ],
});

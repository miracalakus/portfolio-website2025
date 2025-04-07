import { defineType, defineField } from "sanity";

export default defineType({
  name: "project",
  type: "document",
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
      title: 'Project Year',
      name: 'year',
      type: 'number',
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

    // Main Image (mandatory)
    defineField({
      name: "mainImage",
      type: "image",
      title: "Cover Image",
      validation: Rule => Rule.required(),
    }),


    defineField({
      name: "breakdown",
      type: "array",
      title: "Project Breakdown",
      of: [
        defineField({
          type: "object",
          name: "breakdownSection",
          title: "Breakdown Section",
          fields: [
            defineField({
              name: "title",
              type: "string",
              title: "Section Title",
            }),
            defineField({
              name: "text",
              type: "text",
              title: "Description",
            }),
            defineField({
              name: "images",
              type: "array",
              title: "Supporting Images",
              of: [{ type: "image" }],
              options: {
                layout: 'grid',
              },
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'images.0',
            },
            prepare({ title, media }) {
              return {
                title: title ,
                media,
              };
            },
          },
        }),
      ],
    }),
  ],
});

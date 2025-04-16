import { defineType, defineField } from "sanity";

export default defineType({
  name: "media",
  title: "Media (Image or Video)",
  type: "object",
  fields: [
    defineField({
      name: "mediaType",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Image", value: "image" },
          { title: "Video", value: "video" },
        ],
        layout: "radio",
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image File",
      type: "image",
      hidden: ({ parent }) => parent?.mediaType !== "image",
    }),
    defineField({
      name: "file",
      title: "Video File",
      type: "file",
      options: {
        accept: "video/*",
      },
      hidden: ({ parent }) => parent?.mediaType !== "video",
    }),
  ],
});

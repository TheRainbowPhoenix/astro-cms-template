import { defineCollection, z } from "astro:content";

const postsColection = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    page_url: z.string().optional(),
    body: z.string().optional().optional(),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  posts: postsColection,
};

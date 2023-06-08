import { defineCollection, z } from 'astro:content';

const Errors = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  errors: Errors,
};

import { defineCollection, z } from "astro:content";

export const errorSchema = z.object({
  title: z.string(),
  description: z.string(),
  platform: z.union([
    z.literal("react"),
    z.literal("vue"),
    z.literal("svelte"),
    z.literal("nextjs"),
    z.literal("nuxtjs"),
  ]),
});

const Errors = defineCollection({ schema: errorSchema });

export const collections = {
  errors: Errors,
};

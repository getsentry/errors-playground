import { getCollection } from "astro:content";

export async function getPlatforms() {
  const errors = await getCollection("errors");

  const frameworks = [...new Set(errors.map((error) => error.data.platform))];

  return frameworks;
}

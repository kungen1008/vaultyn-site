// 帮助中心的文章：src/content/help/<语言>/<文章>.md
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const help = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/help' }),
  schema: z.object({ title: z.string(), order: z.number(), description: z.string() }),
});
export const collections = { help };

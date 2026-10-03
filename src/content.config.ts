import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artikel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artikel' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pilar: z.enum(['eksperimen-7-hari', 'playbook-sop-ai', 'kantor-manusia', 'studio-log']),
    date: z.coerce.date(),
    minutes: z.number().int().positive()
  })
});

export const collections = { artikel };

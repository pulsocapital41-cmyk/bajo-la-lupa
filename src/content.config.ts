import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    excerpt: z.string().optional(),
    category: z.string().default('GAM al Día'),
    image: z.string().default('/logo.png'),
    imageCaption: z.string().optional(),
    author: z.string().default('Equipo de Investigación Bajo la Lupa'),
    pubDate: z.coerce.date(),
    featured: z.boolean().default(false),
    breaking: z.boolean().default(false),
    tags: z.array(z.string()).default(['GAM', 'CDMX', 'Investigación']),
    expedienteNo: z.string().optional(), // opcional para dar toque de expediente
    status: z.string().optional(), // 'En investigación', 'Denuncia abierta', 'Verificado'
  }),
});

export const collections = { noticias };

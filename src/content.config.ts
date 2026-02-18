import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: z.string().optional(),
        platform: z.string().optional(), // Android, Web, etc.
        link: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const ebooks = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/ebooks" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        coverImage: z.string().optional(),
        file: z.string().optional(), // Path to the file in public/
    }),
});

export const collections = { blog, projects, ebooks };

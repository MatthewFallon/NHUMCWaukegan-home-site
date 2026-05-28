import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/blog'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string())
    })
})

const gallery = defineCollection({
    loader: glob({pattern: '**/[^_]*.json', base: './src/photodescriptions'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        })
    })
})

export const collections = { blog, gallery }
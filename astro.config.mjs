// @ts-check
import { defineConfig } from 'astro/config';
import DecapCMS from "@jee-r/astro-decap-cms";

// https://astro.build/config
export default defineConfig({
    integrations: [
        DecapCMS({
            config: {
                backend: {
                    name: 'git-gateway',
                    branch: 'main',
                },
                collections: [
                    // Define a blog post collection
                    {
                        name: 'posts',
                        label: 'Blog Posts',
                        folder: 'src/pages/posts',
                        create: true,
                        delete: true,
                        fields: [
                            { name: 'title', widget: 'string', label: 'Post Title' },
                            { name: 'body', widget: 'markdown', label: 'Post Body' },
                        ],
                    },
                ],
            },
        }),
    ],
});

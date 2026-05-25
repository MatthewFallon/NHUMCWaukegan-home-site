// @ts-check
import { defineConfig } from 'astro/config';
import DecapCMS from "@jee-r/astro-decap-cms";

// https://astro.build/config
export default defineConfig({
    integrations: [
        DecapCMS({
            config: {
                media_folder: "/public/assets/images",// Media files will be stored in the repo under static/images/uploads
                public_folder: "/assets/images", // The src attribute for uploaded media will begin with /images/uploads
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

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
                        label: 'Events and News',
                        folder: 'src/blog',
                        create: true,
                        delete: true,
                        fields: [
                            { name: 'title', widget: 'string', label: 'Post Title' },
                            { name: 'description', widget: 'string', label: 'Post Description' },
                            { name: 'pubDate', widget: 'datetime', label: 'Date', default: '{{now}}', date_format: 'MMMM DD, YYYY' },
                            { 
                                name: 'image', widget: 'object', label: 'Post Cover Image',
                                fields: [
                                    { name: 'url', widget: 'image', label: 'file' },
                                    { name: 'alt', widget: 'string', label: 'alternate text' },
                                ]
                            },
                            { name: 'tags', widget: 'list', label: 'Tags' },
                            { name: 'body', widget: 'markdown', label: 'Post Body' },
                        ],
                    },
                ],
            },
        }),
    ],
});

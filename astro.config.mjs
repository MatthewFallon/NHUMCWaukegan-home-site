// @ts-check
import { defineConfig } from 'astro/config';
import DecapCMS from "@jee-r/astro-decap-cms";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon(),
        DecapCMS({
            previewStyles: [
                'https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.classless.red.min.css',
                '/src/styles/global.css',
                ['body, h1, ul, p {font-family: \'Gill Sans\', \'Gill Sans MT\', Calibri, \'Trebuchet MS\', sans-serif;}', {raw: true}]
            ],
            config: {
                site_url: "https://newhopewaukegan.org",
                media_folder: "/public/assets/images",// Media files will be stored in the repo under static/images/uploads
                public_folder: "/assets/images", // The src attribute for uploaded media will begin with /images/uploads
                logo: {
                    src: "https://newhopewaukegan.org/android-chrome-512x512.png",
                    show_in_header: true
                },
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
                    {
                        name: 'gallery',
                        label: 'Photos of Us',
                        folder: 'src/photodescriptions',
                        create: true,
                        delete: true,
                        format: 'json',
                        fields: [
                            { name: 'title', widget: 'string', label: 'Post Title' },
                            { name: 'description', widget: 'string', label: 'Post Description' },
                            { 
                                name: 'image', widget: 'object', label: 'Image',
                                fields: [
                                    { name: 'url', widget: 'image', label: 'file' },
                                    { name: 'alt', widget: 'string', label: 'alternate text' },
                                ]
                            },
                        ]
                    },
                    {
                        name: 'pages',
                        label: 'Pages',
                        files: [
                            {
                                name: 'index',
                                label: 'Home Page',
                                file: 'src/pages/index.md',
                                fields:[
                                    { name: 'title', widget: 'hidden', label: 'Page Title', default: 'Welcome to New Hope Church in Waukegan!' },
                                    { name: 'menuTitle', widget: 'hidden', label: 'Page Menu Title', default: 'Home' },
                                    { name: 'layout', widget: 'hidden', label: 'Page Layout', default: '../layouts/BaseLayout.astro' },
                                    { name: 'body', widget: 'markdown', label: 'Page Body'}
                                ]
                            },
                            {
                                name: 'about',
                                label: 'About Page',
                                file: 'src/pages/about.md',
                                fields:[
                                    { name: 'title', widget: 'hidden', label: 'Page Title', default: 'About Us!' },
                                    { name: 'menuTitle', widget: 'hidden', label: 'Page Menu Title', default: 'About' },
                                    { name: 'layout', widget: 'hidden', label: 'Page Layout', default: '../layouts/BaseLayout.astro' },
                                    { name: 'body', widget: 'markdown', label: 'Page Body'}
                                ]
                            },
                            {
                                name: 'mission',
                                label: 'Mission Statement Page',
                                file: 'src/pages/mission.md',
                                fields:[
                                    { name: 'title', widget: 'hidden', label: 'Page Title', default: 'Our Mission' },
                                    { name: 'menuTitle', widget: 'hidden', label: 'Page Menu Title', default: 'Mission Statement' },
                                    { name: 'layout', widget: 'hidden', label: 'Page Layout', default: '../layouts/BaseLayout.astro' },
                                    { name: 'body', widget: 'markdown', label: 'Page Body'}
                                ]
                            },
                        ]
                    }
                    
                ],
            },
        }),
    ],
});

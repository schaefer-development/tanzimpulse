import { json } from '@sveltejs/kit';

const SITE_URL = 'http://localhost:5173'; // Deine Domain

export async function GET() {
    // Alle `.svelte`-Dateien aus dem `routes`-Verzeichnis ermitteln (außer Layouts und +page.server.ts)
    const pages = import.meta.glob('/src/routes/**/+page.svelte', { eager: true });

    // Statische Seitenpfade aus den Dateipfaden extrahieren
    const staticPages = Object.keys(pages)
        .map((file) => file.replace('/src/routes', '').replace('/+page.svelte', ''))
        .filter((path) => !path.includes('[')); // Dynamische Routen (z.B. `[slug]`) ausschließen

    // XML Sitemap generieren
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
        .map((page) => `
        <url>
            <loc>${SITE_URL}${page}</loc>
            <priority>0.8</priority>
        </url>`)
        .join('')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
}

import { SITEMAP } from '$lib/graphql/queries';
import { api } from '$lib/graphql/api';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	// Statische Seiten aus den Routen automatisch ermitteln
	const pages = import.meta.glob('/src/routes/**/+page.svelte', { eager: true });
	const staticPages = Object.keys(pages)
		.map((file) => file.replace('/src/routes', '').replace('/+page.svelte', ''))
		.filter((path) => !path.includes('[')); // Dynamische Routen ausschließen

	let seminare: Seminar[] = [];

	const today = new Date().toISOString();
	const body = await api(SITEMAP, { today });
	seminare = body.data.seminare;

	const pluralization = {
		ausbildung: 'ausbildungen',
		workshop: 'workshops'
	};

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
			.map(
				(page) => `
        <url>
            <loc>${new URL(page, url)}</loc>
            <priority>0.8</priority>
            <changefreq>weekly</changefreq>
        </url>`
			)
			.join('')}
    ${seminare
			.map(
				(seminar) => `
        <url>
            <loc>${new URL(`/${pluralization[seminar.format]}/${seminar.url}`, url)}</loc>
            <priority>0.7</priority>
            <changefreq>weekly</changefreq>
        </url>`
			)
			.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};

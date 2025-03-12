import { json } from '@sveltejs/kit';
import { HYGRAPH_ENDPOINT } from '$lib/config';

const SITE_URL = 'https://tanzimpulse.de'; // Live-Domain

// GraphQL-Query für die dynamischen Inhalte aus Hygraph
const QUERY = `
    query {
        ausbildungen {
            slug
            updatedAt
        }
        workshops {
            slug
            updatedAt
        }
    }
`;

export async function GET() {
	// Statische Seiten aus den Routen automatisch ermitteln
	const pages = import.meta.glob('/src/routes/**/+page.svelte', { eager: true });
	const staticPages = Object.keys(pages)
		.map((file) => file.replace('/src/routes', '').replace('/+page.svelte', ''))
		.filter((path) => !path.includes('[')); // Dynamische Routen ausschließen

	// Dynamische Inhalte von Hygraph abrufen
	let ausbildungen: { slug: string; updatedAt: string }[] = [];
	let workshops: { slug: string; updatedAt: string }[] = [];

	try {
		const response = await fetch(HYGRAPH_ENDPOINT, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query: QUERY })
		});

		const { data } = await response.json();
		ausbildungen = data.ausbildungen || [];
		workshops = data.workshops || [];
	} catch (error) {
		console.error('Fehler beim Abrufen der dynamischen Inhalte:', error);
	}

	// XML Sitemap generieren
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
			.map(
				(page) => `
        <url>
            <loc>${SITE_URL}${page}</loc>
            <priority>0.8</priority>
            <changefreq>weekly</changefreq>
        </url>`
			)
			.join('')}
    ${ausbildungen
			.map(
				({ slug, updatedAt }) => `
        <url>
            <loc>${SITE_URL}/ausbildungen/${slug}</loc>
            <priority>0.7</priority>
            <changefreq>weekly</changefreq>
            <lastmod>${updatedAt}</lastmod>
        </url>`
			)
			.join('')}
    ${workshops
			.map(
				({ slug, updatedAt }) => `
        <url>
            <loc>${SITE_URL}/workshops/${slug}</loc>
            <priority>0.7</priority>
            <changefreq>weekly</changefreq>
            <lastmod>${updatedAt}</lastmod>
        </url>`
			)
			.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}

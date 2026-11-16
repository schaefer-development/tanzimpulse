import { SITEMAP } from '#lib/graphql/queries';
import { api } from '#lib/graphql/api';
import { seminarPath } from '#lib/seo';
import { createSitemap } from '#lib/sitemap';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const pages = import.meta.glob('/src/routes/**/+page.svelte');
	const staticPages = Object.keys(pages)
		.map((file) => file.replace('/src/routes', '').replace('/+page.svelte', '') || '/')
		.filter((path) => !path.includes('['));

	const body = await api(SITEMAP, { today: new Date().toISOString() });
	const seminare: (Pick<Seminar, 'format' | 'url'> & { updatedAt: string })[] = body.data.seminare;
	const sitemap = createSitemap([
		...staticPages.map((pathname) => ({ pathname })),
		...seminare.map((seminar) => ({
			pathname: seminarPath(seminar),
			lastmod: seminar.updatedAt
		}))
	]);

	return new Response(sitemap, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' }
	});
};

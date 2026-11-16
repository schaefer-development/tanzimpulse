import { canonicalUrl } from './seo.ts';

type SitemapEntry = {
	pathname: string;
	lastmod?: string;
};

function escapeXml(value: string) {
	return value.replace(/[<>&"']/g, (character) => {
		return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' }[character]!;
	});
}

export function createSitemap(entries: SitemapEntry[]) {
	const urls = new Map(entries.map((entry) => [canonicalUrl(entry.pathname), entry]));
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Array.from(urls, ([url, entry]) => {
	const updated = entry.lastmod ? new Date(entry.lastmod) : undefined;
	const lastmod =
		updated && !Number.isNaN(updated.getTime())
			? `<lastmod>${updated.toISOString()}</lastmod>`
			: '';
	return `  <url><loc>${escapeXml(url)}</loc>${lastmod}</url>`;
}).join('\n')}
</urlset>`;
}

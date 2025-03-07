import type { PageServerLoad } from './$types';
import { dev } from '$app/environment';
import { addTransientSelected } from '$lib/helpers';
import { api } from '$lib/graphql/api';
import { SEMINARE } from '$lib/graphql/queries';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

const seminarFormat = 'ausbildung';

export const load: PageServerLoad = async ({ url }) => {
	const today = new Date().toISOString();
	const limit = Number.parseInt(url.searchParams.get('limit') || '3');
	const body = await api(SEMINARE, { seminarFormat, limit, today });
	const seminare: Seminar[] = body.data.seminare;
	const selectedKategorieIds = url.searchParams.getAll('kategorie');
	seminare.forEach((s: Seminar) => {
		s.kategorien = s.kategorien.map(addTransientSelected(selectedKategorieIds));
	});

	return { seminare };
};

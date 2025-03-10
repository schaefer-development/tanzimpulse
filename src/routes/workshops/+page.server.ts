import type { PageServerLoad } from './$types';
import { addTransientSelected } from '$lib/helpers';
import { api } from '$lib/graphql/api';
import { SEMINARE } from '$lib/graphql/queries';
export const prerender = false;

const seminarFormat = 'workshop';

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

import type { PageServerLoad } from './$types';

import { api } from '$lib/graphql/api';
import { INDEX } from '$lib/graphql/queries';

export const prerender = false;

export const load: PageServerLoad = async ({ url }) => {
	const today = new Date().toISOString();
	const limit = Number.parseInt(url.searchParams.get('limit') || '3');
	const body = await api(INDEX, { today, limit });
	const neuigkeiten: Neuigkeit[] = body.data.neuigkeiten;
	return {
		neuigkeiten
	};
};

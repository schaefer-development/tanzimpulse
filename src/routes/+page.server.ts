// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

import type { PageServerLoad } from './$types';

import { api } from '$lib/graphql/api';
import { INDEX } from '$lib/graphql/queries';

export const load: PageServerLoad = async ({ url }) => {
	const today = new Date().toISOString();
	const limit = Number.parseInt(url.searchParams.get('limit') || '3');
	const body = await api(INDEX, { today, limit });
	const neuigkeiten: Neuigkeit[] = body.data.neuigkeiten;
	return {
		neuigkeiten
	};
};

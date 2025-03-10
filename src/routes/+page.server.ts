import type { PageServerLoad } from './$types';

import { api } from '$lib/graphql/api';
import { INDEX } from '$lib/graphql/queries';

export const prerender = true;

export const load: PageServerLoad = async () => {
	const body = await api(INDEX);
	const neuigkeiten: Neuigkeit[] = body.data.neuigkeiten;
	return {
		neuigkeiten
	};
};

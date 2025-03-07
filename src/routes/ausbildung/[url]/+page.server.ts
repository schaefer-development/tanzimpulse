import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { api } from '$lib/graphql/api';
import { SEMINAR } from '$lib/graphql/queries';

export const load: PageServerLoad = async ({ params }) => {
	const { url } = params;
	const body = await api(SEMINAR, { url });
	const {
		data: { seminar }
	} = body;
	if (!seminar) {
		error(404, 'Seminar nicht gefunden');
	}

	return { seminar };
};

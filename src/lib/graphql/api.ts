import { GRAPHCMS_ENDPOINT, GRAPHCMS_API_TOKEN } from '$lib/env';
import { graphQLError } from '$lib/helpers';
import { error } from '@sveltejs/kit';

export async function api(query: string, variables?: Record<string, unknown>) {
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		Accept: 'application/json'
	};
	if (GRAPHCMS_API_TOKEN) {
		headers['Authorization'] = `Bearer ${GRAPHCMS_API_TOKEN}`;
	}
	console.log(GRAPHCMS_ENDPOINT);
	const res = await fetch(GRAPHCMS_ENDPOINT, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables
		})
	});

	const { status, ok } = res;
	const body = await res.json();
	if (!ok) {
		console.error(body);
		error(status, graphQLError);
	}

	return body;
}

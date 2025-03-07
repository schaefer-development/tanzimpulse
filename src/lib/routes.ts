import type { Load } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { graphQLError } from '$lib/helpers';
import { addTransientSelected } from '$lib/helpers';

export const loadIndex: Load<
	Record<string, unknown>,
	{ props: { kommende: { workshops: unknown[]; ausbildungen: unknown[] }; neuigkeiten: unknown[] } }
> = async ({ fetch }) => {
	const searchParams = new URLSearchParams();
	searchParams.set('limit', '3');
	const res = await fetch(`/index.json?${searchParams.toString()}`);
	if (res.ok) {
		const {
			data: { neuigkeiten, workshops, ausbildungen }
		} = await res.json();

		return {
			props: { neuigkeiten, kommende: { workshops, ausbildungen } }
		};
	}

	const {
		errors: [error]
	} = await res.json();

	return {
		status: res.status,
		error: new Error(error.message)
	};
};

export const loadSeminare =
	(seminarFormat: string): Load<Record<string, unknown>, { props: { seminare: unknown[] } }> =>
	async ({ page, fetch }) => {
		const res = await fetch(`/${seminarFormat}.json`);
		if (res.ok) {
			const {
				data: { seminare }
			} = await res.json();
			const selectedKategorieIds = page.query.getAll('kategorie');
			seminare.forEach((s: Seminar) => {
				s.kategorien = s.kategorien.map(addTransientSelected(selectedKategorieIds));
			});

			return {
				props: { seminare }
			};
		}

		const { status, ok } = res;
		const body = await res.json();
		if (!ok) {
			console.error(body);
			error(status, graphQLError);
		}
		return body;
	};

export const loadSeminar: Load = async ({ page, fetch }) => {
	const { seminarFormat, url } = page.params;
	const res = await fetch(`/${seminarFormat}/${url}.json`);

	if (res.ok) {
		const {
			data: { seminar }
		} = await res.json();
		if (!seminar) return { status: 404, error: new Error('Seminar nicht gefunden') };

		return {
			props: { seminar }
		};
	}

	const {
		errors: [error]
	} = await res.json();

	return {
		status: res.status,
		error: new Error(error.message)
	};
};

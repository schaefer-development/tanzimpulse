import type { Load } from '@sveltejs/kit';

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

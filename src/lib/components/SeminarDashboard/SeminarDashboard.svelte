<script lang="ts">
	import SeminarDeck from '$lib/components/SeminarDeck/SeminarDeck.svelte';
	import Kategorien from './Kategorien.svelte';
	import VolltextSuche from './VolltextSuche.svelte';
	import { onlyUnique } from '$lib/helpers';
	import Fuse from 'fuse.js';

	export let seminare: [];
	const searchOptions = {
		keys: ['titel', 'datum', 'kurzbeschreibung', 'preis', 'kategorien.name'],
		shouldSort: false
	};
	const fuse = new Fuse(seminare, searchOptions);

	let kategorien = seminare
		.map((s) => s.kategorien)
		.flat()
		.filter(onlyUnique);
	let query = '';

	$: gefilterteSeminare = (
		query.trim() ? fuse.search(query.trim()).map(({ item }) => item) : seminare
	).filter((s) => {
		const seminarKategorieIds = s.kategorien.map((k) => k.id);
		const kategorieIds = kategorien.filter((k) => k.selected).map((k) => k.id);
		return seminarKategorieIds.some((id) => kategorieIds.includes(id));
	});
</script>

<div class="flex w-full flex-col items-start gap-10 lg:flex-row">
	<div class="___red_card bg-ti_red_mat shadow-ti w-full p-4 text-black md:p-6 lg:w-1/2 lg:p-8">
		<Kategorien bind:kategorien />
		<VolltextSuche bind:query />
	</div>
</div>

<SeminarDeck seminare={gefilterteSeminare} />

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

  $: gefilterteSeminare = (query.trim() ? fuse.search(query.trim()).map(({ item }) => item) : seminare).filter((s) => {
    const seminarKategorieIds = s.kategorien.map((k) => k.id);
    const kategorieIds = kategorien.filter((k) => k.selected).map((k) => k.id);
    return seminarKategorieIds.some((id) => kategorieIds.includes(id));
  });
</script>

<div class="flex flex-col lg:flex-row w-full gap-10 items-start">
  <div class="___red_card w-full lg:w-1/2 bg-ti_red_mat p-4 md:p-6 lg:p-8 text-black shadow-ti">
    <Kategorien bind:kategorien />
    <VolltextSuche bind:query />
  </div>
</div>

<SeminarDeck seminare={gefilterteSeminare} />

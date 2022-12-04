<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import Button from '$lib/components/Button/Button.svelte';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import { base } from '$app/paths';
  import { loadIndex } from '$lib/routes';
  export const load: Load = loadIndex;
  export const prerender = true;
</script>

<script lang="ts">
  export let neuigkeiten = [];
  export let kommende = { ausbildungen: [], workshops: [] };
</script>

<svelte:head>
  <title>Start | Tanzimpulse</title>
</svelte:head>

<!-- -->

<section id="3CARDS" class="cards my-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
  <div class="flex items-start">
    <div class="bg-ti_blue_mat p-4 md:p-6 lg:p-8 text-white shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
      <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide">Ausbildungen</h2>
      <p class="py-4">Werde Tanzpädagogin/ Tanzpädagoge, geschult durch unser kompetentes Team und integriere den Tanz in den Beruf. Tanzvermittlung professionell und praxisnah. Beginn der Grundstufen zwei mal jährlich: im Frühjahr und im Herbst.</p>
      <p class="py-4">
        <Button href="{base}/ausbildungen" buttonstyle={'blue'}>Alle Ausbildungen</Button>
      </p>
    </div>
  </div>

  <div class="flex items-start">
    <div class="bg-ti_cyan_mat p-4 md:p-6 lg:p-8 text-white shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
      <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide">Workshops</h2>
      <p class="py-4">Immer aktuell sein, mit Impulsen für die tanzpädagogische Praxis für alle Tanzinteressierten die mit Kita-, Grundschulkindern, Jugendlichen und / oder Erwachsenen arbeiten.</p>
      <p class="py-4">
        <Button href="{base}/workshops" buttonstyle={'cyan'}>Alle Workshops</Button>
      </p>
    </div>
  </div>

  <div class="flex items-start">
    <div class="bg-ti_green_mat flex flex-col p-8 text-white shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
      <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide">Tanzraum Vermietung</h2>
      <p class="py-4">Ein Raum mit angenehmer Atmosphäre für Weiterbildungen, Tanztrainings, Entspannung etc. mit Ausstattung für professionellen Unterricht.</p>
      <p class="py-4">
        <Button href="{base}/tanzraum" buttonstyle={'green'}>Mehr erfahren</Button>
      </p>
    </div>
  </div>
</section>

<!-- -->

<section id="CARDS" class="grid grid-cols-1 lg:grid-cols-2 gap-10">
  {#each neuigkeiten as neuigkeit (neuigkeit.id)}
    <DefaultCard>
      <div class="graphcms_card_startpage">
        <h2 class="ti_headline_blue_bold pb-4">{neuigkeit.ueberschrift}</h2>
        {@html neuigkeit.inhalt.html}
      </div>
    </DefaultCard>
  {/each}
</section>

<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import { base } from '$app/paths';
  import { loadIndex } from '$lib/routes';
  export const load: Load = loadIndex;
  export const prerender = true;
  let motivausbildungen = ' /images/slideshow/tanzraum.jpg';
</script>

<script lang="ts">
  export let neuigkeiten = [];
</script>

<svelte:head>
  <title>Start | Tanzimpulse</title>
</svelte:head>

<section class="relative grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12">
  <div class="cardWrap grow">
    <div class="bg-ti_blue_mat hover:shadow-ti transition ease-in-out duration-300">
      <picture>
        <source srcset={motivausbildungen.replace('.jpg', '.webp')} type="webp" />
        <img src={motivausbildungen} class="w-full h-72 object-cover" alt="Werde Tanzpädagogin/ Tanzpädagoge bei Tanzimpulse " />
      </picture>
      <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide text-white px-8 pt-8 pb-4">Ausbildungen</h2>
      <p class="px-8 text-white">Werde Tanzpädagogin/ Tanzpädagoge, geschult durch unser kompetentes Team und integriere den Tanz in den Beruf. Tanzvermittlung professionell und praxisnah. Beginn der Grundstufen zwei mal jährlich: im Frühjahr und im Herbst.</p>
      <p class="p-8">
        <a href="{base}/ausbildungen" aria-label="Mehr" class="block text-center border-white text-white hover:bg-ti_blue_accent hover:text-ti_blue_mat-dark p-4 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase outline-none shadow-sm hover:shadow-ti focus:outline-none focus:ring-0 transition duration-300 ease-in-out">Alle Workshops</a>
      </p>
    </div>
  </div>

  <div class="cardWrap grow">
    <div class="bg-ti_cyan_mat hover:shadow-ti transition ease-in-out duration-300">
      <picture>
        <source srcset={motivausbildungen.replace('.jpg', '.webp')} type="webp" />
        <img src={motivausbildungen} class="w-full h-72 object-cover" alt="Werde Tanzpädagogin/ Tanzpädagoge bei Tanzimpulse " />
      </picture>
      <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide text-white px-8 pt-8 pb-4">Workshops</h2>
      <p class="px-8 text-white">Immer aktuell sein, mit Impulsen für die tanzpädagogische Praxis für alle Tanzinteressierten die mit Kita-, Grundschulkindern, Jugendlichen und / oder Erwachsenen arbeiten.</p>
      <p class="p-8">
        <a href="{base}/workshops" aria-label="Mehr" class="block text-center border-white text-white hover:bg-ti_cyan_accent hover:text-ti_cyan_mat-dark p-4 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase outline-none shadow-sm hover:shadow-ti focus:outline-none focus:ring-0 transition duration-300 ease-in-out">Alle Workshops</a>
      </p>
    </div>
  </div>

  <div class="cardWrap grow">
    <div class="bg-ti_green_mat hover:shadow-ti transition ease-in-out duration-300">
      <picture>
        <source srcset={motivausbildungen.replace('.jpg', '.webp')} type="webp" />
        <img src={motivausbildungen} class="w-full h-72 object-cover" alt="Werde Tanzpädagogin/ Tanzpädagoge bei Tanzimpulse " />
      </picture>
      <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide text-white px-8 pt-8 pb-4">Tanzraum Vermietung</h2>
      <p class="px-8 text-white">Ein Raum mit angenehmer Atmosphäre für Weiterbildungen, Tanztrainings, Entspannung etc. mit Ausstattung für professionellen Unterricht.</p>
      <p class="p-8">
        <a href="{base}/tanzraum" aria-label="Mehr" class="block text-center border-white text-white hover:bg-ti_green_accent hover:text-ti_green_mat-dark p-4 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase outline-none shadow-sm hover:shadow-ti focus:outline-none focus:ring-0 transition duration-300 ease-in-out">Zum Tanzraum</a>
      </p>
    </div>
  </div>
</section>

<section class="grid grid-cols-1 lg:grid-cols-2 gap-10">
  {#each neuigkeiten as neuigkeit (neuigkeit.id)}
    <DefaultCard>
      <div class="graphcms_card_startpage">
        <h2 class="ti_headline_blue_bold pb-4">{neuigkeit.ueberschrift}</h2>
        {@html neuigkeit.inhalt.html}
      </div>
    </DefaultCard>
  {/each}
</section>

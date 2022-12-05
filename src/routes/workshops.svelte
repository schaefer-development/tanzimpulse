<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Cite from '$lib/components/Cite/Cite.svelte';
  import { loadSeminare } from '$lib/routes';
  export const load: Load = loadSeminare('workshop');
  export const prerender = true;
</script>

<script lang="ts">
  import SeminarDashboard from '$lib/components/SeminarDashboard/SeminarDashboard.svelte';
  export let seminare = [];
</script>

<svelte:head>
  <title>Workshops</title>
</svelte:head>

<section>
  <div class="container flex flex-col">
    <div class="flex w-full lg:w-1/2">
      <DefaultCard>
        <h2 class="ti_headline_blue_bold">Workshops</h2>
        <h3 class="ti_headline_blue_light mb-4">Für Multiplikatoren/innen und Interessierte</h3>
        <p class="py-4">für Multiplikatoren/innen und Interessierte. Sie können unabhängig von einer Teilnahme an den Ausbildungsreihen besucht werden. Aktuelle Tanzthemen und zeitgemäße Unterrichtsmethoden werden von praxiserfahrenen Referentinnen und Referenten vermittelt.</p>
        <p class="py-8">
          <a href="#workshops" aria-label="Mehr" class="border-ti_blue_accent text-ti_blue_accent hover:bg-ti_blue_accent hover:text-white p-4 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase outline-none shadow-sm hover:shadow-ti focus:outline-none focus:ring-0 transition duration-300 ease-in-out">Jetzt Workshops entdecken</a>
        </p>
      </DefaultCard>
    </div>

    <Cite />
  </div>
</section>
<span id="workshops" />
<SeminarDashboard {seminare} />

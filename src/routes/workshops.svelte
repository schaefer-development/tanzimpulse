<script context="module" lang="ts">
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
        <p>
          <a href="#workshops" class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg><span class="font-bold px-2">Workshops entdecken</span></a
          >
        </p>
      </DefaultCard>
    </div>

    <Cite />
  </div>
</section>
<span id="workshops" />
<SeminarDashboard {seminare} />

<script lang="ts">
	import type { PageProps } from './$types';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
	import CiteGallery from '$lib/components/Cite/CiteGallery.svelte';
  import SeminarDashboard from '$lib/components/SeminarDashboard/SeminarDashboard.svelte';
	let { data }: PageProps = $props();
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

		<CiteGallery></CiteGallery>
  </div>
</section>
<span id="workshops"></span>
<SeminarDashboard seminare={data.seminare} />

<script lang="ts">
	import type { PageProps } from './$types';
	import { base } from '$app/paths';
	import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
	let { data }: PageProps = $props();

	let motivAusbildungen = ' /images/startpage/ausbildungen25.jpg';
	let motifWorkshops = ' /images/startpage/workshops25.jpg';
</script>

<svelte:head>
	<title>Start | Tanzimpulse</title>
</svelte:head>

<section class="relative grid grid-cols-1 gap-12 pb-12 lg:grid-cols-2">
	<div class="cardWrap grow">
		<div class="bg-ti_blue_mat shadow-xl transition duration-300 ease-in-out">
			<picture>
				<source
					srcset={motivAusbildungen.replace('.jpg', '.webp')}
					type="webp"
					class="aspect-video w-full object-cover object-center"
				/>
				<img
					src={motivAusbildungen}
					class="aspect-video w-full object-cover object-top"
					alt="Werde Tanzpädagogin/ Tanzpädagoge bei Tanzimpulse "
				/>
			</picture>
			<div class="py-8">
				<h2 class="px-8 pb-4 text-2xl font-bold tracking-wide text-white uppercase lg:text-3xl">
					Ausbildungen
				</h2>
				<p class="px-8 text-white">
					Werde Tanzpädagogin/ Tanzpädagoge, geschult durch unser kompetentes Team und integriere
					den Tanz in den Beruf. Tanzvermittlung professionell und praxisnah. Beginn der Grundstufen
					zwei mal jährlich: im Frühjahr und im Herbst.
				</p>
				<p class="py-10 text-center">
					<a
						href="{base}/ausbildungen"
						aria-label="Mehr"
						class="hover:bg-ti_blue_accent hover:text-ti_blue_mat w-full rounded-full border-2 border-white px-8 py-4 text-sm font-extrabold tracking-widest text-white uppercase shadow-lg transition duration-300 ease-in-out outline-none focus:ring-0 focus:outline-none"
						>Alle Ausbildungen</a
					>
				</p>
			</div>
		</div>
	</div>

	<div class="cardWrap grow">
		<div class="bg-ti_cyan_mat shadow-xl transition duration-300 ease-in-out">
			<picture>
				<source srcset={motifWorkshops.replace('.jpg', '.webp')} type="webp" />
				<img
					src={motifWorkshops}
					class="aspect-video w-full object-cover object-center"
					alt="Werde Tanzpädagogin/ Tanzpädagoge bei Tanzimpulse "
				/>
			</picture>
			<div class="py-8">
				<h2 class="px-8 pb-4 text-2xl font-bold tracking-wide text-white uppercase lg:text-3xl">
					Workshops
				</h2>
				<p class="px-8 text-white">
					Immer aktuell sein, mit Impulsen für die tanzpädagogische Praxis für alle
					Tanzinteressierten die mit Kita-, Grundschulkindern, Jugendlichen und/ oder Erwachsenen
					arbeiten.
				</p>
				<p class="py-10 text-center">
					<a
						href="{base}/workshops"
						aria-label="Mehr"
						class="hover:bg-ti_cyan_accent hover:text-ti_cyan_mat-dark w-full rounded-full border-2 border-white px-8 py-4 text-sm font-extrabold tracking-widest text-white uppercase shadow-lg transition duration-300 ease-in-out outline-none focus:ring-0 focus:outline-none"
						>Alle Workshops</a
					>
				</p>
			</div>
		</div>
	</div>
</section>

<section id="CARDS" class="grid grid-cols-1 gap-10 lg:grid-cols-2">
	{#each data.neuigkeiten as neuigkeit (neuigkeit.id)}
		<DefaultCard>
			<div class="graphcms_card_startpage">
				<h2 class="ti_headline_blue_bold pb-4">{neuigkeit.ueberschrift}</h2>
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html neuigkeit.inhalt.html}
			</div>
		</DefaultCard>
	{/each}
</section>

<script lang="ts">
	import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
</script>

<svelte:head>
	<title>Start | Tanzimpulse</title>
</svelte:head>

<section class="relative grid grid-cols-1 gap-12 pb-12 lg:grid-cols-2">
	<div class="cardWrap grow">
		<div class="bg-ti_blue_mat hover:shadow-ti transition duration-300 ease-in-out">
			<picture>
				<source
					srcset={motivAusbildungen.replace('.jpg', '.webp')}
					type="webp"
					class="h-72 w-full object-cover object-center"
				/>
				<img
					src={motivAusbildungen}
					class="h-72 w-full object-cover object-top"
					alt="Werde Tanzpädagogin/ Tanzpädagoge bei Tanzimpulse "
				/>
			</picture>
			<h2 class="px-8 pt-8 pb-4 text-2xl font-bold tracking-wide text-white uppercase lg:text-3xl">
				Ausbildungen
			</h2>
			<p class="px-8 text-white">
				Werde Tanzpädagogin/ Tanzpädagoge, geschult durch unser kompetentes Team und integriere den
				Tanz in den Beruf. Tanzvermittlung professionell und praxisnah. Beginn der Grundstufen zwei
				mal jährlich: im Frühjahr und im Herbst.
			</p>
			<p class="p-8">
				<a
					href="{base}/ausbildungen"
					aria-label="Mehr"
					class="hover:bg-ti_blue_accent hover:text-ti_blue_mat-dark hover:shadow-ti block w-full rounded-full border-2 border-white p-4 text-center text-sm font-extrabold tracking-widest text-white uppercase shadow-sm transition duration-300 ease-in-out outline-none focus:ring-0 focus:outline-none"
					>Alle Ausbildungen</a
				>
			</p>
		</div>
	</div>

	<div class="cardWrap grow">
		<div class="bg-ti_cyan_mat hover:shadow-ti transition duration-300 ease-in-out">
			<picture>
				<source srcset={motifWorkshops.replace('.jpg', '.webp')} type="webp" />
				<img
					src={motifWorkshops}
					class="h-72 w-full object-cover object-center"
					alt="Werde Tanzpädagogin/ Tanzpädagoge bei Tanzimpulse "
				/>
			</picture>
			<h2 class="px-8 pt-8 pb-4 text-2xl font-bold tracking-wide text-white uppercase lg:text-3xl">
				Workshops
			</h2>
			<p class="px-8 text-white">
				Immer aktuell sein, mit Impulsen für die tanzpädagogische Praxis für alle Tanzinteressierten
				die mit Kita-, Grundschulkindern, Jugendlichen und/ oder Erwachsenen arbeiten.
			</p>
			<p class="p-8">
				<a
					href="{base}/workshops"
					aria-label="Mehr"
					class="hover:bg-ti_cyan_accent hover:text-ti_cyan_mat-dark hover:shadow-ti block w-full rounded-full border-2 border-white p-4 text-center text-sm font-extrabold tracking-widest text-white uppercase shadow-sm transition duration-300 ease-in-out outline-none focus:ring-0 focus:outline-none"
					>Alle Workshops</a
				>
			</p>
		</div>
	</div>
</section>

<section id="CARDS" class="grid grid-cols-1 gap-10 lg:grid-cols-2">
	{#each neuigkeiten as neuigkeit (neuigkeit.id)}
		<DefaultCard>
			<div class="graphcms_card_startpage">
				<h2 class="ti_headline_blue_bold pb-4">{neuigkeit.ueberschrift}</h2>
				{@html neuigkeit.inhalt.html}
			</div>
		</DefaultCard>
	{/each}
</section>

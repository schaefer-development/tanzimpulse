<script lang="ts">
	import { overbooked, dateFormat } from '$lib/helpers';
	import Button from '$lib/components/Button/Button.svelte';
	import VeranstaltungsOrt from '$lib/components/VeranstaltungsOrt/VeranstaltungsOrt.svelte';

	export let seminar: Seminar;
	export let link = '#';
</script>

<div class="flex items-start">
	<div class="shadow-ti flex w-full flex-col items-start bg-white">
		<div class="seminar_card_img w-full flex-0">
			{#if seminar.bild}
				<img
					class="h-32 w-full object-cover object-center sm:h-40 md:h-48 lg:h-60"
					src={seminar.bild.medium}
					alt={seminar.bild.fileName || 'Fehlendes Bild'}
				/>
			{/if}
		</div>

		<div
			class="seminar_card_content w-full flex-1 px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10 lg:py-10"
		>
			<h4 class="title-font pb-1 text-xs tracking-widest text-gray-600 uppercase">
				{seminar.format}
			</h4>
			<h1 class="ti_headline_blue_bold">{seminar.titel}</h1>
			<p class="ti_headline_blue_light">{dateFormat.format(new Date(seminar.datum))} Uhr</p>

			{#if overbooked(seminar)}
				<p class="prose-sm py-4 text-lg font-bold text-gray-600">Anmeldung zur Warteliste</p>
			{:else}
				<p class="text-ti_green_accent prose-sm py-4 text-lg font-bold tracking-wide uppercase">
					Noch Plätze frei
				</p>
			{/if}

			<div class="___pills py-2">
				{#each seminar.kategorien as kategorie (kategorie.id)}
					<span
						class="mr-2 mb-2 inline-flex rounded-full border border-gray-400 px-2 py-1 text-xs text-gray-600"
					>
						{kategorie.name}
					</span>
				{/each}
			</div>
			<slot name="beschreibung">
				<p class="pt-2 pb-4 text-black">
					{seminar.kurzbeschreibung}
				</p>
				<p class="py-2 text-black">
					<span class="title-font text-xs font-medium tracking-widest text-gray-600 uppercase"
						>Dozentin/ Dozent</span
					><br />{seminar.referenten.map((referent) => referent.name).join(', ')}
				</p>
				<p class="py-2 text-black">
					<span class="title-font text-xs font-medium tracking-widest text-gray-600 uppercase"
						>Kursgebühr</span
					><br />{seminar.preis} Euro
				</p>
				<VeranstaltungsOrt veranstaltungsort={seminar.veranstaltungsort} />
			</slot>

			<div class="seminar_card_content flex-0">
				{#if link && link !== '#'}
					<Button href={link} buttonstyle={'blue'}>Mehr erfahren</Button>
				{/if}
			</div>
		</div>
	</div>
</div>

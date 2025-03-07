<script lang="ts">
	import { overbooked, dateFormat } from '$lib/helpers';
	import Button from '$lib/components/Button/Button.svelte';
	import VeranstaltungsOrt from '$lib/components/VeranstaltungsOrt/VeranstaltungsOrt.svelte';

	export let seminar: Seminar;
	export let link = '#';
</script>

<div class="flex items-start">
	<div class="flex w-full flex-col items-start border-neutral-100 bg-white shadow-lg">
		<div class="seminar_card_img w-full flex-0">
			{#if seminar.bild}
				<img
					class="h-32 w-full object-cover object-center sm:h-40 md:h-48 lg:h-60"
					src={seminar.bild.medium}
					alt={seminar.bild.fileName || 'Fehlendes Bild'}
				/>
			{/if}
		</div>

		<div class="seminar_card_content w-full flex-1 p-4 sm:p-4 md:p-5 xl:p-8">
			<h4 class="title-font pb-1 text-xs tracking-widest text-gray-600 uppercase">
				{seminar.format}
			</h4>
			<h2
				class="text-ti_blue_accent text-lg font-bold tracking-wide break-words uppercase lg:text-xl"
			>
				{seminar.titel}
			</h2>
			<h3 class="pb-1 text-lg font-light tracking-wide break-words uppercase lg:text-xl">
				{dateFormat.format(new Date(seminar.datum))} Uhr
			</h3>

			{#if overbooked(seminar)}
				<span class="block py-2 text-lg font-bold tracking-wide text-gray-600 uppercase"
					>Anmeldung zur Warteliste</span
				>
			{:else}
				<span class="text-ti_green_accent block py-2 text-lg font-bold tracking-wide uppercase">
					Noch Plätze frei
				</span>
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

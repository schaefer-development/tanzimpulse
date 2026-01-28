<script lang="ts">
	import { consent } from '$lib/stores/consent';
	import Map from '$lib/components/Map/Map.svelte';
	import { fade } from 'svelte/transition';

	export let veranstaltungsort: Veranstaltungsort;
	export let showMap = false;

	const mapAttributes = {
		class: 'mt-4',
		style: 'width: 100%; height: 40vh; min-height:300px;'
	};

	$: leafletAllowed = $consent.leaflet;
</script>

{#if veranstaltungsort}
	<p class="pb-4">
		<span class="title-font text-xs font-medium tracking-widest text-gray-600 uppercase">
			Veranstaltungsort
		</span><br />
		{veranstaltungsort.adresse}
	</p>

	{#if showMap}
		<!-- Fixe Bühne: verhindert Springen -->
		<div class="relative h-[40vh] min-h-[300px] w-full">
			{#if leafletAllowed}
				<!-- Map liegt absolut über der Bühne -->
				<div class="absolute inset-0" transition:fade={{ duration: 400 }}>
					<Map
						{mapAttributes}
						coordinates={[
							veranstaltungsort.koordinaten.latitude,
							veranstaltungsort.koordinaten.longitude
						]}
					/>
				</div>
			{:else}
				<!-- Consent-Box liegt absolut über der Bühne -->
				<div
					class="absolute inset-0 flex flex-col items-center justify-center gap-y-6 border border-gray-200 p-6 text-center"
					transition:fade={{ duration: 300 }}
				>
					<div class="flex flex-col flex-row items-center gap-x-6 px-12 text-left">
						<svg
							class="w-14"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
							/>
						</svg>

						<p>
							Die Karte wird erst angezeigt, wenn du der Nutzung externer Karten <a
								class="hyperlink"
								href="https://leafletjs.com/">(Leaflet)</a
							> zustimmst.
						</p>
					</div>

					<button
						class="text-ti_blue_accent border-ti_blue_accent hover:bg-ti_blue_accent z-50 cursor-pointer rounded-full border-2 bg-white px-5 py-3 text-sm font-bold tracking-wider uppercase transition-all duration-300 ease-in-out hover:text-white"
						on:click={() => consent.update((c) => ({ ...c, leaflet: true }))}
					>
						Karte anzeigen
					</button>
				</div>
			{/if}
		</div>
	{/if}
{:else}
	<p class="pb-4">
		<span class="title-font text-xs font-medium tracking-widest text-gray-600 uppercase">
			Veranstaltungsort
		</span><br />
		Videoveranstaltung
	</p>
{/if}

<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import { overbooked, dateFormat } from '$lib/helpers.ts';
	import { base } from '$app/paths';
	export let seminare = [];
	export let color = 'white';
</script>

{#each seminare as seminar (seminar.id)}
	<div class="flex flex-col">
		<div class="pt-2 pr-4 pb-2 pl-2">
			<p class="text-md break-word leading-6 font-bold tracking-wide uppercase">{seminar.titel}</p>
			<p class="text-md font-extralight">{dateFormat.format(new Date(seminar.datum))} Uhr</p>

			{#if overbooked(seminar)}
				<span class="pt-2 text-sm font-bold tracking-wider text-white uppercase"
					>Anmeldung zur Warteliste</span
				>
			{:else}
				<span class="text-ti_green_accent-light pt-2 text-sm font-bold tracking-wider uppercase"
					>Noch Plätze frei</span
				>
			{/if}
		</div>

		<div class="mx-auto flex items-center p-2">
			<Button href={`${base}/${seminar.format}/${seminar.url}`} buttonstyle={color}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="white"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/>
				</svg></Button
			>
		</div>
	</div>
	<hr class="my-2 block w-full border border-black opacity-20" />
{/each}

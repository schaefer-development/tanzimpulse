<script lang="ts">
	export let kategorien;
	import Toggle from '$lib/components/Toggle/Toggle.svelte';
	import Button from '$lib/components/Button/Button.svelte';
</script>

<h2 class="text-2xl font-bold tracking-wider text-white uppercase">
	Seminare filtern und sortieren
</h2>
{#if kategorien?.length}
	<form class="flex flex-col space-y-4 py-4">
		{#each kategorien as kategorie (kategorie.id)}
			{#if kategorie.seminare.length}
				<Toggle bind:kategorie />
			{/if}
			<hr class="border-ti_red_mat-dark focus:text-ti_red_mat-dark my-4 block w-full border" />
		{/each}
		<noscript>
			<Button
				buttonstyle={'white'}
				type="submit"
				class="rounded-md px-3 py-4 text-white focus:outline-none">Seminare filtern</Button
			>
		</noscript>
	</form>
{/if}

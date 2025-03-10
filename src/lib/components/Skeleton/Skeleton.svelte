<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let mounted = false;
	onMount(async () => {
		mounted = true;
	});
</script>

{#if mounted}
	<slot name="mounted" />
{:else}
	<div out:fade={{ duration: 500 }}>
		<slot name="loading" />
	</div>
{/if}

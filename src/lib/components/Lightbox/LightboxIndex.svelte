<script>
	import Lightbox from './Lightbox.svelte';
	import ImageDisplay from './ImageDisplay.svelte';

	let modalOpen = false;
	// $: console.log(modalOpen);

	let imageShowingIndex = 0;

	const handleImgClick = (e) => {
		imageShowingIndex = Number(e.target.id);
		modalOpen = true;
	};
</script>

<!-- The Modal/Lightbox -->
{#if modalOpen}
	<Lightbox on:click={() => (modalOpen = false)} {imageShowingIndex} />
{:else}
	<ImageDisplay on:click={handleImgClick} />
{/if}

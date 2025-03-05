<script>
	import { fade, fly } from 'svelte/transition';
	import { images } from './imageData.js';
	import Slide from './Slide.svelte';

	import Caption from './Caption.svelte';

	/* IMAGE TO SHOW */
	export let imageShowingIndex = 0;
	$: image = images[imageShowingIndex];

	const nextSlide = () => {
		if (imageShowingIndex === images.length - 1) {
			imageShowingIndex = 0;
		} else {
			imageShowingIndex += 1;
		}
	};

	const prevSlide = () => {
		if (imageShowingIndex === 0) {
			imageShowingIndex = images.length - 1;
		} else {
			imageShowingIndex -= 1;
		}
	};
</script>

<section
	class="lightbox fixed top-0 left-0 flex h-full w-full flex-col items-center justify-center overflow-auto"
	in:fly={{ x: -300 }}
	out:fade
>
	<span class="flex w-9/12 justify-end pb-2" on:click>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="hover:text-ti_blue_accent h-8 w-8 fill-current text-white"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	</span>

	<div class="flex w-9/12 flex-col">
		<!-- Gallery -->
		<Slide image={image.imgurl} title={image.attribution} alt="Der Tanzraum von Tanzimpulse" />

		<!-- Navigation -->
		<Caption on:prevClick={prevSlide} on:nextClick={nextSlide} />
	</div>
</section>

<style>
	.lightbox {
		z-index: 9999;
		margin-top: 25px;
		background-color: rgba(0, 0, 0, 0.9);
	}
</style>

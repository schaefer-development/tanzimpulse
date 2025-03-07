<script>
	import { fade } from 'svelte/transition';

	const carouselPhotos = [
		'./images/fotogallery24/foto24_01.jpg',
		'./images/fotogallery24/foto24_02.jpg',
		'./images/fotogallery24/foto24_03.jpg',
		'./images/fotogallery24/foto24_04.jpg',
		'./images/fotogallery24/foto24_05.jpg',
		'./images/fotogallery24/foto24_06.jpg',
		'./images/fotogallery24/foto24_07.jpg',
		'./images/fotogallery24/foto24_08.jpg',
		'./images/fotogallery24/foto24_09.jpg',
		'./images/fotogallery24/foto24_10.jpg',
		'./images/fotogallery24/foto24_11.jpg',
		'./images/fotogallery24/foto24_09.jpg'
	];

	let index = 0;

	const next = () => {
		index = (index + 1) % carouselPhotos.length;
	};

	const previous = () => {
		index = (index - 1 + carouselPhotos.length) % carouselPhotos.length;
	};
</script>

<div class="relative flex h-[60vh] w-full items-center">
	{#each [carouselPhotos[index]] as src (src)}
		<div class="absolute flex h-[60vh] w-full justify-center">
			<img class="h-[60vh] w-auto border-6 border-white shadow-xl" transition:fade {src} alt="" />
		</div>
	{/each}

	<button
		aria-label="Zurück"
		class="bg-ti_blue_mat hover:bg-ti_blue_accent absolute left-0 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full text-white shadow-md"
		on:click={previous}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="3"
			stroke="currentColor"
			class="aspect-square w-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
			/>
		</svg>
	</button>
	<button
		aria-label="Vor"
		class="bg-ti_blue_mat hover:bg-ti_blue_accent absolute right-0 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full text-white shadow-md"
		on:click={next}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="3"
			stroke="currentColor"
			class="aspect-square w-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
			/>
		</svg>
	</button>
</div>

<style>
	img {
		position: absolute;
	}
</style>

<script context="module" lang="ts">
	import Carousel from '$lib/components/Slideshow/Carousel.svelte';
	export const prerender = true;

	let fotos = [
		{ src: './images/fotogallery24/foto24_01.jpg' },
		{ src: './images/fotogallery24/foto24_02.jpg' },
		{ src: './images/fotogallery24/foto24_03.jpg' },
		{ src: './images/fotogallery24/foto24_04.jpg' },
		{ src: './images/fotogallery24/foto24_05.jpg' },
		{ src: './images/fotogallery24/foto24_06.jpg' },
		{ src: './images/fotogallery24/foto24_07.jpg' },
		{ src: './images/fotogallery24/foto24_08.jpg' },
		{ src: './images/fotogallery24/foto24_09.jpg' },
		{ src: './images/fotogallery24/foto24_10.jpg' },
		{ src: './images/fotogallery24/foto24_11.jpg' }
	];
</script>

<svelte:head>
	<title>Fotogalerie</title>
</svelte:head>

<section>
	<div class="container">
		<div class="relative">
			<Carousel perPage="1" autoplay="7000" easing="ease-in-out">
				<span class="control" slot="left-control">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ti_slidehow_control relative h-10 w-10 rounded-full p-2 text-white transition duration-300 ease-in-out"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</span>

				{#each fotos as foto}
					<div class="slide-content shadow-ti relative flex items-center">
						<picture>
							<source
								srcset={foto.src.replace('.jpg', '.webp')}
								type="image/webp"
								class="w-full object-cover"
							/>
							<img
								class="w-full object-cover"
								src={foto.src}
								alt="Tanzimpulse | Institut für Tanzpädagogik"
							/>
						</picture>
					</div>
				{/each}

				<span class="control" slot="right-control">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="ti_slidehow_control relative h-10 w-10 rounded-full p-2 text-white transition duration-300 ease-in-out"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</span>
			</Carousel>
		</div>
	</div>
</section>

<style>
	.slide-content {
		width: 100%;
		max-width: 800px;
		margin: auto;
		min-height: 400px;
		max-height: 75vh;
	}

	.ti_slidehow_control {
		background: rgba(0, 0, 0, 0.25);
	}
	.ti_slidehow_control:hover {
		background: rgba(0, 0, 0, 0.5);
	}
</style>

<script lang="ts">
	import Logo from '$lib/components/Logo/Logo.svelte';
	import '@fontsource/poppins/200.css';
	import '@fontsource/poppins/400.css';
	import '@fontsource/poppins/700.css';
	import '@fontsource/poppins/800.css';
	import Header from '$lib/components/Header/Header.svelte';
	import Footer from '$lib/components/Footer/Footer.svelte';
	import '../app.css';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col justify-between">
	<Header />
	<main class="bg-warmGray-200 relative top-0 mb-auto h-auto">
		<div id="BUBBLES" class="absolute z-0 h-full w-full overflow-hidden opacity-30">
			<img src="{base}/images/bg.svg" alt="background" />
		</div>
		<div id="LOGO" class="bg-white pt-14 pb-48">
			<div
				class="relative z-10 container mx-auto flex flex-col items-center px-0 md:flex-row md:px-6"
			>
				<div class="mb-6 ml-4 w-48 md:mb-0 md:w-64">
					<a
						aria-label="Logo Tanzimpulse - Institut für Tanzpädagogik"
						sveltekit:prefetch
						class="text-ti_blue_mat hover:text-ti_blue_accent focus:text-ti_blue_accent transition duration-300 ease-in-out outline-none focus:ring-0 focus:outline-none"
						href="{base}/"><Logo /></a
					>
				</div>
				<div class="px-8">
					<a
						aria-label="Logo Tanzimpulse - Institut für Tanzpädagogik"
						sveltekit:prefetch
						href="{base}/"
						class="text-ti_blue_mat hover:text-ti_blue_accent focus:text-ti_blue_accent text-xl font-extralight tracking-wider uppercase transition duration-300 ease-in-out outline-none focus:ring-0 focus:outline-none sm:text-2xl md:text-3xl lg:text-4xl"
					>
						<span class="font-bold">Tanzimpulse</span> – Institut für Tanzpädagogik
						<span
							class="text-ti_blue_accent block text-base font-normal tracking-wide normal-case sm:text-lg md:text-xl lg:text-2xl"
							>Staatlich anerkanntes Weiterbildungsinstitut</span
						>
					</a>
				</div>
			</div>
		</div>
		<div id="CONTENT">
			<div class="relative container mx-auto -mt-32 mb-20 px-2 lg:px-6">
				{@render children()}
			</div>
		</div>
	</main>
	<Footer />
</div>

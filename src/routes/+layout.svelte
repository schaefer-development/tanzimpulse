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

<svelte:head>
	<meta
		name="description"
		content="Tanzimpulse bieten eine Berufs begleitende Zusatzqualifikation zur Tanzpädagogin / zum Tanzpädagogen an – eine Weiterbildung für LehrerInnen aller Schulformen, für ErzieherInnen, SozialpädagogInnen und alle, die als therapeutisch tätig sind, wie beispielsweise Logopäden, Physiotherapeuten, Tanztherapeuten oder Übungsleiter aus Vereinen, Referenten aus der Erwachsenenbildung, die Tanz in ihre Arbeit einbeziehen."
	/>
	<link rel="apple-touch-icon" sizes="57x57" href="{base}/icons/apple-icon-57x57.png" />
	<link rel="apple-touch-icon" sizes="60x60" href="{base}/icons/apple-icon-60x60.png" />
	<link rel="apple-touch-icon" sizes="72x72" href="{base}/icons/apple-icon-72x72.png" />
	<link rel="apple-touch-icon" sizes="76x76" href="{base}/icons/apple-icon-76x76.png" />
	<link rel="apple-touch-icon" sizes="114x114" href="{base}/icons/apple-icon-114x114.png" />
	<link rel="apple-touch-icon" sizes="120x120" href="{base}/icons/apple-icon-120x120.png" />
	<link rel="apple-touch-icon" sizes="144x144" href="{base}/icons/apple-icon-144x144.png" />
	<link rel="apple-touch-icon" sizes="152x152" href="{base}/icons/apple-icon-152x152.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="{base}/icons/apple-icon-180x180.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="{base}/icons/android-icon-192x192.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="{base}/icons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="96x96" href="{base}/icons/favicon-96x96.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="{base}/icons/favicon-16x16.png" />
	<link rel="manifest" href="{base}/icons/manifest.json" />
	<meta name="msapplication-TleColor" content="#ffffff" />
	<meta name="msapplication-TileImage" content="{base}/icons/ms-icon-144x144.png" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<div class="flex min-h-screen flex-col justify-between">
	<Header />
	<main class="relative top-0 mb-auto h-auto bg-neutral-100">
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
						class="text-ti_blue_mat hover:text-ti_blue_accent focus:text-ti_blue_accent transition duration-300 ease-in-out outline-none focus:ring-0 focus:outline-none"
						href="{base}/"><Logo /></a
					>
				</div>
				<div class="px-8">
					<a
						aria-label="Logo Tanzimpulse - Institut für Tanzpädagogik"
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

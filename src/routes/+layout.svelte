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
				class="relative z-10 container mx-auto flex flex-col items-center justify-center px-0 md:px-6"
			>
				<div
					class="relative z-10 container mx-auto flex flex-col items-center gap-x-24 gap-y-10 px-0 md:flex-row md:px-6"
				>
					<div class="flex aspect-video w-6/12 flex-col items-center justify-center gap-y-6">
						<a href="/" class="flex grow items-end justify-center"
							><img
								class="relative h-auto w-6/12 max-w-[700px] min-w-[200px]"
								src="{base}/images/logo_ik.jpg"
								alt="Logo interKultur Bonn"
							/></a
						>

						<a href="/" class="flex h-14 w-full flex-col items-center">
							<span class="text-center font-bold text-purple-900 lg:text-2xl">interKultur Bonn</span
							>
						</a>
					</div>

					<div class="flex aspect-video w-6/12 flex-col items-center justify-center gap-y-6">
						<a
							href="/"
							class=" text-ti_blue_mat flex aspect-video w-5/12 max-w-[700px] min-w-[200px] grow items-center"
						>
							<Logo></Logo>
						</a>

						<a href="/" class="flex h-14 w-full flex-col">
							<span class="text-ti_blue_mat text-center font-bold lg:text-2xl"
								>Tanzimpulse bei interKultur</span
							>
							<br />

							<span class="text-ti_blue_mat text-center tracking-wide uppercase"
								>Tanzpädagogik – Zusatzausbildung und Fortbildung</span
							>
						</a>
					</div>
				</div>

				<div class="flex h-32 items-center justify-center tracking-wider uppercase lg:text-xl">
					staatlich anerkannte Einrichtung der Weiterbildung
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

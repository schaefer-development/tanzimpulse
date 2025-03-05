<script lang="ts">
	import { base } from '$app/paths';

	let open = false;
	const toggleMenu = () => {
		open = !open;
	};
</script>

<header style="z-index:9999;" class="bg-ti_blue_mat shadow-ti_hover sticky top-0 z-50">
	<nav class="container mx-auto flex w-full flex-wrap items-center justify-end px-6 py-4">
		<div class="self-align-end block">
			<button
				on:click={toggleMenu}
				class="hover:text-ti_blue_accent focus:text-ti_blue_accent flex items-center px-2 py-2 tracking-wider text-white focus:border-0 focus:ring-0 focus:outline-none"
			>
				<span class="px-2 font-bold uppercase">Menu</span>
				<svg
					class="text-ti_blue_accent h-6 w-6 fill-current"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg
				>
			</button>
		</div>
	</nav>
</header>

<aside
	id="drawer"
	style="opacity:1; z-index:999999;"
	on:click={toggleMenu}
	class="{open
		? 'translate-x-0'
		: 'translate-x-full'} bg-ti_blue_mat-dark fixed top-0 left-0 h-full w-full transform overflow-auto transition-all duration-300 ease-in-out"
>
	<div class="menu_points container mx-auto flex w-full flex-col flex-wrap px-6 py-4">
		<div class="block flex w-full justify-end">
			<button
				class="hover:text-ti_blue_accent focus:text-ti_blue_accent flex items-center px-2 py-2 font-bold tracking-wider text-white uppercase focus:border-0 focus:ring-0 focus:outline-none"
			>
				<span class="px-2 font-bold uppercase">Schliessen</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="text-ti_blue_accent h-6 w-6 fill-current"
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
			</button>
		</div>

		<div class="animated flex flex-col">
			<hr class="my-4 border-black" />
			<a
				sveltekit:prefetch
				href="{base}/"
				class="hover:text-ti_blue_accent focus:text-ti_blue_accent py-1 text-base text-white focus:ring-0 focus:outline-none md:py-0 md:py-0 md:text-xl lg:text-2xl"
				>Start</a
			>
			<hr class="my-4 border-black" />
			<h3 class="pb-2 text-xs tracking-widest text-white uppercase">Tanzpädagogik</h3>
			<a
				sveltekit:prefetch
				href="{base}/ausbildungen"
				class="hover:text-ti_blue_accent focus:text-ti_blue_accent py-1 text-base text-white focus:ring-0 focus:outline-none md:py-0 md:py-0 md:text-xl lg:text-2xl"
				>Ausbildungen</a
			>
			<a
				sveltekit:prefetch
				href="{base}/workshops"
				class="hover:text-ti_blue_accent focus:text-ti_blue_accent py-1 text-base text-white focus:ring-0 focus:outline-none md:py-0 md:py-0 md:text-xl lg:text-2xl"
				>Workshops</a
			>
			<hr class="my-4 border-black" />
			<h3 class="pb-2 text-xs tracking-widest text-white uppercase">Eindrücke</h3>
			<a
				href="{base}/fotogalerie"
				class="hover:text-ti_blue_accent focus:text-ti_blue_accent py-1 text-base text-white focus:ring-0 focus:outline-none md:py-0 md:py-0 md:text-xl lg:text-2xl"
				>Fotos</a
			>
			<a
				href="{base}/videos"
				class="hover:text-ti_blue_accent focus:text-ti_blue_accent py-1 text-base text-white focus:ring-0 focus:outline-none md:py-0 md:py-0 md:text-xl lg:text-2xl"
				>Videos</a
			>
			<hr class="my-4 border-black" />
			<h3 class="pb-2 text-xs tracking-widest text-white uppercase">Tanzimpulse</h3>
			<a
				href="{base}/kontakt"
				class="hover:text-ti_blue_accent focus:text-ti_blue_accent py-1 text-base text-white focus:ring-0 focus:outline-none md:py-0 md:py-0 md:text-xl lg:text-2xl"
				>Kontakt</a
			>
			<a
				href="{base}/team"
				class="hover:text-ti_blue_accent focus:text-ti_blue_accent py-1 text-base text-white focus:ring-0 focus:outline-none md:py-0 md:py-0 md:text-xl lg:text-2xl"
				>Team</a
			>
			<a
				href="{base}/mitgliedschaften"
				class="hover:text-ti_blue_accent focus:text-ti_blue_accent py-1 text-base text-white focus:ring-0 focus:outline-none md:py-0 md:py-0 md:text-xl lg:text-2xl"
				>Mitgliedschaften</a
			>
			<a
				href="{base}/philosophie"
				class="hover:text-ti_blue_accent focus:text-ti_blue_accent py-1 text-base text-white focus:ring-0 focus:outline-none md:py-0 md:py-0 md:text-xl lg:text-2xl"
				>Philosophie</a
			>
			<hr class="my-4 border-black" />
			<div class="___social_media_icons flex flex-row flex-wrap justify-start pt-2">
				<a
					rel="noreferrer"
					aria-label="Facebook"
					target="_blank"
					href="https://www.facebook.com/Tanzimpulse/"
					class="hover:text-ti_blue_accent mr-4 text-white transition-all duration-300 ease-in-out"
				>
					<svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="h-5 w-5"
						viewBox="0 0 24 24"
					>
						<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
					</svg>
				</a>
				<a
					rel="noreferrer"
					aria-label="Instagram"
					target="_blank"
					href="https://www.instagram.com/tanzimpulse_koeln/"
					class="hover:text-ti_blue_accent ml-4 text-white transition-all duration-300 ease-in-out"
				>
					<svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="h-5 w-5"
						viewBox="0 0 24 24"
					>
						<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
						<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</aside>

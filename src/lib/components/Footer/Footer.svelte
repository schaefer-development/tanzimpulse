<script lang="ts">
	import Logo from '$lib/components/Logo/Logo.svelte';
	import { base } from '$app/paths';

	let certificate = '/images/certificate.jpg';

	let date = new Date().getFullYear();
</script>

<footer class="bg-ti_blue_mat-dark body-font relative text-white">
	<div class="container mx-auto flex flex-col py-24">
		<div class="___logoandtitle pb-10">
			<a
				href="{base}/"
				class="text-center text-white transition duration-300 ease-in-out outline-none focus:outline-none"
			>
				<div class="mx-auto mb-10 w-36 md:w-48">
					<Logo />
				</div>
				<h1
					class="text-xl font-extralight tracking-wider uppercase sm:text-xl md:text-2xl lg:text-3xl"
				>
					<span class="font-bold">Tanzimpulse</span> – Institut für Tanzpädagogik
				</h1>
				<p class="text-base tracking-wide sm:text-lg md:text-xl lg:text-2xl">
					Staatlich anerkanntes Weiterbildungsinstitut
				</p>
			</a>
		</div>
		<div
			class="grid grid-flow-col grid-cols-1 grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-1 lg:gap-32"
		>
			<p class="text-center md:text-right">
				<span class="text-xs font-extrabold tracking-widest text-white uppercase">Büro</span><br />
				Folwiese 20<br />
				51069 Köln<br />
				<br />
				Telefon: +49 (0)221 - 68 36 91<br />
				Fax: +49 (0)221 - 68 97 797<br />
				E-Mail:
				<a
					href="mailto:info@tanzimpulse-koeln.de"
					class="hover:text-ti_blue_accent transition-all duration-300 ease-in-out"
					>info@tanzimpulse-koeln.de</a
				><br />
				<br />
				<span class="text-xs font-extrabold tracking-widest text-white uppercase">Bürozeiten</span
				><br />
				Montag bis Freitag: 9:00 - 13:00 Uhr<br />
				Dienstag: 18:00 - 20:00 Uhr
			</p>
			<div class="text-center md:text-left">
				<p>
					<a
						href="{base}/impressum"
						aria-label="Impressum"
						class="hover:text-ti_blue_accent transition-all duration-300 ease-in-out">Impressum</a
					><br />
					<a
						href="{base}/datenschutz"
						aria-label="Datenschutz"
						class="hover:text-ti_blue_accent transition-all duration-300 ease-in-out">Datenschutz</a
					><br />
					<a
						class="hover:text-ti_blue_accent transition-all duration-300 ease-in-out"
						href="{base}/content/AGB.pdf"
						target="_blank">AGB</a
					><br />
					<a
						class="hover:text-ti_blue_accent transition-all duration-300 ease-in-out"
						href="{base}/content/Widerrufsbelehrung.pdf"
						target="_blank">Widerrufsbelehrung</a
					>
					<br />
					© {date}
				</p>
				<div
					class="___social_media_icons flex flex-row flex-wrap justify-center py-6 lg:justify-start"
				>
					<a
						rel="noreferrer"
						aria-label="Facebook"
						target="_blank"
						href="https://www.facebook.com/Tanzimpulse/"
						class="hover:text-ti_blue_accent mr-4 flex h-12 w-12 items-center justify-center rounded-full border-2 text-white transition-all duration-300 ease-in-out"
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
						class="hover:text-ti_blue_accent mr-4 flex h-12 w-12 items-center justify-center rounded-full border-2 text-white transition-all duration-300 ease-in-out"
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
				<p class="pb-2">Seit 20 Jahren Mitglied:</p>
				<picture>
					<img
						src={certificate}
						class="h-24 w-auto object-cover object-top"
						alt="TANZIMPULSE sind seit 20 Jahren Mitglied"
					/>
				</picture>
			</div>
		</div>
	</div>
</footer>

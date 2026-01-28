<script lang="ts">
	import Logo from '$lib/components/Logo/Logo.svelte';
	import { base } from '$app/paths';

	let certificate = '/images/logo_guetesiegelverbund.png';

	let date = new Date().getFullYear();
</script>

<footer class="bg-ti_blue_mat-dark body-font relative text-white">
	<div class="container mx-auto flex flex-col py-24">
		<div class="___logoandtitle pb-10">
			<a
				href="{base}/"
				class="text-center text-white transition duration-300 ease-in-out outline-none focus:outline-none"
			>
				<div class="flex w-full flex-col items-center gap-x-24 gap-y-10 pb-10 lg:flex-row">
					<div class="flex w-6/12 justify-center lg:justify-end">
						<img
							alt="Logo interKultur Bonn"
							class="max-h-48 bg-white p-4"
							src="/images/logo_ik.jpg"
						/>
					</div>

					<div class="flex w-6/12 justify-center lg:justify-start">
						<div class="w-6/12 max-w-[250px] min-w-[150px] lg:w-5/12">
							<Logo></Logo>
						</div>
					</div>
				</div>

				<h1
					class="text-xl font-extralight tracking-wider uppercase sm:text-xl md:text-2xl lg:text-3xl"
				>
					<span class="font-bold">Tanzimpulse bei interKultur </span>
				</h1>
				<p class="text-base tracking-wide sm:text-lg md:text-xl lg:text-2xl">
					staatlich anerkannte Einrichtung der Weiterbildung
				</p>
			</a>
		</div>
		<div
			class="grid grid-flow-col grid-cols-1 grid-rows-2 gap-10 md:grid-cols-2 md:grid-rows-1 lg:gap-32"
		>
			<div>
				<p class="text-center md:text-right">
					Friesdorfer Straße 151<br />

					53175 Bonn
					<br /><br />
					Telefon: 0163 - 68 36 910<br />
					E-Mail:
					<a
						href="mailto:info@tanzimpulse-koeln.de"
						class="hover:text-ti_blue_accent transition-all duration-300 ease-in-out"
						>info@tanzimpulse-koeln.de</a
					>
				</p>

				<p class="text-center md:text-right">
					<a target="_blank" href="/content/2809-403_Zertifikat_interKultur.pdf">
						<span class="block pt-12">Gütesiegelverbund Weiterbildung e.V.</span>
						<span class="block pb-4">
							Aus der Praxis für die Praxis der Weiterbildung <br />Qualitätsentwicklung und
							Zertifizierung
						</span>
						<picture class="flex justify-center md:justify-end">
							<img
								src={certificate}
								class="h-32 w-auto object-cover object-top"
								alt="Gütesiegelverbund Weiterbildung e.V."
							/>
						</picture>
					</a>
				</p>
			</div>

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
						href="{base}/content/AGB_tanzimpulse_interkultur.pdf"
						target="_blank">AGB</a
					><br />
					<a
						class="hover:text-ti_blue_accent transition-all duration-300 ease-in-out"
						href="{base}/content/widerrufsbelehrung_tanzimpulse_bei_interkultur.pdf"
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
			</div>
		</div>
	</div>
</footer>

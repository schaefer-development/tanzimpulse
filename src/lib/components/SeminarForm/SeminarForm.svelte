<script lang="ts">
	import { base } from '$app/paths';
	import { enhance } from '$lib/form';
	import Button from '$lib/components/Button/Button.svelte';
	import HCaptcha from '$lib/components/HCaptcha/HCaptcha.svelte';
	import { HCAPTCHA_SITEKEY } from '$lib/env';
	import { browser } from '$app/environment';

	export let action: string;
	export let result: (res: Response, form: HTMLFormElement) => void;
	export let error: (res: Response, error: Error, form: HTMLFormElement) => void;
	export let pending: (data: FormData, form: HTMLFormElement) => void;

	let captcha: HCaptcha;
	const handleError = () => {
		captcha.reset();
	};
</script>

<div
	class="flex flex-col overflow-hidden border border-neutral-100 bg-white p-4 shadow-lg transition duration-300 ease-in-out md:p-6 lg:p-8"
>
	<form {action} method="post" use:enhance={{ result, error, pending }}>
		<h2 class="ti_headline_blue_bold mb-4">Anmeldeformular</h2>

		<div class="mb-8 flex flex-col space-y-10">
			<div class="grid grid-cols-2 gap-x-10">
				<label class="flex flex-col-reverse text-xs font-bold tracking-widest text-black uppercase"
					>Vorname
					<input
						class="mb-2 block border-2 border-neutral-400 p-4 font-normal text-black placeholder-gray-400 outline-none focus:border-2 focus:border-blue-600 focus:ring-0 focus:outline-none"
						type="text"
						name="vorname"
						placeholder="Max"
						required
					/>
				</label>

				<label class="flex flex-col-reverse text-xs font-bold tracking-widest text-black uppercase"
					>Nachname
					<input
						class="mb-2 block border-2 border-neutral-400 bg-white p-4 font-normal text-black placeholder-gray-400 transition duration-300 ease-in-out outline-none focus:border-2 focus:border-blue-600 focus:bg-white focus:ring-0 focus:outline-none"
						type="text"
						name="nachname"
						placeholder="Mustermann"
						required
					/>
				</label>
			</div>

			<div class="grid grid-cols-2 gap-x-10">
				<label class="flex flex-col-reverse text-xs font-bold tracking-widest text-black uppercase"
					>E-Mailadresse
					<input
						class="mb-2 block border-2 border-neutral-400 bg-white p-4 font-normal text-black placeholder-gray-400 transition duration-300 ease-in-out outline-none focus:border-2 focus:border-blue-600 focus:bg-white focus:ring-0 focus:outline-none"
						type="email"
						name="email"
						placeholder="max@mustermann.de"
						required
					/>
				</label>

				<label class="flex flex-col-reverse text-xs font-bold tracking-widest text-black uppercase"
					>Telefonnummer
					<input
						class="mb-2 block border-2 border-neutral-400 bg-white p-4 font-normal text-black placeholder-gray-400 transition duration-300 ease-in-out outline-none focus:border-2 focus:border-blue-600 focus:bg-white focus:ring-0 focus:outline-none"
						type="tel"
						name="telefon"
						placeholder="0123456789"
						required
					/>
				</label>
			</div>

			<div class="grid grid-cols-2 gap-x-10">
				<label
					class="flex grow-1 flex-col-reverse text-xs font-bold tracking-widest text-black uppercase"
					>Strasse
					<input
						class="mb-2 block border-2 border-neutral-400 bg-white p-4 font-normal text-black placeholder-gray-400 transition duration-300 ease-in-out outline-none focus:border-2 focus:border-blue-600 focus:bg-white focus:ring-0 focus:outline-none"
						type="text"
						name="strasse"
						placeholder="Musterstrasse"
						required
					/>
				</label>

				<label
					class="grow-none flex flex-col-reverse text-xs font-bold tracking-widest text-black uppercase"
					>Hausnummer
					<input
						class="mb-2 block border-2 border-neutral-400 bg-white p-4 font-normal text-black placeholder-gray-400 transition duration-300 ease-in-out outline-none focus:border-2 focus:border-blue-600 focus:bg-white focus:ring-0 focus:outline-none"
						type="text"
						name="hausnummer"
						placeholder="123"
						required
					/>
				</label>
			</div>

			<div class="grid grid-cols-2 gap-x-10">
				<label class="flex flex-col-reverse text-xs font-bold tracking-widest text-black uppercase"
					>PLZ
					<input
						class="mb-2 block border-2 border-neutral-400 bg-white p-4 font-normal text-black placeholder-gray-400 transition duration-300 ease-in-out outline-none focus:border-2 focus:border-blue-600 focus:bg-white focus:ring-0 focus:outline-none"
						type="text"
						name="plz"
						placeholder="54321"
						required
					/>
				</label>

				<label class="flex flex-col-reverse text-xs font-bold tracking-widest text-black uppercase"
					>Ort
					<input
						class="mb-2 block border-2 border-neutral-400 bg-white p-4 font-normal text-black placeholder-gray-400 transition duration-300 ease-in-out outline-none focus:border-2 focus:border-blue-600 focus:bg-white focus:ring-0 focus:outline-none"
						type="text"
						name="ort"
						placeholder="Musterstadt"
						required
					/>
				</label>
			</div>

			<label class="flex flex-col-reverse text-xs font-bold tracking-widest text-black uppercase"
				>Anmerkung (optional)
				<textarea
					class="mb-2 block border-2 border-neutral-400 bg-white p-4 font-normal text-black placeholder-gray-400 transition duration-300 ease-in-out outline-none focus:border-2 focus:border-blue-600 focus:bg-white focus:ring-0 focus:outline-none"
					name="anmerkung"
					placeholder="Anmerkung zur Anmeldung"
					rows="4"
				></textarea>
			</label>
			<div class="___registration checkboxes mb-8 flex flex-col space-y-6">
				<label class="mt-4 flex">
					<input
						class="mr-4 h-6 w-6 border-2 border-neutral-400 checked:border-blue-600 focus:border-blue-600 focus:ring-0"
						type="checkbox"
						name="datenverarbeitung"
						required
					/>
					<p>
						Ich habe die <a class="hyperlink" href="{base}/content/AGB.pdf" target="_blank">AGBs</a
						>, die
						<a class="hyperlink" href="{base}/content/Widerrufsbelehrung.pdf" target="_blank"
							>Widerrufsbelehrung</a
						>
						sowie die Maßnahmen zum
						<a class="hyperlink" href="{base}/datenschutz">Datenschutz</a> gelesen und akzeptiert
					</p>
				</label>
				<label class="flex items-center">
					<input
						class="mr-4 h-6 w-6 border-2 border-neutral-400 checked:border-blue-600 focus:border-blue-600 focus:ring-0"
						type="checkbox"
						name="newsletter"
					/>
					Newsletter abonnieren
				</label>
			</div>
		</div>
		<div class="flex justify-center pb-8">
			<HCaptcha sitekey={HCAPTCHA_SITEKEY} hl="de" bind:this={captcha} on:error={handleError} />
			<noscript>
				Sie benötigen einen JavaScript-fähigen Browser für die Anmeldung zu einem Seminar.
			</noscript>
		</div>
		{#if browser}
			<Button buttonstyle={'blue'}>Kostenpflichtig Anmelden</Button>
		{/if}
	</form>
</div>

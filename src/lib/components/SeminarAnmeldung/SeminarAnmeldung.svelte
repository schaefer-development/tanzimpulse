<script lang="ts">
	import type { SubmitFunction } from '@sveltejs/kit';
	import SeminarCard from '$lib/components/SeminarCard/SeminarCard.svelte';
	import SeminarForm from '$lib/components/SeminarForm/SeminarForm.svelte';
	import VeranstaltungsOrt from '$lib/components/VeranstaltungsOrt/VeranstaltungsOrt.svelte';
	import Success from '$lib/components/Alerts/Success.svelte';
	import ErrorComponent from '$lib/components/Alerts/Error.svelte';
	import { base } from '$app/paths';
	export let seminar: Seminar;
	let isError: boolean;
	let isSuccess: boolean;
	let isPending = false;

	const submitFunction: SubmitFunction = () => {
		isPending = true;
		return async ({ result, update }) => {
			isPending = false;
			isError = result.type === 'error' || result.type === 'failure';
			isSuccess = result.type === 'success' || result.type === 'redirect';
			return update();
		};
	};

	const isExpired = (seminar: Seminar) => {
		return new Date(seminar.endOfEvent) < new Date();
	};

	const action = `${base}/${seminar.format}/${seminar.url}`;
</script>

<section>
	<div class="container mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2">
		<div class="__long_description border border-neutral-200 shadow-xl">
			<SeminarCard {seminar}>
				<div slot="beschreibung">
					<p class="py-6">
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html seminar.beschreibung.html}
					</p>
					<p class="py-2 text-black">
						<span class="title-font text-xs font-medium tracking-widest text-gray-600 uppercase"
							>Dozentin/ Dozent</span
						><br />{seminar.referenten.map((referent) => referent.name).join(', ')}
					</p>
					<p class="py-2 text-black">
						<span class="title-font text-xs font-medium tracking-widest text-gray-600 uppercase"
							>Kursgebühr</span
						><br />{seminar.preis} Euro
					</p>

					{#if seminar.dokumente.length}
						<div class="py-2">
							<span class="title-font text-xs font-medium tracking-widest text-gray-600 uppercase"
								>Dokumente</span
							><br />
							<ul class="pt-2">
								{#each seminar.dokumente as dokument (dokument.id)}
									<li class="flex flex-row items-center pb-4">
										<a href={dokument.url} target="_blank" class="hyperlink"
											><svg
												xmlns="http://www.w3.org/2000/svg"
												class="mr-1 inline-block h-6 w-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
												/>
											</svg>{dokument.fileName}</a
										>
									</li>
								{/each}
							</ul>
						</div>
					{/if}

					<VeranstaltungsOrt showMap={true} veranstaltungsort={seminar.veranstaltungsort} />
				</div>
			</SeminarCard>
		</div>

		<div class="__registration">
			{#if isError}
				<ErrorComponent />
			{:else if isPending}
				<div class="flex items-center justify-center">
					<p class="text-ti_blue_accent mr-4 py-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="ti_animate-spin h-14 w-14"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</p>
					<h2 class="ti_headline_blue_bold">Lädt ...</h2>
				</div>
			{:else if isSuccess}
				<Success />
			{:else if isExpired(seminar)}
				<p>Dieses Seminar ist bereits abgelaufen. Eine Anmeldung ist nicht mehr möglich.</p>
			{:else}
				<SeminarForm {action} {submitFunction} />
			{/if}
		</div>
	</div>
</section>

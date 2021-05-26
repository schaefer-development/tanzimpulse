<script lang="ts">
	import SeminarCard from '$lib/components/SeminarCard/SeminarCard.svelte';
	import SeminarForm from '$lib/components/SeminarForm/SeminarForm.svelte';
	import Success from '$lib/components/Alerts/Success.svelte';
	import Error from '$lib/components/Alerts/Error.svelte';
	export let seminar: {};
	export let errors = [];
	export let anmeldung = null;

	let isPending = false;

	const pending = () => {
		isPending = true;
	};
	const error = async (res: Response, error: Error) => {
		isPending = false;
		errors.push(error);
		if (res) errors.push(await res.text());
	};
	const result = async (res: Response) => {
		isPending = false;
		const {
			data: { teilnehmer },
			errors: graphQLErrors
		} = await res.json();
		if (graphQLErrors) errors.push(...graphQLErrors);
		anmeldung = teilnehmer;
	};
	const action = `/${seminar.format}/${seminar.url}/anmeldung.json`;
</script>

<section class="text-gray-600 body-font overflow-hidden">
	<div class="container px-5 py-24 mx-auto">
		<div class="lg:w-4/5 mx-auto flex flex-wrap">
			<div class="lg:w-1/2 w-full lg:h-auto h-64">
				<SeminarCard {seminar}>
					<p slot="beschreibung" class="leading-relaxed mb-3 prose-sm">
						{@html seminar.beschreibung.html}
					</p>
				</SeminarCard>
			</div>
			<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
				{#if errors.length}
					<Error />
				{:else if isPending}
					Pending...
				{:else if anmeldung}
					<Success />
				{:else}
					<SeminarForm {action} {result} {error} {pending} />
				{/if}
			</div>
		</div>
	</div>
</section>
<script lang="ts">
	import type { PageProps } from './$types';

	import SeminarAnmeldung from '#lib/components/SeminarAnmeldung/SeminarAnmeldung.svelte';
	import { getDataGiveString } from '#lib/helpers';
	import { eventStructuredData } from '#lib/seo';

	let { data }: PageProps = $props();

	let seminar = $derived(data.seminar);

	let seminardata = $derived(eventStructuredData(seminar));
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- getDataGiveString escapes HTML delimiters in JSON-LD. -->
	{@html getDataGiveString(seminardata)}
</svelte:head>

<SeminarAnmeldung {seminar} />

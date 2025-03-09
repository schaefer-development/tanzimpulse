<script lang="ts">
	import type { PageProps } from './$types';
	import SeminarAnmeldung from '$lib/components/SeminarAnmeldung/SeminarAnmeldung.svelte';
	let { data }: PageProps = $props();
	const { seminar } = data;
</script>

<svelte:head>
	<title>{seminar.titel}</title>
</svelte:head>

<SeminarAnmeldung {seminar} />

<script lang="ts">
	import type { PageProps } from './$types';
	import SeminarAnmeldung from '$lib/components/SeminarAnmeldung/SeminarAnmeldung.svelte';
	import { getDataGiveString } from '$lib/helpers';
	import VeranstaltungsOrt from '$lib/components/VeranstaltungsOrt/VeranstaltungsOrt.svelte';
	import { build, BuildEnvironment } from 'vite';
	let { data }: PageProps = $props();
	const { seminar } = data;

	const seminardata = {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: seminar.titel,
		startDate: seminar.datum,
		endDate: '2025-07-21T23:00-05:00',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		eventStatus: 'https://schema.org/EventScheduled',
		location: {
			'@type': 'Place',
			name: seminar.veranstaltungsort.adresse
		},
		image: [seminar.bild?.filename],
		description: seminar.kurzbeschreibung,
		offers: {
			'@type': 'Offer',
			url: 'https://tanzimpulse.de/' + seminar.format + '/' + seminar.url,
			price: seminar.preis,
			priceCurrency: 'EUR',
			availability: 'https://schema.org/InStock',
			validFrom: '2024-05-21T12:00'
		},
		organizer: {
			'@type': 'Organization',
			name: seminar.referenten
		}
	};
</script>

<svelte:head>
	<title>{seminar.titel}</title>

	{@html getDataGiveString(seminardata)};
</svelte:head>

<SeminarAnmeldung {seminar} />

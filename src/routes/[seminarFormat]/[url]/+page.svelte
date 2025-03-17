<script lang="ts">
	import type { PageProps } from './$types';
	import SeminarAnmeldung from '$lib/components/SeminarAnmeldung/SeminarAnmeldung.svelte';
	import { getDataGiveString } from '$lib/helpers';
	let { data }: PageProps = $props();
	const { seminar } = data;

	const seminardata = {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: seminar.titel,
		startDate: seminar.datum,
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		eventStatus: 'https://schema.org/EventScheduled',
		location: {
			'@type': 'Place',
			name: seminar.veranstaltungsort.adresse,
			address: {
				'@type': 'PostalAddress',
				streetAddress: seminar.veranstaltungsort.adresse,
				addressCountry: 'DE'
			}
		},
		image: seminar.bild?.medium,
		description: seminar.kurzbeschreibung,
		offers: {
			'@type': 'Offer',
			url: 'https://tanzimpulse.de/' + seminar.format + '/' + seminar.url,
			price: seminar.preis,
			priceCurrency: 'EUR',
			availability: 'https://schema.org/InStock'
		},
		performer: {
			'@type': 'PerformingGroup',
			name: seminar.referenten.map((referent) => referent.name).join(', ')
		},
		organizer: {
			'@type': 'Organization',
			name: seminar.referenten.map((referent) => referent.name).join(', '),
			url: 'https://tanzimpulse.de/'
		}
	};
</script>

<svelte:head>
	<title>{seminar.titel}</title>

	{@html getDataGiveString(seminardata)}
</svelte:head>

<SeminarAnmeldung {seminar} />

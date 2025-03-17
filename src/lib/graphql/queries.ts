import { gql } from '$lib/helpers';
export const seminarFragment = gql`
	fragment seminarFragment on Seminar {
		id
		titel
		url
		maximaleAnzahlTeilnehmer
		datum
		endOfEvent
		bild {
			medium: url(transformation: { image: { resize: { width: 480 } } })
			fileName
			height
			width
			size
			handle
			mimeType
		}
		dokumente {
			url
			fileName
		}
		preis
		format
		kurzbeschreibung
		beschreibung {
			html
		}
		referenten {
			name
		}
		veranstaltungsort {
			adresse
			koordinaten {
				longitude
				latitude
			}
		}
		teilnehmer {
			id
		}
		linktovhs
	}
`;

export const SEMINAR = gql`
	${seminarFragment}

	query ($url: String!) {
		seminar(where: { url: $url }) {
			...seminarFragment
			kategorien {
				id
				name
			}
		}
	}
`;
export const SEMINARE = gql`
	${seminarFragment}

	query ($seminarFormat: SeminarFormat!, $today: DateTime!) {
		seminare(orderBy: datum_ASC, where: { format: $seminarFormat, datum_gte: $today }) {
			...seminarFragment
			kategorien {
				id
				name
				seminare(where: { format: $seminarFormat }) {
					id
				}
			}
		}
	}
`;

export const SITEMAP = gql`
	${seminarFragment}

	query ($today: DateTime!) {
		seminare(orderBy: datum_ASC, where: { datum_gte: $today }) {
			...seminarFragment
		}
	}
`;

export const NEUIGKEITEN = gql`
	{
		neuigkeiten {
			id
			ueberschrift
			inhalt {
				html
			}
		}
	}
`;

export const INDEX = gql`
	query {
		neuigkeiten {
			id
			ueberschrift
			inhalt {
				html
			}
		}
	}
`;

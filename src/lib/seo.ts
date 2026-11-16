import { overbooked } from './helpers.ts';

export const SITE_URL = 'https://tanzimpulse.de';
export const SITE_NAME = 'Tanzimpulse bei interKultur';

type PageMetadata = {
	title: string;
	description: string;
	image?: string;
};

export const staticPageMetadata: Record<string, PageMetadata> = {
	'/': {
		title: 'Tanzpädagogik: Ausbildung & Fortbildung | Tanzimpulse',
		description:
			'Berufsbegleitende Ausbildungen in Tanzpädagogik und praxisnahe Workshops bei Tanzimpulse. Entdecke unsere Zusatzqualifikationen und Fortbildungen.'
	},
	'/ausbildungen': {
		title: 'Ausbildungen in Tanzpädagogik | Tanzimpulse',
		description:
			'Werde Tanzpädagogin oder Tanzpädagoge: Entdecke die berufsbegleitenden Ausbildungen, Grundstufen und Aufbaustufen von Tanzimpulse.'
	},
	'/workshops': {
		title: 'Workshops & Fortbildungen in Tanzpädagogik | Tanzimpulse',
		description:
			'Neue Impulse für deine tanzpädagogische Praxis: Workshops und Fortbildungen für die Arbeit mit Kindern, Jugendlichen und Erwachsenen. Jetzt Termine entdecken.',
		image: '/images/startpage/workshops25.jpg'
	},
	'/team': {
		title: 'Unser Team für Tanzpädagogik | Tanzimpulse',
		description:
			'Lerne die Dozentinnen, Dozenten und die künstlerische Leitung von Tanzimpulse kennen. Erfahrung und vielfältige Schwerpunkte für deine Weiterbildung.'
	},
	'/philosophie': {
		title: 'Unsere Philosophie & pädagogische Arbeit | Tanzimpulse',
		description:
			'Tanz vermitteln, Kreativität stärken und Menschen bewegen: Erfahre mehr über die Philosophie und die praxisorientierte Bildungsarbeit von Tanzimpulse.'
	},
	'/fotogalerie': {
		title: 'Fotogalerie: Einblicke in unsere Tanzarbeit | Tanzimpulse',
		description:
			'Entdecke in unserer Fotogalerie Eindrücke aus der Tanzarbeit von Tanzimpulse und lass dich von Bewegung, Ausdruck und Kreativität inspirieren.'
	},
	'/videos': {
		title: 'Videos & Tanzprojekte | Tanzimpulse',
		description:
			'Erlebe Tanzimpulse in Bewegung: Videos von Tanzprojekten und Werkschauen geben Einblicke in unsere tanzpädagogische Arbeit.'
	},
	'/kontakt': {
		title: 'Kontakt & Beratung | Tanzimpulse',
		description:
			'Du hast Fragen zu unseren Ausbildungen oder Workshops? Kontaktiere Tanzimpulse telefonisch oder per E-Mail und lass dich zu unserem Angebot beraten.'
	},
	'/mitgliedschaften': {
		title: 'Mitgliedschaften & Kooperationspartner | Tanzimpulse',
		description:
			'Entdecke die Mitgliedschaften, Netzwerke und Kooperationspartner von Tanzimpulse und interKultur für Tanzpädagogik und Weiterbildung.'
	},
	'/impressum': {
		title: 'Impressum | Tanzimpulse bei interKultur',
		description:
			'Impressum von Tanzimpulse bei interKultur: Angaben zum Bildungswerk interKultur, zum Träger und zur Verantwortlichkeit für diese Website.'
	},
	'/datenschutz': {
		title: 'Datenschutz | Tanzimpulse bei interKultur',
		description:
			'Informationen zum Datenschutz bei Tanzimpulse: Erfahre, wie deine personenbezogenen Daten bei der Nutzung unserer Website und bei Anmeldungen verarbeitet werden.'
	}
};

export function canonicalUrl(pathname: string) {
	const url = new URL(SITE_URL);
	url.pathname = pathname.replace(/\/+$/, '') || '/';
	return url.href;
}

export function seminarPath(seminar: Pick<Seminar, 'format' | 'url'>) {
	return `/${seminar.format}/${encodeURIComponent(seminar.url)}`;
}

export function pageMetadata(pathname: string, seminar?: Seminar) {
	const metadata: PageMetadata = seminar
		? {
				title: `${seminar.titel} | Tanzimpulse`,
				description:
					seminar.kurzbeschreibung.trim() ||
					`Informationen und Anmeldung: ${seminar.titel} bei Tanzimpulse.`,
				image: seminar.bild?.original || seminar.bild?.medium
			}
		: staticPageMetadata[pathname.replace(/\/+$/, '') || '/'] || {
				title: SITE_NAME,
				description:
					'Ausbildungen und Fortbildungen in Tanzpädagogik bei Tanzimpulse und interKultur.'
			};

	return {
		...metadata,
		canonical: canonicalUrl(seminar ? seminarPath(seminar) : pathname),
		image: new URL(metadata.image || '/images/startpage/ausbildungen25.jpg', SITE_URL).href,
		imageAlt: seminar?.titel || 'Tanzpädagogik bei Tanzimpulse'
	};
}

function eventLocation(venue: Veranstaltungsort | null) {
	if (!venue) return { '@type': 'VirtualLocation', name: 'Online-Veranstaltung' };

	const parts = venue.adresse
		.split(/(?:[,;\r\n]|<br\s*\/?>)+/i)
		.map((part) => part.trim())
		.filter(Boolean);
	const postalIndex = parts.findIndex((part) => /^(?:D[-\s]?)?\d{5}\s+\S/.test(part));
	const postal = parts[postalIndex]?.match(/^(?:D[-\s]?)?(\d{5})\s+(.+)$/);
	const street = parts[postalIndex - 1];
	const structuredAddress = postal && street && /\d/.test(street);

	return {
		'@type': 'Place',
		...(structuredAddress && postalIndex > 1
			? { name: parts.slice(0, postalIndex - 1).join(', ') }
			: {}),
		// Keep unstructured CMS addresses intact when their parts cannot be identified reliably.
		address: structuredAddress
			? {
					'@type': 'PostalAddress',
					streetAddress: street,
					postalCode: postal[1],
					addressLocality: postal[2]
				}
			: venue.adresse,
		...(venue.koordinaten
			? {
					geo: {
						'@type': 'GeoCoordinates',
						latitude: venue.koordinaten.latitude,
						longitude: venue.koordinaten.longitude
					}
				}
			: {})
	};
}

export function eventStructuredData(seminar: Seminar, now = new Date()) {
	const url = canonicalUrl(seminarPath(seminar));
	return {
		'@context': 'https://schema.org',
		'@type': 'Event',
		'@id': `${url}#event`,
		url,
		name: seminar.titel,
		startDate: seminar.datum,
		endDate: seminar.endOfEvent,
		eventAttendanceMode: `https://schema.org/${seminar.veranstaltungsort ? 'Offline' : 'Online'}EventAttendanceMode`,
		eventStatus: 'https://schema.org/EventScheduled',
		location: eventLocation(seminar.veranstaltungsort),
		image: seminar.bild?.original || seminar.bild?.medium,
		description: seminar.kurzbeschreibung,
		...(new Date(seminar.endOfEvent) >= now
			? {
					offers: {
						'@type': 'Offer',
						url,
						price: seminar.preis,
						priceCurrency: 'EUR',
						availability: `https://schema.org/${overbooked(seminar) ? 'SoldOut' : 'InStock'}`
					}
				}
			: {}),
		performer: seminar.referenten.map((referent) => ({ '@type': 'Person', name: referent.name })),
		organizer: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }
	};
}

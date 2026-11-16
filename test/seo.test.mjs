import assert from 'node:assert/strict';
import test from 'node:test';
import { canonicalUrl, eventStructuredData, pageMetadata, seminarPath } from '../src/lib/seo.ts';
import { createSitemap } from '../src/lib/sitemap.ts';
import { getDataGiveString } from '../src/lib/helpers.ts';

/** @type {Seminar} */
const seminar = {
	id: 'test-seminar',
	titel: 'Tanz und Bewegung',
	url: 'tanz-und-bewegung',
	format: 'workshop',
	datum: new Date('2099-06-15T08:00:00Z'),
	endOfEvent: new Date('2099-06-15T16:00:00Z'),
	kurzbeschreibung: 'Praxisnahe Impulse für die Tanzpädagogik.',
	beschreibung: { html: '<p>Seminarbeschreibung</p>' },
	preis: 120,
	maximaleAnzahlTeilnehmer: 1,
	teilnehmer: [],
	dokumente: [],
	kategorien: [],
	referenten: [{ name: 'Erste Dozentin' }, { name: 'Zweiter Dozent' }],
	veranstaltungsort: {
		adresse: 'Bildungswerk, Musterstraße 12, 53175 Bonn',
		koordinaten: { latitude: 50.7, longitude: 7.1 }
	},
	bild: {
		fileName: 'bild.jpg',
		medium: 'https://example.org/480.jpg',
		original: 'https://example.org/original.jpg'
	},
	linktovhs: ''
};

test('Seminar-Metadaten verwenden unabhängig vom aufgerufenen Präfix dieselbe kanonische URL', () => {
	const metadata = pageMetadata('/workshops/tanz-und-bewegung', seminar);
	assert.equal(metadata.canonical, 'https://tanzimpulse.de/workshop/tanz-und-bewegung');
	assert.equal(metadata.description, seminar.kurzbeschreibung);
	assert.equal(metadata.image, 'https://example.org/original.jpg');
	assert.equal(metadata.title, 'Tanz und Bewegung | Tanzimpulse');
	assert.equal(
		seminarPath({ format: 'ausbildung', url: 'Tanz & Bewegung' }),
		'/ausbildung/Tanz%20%26%20Bewegung'
	);
	assert.equal(canonicalUrl('/workshops/'), 'https://tanzimpulse.de/workshops');
	assert.notEqual(pageMetadata('/workshops').description, pageMetadata('/').description);
});

test('Sitemap enthält die Startseite, eindeutige URLs, XML-Escaping und ausschließlich echte Änderungsdaten', () => {
	const xml = createSitemap([
		{ pathname: '/' },
		{ pathname: '/workshops/' },
		{ pathname: '/workshops' },
		{ pathname: '/workshop/tanz&bewegung', lastmod: '2026-11-15T12:00:00Z' },
		{ pathname: '/kontakt', lastmod: 'ungültig' }
	]);
	assert.ok(xml.includes('<loc>https://tanzimpulse.de/</loc>'));
	assert.ok(!xml.includes('<loc>https://tanzimpulse.de/sitemap.xml</loc>'));
	assert.equal((xml.match(/<loc>/g) || []).length, 4);
	assert.ok(xml.includes('/workshop/tanz&amp;bewegung</loc>'));
	assert.equal((xml.match(/<lastmod>/g) || []).length, 1);
	assert.ok(xml.includes('<lastmod>2026-11-15T12:00:00.000Z</lastmod>'));
});

test('Präsenzveranstaltung enthält eine strukturierte Adresse, einzelne Personen und die kanonische Angebots-URL', () => {
	const event = eventStructuredData(seminar);
	assert.equal(event.eventAttendanceMode, 'https://schema.org/OfflineEventAttendanceMode');
	assert.equal(event.offers?.url, pageMetadata('/workshop/test', seminar).canonical);
	assert.equal(event.offers?.availability, 'https://schema.org/InStock');
	assert.ok('address' in event.location);
	assert.deepEqual(event.location.address, {
		'@type': 'PostalAddress',
		streetAddress: 'Musterstraße 12',
		postalCode: '53175',
		addressLocality: 'Bonn'
	});
	assert.equal(event.location.name, 'Bildungswerk');
	assert.deepEqual(event.performer, [
		{ '@type': 'Person', name: 'Erste Dozentin' },
		{ '@type': 'Person', name: 'Zweiter Dozent' }
	]);
});

test('Ausgebuchte und abgelaufene Veranstaltungen werden nicht als verfügbare Angebote ausgegeben', () => {
	/** @type {Teilnehmer} */
	const participant = {
		id: 'test',
		email: '',
		vorname: '',
		nachname: '',
		strasse: '',
		telefon: '',
		hausnummer: '',
		plz: '',
		ort: '',
		anmerkung: '',
		seminare: []
	};
	assert.equal(
		eventStructuredData({ ...seminar, teilnehmer: [participant] }).offers?.availability,
		'https://schema.org/SoldOut'
	);
	assert.ok(!('offers' in eventStructuredData({ ...seminar, endOfEvent: new Date('2020-01-01') })));
});

test('Onlineveranstaltungen und nicht eindeutig zerlegbare Adressen erzeugen keine erfundenen Ortsangaben', () => {
	const online = eventStructuredData({ ...seminar, veranstaltungsort: null });
	assert.equal(online.eventAttendanceMode, 'https://schema.org/OnlineEventAttendanceMode');
	assert.deepEqual(online.location, { '@type': 'VirtualLocation', name: 'Online-Veranstaltung' });
	const venue = { adresse: 'Raum im Kulturzentrum', koordinaten: { latitude: 50, longitude: 7 } };
	const event = eventStructuredData({ ...seminar, veranstaltungsort: venue });
	assert.ok('address' in event.location);
	assert.equal(event.location.address, venue.adresse);
	assert.ok(!('postalCode' in event.location));
});

test('CMS-Inhalte können das JSON-LD-Script nicht vorzeitig schließen', () => {
	const event = eventStructuredData({
		...seminar,
		titel: '</script><script>alert("test")</script>'
	});
	const html = getDataGiveString(event);
	assert.equal((html.match(/<script/g) || []).length, 1);
	assert.equal((html.match(/<\/script>/g) || []).length, 1);
	const json = html.slice('<script type="application/ld+json">'.length, -'</script>'.length);
	assert.equal(JSON.parse(json).name, event.name);
});

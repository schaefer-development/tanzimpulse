import { dateFormat } from '../helpers';
const html = (teilnehmer: Teilnehmer, seminar: Seminar) => `
<p>
<p>Guten Tag ${teilnehmer.vorname} ${teilnehmer.nachname},</p>
<p>${teilnehmer.telefon}<br>${teilnehmer.strasse} ${teilnehmer.hausnummer}<br>${teilnehmer.plz} ${teilnehmer.ort}</p>
<p>${teilnehmer.anmerkung}</p>
<p>vielen Dank für Ihr Interesse zum Seminar "${seminar.titel}" vom ${dateFormat.format(new Date(seminar.datum))} bis ${dateFormat.format(new Date(seminar.endOfEvent))} Uhr.<br>
Wir haben Sie auf die Warteliste gesetzt und werden Sie kontaktieren, wenn kurzfristig noch ein Platz frei werden sollte.
</p>
<p>Mit freundlichen Grüßen</p>
<p>Ihr Tanzimpulse-Team</p>
<br>
<hr>
<br>
<p><strong>Tanzimpulse bei interKultur – staatlich anerkannte Einrichtung der Weiterbildung</strong></p>
<p>
Büroanschrift<br>
Folwiese 20<br>
51069 Köln<br>
Bettina Bierdümpel</p>
<p>Kontakt<br>
Tel:	0163 - 68 36 910<br>
E-Mail: <a href="mailto:info@tanzimpulse-koeln.de">info@tanzimpulse-koeln.de</a><br>
Web: 	<a href="https://www.tanzimpulse.de" target="_blank">tanzimpulse-koeln.de</a>
</p>
<p>
<p>
<a href="https://www.tanzimpulse.de/content/AGB_tanzimpulse_interkultur.pdf" target="_blank">AGB</a><br>
<a href="https://www.tanzimpulse.de/content/widerrufsbelehrung_tanzimpulse_bei_interkultur.pdf" target="_blank">Widerrufsbelehrung</a>
</p>
`;

const text = (teilnehmer: Teilnehmer, seminar: Seminar) =>
	html(teilnehmer, seminar).replace(/(<([^>]+)>)/gi, '');

export default {
	html,
	text
};

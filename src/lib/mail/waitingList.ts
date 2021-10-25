import { dateFormat } from '../helpers';
const html = (teilnehmer: Teilnehmer, seminar: Seminar) => `
<p>
Hallo ${teilnehmer.name},</p>
<p>${teilnehmer.adresse}</p>
<p>${teilnehmer.anmerkung}</p>
<p>vielen Dank für Ihr Interesse zum Seminar "${seminar.titel}" am ${dateFormat.format(new Date(seminar.datum))}.<br>
Wir haben Sie auf die Warteliste gesetzt und werden Sie kontaktieren, wenn kurzfristig noch ein Platz frei werden sollte.
</p>
<p>Mit freundlichen Grüßen</p>
<p>Ihr Tanzimpulse-Team</p>
<br>
<hr>
<br>
<p><strong>Tanzimpulse - Institut für Tanzimpulse</strong></p>
<p>
Büroanschrift<br>
Folwiese 20<br>
51069 Köln<br>
Bettina Bierdümpel und Ute Luckey</p>
<p>Kontakt<br>
Tel:	0221 - 68 36 91<br>
Fax: 	0221 - 689 77 97<br>
E-Mail: <a href="mailto:info@tanzimpulse-koeln.de">info@tanzimpulse-koeln.de</a><br>
Web: 	<a href="https://www.tanzimpulse-koeln.de" target="_blank">tanzimpulse-koeln.de</a>
</p>
<p>
Bürozeiten<br>
Montag bis Freitag: 8:30 - 13:00 Uhr<br >
Dienstags und Donnerstags: 18:00 - 19:30 Uhr
</p>
<p>
<a href="https://www.tanzimpulse.de/content/AGB_2020.pdf" target="_blank">AGBs</a><br>
<a href="https://www.tanzimpulse.de/content/Widerrufsbelehrung_2020.pdf" target="_blank">Widerrufsbelehrung</a>
</p>
`;

const text = (teilnehmer: Teilnehmer, seminar: Seminar) => html(teilnehmer, seminar).replace(/(<([^>]+)>)/gi, '');

export default {
  html,
  text
};

import { dateFormat } from '../helpers';
const html = (teilnehmer: Teilnehmer, seminar: Seminar) => `
  <p>Guten Tag ${teilnehmer.vorname} ${teilnehmer.nachname},</p>
  <p>${teilnehmer.telefon}<br>${teilnehmer.strasse} ${teilnehmer.hausnummer}<br>${teilnehmer.plz} ${teilnehmer.ort}</p>
  <p>${teilnehmer.anmerkung}</p>
  <p>vielen Dank für Ihr Interesse zum Seminar "${seminar.titel}" vom ${dateFormat.format(new Date(seminar.datum))} bis ${dateFormat.format(new Date(seminar.endOfEvent))} Uhr.
  <br>Nach dieser Anmeldung ist die Kursgebühr innerhalb von 14 Tagen zu entrichten.<br>
  Überweisen Sie den Betrag von ${seminar.preis} Euro auf folgendes Konto von interKultur:</p>
  <p><strong>
  Sparkasse KölnBonn<br>  
  IBAN: DE71 3705 0198 1902 2833 06<br>
BIC: COLSDE33XXX
</strong></p>
  <p>Für Anmeldungen zur Grund-, Aufbau- und Diplomstufe sind Ratenzahlungen möglich. Hierzu erhalten Sie eine Rechnung.</p>
  <p>Wir freuen uns auf Ihre Teilnahme und verbleiben mit freundlichen Grüßen</p>
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
  E-Mail:	<a href="mailto:tanzimpulse@ik-bonn.de">tanzimpulse@ik-bonn.de</a><br>
  Web:	<a href="https://www.tanzimpulse.de" target="_blank">tanzimpulse-koeln.de</a>
  </p>
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

import waitingList from './waitingList';
import registration from './registration';

const defaults = {
	from: 'info@tanzimpulse-koeln.de',
	bcc: ['info@tanzimpulse-koeln.de', 'anfrage@ik-bonn.de']
};

export function waitingListMessage(teilnehmer: Teilnehmer, seminar: Seminar) {
	return {
		...defaults,
		subject: 'Anmeldung zur Warteliste',
		to: teilnehmer.email,
		text: waitingList.text(teilnehmer, seminar),
		html: waitingList.html(teilnehmer, seminar)
	};
}

export function registrationMessage(teilnehmer: Teilnehmer, seminar: Seminar) {
	return {
		...defaults,
		subject: 'Anmeldung zum Seminar',
		to: teilnehmer.email,
		text: registration.text(teilnehmer, seminar),
		html: registration.html(teilnehmer, seminar)
	};
}

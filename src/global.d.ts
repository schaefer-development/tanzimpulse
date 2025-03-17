/// <reference types="@sveltejs/kit" />
interface Identifiable {
	id: ID;
}

type ButtonColor =
	| 'blue'
	| 'cyan'
	| 'green'
	| '_blue'
	| '_cyan'
	| '_green'
	| 'red'
	| 'white'
	| 'gray';

type Koordinaten = {
	longitude: number;
	latitude: number;
};

type Veranstaltungsort = {
	adresse: string;
	koordinaten: Koordinaten;
};

type Neuigkeit = {
	id: ID;
	ueberschrift: string;
	inhalt: {
		html: string;
	};
};

type Teilnehmer = {
	id: ID;
	email: string;
	vorname: string;
	nachname: string;
	strasse: string;
	telefon: string;
	hausnummer: string;
	plz: string;
	ort: string;
	anmerkung: string;
	seminare: Seminar[];
};

type Bild = {
	fileName: string;
	medium: string;
};

type Referent = {
	name: string;
};

type Dokument = {
	id: ID;
	fileName: string;
	url: string;
};

type Seminar = {
	id: ID;
	titel: string;
	datum: Date;
	endOfEvent: Date;
	kurzbeschreibung: string;
	beschreibung: {
		html: string;
	};
	dokumente: Dokument[];
	preis: number;
	maximaleAnzahlTeilnehmer?: number;
	teilnehmer: Teilnehmer[];
	kategorien: Kategorie[];
	veranstaltungsort: Veranstaltungsort;
	format: 'ausbildung' | 'workshop';
	referenten: Referent[];
	bild?: Bild;
	url: string;
	linktovhs: string;
};

type Kategorie = {
	id: ID;
	name: string;
	selected?: boolean;
};

/// <reference types="@sveltejs/kit" />
interface Identifiable {
	id: ID;
}

type Location = {
	longitude: number;
	latitude: number;
};

type Veranstaltungsort = {
	adresse: string;
	koordinaten: Location;
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
	fileName: string;
	url: string;
};

type Seminar = {
	id: ID;
	titel: string;
	datum: Date;
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
	format: string;
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

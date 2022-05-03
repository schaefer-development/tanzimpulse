/// <reference types="@sveltejs/kit" />
interface Identifiable {
  id: string;
}

type Location = {
  longitude: number;
  latitude: number;
};

type Veranstaltungsort = {
  adresse: string;
  koordinaten: Location;
};

type Teilnehmer = {
  id: string;
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
  id: string;
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
};

type Kategorie = {
  id: string;
  name: string;
  selected?: boolean;
};

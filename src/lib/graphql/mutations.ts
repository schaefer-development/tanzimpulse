import { gql } from '$lib/helpers';
import { seminarFragment } from './queries';
export const UPSERT_TEILNEHMER = gql`
  ${seminarFragment}
  mutation ($url: String!, $email: String!, $vorname: String!, $nachname: String!, $telefon: String!, $adresse: String!, $datenverarbeitung: Boolean!, $anmerkung: String, $newsletter: Boolean!) {
    teilnehmer: upsertTeilnehmer(where: { email: $email }, upsert: { create: { vorname: $vorname, nachname: $nachname, email: $email, adresse: $adresse, telefon: $telefon, anmerkung: $anmerkung, datenverarbeitung: $datenverarbeitung, newsletter: $newsletter, seminare: { connect: { url: $url } } }, update: { vorname: $vorname, nachname: $nachname, email: $email, adresse: $adresse, telefon: $telefon, anmerkung: $anmerkung, datenverarbeitung: $datenverarbeitung, newsletter: $newsletter, seminare: { connect: { where: { url: $url } } } } }) {
      id
      vorname
      nachname
      email
      telefon
      adresse
      anmerkung
      seminare(where: { url: $url }) {
        ...seminarFragment
        kategorien {
          id
          name
        }
      }
    }
  }
`;

export const PUBLISH_TEILNEHMER = gql`
  mutation ($email: String!) {
    teilnehmer: publishTeilnehmer(where: { email: $email }, to: PUBLISHED) {
      stage
      id
      documentInStages(stages: [PUBLISHED]) {
        id
        stage
      }
    }
  }
`;

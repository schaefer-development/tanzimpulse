import { gql } from '$lib/helpers';
import { seminarFragment } from './queries';
export const UPSERT_TEILNEHMER = gql`
  ${seminarFragment}
  mutation ($url: String!, $email: String!, $name: String!, $adresse: String!, $datenverarbeitung: Boolean!, $anmerkung: String, $newsletter: Boolean!) {
    teilnehmer: upsertTeilnehmer(
      where: {email: $email}
      upsert: {create: {name: $name, email: $email, adresse: $adresse, anmerkung: $anmerkung, datenverarbeitung: $datenverarbeitung, newsletter: $newsletter, seminare: {connect: {url: $url}}}, update: {name: $name, email: $email, adresse: $adresse, anmerkung: $anmerkung, datenverarbeitung: $datenverarbeitung, newsletter: $newsletter, seminare: {connect: {where: {url: $url}}}}}
    ) {
      id
      name
      email
      adresse
      anmerkung
      seminare(where: {url: $url}) {
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

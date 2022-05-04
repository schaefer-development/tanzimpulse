import { api } from '$lib/graphql/api';
import type { RequestHandler } from '@sveltejs/kit';
import type { ServerRequest } from '@sveltejs/kit/types/hooks';
import { UPSERT_TEILNEHMER, PUBLISH_TEILNEHMER } from '$lib/graphql/mutations';
import { SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD } from '$lib/env';
import { dev } from '$app/env';
import nodemailer from 'nodemailer';
import { overbooked } from '$lib/helpers';
import { waitingListMessage, registrationMessage } from '$lib/mail';
import sanitizeHtml from 'sanitize-html';
import { verify } from 'hcaptcha'
import { HCAPTCHA_SECRET } from '$lib/env'

const sanitizeOptions = {
  allowedTags: [],
  allowedAttributes: {}
};

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  auth: {
    user: SMTP_USERNAME,
    pass: SMTP_PASSWORD
  },
  tls: {
    rejectUnauthorized: !dev
  }
});

const sendConfirmation = async (teilnehmer: Teilnehmer) => {
  const {
    seminare: [seminar]
  } = teilnehmer;
  const message = overbooked(seminar) ? waitingListMessage : registrationMessage;
  return transporter.sendMail(message(teilnehmer, seminar));
};

const requestVariables = async (request: ServerRequest<any, any>) => {
  const verificationData = await verify(HCAPTCHA_SECRET, request.body.get('h-captcha-response'))
  if (!verificationData.success) throw new Error('HCaptcha Verification failed')
  const toBool = (cb: string) => !!{ on: true }[cb];
  const result = {
    email: request.body.get('email'),
    vorname: request.body.get('vorname'),
    nachname: request.body.get('nachname'),
    telefon: request.body.get('telefon'),
    strasse: request.body.get('strasse'),
    hausnummer: request.body.get('hausnummer'),
    plz: request.body.get('plz'),
    ort: request.body.get('ort'),
    anmerkung: request.body.get('anmerkung'),
    datenverarbeitung: request.body.get('datenverarbeitung'),
    newsletter: request.body.get('newsletter')
  };
  for (const [key, value] of Object.entries(result)) {
    result[key] = sanitizeHtml(value, sanitizeOptions);
  }
  result.newsletter = toBool(result.newsletter)
  result.datenverarbeitung = toBool(result.datenverarbeitung)
  return result;
};

// POST /:seminarFormat/:url/anmeldung.json
export const post: RequestHandler<any, FormData> = async (request) => {
  const { seminarFormat, url } = request.params;
  const variables = await requestVariables(request)
  const res = await api(UPSERT_TEILNEHMER, { ...variables, url });
  await api(PUBLISH_TEILNEHMER, variables);
  if (res.ok) {
    await sendConfirmation(res.body.data.teilnehmer);
  }

  if (request.headers.accept === 'application/json') return res;

  const location = `/${seminarFormat}/${url}/anmeldung/${res.status}`;
  return { status: 303, headers: { location } };
};

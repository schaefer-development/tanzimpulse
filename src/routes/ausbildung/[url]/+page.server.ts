import type { Actions } from './$types';
import type { PageServerLoad } from './$types';
import { error, fail } from '@sveltejs/kit';
import { api } from '$lib/graphql/api';
import { SEMINAR } from '$lib/graphql/queries';
import { dev } from '$app/environment';
import { overbooked, graphQLError } from '$lib/helpers';
import nodemailer from 'nodemailer';
import { waitingListMessage, registrationMessage } from '$lib/mail';
import sanitizeHtml from 'sanitize-html';
import { SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD, HCAPTCHA_SECRET } from '$lib/env';
import { UPSERT_TEILNEHMER, PUBLISH_TEILNEHMER } from '$lib/graphql/mutations';
import { verify } from 'hcaptcha';

export const load: PageServerLoad = async ({ params }) => {
	const { url } = params;
	const body = await api(SEMINAR, { url });
	const {
		data: { seminar }
	} = body;
	if (!seminar) {
		error(404, 'Seminar nicht gefunden');
	}

	return { seminar };
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

const sanitizeOptions = {
	allowedTags: [],
	allowedAttributes: {}
};

const sanitizeString = (str: FormDataEntryValue | null) => {
	if (!str || str instanceof File) return '';
	return sanitizeHtml(str, sanitizeOptions);
};
type SanitizedFormValues = {
	email: string;
	vorname: string;
	nachname: string;
	telefon: string;
	strasse: string;
	hausnummer: string;
	plz: string;
	ort: string;
	anmerkung: string;
	datenverarbeitung: boolean;
	newsletter: boolean;
};
const sanitizeFormValues: (data: FormData) => SanitizedFormValues = (data) => ({
	email: sanitizeString(data.get('email')),
	vorname: sanitizeString(data.get('vorname')),
	nachname: sanitizeString(data.get('nachname')),
	telefon: sanitizeString(data.get('telefon')),
	strasse: sanitizeString(data.get('strasse')),
	hausnummer: sanitizeString(data.get('hausnummer')),
	plz: sanitizeString(data.get('plz')),
	ort: sanitizeString(data.get('ort')),
	anmerkung: sanitizeString(data.get('anmerkung')),
	datenverarbeitung: data.get('datenverarbeitung') === 'on',
	newsletter: data.get('newsletter') === 'on'
});

export const actions = {
	default: async (event) => {
		const { url } = event.params;

		const data = await event.request.formData();
		const hcaptchaResponse = data.get('h-captcha-response') || '';
		if (hcaptchaResponse instanceof File) return fail(400, { hcaptchaResponse, incorrect: true });
		const verificationData = await verify(HCAPTCHA_SECRET, hcaptchaResponse);
		if (!verificationData.success) return fail(400, { hcaptchaResponse, incorrect: true });
		const variables = sanitizeFormValues(data);

		const {
			data: { teilnehmer }
		} = await api(UPSERT_TEILNEHMER, { ...variables, url });
		await api(PUBLISH_TEILNEHMER, variables);
		await sendConfirmation(teilnehmer);
		return teilnehmer;
	}
} satisfies Actions;

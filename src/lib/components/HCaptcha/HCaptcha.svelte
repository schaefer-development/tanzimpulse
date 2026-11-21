<script lang="ts" context="module">
	export type CaptchaTheme = 'dark' | 'light';
	type CaptchaSize = 'normal' | 'compact' | 'invisible';
	type WidgetID = string | number;

	interface ExecuteOptions {
		async?: boolean;
	}

	interface CaptchaResponse {
		response: string;
		key: string;
	}

	interface RenderOptions {
		sitekey: string;
		hl: string;
		theme: CaptchaTheme;
		size: CaptchaSize;
		callback: string;
		'error-callback': string;
		'close-callback': string;
		'expired-callback': string;
	}

	interface HCaptchaAPI {
		render(container: string, options: RenderOptions): WidgetID;
		reset(widgetID: WidgetID): void;
		execute(widgetID: WidgetID, options?: ExecuteOptions): void | Promise<CaptchaResponse>;
	}

	declare global {
		interface Window {
			sitekey?: string;
			hcaptchaOnLoad?: (() => void) | null;
			onSuccess?: ((token: string) => void) | null;
			onError?: (() => void) | null;
			onClose?: (() => void) | null;
			onExpired?: (() => void) | null;
			hcaptcha?: HCaptchaAPI | null;
		}
	}
</script>

<script lang="ts">
	import { onDestroy, createEventDispatcher, onMount } from 'svelte';
	const browser = import.meta.env.SSR === undefined ? true : !import.meta.env.SSR;

	const dispatch = createEventDispatcher<{
		load: void;
		success: { token: string };
		error: void;
		close: void;
		expired: void;
		mount: void;
	}>();

	export let sitekey: string;
	export let apihost: string = 'https://js.hcaptcha.com/1/api.js';
	export let hl: string = '';
	export let reCaptchaCompat: boolean = false;
	export let theme: CaptchaTheme = 'light';
	export let size: CaptchaSize = 'normal';

	export const reset = () => {
		if (mounted && loaded && widgetID !== undefined) window.hcaptcha?.reset(widgetID);
	};

	export const execute = (options?: ExecuteOptions) => {
		if (mounted && loaded && widgetID !== undefined) {
			return window.hcaptcha?.execute(widgetID, options);
		}
	};

	// ensure that all captcha divs on a page are uniquely identifiable
	const id = Math.floor(Math.random() * 100);

	let mounted = false;
	let loaded = false;
	let widgetID: WidgetID | undefined;

	// construct the script tag for hCaptcha remote resources
	const query = new URLSearchParams({
		recaptchacompat: reCaptchaCompat ? 'on' : 'off',
		onload: 'hcaptchaOnLoad',
		render: 'explicit'
	});
	const scriptSrc = `${apihost}?${query.toString()}`;

	onMount(() => {
		if (browser && !sitekey) sitekey = window.sitekey ?? '';

		if (browser) {
			window.hcaptchaOnLoad = () => {
				// consumers can attach custom on:load handlers
				dispatch('load');
				loaded = true;
			};

			window.onSuccess = (token) => {
				dispatch('success', {
					token: token
				});
			};

			window.onError = () => {
				dispatch('error');
			};

			window.onClose = () => {
				dispatch('close');
			};

			window.onExpired = () => {
				dispatch('expired');
			};
		}

		dispatch('mount');
		mounted = true;
	});

	onDestroy(() => {
		if (browser) {
			window.hcaptchaOnLoad = null;
			window.onSuccess = null;
		}
		// guard against script loading race conditions
		// i.e. if component is destroyed before hcaptcha reference is loaded
		if (browser && loaded) window.hcaptcha = null;
	});

	$: if (mounted && loaded && window.hcaptcha) {
		widgetID = window.hcaptcha.render(`h-captcha-${id}`, {
			sitekey,
			hl, // force a specific localisation
			theme,
			callback: 'onSuccess',
			'error-callback': 'onError',
			'close-callback': 'onClose',
			'expired-callback': 'onExpired',
			size
		});
	}
</script>

<svelte:head>
	{#if mounted && !window?.hcaptcha}
		<script src={scriptSrc} async defer></script>
	{/if}
</svelte:head>

<div id="h-captcha-{id}"></div>

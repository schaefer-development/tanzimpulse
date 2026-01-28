// $lib/stores/consent.ts
import { writable } from 'svelte/store';

export const consent = writable({
	leaflet: false
});

<script lang="ts">
	import type Leaflet from 'leaflet';
	import { onMount } from 'svelte';

	export let iconOptions: Leaflet.IconOptions = {
		iconUrl: '/images/mapmarker.png',
		iconSize: [40, 50],
		iconAnchor: [20, 50]
	};

	export let zoom = 13;
	export let coordinates: Leaflet.LatLngExpression = [50.96745443190281, 7.049317359924316];

	export let mapAttributes = {
		style: 'width: 100%; height: 300px;'
	};

	let map: Leaflet.Map;

	onMount(() => {
		import('leaflet').then((L) => {
			map = L.map('map', { scrollWheelZoom: false }).setView(coordinates, zoom);

			// Standard-Layout von OpenStreetMap laden
			L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: `&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>`,
				maxZoom: 19
			}).addTo(map);

			// Marker hinzufügen
			const icon = L.icon(iconOptions);
			L.marker(coordinates, { icon }).addTo(map);
		});

		// Karte initialisieren

		return () => {
			if (map) map.remove();
		};
	});
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
		integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
		crossorigin=""
	/>
</svelte:head>

<div id="map" {...mapAttributes}></div>

<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	export let iconOptions = {
		iconUrl: `${base}/images/mapmarker.png`,
		iconSize: [40, 50],
		iconAnchor: [20, 50]
	};
	export let layerOptions = [
		'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png ',
		{
			attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>, &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
			maxZoom: 19
		}
	];
	export let zoom = 13;
	export let coordinates = null;
	export let instance = null;

	export let mapAttributes = {
		style: 'width: 100%; height: 100%; min-height:500px; max-height:40vh' // fallback
	};
	let L;

	onMount(async () => {
		await import('leaflet');
		const icon = L.icon(iconOptions);
		const map2 = L.map('map2', { scrollWheelZoom: false }).setView(coordinates, zoom);
		L.tileLayer(...layerOptions).addTo(map2);
		L.marker(coordinates, { icon }).addTo(map2);

		return () => map2 && map2.remove();
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

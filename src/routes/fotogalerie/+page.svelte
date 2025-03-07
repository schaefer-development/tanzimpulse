<script context="module" lang="ts">
	import Fotogallery from '$lib/components/Fotogallery/Fotogallery.svelte';
	import CiteGallery from '$lib/components/Cite/CiteGallery.svelte';
</script>

<svelte:head>
	<title>Fotogalerie</title>
</svelte:head>

<section>
	<div class="container">
		<div class="relative">
			<CiteGallery></CiteGallery>
			<Fotogallery></Fotogallery>
		</div>
	</div>
</section>

<script context="module" lang="ts">
	import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
	const now = new Date();
</script>

<svelte:head>
	<title>Event in der Vergangenheit</title>
</svelte:head>

<section>
	<div class="container">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
			<DefaultCard>
				<h2 class="ti_headline_blue_bold">Zu spät</h2>
				<h2 class="ti_headline_blue_light mb-4">
					Diese Veranstaltung liegt in der Vergangenheit und kann nicht mehr gebucht werden
				</h2>

				<p>Hier geht es zu den aktuellen Events:</p>

				<div class="flex flex-col gap-8 py-4 md:flex-row">
					<a
						href="/workshops"
						class="text-ti_blue_accent border-ti_blue_accent hover:bg-ti_blue_accent max-w-fit rounded-full border-2 bg-white px-6 py-3 text-sm font-bold tracking-widest uppercase transition duration-300 ease-in-out outline-none hover:text-white focus:ring-0 focus:outline-none"
						>Aktuelle Workshops</a
					>
					<a
						href="/ausbildungen"
						class="text-ti_blue_accent border-ti_blue_accent hover:bg-ti_blue_accent max-w-fit rounded-full border-2 bg-white px-6 py-3 text-sm font-bold tracking-widest uppercase transition duration-300 ease-in-out outline-none hover:text-white focus:ring-0 focus:outline-none"
						>Aktuelle Ausbildungen</a
					>
				</div>
			</DefaultCard>
		</div>
	</div>
</section>

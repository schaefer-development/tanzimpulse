<script context="module" lang="ts">
	import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
</script>

<svelte:head>
	<title>Kontakt</title>
</svelte:head>

<section>
	<div class="container">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
			<DefaultCard>
				<h2 class="ti_headline_blue_bold">Kontakt</h2>
				<p class="py-2">
					Folwiese 20<br />
					51069 Köln
				</p>

				<p class="pt-2 pb-4">
					Telefon: +49 (0)221 - 68 36 91
					<br />
					Fax: +49 (0)221 - 68 97 797
					<br />
					E-Mail:
					<a class="hyperlink" href="mailto:info@tanzimpulse-koeln.de">info@tanzimpulse-koeln.de</a>
				</p>
				<p class="mb-8">
					<span class="text-xs font-extrabold tracking-widest uppercase">Bürozeiten</span><br />
					Montag bis Freitag: 9:00 - 13:00 Uhr<br />
					Dienstag: 18:00 - 20:00 Uhr
				</p>
			</DefaultCard>
		</div>
	</div>
</section>

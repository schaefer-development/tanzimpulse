<script context="module" lang="ts">
	import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
	const now = new Date();
</script>

<svelte:head>
	<title>Impressum</title>
</svelte:head>

<section>
	<div class="container">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
			<DefaultCard>
				<h2 class="ti_headline_blue_bold">Impressum</h2>
				<h2 class="ti_headline_blue_light mb-4">TANZIMPULSE – Institut für Tanzpädagogik</h2>
				<p class="py-2">Herausgeber: Bettina Bierdümpel und Ute Luckey</p>
				<p class="py-2">
					Folwiese 20<br />
					51069 Köln
				</p>
				<p class="py-2">
					Telefon: +49 (0)221 - 68 36 91
					<br />
					Fax: +49 (0)221 - 68 97 797
					<br />
					E-Mail:
					<a class="hyperlink" href="mailto:info@tanzimpulse-koeln.de">info@tanzimpulse-koeln.de</a>
				</p>
				<p class="py-2">
					Fotonachweise: Bettina Bierdümpel, Maria Luckey, weitere Porträtfotos privat
				</p>
				<p class="py-2">
					TANZIMPULSE sind nach § 9 AWBG als staatliches Weiterbildungs-Institut anerkannt. Sonder-
					oder Bildungsurlaub kann somit beantragt werden. Bildungsscheck im Rahmen neuer
					Förderrichtlinien! Die gesamte Ausbildungsgebühr wird in der Regel von den Finanzämtern
					als Steuer mindernde Ausgaben anerkannt.
				</p>
				<p class="py-2">
					Zu den <a
						class="hyperlink"
						href="https://www.bildungsurlaub.de/bildungsurlaub_nrw.html"
						rel="noreferrer"
						target="_blank">Fördermöglichkeiten</a
					>.
				</p>
				<p class="py-2">© TANZIMPULSE 2002 - {now.getFullYear()}</p>
				<hr class="mt-4 mb-8 block w-full border border-neutral-200" />
				<h2 class="ti_headline_blue_light mb-4">Haftungsausschluss</h2>
				<p class="py-2">
					Diese Webseite wurde mit größtmöglicher Sorgfalt zusammengestellt. Wir bemühen uns alle
					Angaben stets auf dem aktuellen Stand zu halten. Eine Haftung oder Garantie für die
					Richtigkeit und Vollständigkeit der zur Verfügung gestellten Informationen und Daten kann
					aber nicht gegeben werden. Tanzimpulse schließt jegliche Haftung für Schäden, die direkt
					oder indirekt aus der Benutzung dieser Website entstehen, aus.
				</p>
				<p class="py-2">
					Gemäß dem Urteil vom 12. Mai 1998 "Haftung für Links" (312 O 85/98) des Landgerichts
					Hamburg distanziert sich Tanzimpulse ausdrücklich von allen Inhalten sämtlicher gelinkter
					Seiten. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber
					verantwortlich.
				</p>
				<hr class="mt-4 mb-8 block w-full border border-neutral-200" />
				<h3 class="font-bold">Webdesign und Entwicklung</h3>
				<p class="py-2">
					Robert und Jo Schäfer<br />
					<a class="hyperlink" rel="noreferrer" href="mailto:mail@joschaefer.com"
						>mail@joschaefer.com</a
					><br />
					<a class="hyperlink" rel="noreferrer" href="http://www.joschaefer.com" target="_blank"
						>joschaefer.com</a
					>
				</p>
			</DefaultCard>
		</div>
	</div>
</section>

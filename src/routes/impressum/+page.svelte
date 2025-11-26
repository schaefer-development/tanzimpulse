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

				<h2 class="ti_headline_blue_light">Tanzimpulse bei Bildungswerk interKultur Bonn</h2>
				<p class="py-2">Herausgeber: Aneta Göbel</p>
				<p class="py-2">
					Friesdorfer Straße 151<br />

					53175 Bonn
				</p>
				<p class="py-2">
					Telefon: 0228 - 433 14 61
					<br />
					Fax: 0228 - 433 14 62
					<br />
					E-Mail:
					<a class="hyperlink" href="mailto:info@ik-bonn.de">info@ik-bonn.de</a>
				</p>
				<p class="py-2">
					Fotonachweise: Bettina Bierdümpel, Maria Luckey, weitere Porträtfotos privat
				</p>
				<p class="py-2">
					TANZIMPULSE sind nach § 9 AWBG als staatliche Weiterbildungs-Einrichtung anerkannt.
					Sonder- oder Bildungsurlaub kann somit beantragt werden. Die gesamte Ausbildungsgebühr
					wird in der Regel von den Finanzämtern als Steuer mindernde Ausgaben anerkannt.
				</p>
				<p class="py-2">
					Zu den <a
						class="hyperlink"
						href="https://www.bildungsurlaub.de/bildungsurlaub_nrw.html"
						rel="noreferrer"
						target="_blank">Fördermöglichkeiten</a
					>.
				</p>
				<p class="py-2">© Bildungswerk interKultur Bonn 2002 - {now.getFullYear()}</p>
				<hr class="mt-4 mb-8 block w-full border border-neutral-200" />
				<h2 class="ti_headline_blue_light mb-4">Haftungsausschluss</h2>
				<p class="py-2">
					Diese Webseite wurde mit größtmöglicher Sorgfalt zusammengestellt. Wir bemühen uns alle
					Angaben stets auf dem aktuellen Stand zu halten. Eine Haftung oder Garantie für die
					Richtigkeit und Vollständigkeit der zur Verfügung gestellten Informationen und Daten kann
					aber nicht gegeben werden. Bildungswerk interKultur Bonn schließt jegliche Haftung für
					Schäden, die direkt oder indirekt aus der Benutzung dieser Website entstehen, aus.
				</p>
				<p class="py-2">
					Gemäß dem Urteil vom 12. Mai 1998 "Haftung für Links" (312 O 85/98) des Landgerichts
					Hamburg distanziert sich Bildungswerk interKultur Bonn ausdrücklich von allen Inhalten
					sämtlicher gelinkter Seiten. Für den Inhalt der verlinkten Seiten sind ausschließlich
					deren Betreiber verantwortlich.
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

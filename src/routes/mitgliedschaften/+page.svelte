<script context="module" lang="ts">
	import { base } from '$app/paths';
	import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
</script>

<svelte:head>
	<title>Mitgliedschaften</title>
</svelte:head>

<section>
	<div class="container">
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-2">
			<DefaultCard>
				<h2 class="ti_headline_blue_bold">Mitgliedschaften</h2>

				<ul class="mb-4 py-4">
					<li>
						<a class="hyperlink" href="http://www.lag-tanz-nrw.de/" rel="noreferrer" target="_blank"
							>Landesarbeitsgemeinschaft Tanz NRW</a
						>
					</li>
					<li>
						<a class="hyperlink" href="https://aktiontanz.de/" rel="noreferrer" target="_blank">
							AktionTanz - Bundesverband Tanz in Bildung und Gesellschaft e.V.</a
						>
					</li>
				</ul>

				<h2 class="ti_headline_blue_bold">Kooperationspartner</h2>
				<ul class="mb-4 py-4">
					<li>
						<a
							class="hyperlink"
							href="http://www.neues-lernen.info/home.html"
							rel="noreferrer"
							target="_blank">Bildungswerk neues lernen</a
						>
					</li>
					<li>
						<a
							class="hyperlink"
							href="http://www.sk-kultur.de/tanz/"
							rel="noreferrer"
							target="_blank">Deutsches Tanzarchiv Köln / SK-Stiftung Kultur</a
						>
					</li>
					<li>
						<a
							class="hyperlink"
							href="http://www.landesbuerotanz.de/tanzvermittlung/"
							rel="noreferrer"
							target="_blank">Tanzvermittlung | Landesbüro Tanz NRW</a
						>
					</li>

					<li>
						<a
							class="hyperlink"
							href="http://www.musenkuss-koeln.de/"
							rel="noreferrer"
							target="_blank">Musenkuss Köln</a
						>
					</li>

					<!-- -->

					<li>
						<a
							class="hyperlink"
							href="https://www.tanzfabrik-siegburg.de/"
							rel="noreferrer"
							target="_blank">Tanzfabrik Siegburg</a
						>
					</li>

					<li>
						<a
							class="hyperlink"
							href="https://www.meine-tanzschule-koeln.de/"
							rel="noreferrer"
							target="_blank">Tanzschule Auftakt</a
						>
					</li>

					<li>
						<a
							class="hyperlink"
							href="https://www.sichtartundweise.de/"
							rel="noreferrer"
							target="_blank">Sicht Art+Weise</a
						>
					</li>
				</ul>
				<p class="py-2">
					TANZIMPULSE sind nach § 9 AWBG als staatliche Weiterbildungs-Einrichtung anerkannt. <a
						class="hyperlink"
						href="https://www.bildungsurlaub.de/bildungsurlaub-angebote/grundstufe-tanzpaedagogik/148025"
						rel="noreferrer"
						target="_blank">Sonder- oder Bildungsurlaub</a
					> kann somit beantragt werden.
				</p>
			</DefaultCard>
		</div>
	</div>
</section>

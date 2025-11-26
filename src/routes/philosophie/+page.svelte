<script lang="ts">
	import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';

	import Accordion from '$lib/components/Accordion/Accordion.svelte';

	const faqItems = [
		{
			title: 'Erfahrung seit 1994',
			content:
				'Wir vermitteln seit 1994 Tanz als ureigenste Ausdrucksform des Menschen. Unser Ziel ist es, Tanz in traditioneller, multikultureller und moderner Form in Schul-, Berufsalltag und Freizeit zu etablieren. In allen Schulformen und in Kindertageseinrichtungen soll Tanz als eigenständiges Fach im Rahmen der ästhetischen und kulturellen Bildung vermittelt werden.'
		},
		{
			title: 'Praxisorientiert',
			content:
				'Unser Ziel ist es, methodisch/didaktisches Handwerkszeug am Beispiel verschiedener Tanzrichtungen an Multiplikatoren*innen zu vermitteln. Unsere Zusatzqualifikation und die Fortbildungs-Workshops richten sich an Tanzinteressierte aus pädagogischen, sozialen, therapeutischen Arbeitsfeldern, aus Vereinen und anderen Kinder- + Jugendfreizeiteinrichtungen und aus der Erwachsenenbildung. Oberste Priorität ist es, tanzbegeisterten Menschen zu einer soliden Tanzbasis zu verhelfen und sie in eigenen kreativen Tanz- + Bewegungsprozessen zu bestärken, ein eigenes Thema zu finden und dies im beruflichen oder auch Freizeit-Bereich einzubinden oder um eine Selbständigkeit mit einem individuellen Konzept anzustreben.'
		},
		{
			title: 'Kreativ-Potenzial',
			content:
				'Unser Ziel ist es, dass unsere Teilnehmenden tänzerisches Vorbild werden und die Fähigkeit entwickeln, kreativen Potentialen in ihren Zielgruppen Raum zu geben im Sinne der ästhetischen und kulturellen Bildung.'
		},
		{
			title: 'Anregungen und Bedürfnisse',
			content:
				'Unser Konzept wird regelmäßig überarbeitet und im Team abgesprochen, sodass wir unsere Zusatzqualifikationen aktualisieren und unser Angebot erweitern.'
		},
		{
			title: 'Kompetentes Team',
			content:
				'Wir arbeiten mit dem Ziel, alle Teilnehmende entsprechend ihrer individuellen Fähigkeiten zu fördern und zu beraten. Über eine langjährige Zusammenarbeit sind wir zusammengewachsen und legen großen Wert auf intensiven Austausch.'
		},
		{
			title: 'Bewährte Qualitätskriterien',
			content:
				'Als Mitglied der Qualitätsgemeinschaft Berufliche Bildung Region Köln e.V. haben wir uns den Qualitätsstandards der Qualitätsgemeinschaft Berufliche Bildung Region Köln verpflichtet. Die geeigneten Qualitätsverfahren werden bei Tanzimpulse und in unseren Weiterbildungen eingesetzt. Hierzu erfolgen in unregelmäßigen Abständen Überprüfungen.'
		},
		{
			title: 'Netzwerke',
			content:
				'Wir arbeiten mit Partnern zusammen, die zu Informationsaustausch, Ergänzung und Erweiterung unseres Angebotes führen. Durch die Kooperation mit dem Verein AndersTanzen – ästhetische und kulturelle Bildung im Tanz e.V. bringen wir Tanzpädagogen/innen aus unseren Ausbildungen und andere Tanzvermittler/innen und Vermittler/innen anderer Künste in Projekte, in denen sie ihre tänzerischen Schwerpunktthemen, bzw. ihren Schwerpunkt Musik, Theater, Bildende Kunst etc. umsetzen.'
		}
	];
</script>

<svelte:head>
	<title>Philosophie</title>
</svelte:head>

<section>
	<div class="container">
		<div class="flex w-full lg:w-1/2">
			<DefaultCard>
				<h2 class="ti_headline_blue_bold mb-4">Philosophie</h2>
				<p>
					<Accordion items={faqItems} />
				</p>

				<p class="pt-10">
					Wir freuen uns, auf einen regen Austausch und interessante Tanzerlebnisse mit allen
					Weiterbildungs- und Tanzinteressierten (m/w/d).
				</p>
				<p class="pt-4">Bettina Bierdümpel (Künstlerische Leitung)</p>
			</DefaultCard>
		</div>
	</div>
</section>

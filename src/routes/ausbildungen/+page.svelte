<script lang="ts">
	import type { PageProps } from './$types';
	import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
	import Accordion from '$lib/components/Accordion/Accordion.svelte';

	import CiteGallery from '$lib/components/Cite/CiteGallery.svelte';

	import SeminarDashboard from '$lib/components/SeminarDashboard/SeminarDashboard.svelte';
	let { data }: PageProps = $props();

	const ausbildungsstufen = [
		{
			title: '1. Die Grundstufen',
			content: `
      <h3 class="py-4 font-bold">a) Grundstufe/Alters-und Zielgruppen übergreifend</h3>
      <p class="pb-8">
        In der einjährigen Grundstufenausbildung ist das Ziel die Vermittlung von Grundlagen
        in Tanzstilen wie Hip Hop, Moderner Tanz, Tanzimprovisation, Jazztanz und Musical;
        die Vermittlung von tanzpädagogischer Methoden-Vielfalt mit Praxisbezug; Tanz als
        Medium in der Arbeit mit Kindern, Jugendlichen, Erwachsenen/Senioren und in
        Inklusionsgruppen.
      </p>
      <h3 class="py-4 font-bold">b) Grundstufe/Schwerpunkt Kindertanz</h3>
      <p class="pb-4">Für die Arbeit mit Kindern von U3 bis 11 Jahren</p>
      <p class="pb-4">
        In dieser einjährigen Qualifikation steht die ästhetisch-kulturelle Bildung im
        Mittelpunkt. Visuell, auditiv und kinästhetisch werden die Verknüpfungen von Musik,
        Sprache und Tanz zur Unterstützung der kindlichen Entwicklung eingesetzt.
        Ausgangspunkt ist eine Tanzpädagogik, die sich an der altersgemäßen Entwicklung der
        Kinder orientiert. Tanz verbindet das Erkennen und Erfahren mit Erleben und
        Empfinden!
      </p>
      <p class="pb-4">
        Nach erfolgreichem Abschluss einer Grundstufe wird ein Zertifikat erteilt, in dem
        Umfang und Inhalte der Zusatzqualifikation detailliert aufgeführt sind. Dies
        berechtigt zur Teilnahme an der Aufbaustufe.
      </p>
      <p class="pb-4">
        Die Grundstufen a) + b) können unabhängig von den anderen Bausteinen als
        abgeschlossene Zusatzausbildung besucht werden.
      </p>
      <p class="pb-4">
        Ausbildungsinformationen und Übungsvideos werden zur Verfügung gestellt.
      </p>
      <p class="py-8">
        <a
          href="#ausbildungen"
          aria-label="Mehr"
          class="border-ti_blue_accent text-ti_blue_accent hover:bg-ti_blue_accent hover:shadow-ti w-full rounded-full border-2 p-4 text-sm font-extrabold tracking-widest uppercase shadow-sm transition duration-300 ease-in-out outline-none hover:text-white focus:ring-0 focus:outline-none"
        >
          Jetzt Kurse entdecken
        </a>
      </p>
    `
		},
		{
			title: '2. Die Aufbaustufen',
			content: `
      <p>
        ...dienen den Tanzpädagogen/innen sowie Quereinsteiger/innen dazu, ihre persönlichen
        tänzerischen Schwerpunkte (aus dem 1. Jahr) individuell zu bearbeiten und zu
        trainieren. Tanztheorie, Tanzwissenschaft, Anatomie + Körperarbeit werden vertieft;
        in einer Projektphase erprobt sich jede/r Teilnehmer/in als Tänzer/in, Choreograf/in
        oder Projektleitung.
      </p>
      <p class="py-2">
        Nach erfolgreichem Abschluss der Aufbaustufe wird ein Zertifikat erteilt, in dem
        Umfang und Inhalte der Tanzpädagogik-Ausbildung detailliert aufgeführt sind.
      </p>
      <p class="py-8">
        <a
          href="#ausbildungen"
          aria-label="Mehr"
          class="border-ti_blue_accent text-ti_blue_accent hover:bg-ti_blue_accent hover:shadow-ti w-full rounded-full border-2 p-4 text-sm font-extrabold tracking-widest uppercase shadow-sm transition duration-300 ease-in-out outline-none hover:text-white focus:ring-0 focus:outline-none"
        >
          Jetzt Kurse entdecken
        </a>
      </p>
    `
		},
		{
			title: '3. Die Aufbaustufe mit Diplom (TI)',
			content: `
      <p>
        ...beinhaltet die Auseinandersetzung mit einem selbstgewählten
        tanzwissenschaftlichen Thema, mit der Entwicklung eines eigenen tanzpädagogischen
        Profils sowie der Planung, Durchführung und Reflexion eines Workshops. Sie schließt
        mit einer Diplomarbeit und einem Colloquium ab.
      </p>
      <p class="py-2">
        Nach erfolgreichem Abschluss der Aufbaustufe mit Diplom (TI) wird eine Diplomurkunde
        (TI) erteilt.
      </p>
      <p class="py-8">
        <a
          href="#ausbildungen"
          aria-label="Mehr"
          class="border-ti_blue_accent text-ti_blue_accent hover:bg-ti_blue_accent hover:shadow-ti w-full rounded-full border-2 p-4 text-sm font-extrabold tracking-widest uppercase shadow-sm transition duration-300 ease-in-out outline-none hover:text-white focus:ring-0 focus:outline-none"
        >
          Jetzt Kurse entdecken
        </a>
      </p>
    `
		}
	];
</script>

<svelte:head>
	<title>Ausbildungen</title>
</svelte:head>

<section>
	<div class="container">
		<div class="flex w-full lg:w-1/2">
			<DefaultCard>
				<h2 class="ti_title_blue_bold">Ausbildungen</h2>
				<h3 class="ti_title_blue_light mb-4">
					Zusatzqualifikation zur Tanzpädagogin / zum Tanzpädagogen
				</h3>
				<p class="py-4">
					Unsere dreistufige Ausbildung zur Tanzpädagogin/zum Tanzpädagogen ist seit 1994 etabliert.
					Als die Experten für Pädagogik im Tanz vermittelt das Team der TANZIMPULSE, wie der
					Unterricht soziale Aspekte berücksichtigt, wie die individuellen Gestaltungs-und
					Bewegungsmöglichkeiten erlebt und erweitert werden können.
				</p>
				<p class="py-4">
					Wir verstehen Tanz als eine Kunstform, die ein Baustein der kulturellen Bildung darstellt.
					Zur erfolgreichen Umsetzung der Ausbildungsinhalte gehören Reflexion und Coaching durch
					das Ausbildungsteam.
				</p>
				<Accordion items={ausbildungsstufen} />
			</DefaultCard>
		</div>

		<CiteGallery></CiteGallery>
	</div>
</section>
<span id="ausbildungen" />
<SeminarDashboard seminare={data.seminare} />

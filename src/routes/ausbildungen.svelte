<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Accordion from '$lib/components/Accordion/Accordion.svelte';
  import Cite from '$lib/components/Cite/Cite.svelte';
  import { loadSeminare } from '$lib/routes';
  export const load: Load = loadSeminare('ausbildung');
  export const prerender = true;
</script>

<script lang="ts">
  import SeminarDashboard from '$lib/components/SeminarDashboard/SeminarDashboard.svelte';
  export let seminare = [];
</script>

<svelte:head>
  <title>Ausbildungen</title>
</svelte:head>

<section>
  <div class="container">
    <div class="flex w-full lg:w-1/2">
      <DefaultCard>
        <h2 class="ti_headline_blue_bold">Ausbildungen</h2>
        <h3 class="ti_headline_blue_light mb-4">Zusatzqualifiktation zur Tanzpädagogin / zum Tanzpädagogen</h3>
        <p class="py-4">Unsere dreistufige Ausbildung zur Tanzpädagogin/zum Tanzpädagogen ist seit 1994 etabliert. Als die Experten für Pädagogik im Tanz vermittelt das Team der TANZIMPULSE, wie der Unterricht soziale Aspekte berücksichtigt, wie die individuellen Gestaltungs-und Bewegungsmöglichkeiten erlebt und erweitert werden können.</p>
        <p class="py-4">Wir verstehen Tanz als eine Kunstform, die ein Baustein der kulturellen Bildung darstellt. Zur erfolgreichen Umsetzung der Ausbildungsinhalte gehören Reflexion und Coaching durch das Ausbildungsteam.</p>

        <p class="py-2">
          <Accordion id="1">
            <span slot="headline">1. Die Grundstufen</span>
            <div slot="content">
              <h3 class="font-bold py-4">a) Grundstufe/Alters-und Zielgruppen übergreifend</h3>
              <p class="pb-8">in der einjährigen Grundstufenausbildung ist das Ziel die Vermittlung von Grundlagen in Tanzstilen wie Hip Hop, Moderner Tanz, Tanzimprovisation, Jazztanz und Afrikanischer Tanz; die Vermittlung von tanzpädagogischer Methoden-Vielfalt mit Praxisbezug; Tanz als Medium in der Arbeit mit Kindern, Jugendlichen, Erwachsenen/Senioren und in Inklusionsgruppen.</p>
              <h3 class="font-bold py-4">b) Grundstufe/Schwerpunkt Kindertanz</h3>
              <p class="pb-4">für die Arbeit mit Kindern von U3 bis 11 Jahren</p>
              <p class="pb-4">In dieser einjährigen Qualifikation steht die ästhetisch-kulturelle Bildung im Mittelpunkt. Visuell, auditiv und kinästhetisch werden die Verknüpfungen von Musik, Sprache und Tanz zur Unterstützung der kindlichen Entwicklung eingesetzt. Ausgangspunkt ist eine Tanzpädagogik, die sich an der altersgemäßen Entwicklung der Kinder orientiert. Tanz verbindet das Erkennen und Erfahren mit Erleben und Empfinden!</p>
              <p class="pb-4">Nach erfolgreichem Abschluss einer Grundstufe wird ein Zertifikat erteilt, in dem Umfang und Inhalte der Zusatzqualifikation detailliert aufgeführt sind. Dies berechtigt zur Teilnahme an der Aufbaustufe.</p>
              <p class="pb-4">Die Grundstufen a) + b) können unabhängig von den anderen Bausteinen als abgeschlossene Zusatzausbildung besucht werden.</p>
              <p class="pb-4">Ausbildungsinformationen Übungsvideos werden zur Verfügung gestellt.</p>
              <p class="py-8">
                <a href="#ausbildungen" aria-label="Mehr" class="border-ti_blue_accent text-ti_blue_accent hover:bg-ti_blue_accent hover:text-white p-4 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase outline-none shadow-sm hover:shadow-ti focus:outline-none focus:ring-0 transition duration-300 ease-in-out">Jetzt Kurse entdecken</a>
              </p>
            </div>
          </Accordion>
          <Accordion id="2">
            <span slot="headline">2. Die Aufbaustufen</span>
            <div slot="content">
              <p>...dienen den Tanzpädagogen/innen sowie Quereinsteiger/innen dazu, ihre persönlichen tänzerischen Schwerpunkte (aus dem 1. Jahr) individuell zu bearbeiten und zu trainieren. Tanztheorie, Tanzwissenschaft, Anatomie + Körperarbeit werden vertieft; in einer Projektphase erprobt sich jede/r Teilnehmer/in als Tänzer/in, Choreograf/in oder Projektleitung.</p>
              <p class="py-2">Nach erfolgreichem Abschluss der Aufbaustufe wird ein Zertifikat erteilt, in dem Umfang und Inhalte der Tanzpädagogik-Ausbildung detailliert aufgeführt sind</p>
              <p class="py-8">
                <a href="#ausbildungen" aria-label="Mehr" class="border-ti_blue_accent text-ti_blue_accent hover:bg-ti_blue_accent hover:text-white p-4 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase outline-none shadow-sm hover:shadow-ti focus:outline-none focus:ring-0 transition duration-300 ease-in-out">Jetzt Kurse entdecken</a>
              </p>
            </div>
          </Accordion>
          <Accordion id="3">
            <span slot="headline">3. Die Aufbaustufe mit Diplom (TI)</span>
            <div slot="content">
              <p>...beinhaltet die Auseinandersetzung mit einem selbstgewählten tanzwissenschaftlichen Thema, mit der Entwicklung eines eigenen tanzpädagogischen Profils sowie der Planung, Durchführung und Reflexion eines Workshops. Sie schließt mit einer Diplomarbeit und einem Colloquium ab.</p>
              <p class="py-2">Nach erfolgreichem Abschluss der Aufbaustufe mit Diplom (TI) wird eine Diplomurkunde (TI) erteilt.</p>
              <p class="py-8">
                <a href="#ausbildungen" aria-label="Mehr" class="border-ti_blue_accent text-ti_blue_accent hover:bg-ti_blue_accent hover:text-white p-4 w-full rounded-full border-2 font-extrabold text-sm tracking-widest uppercase outline-none shadow-sm hover:shadow-ti focus:outline-none focus:ring-0 transition duration-300 ease-in-out">Jetzt Kurse entdecken</a>
              </p>
            </div>
          </Accordion>
        </p>
      </DefaultCard>
    </div>
    <Cite />
  </div>
</section>
<span id="ausbildungen" />
<SeminarDashboard {seminare} />

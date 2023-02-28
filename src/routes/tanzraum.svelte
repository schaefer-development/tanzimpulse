<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Carousel from '$lib/components/Slideshow/Carousel.svelte';
  import Map from '$lib/components/Map/Map.svelte';
  import Maptest from '$lib/components/Map/maptest.svelte';

  const mapAttributes = {
    style: 'width: 100%; height: 100%; min-height:500px; max-height:40vh;'
  };

  export const prerender = true;
</script>

<svelte:head>
  <title>Tanzraum</title>
</svelte:head>

<section>
  <div class="container flex flex-col">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
      <!-- start first column -->
      <div>
        <DefaultCard>
          <h2 class="ti_headline_blue_bold pb-6">Es geht weiter in den [Zahl] Räumen von unseren Kooperationspartnern:</h2>

          <Maptest coordinates={[50.79720988110121, 7.195870399340153]} />

          <Map coordinates={[50.79720988110121, 7.195870399340153]} />
          <h3 class="ti_headline_blue_light pt-4 pb-2">Tanzfabrik Siegburg</h3>
          <p class="pb-2">
            Ulli Hartmann<br />
            Lindenstraße 58-50<br />
            53721 Siegburg
          </p>
          <a rel="noreferrer" class="hyperlink" href="https://www.tanzfabrik-siegburg.de/%C3%BCber-uns/tanzraum/" target="_blank">tanzfabrik-siegburg.de</a>
          <hr class="block border border-coolGray-100 w-10/12 mx-auto my-4" />

          <Map coordinates={[50.944023979724555, 6.938679039862339]} />

          <h3 class="ti_headline_blue_light pt-4 pb-2">neues lernen</h3>
          <p class="pb-2">
            Herwarthstraße 22<br />
            50672 Köln
          </p>
          <p><a rel="noreferrer" class="hyperlink" href="https://www.neues-lernen.info/index.php?seite=raeume" target="_blank">neues-lernen.info</a></p>
        </DefaultCard>
      </div>
      <!-- end second column -->
      <!-- start second column -->
      <div>
        <DefaultCard>
          <h2 class="ti_headline_blue_light pb-2">Abschied vom alten Tanzraum</h2>

          <img class="py-2" src="{base}/images/abschied_gruppe1.jpg" alt="Abschied alter Tanzraum | Tanzimpulse" />
          <img class="py-2" src="{base}/images/abschied_gruppe2.jpg" alt="Abschied alter Tanzraum | Tanzimpulse" />

          <p class="py-4">
            Abschied vom Raum für Tanzimpulse am 12.02.23 mit dem Ausbildungsteam, Referent/innen und Unterstützerinnen und mit sehr aufbauenden Worten, die uns nun positiv weitermachen lassen, denn wir nehmen die Erfahrungen aus diesem wunderbaren Tanzraum und seiner besonderen Atmosphäre mit.
            <br /><br />
            Wir bedanken uns bei Dr. Gabriele Förderer und Team für die Nutzungsmöglichkeit ihres Bewegungsraumes.
          </p>

          <hr class="block border border-coolGray-100 w-10/12 mx-auto my-4" />

          <h3 class="font-bold mb-4">Rückmeldungen zum Abschied</h3>
          <p class="pt-2">Liebe Bettina, liebe Ute, es tut mir so unendlich leid, dass Euer toller Raum aufgegeben werden muss! Aber sehr gut kann ich „lieber ein Ende mit Schrecken, als ein Schrecken ohne Ende“ in eurem Fall nachvollziehen. Ohne Euch hätte ich niemals so viel gelernt und wäre ich niemals eine selbständige Tanzpädagogik geworden.</p>
          <p class="pt-2 pb-4 text-sm">– Ulli Hartmann</p>
          <img class="pt-6" src="{base}/images/goodbye.jpg" alt="Abschied alter Tanzraum | Tanzimpulse" />

          <p class="pt-2 pb-4 text-sm">– Christine Heidenreich</p>
          <p class="pt-6">Dieser Raum war ja schon irgendwie ein Stück "zu Hause", wenn ich mich an die Zeit dort entsinne.</p>
          <p class="pt-2 pb-4 text-sm">– Mirjam Pies</p>
          <p class="pt-6">
            Liebe Bettina, liebe Ute,<br />
            Das sind ja echt traurige Neuigkeiten. Das war der schönste Tanzsaal in dem ich je unterrichtet habe.
          </p>
          <p class="pt-2 pb-4 text-sm">– Nicola Belker</p>
          <p class="pt-6">Was für eine traurige Neuigkeit. Dennoch waren und bleiben es wunderschöne Momente an diesem Ort, die ihr diesem und den Menschen dort geschenkt habt.</p>
          <p class="pt-2 pb-4 text-sm">– Stefanie Wilczek</p>
          <p class="pt-6">Dieser Ort der für alle dank euch ein Stück Heimat geworden ist, das ist so schade. Das Kölner Gefühl wird ein bisschen kleiner. Aber das schöne ist ja, dass es vor allem mit euch zu tun hat und ihr aus jedem Raum einen Ort des wunderbaren Tanzes und des Kölner Gefühls kreieren könnt.</p>
          <p class="pt-2 pb-4 text-sm">– Ann-Kristin Pieters</p>
        </DefaultCard>
      </div>
    </div>

    <!-- end second column -->
  </div>
</section>

<style>
  .slide-content {
    width: 100%;
    min-height: 300px;
    max-height: 40vh;
  }
</style>

<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Carousel from '$lib/components/Slideshow/Carousel.svelte';
  import Map1 from '$lib/components/Map/map1.svelte';
  import Map2 from '$lib/components/Map/map2.svelte';
  import Map3 from '$lib/components/Map/map3.svelte';

  export const prerender = true;
</script>

<svelte:head>
  <title>Tanzraum</title>
</svelte:head>

<section>
  <div class="container flex flex-col">
    <div class="relative">
      <Carousel perPage="1" autoplay="12500" easing="ease-in-out">
        <span class="control" slot="left-control">
          <svg xmlns="http://www.w3.org/2000/svg" class="relative w-10 h-10 p-2 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </span>

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum2301.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum2302.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum2303.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <span class="control" slot="right-control">
          <svg xmlns="http://www.w3.org/2000/svg" class="relative w-10 h-10 p-2 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Carousel>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
      <!-- start first column -->
      <div>
        <DefaultCard>
          <h2 class="ti_headline_blue_bold pb-6">Es geht weiter in den 3 Räumen von unseren Kooperationspartnern:</h2>

          <Map1 coordinates={[50.944084819741974, 6.938695136069687]} />
          <h3 class="ti_headline_blue_light pt-4 pb-2">neues lernen</h3>
          <p class="pb-2">
            Herwarthstraße 22<br />
            50672 Köln
          </p>
          <p><a rel="noreferrer" class="hyperlink" href="https://www.neues-lernen.info/index.php?seite=raeume" target="_blank">neues-lernen.info</a></p>
          <hr class="block border border-coolGray-100 w-10/12 mx-auto my-12" />

          <Map2 coordinates={[50.79720988110121, 7.195870399340153]} />
          <h3 class="ti_headline_blue_light pt-4 pb-2">Tanzfabrik Siegburg</h3>
          <p class="pb-2">
            Ulli Hartmann<br />
            Lindenstraße 58-50<br />
            53721 Siegburg
          </p>
          <a rel="noreferrer" class="hyperlink" href="https://www.tanzfabrik-siegburg.de/%C3%BCber-uns/tanzraum/" target="_blank">tanzfabrik-siegburg.de</a>
          <hr class="block border border-coolGray-100 w-10/12 mx-auto my-12" />

          <Map3 coordinates={[50.978432626006644, 7.0877161625034955]} />
          <h3 class="ti_headline_blue_light pt-4 pb-2">Yogastudio</h3>
          <p class="pb-2">
            Im Eichenforst 39<br />
            51069 Köln
          </p>
          <p><a rel="noreferrer" class="hyperlink" href="https://www.neues-lernen.info/index.php?seite=raeume" target="_blank">neues-lernen.info</a></p>
        </DefaultCard>
      </div>
      <!-- end second column -->
      <!-- start second column -->
      <div>
        <DefaultCard>
          <h2 class="ti_headline_blue_light pb-2">Abschied vom alten Tanzraum</h2>

          <p class="w-11/12 mx-auto py-4 font-bold">"Wir können den Wind nicht ändern, aber die Segel anders setzen."</p>
          <p class="text-right flex justify-end text-sm pb-4">Aristoteles</p>

          <img class="py-2" src="{base}/images/abschied_gruppe1.jpg" alt="Abschied alter Tanzraum | Tanzimpulse" />
          <img class="py-2" src="{base}/images/abschied_gruppe2.jpg" alt="Abschied alter Tanzraum | Tanzimpulse" />

          <p class="py-4">Abschied vom Raum für Tanzimpulse am 12.02.23 mit dem Ausbildungsteam, Referent/innen und Unterstützer/innen und mit sehr aufbauenden Worten, die uns nun positiv weitermachen lassen, denn wir nehmen die Erfahrungen aus diesem wunderbaren Tanzraum und seiner besonderen Atmosphäre mit.</p>

          <hr class="block border border-coolGray-100 w-10/12 mx-auto my-4" />

          <h3 class="font-bold mb-4">Rückmeldungen zum Abschied</h3>
          <p class="pt-2">Liebe Bettina, liebe Ute, es tut mir so unendlich leid, dass Euer toller Raum aufgegeben werden muss! Ohne Euch hätte ich niemals so viel gelernt und wäre ich niemals eine selbständige Tanzpädagogin geworden.</p>
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
    min-height: 450px;
    max-height: 40vh;
  }
</style>

<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Carousel from '$lib/components/Slideshow/Carousel.svelte';
  import Map from '$lib/components/Map/Map.svelte';
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
    <div class="relative">
      <Carousel perPage="1" autoplay="12500" easing="ease-in-out">
        <span class="control" slot="left-control">
          <svg xmlns="http://www.w3.org/2000/svg" class="relative w-10 h-10 p-2 text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </span>

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum1.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum2.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum3.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum4.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum5.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum6.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum7.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum8.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum9.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum10.jpg" alt="Der Tanzraum von Tanzimpulse" />
        </div>
        <!-- -->

        <!-- single slide item -->
        <div class="slide-content relative flex items-center">
          <img class="object-cover w-full shadow-ti" src="/images/slideshow_tanzraum/tanzraum11.jpg" alt="Der Tanzraum von Tanzimpulse" />
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
          <h2 class="ti_headline_blue_bold pb-6">ES GEHT WEITER in den Räumen von Kooperationspartnern:</h2>

          <Map {mapAttributes} coordinates={[50.79720988110121, 7.195870399340153]} />
          <h3 class="ti_headline_blue_light pt-4 pb-2">Tanzfabrik Siegburg</h3>
          <p class="pb-2">
            Ulli Hartmann<br />
            Lindenstraße 58-50<br />
            53721 Siegburg
          </p>
          <a rel="noreferrer" class="hyperlink" href="https://www.tanzfabrik-siegburg.de/%C3%BCber-uns/tanzraum/" target="_blank">tanzfabrik-siegburg.de</a>

          <Map {mapAttributes} coordinates={[50.79720988110121, 7.195870399340153]} />

          <h3 class="ti_headline_blue_light pt-10">neues lernen</h3>
          <p class="pb-2">ADRESSE</p>
          <p><a rel="noreferrer" class="hyperlink" href="https://www.neues-lernen.info/index.php?seite=raeume" target="_blank">neues-lernen.info</a></p>
        </DefaultCard>
      </div>
      <!-- end second column -->
      <!-- start second column -->
      <div>
        <DefaultCard>
          <img class="py-2" src="{base}/images/abschied_gruppe1.jpg" alt="Abschied alter Tanzraum | Tanzimpulse" />
          <img class="py-2" src="{base}/images/abschied_gruppe2.jpg" alt="Abschied alter Tanzraum | Tanzimpulse" />

          <p class="py-4">
            Abschied vom Raum für Tanzimpulse am 12.02.23 mit dem Ausbildungsteam, Referent/innen und Unterstützerinnen und mit sehr aufbauenden Worten, die uns nun positiv weitermachen lassen, denn wir nehmen die Erfahrungen aus diesem wunderbaren Tanzraum und seiner besonderen Atmosphäre mit.
            <br /><br />
            Wir bedanken uns bei Dr. Gabriele Förderer und Team für die Nutzungsmöglichkeit ihres Bewegungsraumes.
          </p>

          <hr class="block border border-coolGray-100 w-10/12 mx-auto my-4" />

          <h3 class="font-bold mb-4">Rückmeldungen zum Abschied</h3>
          <p class="pt- text-sm">– Ulli Hartmann</p>

          <p class="pt-2 pb-10">Liebe Bettina, liebe Ute, es tut mir so unendlich leid, dass Euer toller Raum aufgegeben werden muss! Aber sehr gut kann ich „lieber ein Ende mit Schrecken, als ein Schrecken ohne Ende“ in eurem Fall nachvollziehen. Ohne Euch hätte ich niemals so viel gelernt und wäre ich niemals eine selbständige Tanzpädagogik geworden.</p>

          <p class="pt-2 pb-4 text-sm">– Christine Heidenreich</p>
          <img class="pb-6" src="{base}/images/goodbye.jpg" alt="Abschied alter Tanzraum | Tanzimpulse" />

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

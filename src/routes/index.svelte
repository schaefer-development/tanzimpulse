<script context="module" lang="ts">
  import SeminarPreviews from '$lib/components/SeminarPreviews/SeminarPreviews.svelte';
  import Skeleton from '$lib/components/Skeleton/Skeleton.svelte';
  import Slideshow from '$lib/components/Slideshow/Slideshow.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import { base } from '$app/paths';
  const LoadNeuigkeiten: Load = async ({ page, fetch }) => {
    const res = await fetch('/neuigkeiten.json');
    if (res.ok) {
      const {
        data: { neuigkeiten }
      } = await res.json();
      return {
        props: { neuigkeiten }
      };
    }

    const {
      errors: [error]
    } = await res.json();

    return {
      status: res.status,
      error: new Error(error.message)
    };
  };

  import { loadSeminare } from '$lib/routes';

  export const load = async (request): Load => {
    const loadAusbildungen = loadSeminare('ausbildung', 3);
    const loadWorkshops = loadSeminare('workshop', 3);
    const [propsAusbildungen, propsWorkshops, propsNeuigkeiten] = await Promise.all([loadSeminare('ausbildung', 3)(request), loadSeminare('workshop', 3)(request), LoadNeuigkeiten(request)]);
    return {
      props: {
        neuigkeiten: propsNeuigkeiten.props.neuigkeiten,
        kommende: {
          ausbildungen: propsAusbildungen.props.seminare,
          workshops: propsWorkshops.props.seminare
        }
      }
    };
  };

  export const prerender = true;
</script>

<script lang="ts">
  export let neuigkeiten = [];
  export let kommende = { ausbildungen: [], workshops: [] };
</script>

<svelte:head>
  <title>Start | Tanzimpulse</title>
</svelte:head>

<section class="relative w-full slide-content overflow-hidden">
  <Skeleton>
    <div id="LOADING" class="w-full slide-content bg-white flex items-center" slot="loading">
      <img class="object-cover w-full opacity-0" src="/images/slideshow/ausbildungen.jpg" alt="Ausbildungen bei Tanzimpulse" />
      <div class="absolute w-full">
        <div class="flex justify-center">
          <div class="leading-6 transition ease-in-out duration-150 flex">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Wird geladen ...
          </div>
        </div>
      </div>
    </div>

    <Slideshow slot="mounted" />
  </Skeleton>
</section>

<!-- -->

<section id="3CARDS" class="cards my-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
  <div class="flex items-start">
    <div class="bg-ti_blue_mat p-4 md:p-6 lg:p-8 text-white shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
      <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide">Ausbildungen</h2>
      <p class="py-4">Werde Tanzpädagogin/ Tanzpädagoge, geschult durch unser kompetentes Team und integriere den Tanz in den Beruf. Tanzvermittlung professionell und praxisnah. Beginn der Grundstufen zwei mal jährlich: im Frühjahr und im Herbst.</p>
      <p class="py-4">
        <Button href="{base}/ausbildungen" buttonstyle={'blue'}>Alle Ausbildungen</Button>
      </p>
      <p class="px-2 pb-2 uppercase tracking-wider font-bold text-sm text-ti_blue_accent text-center">Die nächsten drei Ausbildungen:</p>
      <hr class="block border border-black w-full mb-2 opacity-20" />
      <SeminarPreviews seminare={kommende.ausbildungen} color="blue" />
    </div>
  </div>

  <div class="flex items-start">
    <div class="bg-ti_cyan_mat p-4 md:p-6 lg:p-8 text-white shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
      <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide">Workshops</h2>
      <p class="py-4">Immer aktuell sein, mit Impulsen für die tanzpädagogische Praxis für alle Tanzinteressierten die mit Kita-, Grundschulkindern, Jugendlichen und / oder Erwachsenen arbeiten.</p>
      <p class="py-4">
        <Button href="{base}/workshops" buttonstyle={'cyan'}>Alle Workshops</Button>
      </p>
      <p class="px-2 pb-2 uppercase tracking-wider font-bold text-sm text-ti_cyan_accent text-center">Die nächsten drei Workshops:</p>
      <hr class="block border border-black w-full mb-2 opacity-20" />
      <SeminarPreviews seminare={kommende.workshops} color="cyan" />
    </div>
  </div>

  <div class="flex items-start">
    <div class="bg-ti_green_mat flex flex-col p-8 text-white shadow-ti hover:shadow-ti_hover transition duration-300 ease-in-out">
      <h2 class="font-bold text-2xl lg:text-3xl uppercase tracking-wide">Tanzraum Vermietung</h2>
      <p class="py-4">Ein Raum mit angenehmer Atmosphäre für Weiterbildungen, Tanztrainings, Entspannung etc. mit Ausstattung für professionellen Unterricht.</p>
      <p class="py-4">
        <Button href="{base}/tanzraum" buttonstyle={'green'}>Mehr erfahren</Button>
      </p>
    </div>
  </div>
</section>

<!-- -->

<section id="CARDS" class="grid grid-cols-1 lg:grid-cols-2 gap-10">
  {#each neuigkeiten as neuigkeit (neuigkeit.id)}
    <DefaultCard>
      <div class="graphcms_card_startpage">
        <h2 class="ti_headline_blue_bold pb-4">{neuigkeit.ueberschrift}</h2>
        {@html neuigkeit.inhalt.html}
      </div>
    </DefaultCard>
  {/each}
  <DefaultCard>
    <h2 class="ti_headline_blue_bold">Tanzimpulse stellt auf hybride Lehr- und Lernformate um</h2>
    <p class="py-4">Hierfür erhalten wir eine Projekt-Förderung von:</p>
    <div class="flex flex-col md:flex-row w-full justify-items-center ">
      <div class="flex-1">
        <img class="mx-auto" src="{base}/images/BKM_Web_de.gif" alt="Logo Die Bundesbeauftragte der Bundesregierung für Kultur und Medien" />
      </div>
      <div class="flex-1">
        <img class="mx-auto" src="{base}/images/DVT.png" alt="Logo Dachverband Tanzen" />
      </div>
    </div>
  </DefaultCard>
</section>

<style>
  .slide-content {
    width: 100%;
    min-height: 300px;
    max-height: 40vh;
  }
</style>

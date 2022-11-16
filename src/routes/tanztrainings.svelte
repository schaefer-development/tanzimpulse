<script context="module" lang="ts">
  import { base } from '$app/paths';
  import DefaultCard from '$lib/components/DefaultCard/DefaultCard.svelte';
  import Button from '$lib/components/Button/Button.svelte';
  import Map from '$lib/components/Map/Map.svelte';
  const mapAttributes = {
    class: '',
    style: 'width: 100%; height: 100%; min-height:400px; max-height:50vh;'
  };
  export const prerender = true;
</script>

<svelte:head>
  <title>Tanztrainings</title>
</svelte:head>

<section>
  <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
    <div>
      <DefaultCard>
        <h2 class="ti_headline_blue_bold">Tanztrainings</h2>
        <h2 class="ti_headline_blue_light mb-4">Yoga / Gymnastik / Kindertanz</h2>
        <p class="pb-8">Die wöchentlichen Kursangebote werden von den Referenten/innen selbst organisiert. Zur Probestunde bitte bei den Referenten/innen anmelden.</p>
        <p class="font-bold">Unterrichtsort</p>
        <p class="py-2">
          Schweinheimer Straße 54<br />
          51067 Köln<br />
        </p>
        <p class="pb-8">Erreichbar mit den Linien 3 + 18 bis Haltestelle Maria-Himmelfahrt-Straße.</p>
        <Map {mapAttributes} />
      </DefaultCard>

      <div class="bg-ti_green_mat mt-10 p-4 md:p-6 lg:p-8 bg-white text-black shadow-ti">
        <h2 class="text-2xl lg:text-3xl uppercase text-white font-bold tracking-wide">Vermietung des (Tanz-) Raumes</h2>
        <h2 class="text-2xl lg:text-3xl uppercase font-extralight text-white tracking-wide">Ideal für Vorlesungen, Kurse, Workshops, etc.</h2>

        <p class="pt-10">
          <a rel="noreferrer" sveltekit:prefetch href="{base}/tanzraum"> <Button buttonstyle={'green'}>Jetzt den (Tanz-) Raum mieten</Button></a>
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-10">
      <DefaultCard>
        <h2 class="ti_headline_blue_light pb-4">Montag</h2>

        <h2 class="ti_subheadline_blue_bold">Phantasievoller Kindertanz (4-5 Jahre) für Jungen und Mädchen</h2>
        <p class="ti_subheadline_blue_light">15:45 - 16:30 Uhr</p>
        <p class="pb-2">Referenten: Agnieszka Moczadlo, Anmeldung + Info: 0178 - 8210732,<br /><a rel="noreferrer" class="hyperlink" href="mailto:koeln@greifmusic.de">koeln@greifmusic.de</a><br /><a class="hyperlink" href="https://greifmusic.de/" rel="noreferrer" target="_blank">greifmusic.de</a></p>

        <hr class="block border border-coolGray-100 w-full my-4" />
        <h2 class="ti_subheadline_blue_bold">Moderner Tanz für Kinder + Jugendliche mit Behinderung</h2>
        <p class="ti_subheadline_blue_light">16:45 - 17:45 Uhr</p>
        <p class="pb-2">Referentin: Ute Seddig, Anmeldung + Info: 0221 - 68 02 729</p>

        <hr class="block border border-coolGray-100 w-full my-4" />

        <h2 class="ti_subheadline_blue_bold">5 Rhythmen</h2>
        <p class="ti_subheadline_blue_light">19:30 - 21:45 Uhr</p>
        <p>
          Referentin: Susanne Kehrein, Info:
          <a rel="noreferrer" class="hyperlink" href="mailto:Susanlight@web.de">Susanlight@web.de</a>
        </p>
      </DefaultCard>

      <DefaultCard>
        <h2 class="ti_headline_blue_light pb-4">Dienstag</h2>

        <h2 class="ti_subheadline_blue_bold">Von Kopf bis Fuß - Gymnastik</h2>
        <p class="ti_subheadline_blue_light">9:30 - 10:30 Uhr</p>
        <p class="pb-2">Referentin: Ute Seddig, Anmeldung + Info: 0221 - 68 02 729</p>
        <hr class="block border border-coolGray-100 w-full my-4" />
        <h2 class="ti_subheadline_blue_bold">Moderner Kindertanz (7 bis 10 Jahre)</h2>
        <p class="ti_subheadline_blue_light">16:15 - 17:15 Uhr</p>
        <p>Referentin: Stephanie Blömer, Anmeldung + Info: 0177 - 784 66 26</p>
        <p>
          <a rel="noreferrer" class="hyperlink" href="https://www.stephanie-bloemer.de/" target="_blank">stephanie-bloemer.de</a>
        </p>
        <hr class="block border border-coolGray-100 w-full my-4" />
        <h2 class="ti_subheadline_blue_bold">Hatha-Yoga</h2>
        <p class="ti_subheadline_blue_light">18:00 - 19:30 Uhr</p>
        <p>Referent: Alexander Hauer, Anmeldung + Info: 0175 - 94 79 790</p>
        <p>
          <a class="hyperlink" href="http://www.alexander-hauer.de/" rel="noreferrer" target="_blank">alexander-hauer.de</a>
        </p>

        <hr class="block border border-coolGray-100 w-full my-4" />
        <h2 class="ti_subheadline_blue_bold">Solo-Dance mit Susanne – Jazz, Lyrical, Modern & zeitgenössischer Tanz</h2>
        <p class="ti_subheadline_blue_light">20:00 - 21:30 Uhr</p>
        <p>Referentin: Susanne Jußen-Krell, Anmeldung + Info: 0179 - 44 44 347</p>
        <p />
        <p>
          <a class="hyperlink" href="https://www.sjk-praxis.de/fitness.html#gallery3-2y" rel="noreferrer" target="_blank">sjk-praxis.de</a>
        </p>
      </DefaultCard>
      <DefaultCard>
        <h2 class="ti_headline_blue_light pb-4">Mittwoch</h2>

        <h2 class="ti_subheadline_blue_bold">Fit in den Tag - Faszien-Fitness zum Wohlfühlen</h2>
        <p class="ti_subheadline_blue_light">10:00 - 11:00 Uhr</p>
        <p class="pb-2">Referentin: Nina Buttler, Info: <a class="hyperlink" rel="noreferrer" href="mailto:info@sichtartundweise.de">info@sichtartundweise.de</a></p>
        <hr class="block border border-coolGray-100 w-full my-4" />
        <h2 class="ti_subheadline_blue_bold">1. Kurs Kreativer Kindertanz (4 bis 5 Jahre)</h2>
        <p class="ti_subheadline_blue_light">15:45 - 16:45 Uhr</p>
        <p>Referentin: Stephanie Blömer, Anmeldung + Info: 0177 - 784 66 26</p>
        <p>
          <a rel="noreferrer" class="hyperlink" href="https://www.stephanie-bloemer.de/" target="_blank">stephanie-bloemer.de</a>
        </p>
        <hr class="block border border-coolGray-100 w-full my-4" />
        <h2 class="ti_subheadline_blue_bold">2. Kurs Kreativer Kindertanz (4 bis 5 Jahre)</h2>
        <p class="ti_subheadline_blue_light">16:45 - 17:45 Uhr</p>
        <p>Referentin: Stephanie Blömer, Anmeldung + Info: 0177 - 784 66 26</p>
        <p>
          <a rel="noreferrer" class="hyperlink" href="https://www.stephanie-bloemer.de/" target="_blank">stephanie-bloemer.de</a>
        </p>

        <hr class="block border border-coolGray-100 w-full my-4" />
        <h2 class="ti_subheadline_blue_bold">Zeitgenössischer Tanz</h2>
        <p class="ti_subheadline_blue_light">18:15 - 19:45 Uhr</p>
        <p class="pb-2">Referentin: Suna Göncü, Anmeldung + Info: 0173 - 53 59 599</p>
        <hr class="block border border-coolGray-100 w-full my-4" />
        <h2 class="ti_subheadline_blue_bold">Jazzdance + Balancetraining</h2>
        <p class="ti_subheadline_blue_light">20:00 - 21:30 Uhr</p>
        <p>Referentin: Sabrina Wöhler, Anmeldung + Info: 0175 - 41 94 029</p>
        <p>
          <a rel="noreferrer" class="hyperlink" href="https://www.tanz-kommunikation.de/" target="_blank">tanz-kommunikation.de</a>
        </p>
      </DefaultCard>

      <DefaultCard>
        <h2 class="ti_headline_blue_light pb-4">Donnerstag</h2>
        <h2 class="ti_subheadline_blue_bold">Von Kopf bis Fuß - Gymnastik</h2>
        <p class="ti_subheadline_blue_light">17:30 - 18:30 Uhr</p>
        <p class="pb-2">Referentin: Ute Seddig, Anmeldung + Info: 0221 - 68 02 729</p>
        <hr class="block border border-coolGray-100 w-full my-4" />

        <p>Neuer Kurs ab dem 12.01.2023 – Anmeldung jetzt bereits möglich</p>
        <h2 class="ti_subheadline_blue_bold">Yogilates mit Susanne – Yoga und Pilates vereint das Beste aus Beidem</h2>
        <p class="ti_subheadline_blue_light">18:45 - 19:45 Uhr</p>
        <p class="pb-2">
          Referentin: Susanne Jußen-Krell, Anmeldung + Info: 0179 - 44 44 347
          <br />
          <a class="hyperlink" href="https://www.sjk-praxis.de/fitness.html#gallery3-2y" rel="noreferrer" target="_blank">sjk-praxis.de</a>
        </p>

        <hr class="block border border-coolGray-100 w-full my-4" />

        <h2 class="ti_subheadline_blue_bold">Moderner Tanz - Training</h2>
        <p class="ti_subheadline_blue_light">20:00 - 21:30 Uhr</p>
        <p>Referentin: Suna Göncü, Anmeldung + Info: 0173 - 53 59 599</p>
      </DefaultCard>
    </div>
  </div>
</section>

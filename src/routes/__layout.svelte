<script lang="ts">
  import Logo from '$lib/components/Logo/Logo.svelte';
  import '@fontsource/poppins/200.css';
  import '@fontsource/poppins/400.css';
  import '@fontsource/poppins/700.css';
  import '@fontsource/poppins/800.css';
  import Header from '$lib/components/Header/Header.svelte';
  import Footer from '$lib/components/Footer/Footer.svelte';
  import '../app.css';
  import { base } from '$app/paths';

  import { onMount } from 'svelte';
  let ready = false;
  onMount(() => (ready = true));
</script>

<svelte:head>
  <meta name="description" content="Tanzimpulse bieten eine Berufs begleitende Zusatzqualifikation zur Tanzpädagogin / zum Tanzpädagogen an – eine Weiterbildung für LehrerInnen aller Schulformen, für ErzieherInnen, SozialpädagogInnen und alle, die als therapeutisch tätig sind, wie beispielsweise Logopäden, Physiotherapeuten, Tanztherapeuten oder Übungsleiter aus Vereinen, Referenten aus der Erwachsenenbildung, die Tanz in ihre Arbeit einbeziehen." />
  <link rel="apple-touch-icon" sizes="57x57" href="{base}/icons/apple-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="60x60" href="{base}/icons/apple-icon-60x60.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="{base}/icons/apple-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="76x76" href="{base}/icons/apple-icon-76x76.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="{base}/icons/apple-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="120x120" href="{base}/icons/apple-icon-120x120.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="{base}/icons/apple-icon-144x144.png" />
  <link rel="apple-touch-icon" sizes="152x152" href="{base}/icons/apple-icon-152x152.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="{base}/icons/apple-icon-180x180.png" />
  <link rel="icon" type="image/png" sizes="192x192" href="{base}/icons/android-icon-192x192.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="{base}/icons/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="{base}/icons/favicon-96x96.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="{base}/icons/favicon-16x16.png" />
  <link rel="manifest" href="{base}/icons/manifest.json" />
  <meta name="msapplication-TleColor" content="#ffffff" />
  <meta name="msapplication-TileImage" content="{base}/icons/ms-icon-144x144.png" />
  <meta name="theme-color" content="#ffffff" />
</svelte:head>

<div class="flex flex-col min-h-screen justify-between">
  <Header />
  <main class="relative mb-auto top-0 h-auto bg-warmGray-200">
    <div id="BUBBLES" class="absolute w-full h-full overflow-hidden opacity-30 z-0">
      <img src="{base}/images/bg.svg" alt="background" />
    </div>
    <div id="LOGO" class="bg-white pt-14 pb-48 ">
      <div class="relative container mx-auto flex flex-col md:flex-row items-center px-0 md:px-6 z-10">
        <div class="w-48 md:w-64 mb-6 md:mb-0 ml-4">
          <a aria-label="Logo Tanzimpulse - Institut für Tanzpädagogik" sveltekit:prefetch class="text-ti_blue_mat outline-none focus:outline-none focus:ring-0 hover:text-ti_blue_accent focus:text-ti_blue_accent transition duration-300 ease-in-out" href="{base}/"><Logo /></a>
        </div>
        <div class="px-8">
          <a aria-label="Logo Tanzimpulse - Institut für Tanzpädagogik" sveltekit:prefetch href="{base}/" class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extralight uppercase text-ti_blue_mat tracking-wider hover:text-ti_blue_accent focus:text-ti_blue_accent outline-none focus:outline-none focus:ring-0 transition duration-300 ease-in-out">
            <span class="font-bold">Tanzimpulse</span> – Institut für Tanzpädagogik
            <span class="font-normal block normal-case text-base sm:text-lg md:text-xl lg:text-2xl text-ti_blue_accent tracking-wide">Staatlich anerkanntes Weiterbildungsinstitut</span>
          </a>
        </div>
      </div>
    </div>
    <div id="CONTENT">
      <div class="relative container mx-auto px-2 lg:px-6 -mt-32 mb-20">
        <slot />
      </div>
    </div>
  </main>
  <Footer />
</div>
